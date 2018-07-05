Component({
  relations: {
    '../collapse/index': {
      type: 'parent', 
      linked: function(target) {
        const options = {
          accordion: target.data.accordion
        }
        if (target.data.name === this.data.name) {
          options.showContent = 'show-content';
        }
        this.setData(options);
      }
    }
  },
  externalClasses: ['i-class-content','i-class-title'],
  options: {
    multipleSlots: true 
  },
  properties: {
    title: String,
    name: String
  },
  data: {
    showContent: '',
    accordion: false
  },
  methods: {
    trigger(e) {
      const data = this.data;
      if (data.accordion) {
        this.triggerEvent('collapse', {name: data.name}, {composed: true, bubbles: true});
      } else {
        this.setData({
          showContent: data.showContent ? '' : 'show-content' 
        });
      }
    },
  }
});

