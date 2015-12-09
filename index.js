var toc = require('markdown-toc');

module.exports = {
    book: {},
    hooks: {
        "page:before": function (page) {
            page.content = toc.insert(page.content, {
                slugify: function (str) {
                    return encodeURI(str.toLowerCase().replace(/[\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-]/g,'')).replace(/%20/g, '-');
                }
            });
            if (this.options.pluginsConfig.atoc.addClass) {
                var className = this.options.pluginsConfig.atoc.className || 'atoc';
                page.content = page.content + '\n\n\n<script type="text/javascript">var targetUl = document.getElementsByClassName(\'page-inner\')[0].getElementsByTagName(\'ul\')[0];if(targetUl&&targetUl.getElementsByTagName(\'a\').length>0){targetUl.className=\'' + className + '\';}</script>';
            }
            return page;
        }
    }
};
