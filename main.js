function initial(){
  new Vue ({
    el:'#msg', //値を表示する対象となるタグを指定
    data: { //渡す値
      message: 'this is Vue.js sample!',
      message2: 'this is Vue.js sample2!',
      message3: 'this is Vue.js sample3!',
      message4: 'this is Vue.js sample4!',
      message5: 'this is Vue.js sample5!',
      message6: 'this is Vue.js sample6!',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      msgArray: [],
      msgArray2: []
    },
    created: function(){//created　初期化処理
      this.msgArray.push('sample message.');
      this.msgArray2.push('sample message.');
      this.message5 = this.msgArray;
      this.message6 = this.msgArray2;
    },
    methods: {//webページ側に割り当てるメソッド
      doAction: function(){
        var str = this.text1;
        this.message3 = 'you typed:' + str + '.';
      },
      doAction2: function(){
        var str2 = this.text2;
        this.message4 = 'you typed:<span style="color:#fff;background:#f00;">' + str2 + '</span>.';
      },
      doAction3: function(){
        this.msgArray.push(this.text3);
        this.message5 = this.msgArray;
      },
      doAction4: function(){
        this.msgArray2.push(this.text4);
        this.message6 = this.msgArray2;
      }
    }
  });

  new Vue ({
    el:'#msg2',
    data: {
      number: '0',
      woTax: '0',
      isA: true,
      isB: false,
      selF: '',
      selB: '',
      flg: false,
      items: [
        'Hello',
        'Welcome',
        'Good-bye...'
      ],
      items2: [],
      val: '',
      message: 'this is message'
    },
    created: function(){
      this.selF = 'red';
      this.selB = 'white';
      this.flg = true;
    },
    computed: {//演算した結果を値として取り出す
      result:function(){
        var total = 0;
        for(var i = 0;i <= this.number * 1;i++) {
          total += i;
        }
        return total;
      },
      wTax: {
        get: function(){
          return parseInt(this.woTax * 1.08);
        },
        set: function(val){
          this.woTax = Math.ceil(val / 1.08);
        }
      }
    },
    methods: {
      change: function(){
        this.isA = !this.isA;
        this.isB = !this.isB;
      },
      myfunc: function(){
        this.message = this.val;
      }
    }



  })
}


//component
Vue.component('my-component', {
  template: `<p style="border:1px solid #ccc;">My Component</p>`
})

Vue.component('my-component2', {
  props: ['message'],
  template: `<p style="border:1px solid #ccc;">{{ message }}</p>`
})

Vue.component('my-component3', {
  props: ['items'],
  template: '#my-template'
})

//directive
Vue.directive('my-directive',{
  bind: function(){
    this.el.innerHTML = '<p>** bind now **</p>';
  },
  update: function(newValue, oldValue){
    this.el.innerHTML = '<p>' + oldValue + ' → ' + newValue + '</p>';
  },
  unbind: function(){
    this.el.innerHTML = '<p>** unbind **</p>';
  }
})
