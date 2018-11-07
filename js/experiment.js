(function ($) {
    $.fn.experiment = function (options) {
        var defaults = {
            name: "John Doe",
            currentColor: "orange",
            primaryColor: "red",
            secondaryColor: "green"
        };
        var settings = {};

        this.init = function() {
            Object.assign(defaults, options);
            settings = Object.assign({...defaults}, {...options});
            this.setName(settings.name);
            this.setColor(settings.currentColor);
        };

        this.setName = function(name) {
            this.text(`Hello ${ name }. Click me!`);
            settings.name = name;
        }

        this.setColor = function(color) {
            this.css("color", color);
            settings.currentColor = color;
        }

        this.colorToggle = function() {
            if (settings.currentColor === settings.primaryColor) {
                this.setColor(settings.secondaryColor)
            } else {
                this.setColor(settings.primaryColor)
            }
        }

        this.reset = function() {
            this.setName(defaults.name);
            this.setColor(defaults.currentColor);
        }

        this.getSettings = function() {
            return settings;
        }

        this.init(this);

        return this;
    };
})(jQuery);
