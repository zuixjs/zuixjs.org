const moment = require('moment');
/**
 * TODO: add JSDoc
 * @param eleventyConfig
 */
module.exports = function(eleventyConfig) {
  // # Add data collections

  // this is the collection of all documentation pages,
  // also used to populate the drawer-layout menu
  eleventyConfig.addCollection('posts_documentation', function(collection) {
    return collection.getFilteredByGlob('./source/pages/documentation/*.md')
        .slice().sort((a, b) => +a.data.order > +b.data.order ? 1 : -1);
  });

  // this is used by the searchFilter
  eleventyConfig.addCollection('posts_searchIndex', (collection) => {
    return [...collection.getFilteredByGlob('./source/pages/**/*.md')];
  });

  // # Add custom data filters

  eleventyConfig.addFilter(
      'search',
      require('./source/_filters/searchFilter')
  );
  eleventyConfig.addFilter(
      'startsWith',
      require('./source/_filters/startsWith')
  );
  eleventyConfig.addFilter(
      'dateFormat',
      require('./source/_filters/dateFormat')
  );
  eleventyConfig.addFilter(
      'date',
      (date, format) => moment(date).format(format || 'YYYY-MM-DD')
  );

  // TODO: describe the following
  eleventyConfig.addPairedShortcode('unpre', function(content) {
    content = content.substring(content.indexOf('```')+3);
    content = content.substring(content.indexOf('\n')+1);
    content = content.substring(0, content.lastIndexOf('```'));
    return content.trim().split('\n').filter((l) => {
      if (l.trim().length > 0) {
        return l;
      }
    }).join('\n');
  });

  // TODO: describe the following
  eleventyConfig.addShortcode('tryLink', function(text, link) {
    return `<div layout="column center-left"><div><a layout="row center-start" href="${link}">
         <i class="material-icons mdl-color-text--primary">try</i>
         <span style="font-size: 120%;margin-left:2px;margin-bottom: 2px">${text}</span>
       </a></div></div>`;
  });

  // TODO: describe the following
  eleventyConfig.addPairedShortcode('card', function(data, title, imageUrl, fieldId) {
    return `<div view z-load="templates/mdl_card">
  <h1 z-field="title">${title}</h1>
  <img z-field="image" src="${imageUrl}" alt="Cover image" role="presentation" style="max-height: 192px; max-width: 100%">
  <p z-field="text">${data}</p>
  <a z-field="link.url" href="#">
    <span z-field="link.title">Take me there</span>
  </a>
</div>`;
  });
};
