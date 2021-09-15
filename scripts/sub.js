document.addEventListener('DOMContentLoaded', function () {

    // const cb = function (el, inview) {
    //     if(inview) {
    //         const ta = new TweenTextAnimation(el);
    //         ta.animate();
    //     }
    // }

    // const so = new ScrollObserver('.tween-animate-title', cb);
    
    // const _inviewAnimation = function(el, inview) {
    //     if(inview) {
    //         el.classList.add('inview');
    //     }else {
    //         el.classList.remove('inview')
    //     }

    // }

    // const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);

    // const header = document.querySelector('.header');
    // const _navAnimation = function(el, inview) {
    //     if(inview) {
    //         header.classList.remove('triggered')
    //     }else {
    //         header.classList.add('triggered');
    //     }

    // }

    // const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});

    const main = new Main();

});


class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }
    
    get observers(){
        return this._observers;
    
    }

    _init() {
        // new MobileMenu();
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _inviewAnimation(el, inview){
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('inview')
        }
    }
    _navAnimation(el, inview){
        if(inview) {
            this.header.classList.remove('triggered');
        }else {
            this.header.classList.add('triggered')
        }
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.nav-triger', this._navAnimation.bind(this), {once: false});
        this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
        // this.observers = new ScrollObserver('.appear', this._inviewAnimation);
    }
}