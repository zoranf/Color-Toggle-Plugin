(function ($) {
    $.fn.experiment = function (options) {
        var defaults = {};
        var settings = Object.assign(defaults, options);

        this.setName = function(name) {}

        this.setColor = function(color) {}

        this.colorToggle = function() {}

        this.reset = function() {}

        this.setName(settings.name);
        this.setColor(settings.color.current);

        return this;
    };
})(jQuery);
