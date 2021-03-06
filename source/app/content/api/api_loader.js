'use strict';
zuix.controller(function(cp) {
    const zuixCdnPath = 'https://zuixjs.github.io/zuix/';
    cp.create = function() {
        let apiName = cp.view().attr('data-ui-api');
        let innerClass;
        if (apiName.indexOf(':') > 0) {
            apiName = apiName.split(':');
            innerClass = apiName[1];
            apiName = apiName[0];
        }
        cp.view().html('Loading '+apiName+' API...');

        // download the jsDoc data file and HTML-format it.
        zuix.$.ajax({
            url: zuixCdnPath+'api/data/'+apiName+'.json?'+Date.now(),
            success: function(json) {
                cp.view().html('');
                const dox = JSON.parse(json);
                const apiDocs = {};
                if (innerClass) apiName = innerClass;
                apiDocs.name = apiName;
                apiDocs.constructor = null;
                apiDocs.parameters = []; // constructor parameters
                apiDocs.methods = [];
                apiDocs.properties = [];
                apiDocs.types = []; // custom object/types used in this object
                apiDocs.callbacks = []; // callback functions

                zuix.$.each(dox, function() {
                    const skipItem = !this.isClass
                        && (this.isPrivate ||
                            (this.ctx != null && (this.ctx.name !== apiName && this.ctx.cons !== apiName && this.ctx.receiver !== apiName))
                            || this.tags == null || this.tags.length === 0
                        );
                    if (skipItem) {
                        return true;
                    }

                    if (this.isConstructor === true) {
                        apiDocs.constructor = addConstructor(this);
                        return true;
                    }

                    const apiMember = (!this.isPrivate && this.ctx != null
                        && (this.ctx.cons === apiName || this.ctx.type === 'function' || this.ctx.receiver === apiName));
                    if (apiMember) {
                        if (this.ctx.type === 'property') {
                            const p = {};
                            for (let t = 0; t <= this.tags.length; t++) {
                                const tag = this.tags[t];
                                if (tag) {
                                    switch (tag.type) {
                                        case 'alias':
                                            p.alias = tag.string;
                                            break;
                                        case 'property':
                                        case 'type':
                                            p.property = getParam(tag);
                                            break;
                                        case 'description':
                                            p.description = tag.full;
                                            break;
                                    }
                                }
                            }
                            if (p.property != null) {
                                const props = p.property;
                                props.alias = p.alias;
                                props.name = this.ctx.name;
                                props.description = p.description || this.ctx.description;
                                apiDocs.properties.push(props);
                            }
                        } else {
                            const method = addMethod(this);
                            if ((method.member == null && !innerClass) || (method.member && method.member === apiName)) {
                                apiDocs.methods.push(method);
                            }
                        }
                        return true;
                    }

                    const itemType = this.tags[0].type;
                    switch (itemType) {
                        case 'param':
                            apiDocs.parameters.push(addType(this));
                            break;
                        case 'typedef':
                            const type = addType(this);
                            if (type.name === apiName) {
                                apiDocs.properties = type.properties;
                            } else if ((type.member == null && !innerClass) || (type.member && type.member === apiName)) {
                                apiDocs.types.push(type);
                            }
                            break;
                        case 'callback':
                            const handler = addHandler(this);
                            if ((handler.member == null && !innerClass) || (handler.member && handler.member === apiName)) {
                                apiDocs.callbacks.push(handler);
                            }
                            break;
                    }
                });
                zuix.load('content/api/api_template', {
                    data: apiDocs,
                    markdown: cp.options().markdown,
                    prism: cp.options().prism,
                    ready: function(ctx) {
                        const view = zuix.$(ctx.view());
                        view.addClass('animated')
                            .addClass('fadeIn');
                        cp.view().append(view.get());
                    }
                });
            },
            error: function() {
                cp.view().html('Error loading '+apiName+' API!');
            }
        });
    };
    function addConstructor(constructor) {
        const item = {};
        item.name = constructor.ctx.name;
        item.description = constructor.description.full || constructor.description;
        item.parameters = [];
        item.return = {};
        zuix.$.each(constructor.tags, function(i) {
            const param = getParam(this);
            if (this.type === 'param') {
                item.parameters.push(param);
            } else if (this.type === 'example') {
                item.example = this.string;
            } else if (this.type === 'return') {
                item.return = param;
            }
        });
        return item;
    }

    function addMethod(member) {
        const item = {};
        const alias = getAlias(member);
        item.name = alias || member.ctx.name;
        item.description = member.description.full || member.description;
        item.parameters = [];
        item.return = [];
        item.example = '';
        zuix.$.each(member.tags, function() {
            const param = getParam(this);
            if (this.type === 'param') {
                item.parameters.push(param);
            } else if (this.type === 'example') {
                item.example = this.string;
            } else if (this.type === 'return') {
                item.return.push(param);
            } else if (this.type === 'memberOf') {
                item.member = this.string.replace('{', '').replace('}', '');
            }
        });
        return item;
    }

    function addType(typeDef) {
        const item = {};
        item.name = '';
        item.description = typeDef.description.full || typeDef.description;
        item.properties = [];
        item.example = '';
        zuix.$.each(typeDef.tags, function() {
            if (this.type === 'property') {
                const property = getParam(this);
                item.properties.push(property);
            } else if (this.type === 'example') {
                item.example = this.string;
            } else if (this.type === 'typedef') {
                item.name = this.string;
                if (item.name.indexOf('}') > 0) {
                    item.name = item.name.substring(item.name.lastIndexOf('}')+1).trim();
                }
            } else if (this.type === 'memberOf') {
                item.member = this.string.replace('{', '').replace('}', '');
            }
        });
        return item;
    }

    function addHandler(handler) {
        const item = {};
        item.name = handler.name;
        item.description = handler.description.full || handler.description;
        item.parameters = [];
        item.context = {};
        item.return = {};
        item.example = '';
        zuix.$.each(handler.tags, function(i) {
            const param = getParam(this);
            if (this.type === 'callback') {
                item.name = item.name || this.string;
            } else if (this.type === 'param') {
                item.parameters.push(param);
            } else if (this.type === 'example') {
                item.example = this.string;
            } else if (this.type === 'this') {
                item.context = this.string;
            } else if (this.type === 'memberOf') {
                item.member = this.string.replace('{', '').replace('}', '');
            } else if (this.type === 'return') {
                item.return = param;
            }
        });
        return item;
    }
    function getParam(parameter) {
        const param = {};
        param.name = parameter.name != null ? parameter.name.replace('[', '').replace(']', '') : null;
        param.description = parameter.description;
        param.types = parameter.types;
        param.optional = parameter.optional;
        return param;
    }
    function getAlias(ctx) {
        if (ctx.tags == null) return;
        for (let t = 0; t < ctx.tags.length; t++) {
            const tag = ctx.tags[t];
            if (tag.type === 'alias') {
                return tag.string;
            }
        }
    }


});
