window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  bjlAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b996dJjU8JOy5zGLrXmLJ/P", "bjlAudio");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgm: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u80cc\u666f\u97f3\u6548"
        },
        chip_one: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5355\u4e2a\u7b79\u7801"
        },
        chip_mulit: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u591a\u4e2a\u7b79\u7801"
        },
        card: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u53d1\u724c"
        },
        gold: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u91d1\u5e01"
        },
        bet_start: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5f00\u59cb\u4e0b\u6ce8"
        },
        bet_stop: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u505c\u6b62\u4e0b\u6ce8"
        },
        timer: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8ba1\u65f6"
        },
        timer_over: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8ba1\u65f6\u5b8c\u6210"
        },
        warn: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8b66\u544a"
        },
        banker: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5e84\u5bb6"
        },
        banker_8: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5e84\u5929\u724c8\u70b9"
        },
        banker_9: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5e84\u5929\u724c9\u70b9"
        },
        banker_add: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5e84\u8865\u724c"
        },
        banker_pair: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5e84\u5bf9"
        },
        banker_win: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5e84\u8d62"
        },
        tie: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u548c"
        },
        player: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u95f2\u5bb6"
        },
        player_8: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u95f2\u5929\u724c8\u70b9"
        },
        player_9: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u95f2\u5929\u724c9\u70b9"
        },
        player_add: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u95f2\u8865\u724c"
        },
        player_pair: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u95f2\u5bf9"
        },
        player_win: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u95f2\u8d62"
        },
        point: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u70b9\u6570"
        }
      },
      playBGM: function playBGM() {
        cc.ak.util.audioMgr.playBGM(this.getAudio("bgm"));
      },
      playSFX: function playSFX(name, idx) {
        cc.ak.util.audioMgr.playSFX(this.getAudio(name, idx));
      },
      playRET: function playRET(name, ret, idx) {
        var _this = this;
        if ("point" == name) cc.ak.util.audioMgr.playSFX(this.getAudio("point", idx)); else if (2 == ret) cc.ak.util.audioMgr.playSFX(this.getAudio("tie")); else {
          var str = "";
          if (0 == ret) str = "banker"; else {
            if (1 != ret) return;
            str = "player";
          }
          if ("ret" == name) {
            cc.ak.util.audioMgr.playSFX(this.getAudio(str));
            this.scheduleOnce(function() {
              cc.ak.util.audioMgr.playSFX(_this.getAudio("point", idx));
            }, .7);
          } else if ("tian" == name) {
            if (8 != idx && 9 != idx) return;
            cc.ak.util.audioMgr.playSFX(this.getAudio(str + "_" + idx.toString()));
          } else "add" == name ? cc.ak.util.audioMgr.playSFX(this.getAudio(str + "_add")) : "pair" == name ? cc.ak.util.audioMgr.playSFX(this.getAudio(str + "_pair")) : "win" == name && cc.ak.util.audioMgr.playSFX(this.getAudio(str + "_win"));
        }
      },
      getAudio: function getAudio(name, idx) {
        switch (name) {
         case "bgm":
          return this.bgm;

         case "chip_one":
          return this.chip_one;

         case "chip_mulit":
          return this.chip_mulit;

         case "card":
          return this.card;

         case "gold":
          return this.gold;

         case "bet_start":
          return this.bet_start;

         case "bet_stop":
          return this.bet_stop;

         case "timer":
          return this.timer;

         case "timer_over":
          return this.timer_over;

         case "warn":
          return this.warn;

         case "banker":
          return this.banker;

         case "banker_8":
          return this.banker_8;

         case "banker_9":
          return this.banker_9;

         case "banker_add":
          return this.banker_add;

         case "banker_pair":
          return this.banker_pair;

         case "banker_win":
          return this.banker_win;

         case "tie":
          return this.tie;

         case "player":
          return this.player;

         case "player_8":
          return this.player_8;

         case "player_9":
          return this.player_9;

         case "player_add":
          return this.player_add;

         case "player_pair":
          return this.player_pair;

         case "player_win":
          return this.player_win;

         case "point":
          return this.point[idx];
        }
        return null;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlBaseLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "febb6gRC9ZMja/pWgaYJEV6", "bjlBaseLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        SetupBoard: cc.Node,
        RulesBoard: cc.Node,
        Option: cc.Node,
        btnExit: cc.Button,
        btnOption: cc.Button,
        btnRecharge: cc.Button,
        preRecharge: cc.Prefab,
        _delegate: null
      },
      setDelegate: function setDelegate(del) {
        this._delegate = del;
      },
      onLoad: function onLoad() {
        var _this = this;
        var visibleSize = cc.view.getVisibleSize();
        this.btnExit.node.on("click", function() {
          var havebet = _this._delegate._mainLayer.isMeHaveBet();
          havebet ? cc.ak.ui.toast("\u60a8\u5df2\u7ecf\u4e0b\u6ce8\uff0c\u8bf7\u7b49\u5f85\u5f00\u724c\u540e\u518d\u79bb\u5f00\uff01") : _this._delegate._protocol.sendLeaveGame();
        }, this);
        this.btnOption.node.on("click", function() {
          _this.Option.getComponent("bjlOption").display();
        }, this);
        this.Option.getComponent("bjlOption").setCallback(function(name) {
          "SETTING" == name ? _this.SetupBoard.active = true : "RULES" == name && (_this.RulesBoard.active = true);
        });
        this.btnRecharge.node.on("click", function() {
          var shop = cc.instantiate(_this.preRecharge);
          shop.zIndex = 100;
          shop.parent = _this.node.parent;
          var payData = cc.ak.cache.shopData.getPayData();
          payData && shop.getComponent("shop").setPayWay(payData.pay_types, payData.tips);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHOP, function(data) {
            cc.log("\u5546\u57ce:" + JSON.stringify(data));
            if (0 == data.status) {
              shop.getComponent("shop").setPayWay(data.pay_types, data.tips);
              cc.ak.cache.shopData.parse(data);
            }
          });
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlBetControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68a34XNGrxLN6FUMpz6OAJo", "bjlBetControl");
    "use strict";
    var CHIP_NUM = 6;
    cc.Class({
      extends: cc.Component,
      properties: {
        MainLayer: cc.Node,
        ChipGroup: [ cc.Button ],
        btnRevoke: cc.Button,
        btnRepeat: cc.Button,
        btnArrowL: cc.Button,
        btnArrowR: cc.Button,
        _MainLayerComp: null,
        _chipIndex: 0,
        _firstIndex: 0,
        _chipPos: [],
        _chipNum: 6
      },
      onLoad: function onLoad() {
        this._MainLayerComp = this.MainLayer.getComponent("bjlMainLayer");
        this.btnRevoke.node.on("click", this.onRevokeChip, this);
        this.btnRepeat.node.on("click", this.onRepeatChip, this);
        for (var i = 0; i < CHIP_NUM; i++) this.ChipGroup[i].node.on("click", this.onChipClicked, this);
        this._firstIndex = 0;
        this.ChipGroup[this._firstIndex].node.emit("click", this.ChipGroup[this._firstIndex]);
        this.btnArrowL.node.active = true;
        this.btnArrowR.node.active = false;
        this._chipPos = [];
        for (var i = this._firstIndex; i < this._firstIndex + 3; i++) this._chipPos.push(this.ChipGroup[i].node.position);
      },
      onRevokeChip: function onRevokeChip() {
        this._MainLayerComp.onRevokeChip();
      },
      onRepeatChip: function onRepeatChip() {
        this._MainLayerComp.onRepeatChip();
      },
      onChipClicked: function onChipClicked(target) {
        var index = 0;
        for (var j = 0; j < this._chipNum; j++) {
          this.ChipGroup[j].node.getChildByName("sp_light").active = false;
          this.ChipGroup[j].node.name == target.node.name && (index = j);
        }
        target.node.getChildByName("sp_light").active = true;
        this._chipIndex = index;
      },
      onPageEvent: function onPageEvent(pageView, eventType, customEventData) {
        if (eventType == cc.PageView.EventType.PAGE_TURNING) {
          var index = pageView.getCurrentPageIndex();
          if (0 == index) {
            this.btnArrowL.node.active = true;
            this.btnArrowR.node.active = false;
          } else if (1 == index) {
            this.btnArrowL.node.active = false;
            this.btnArrowR.node.active = true;
          }
        }
      },
      setChipEnable: function setChipEnable(enable) {
        for (var i = 0; i < CHIP_NUM; i++) this.ChipGroup[i].interactable = enable;
      },
      setRevokeEnable: function setRevokeEnable(enable) {
        this.btnRevoke.interactable = enable;
      },
      setRepeatEnable: function setRepeatEnable(enable) {
        this.btnRepeat.interactable = enable;
      },
      setChipValue: function setChipValue(nums) {
        this._chipNum = nums.length;
        for (var i = 0; i < CHIP_NUM; i++) {
          var lab = this.ChipGroup[i].node.getChildByName("lab_num").getComponent(cc.Label);
          lab.string = (nums[i] / 1e3).toFixed(0);
          i < this._chipNum ? this.ChipGroup[i].node.active = true : this.ChipGroup[i].node.active = false;
        }
      },
      getChipIndex: function getChipIndex() {
        return this._chipIndex;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlChipItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1428bgs/1Oppoafz/oEN6m", "bjlChipItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spfChip: [ cc.SpriteFrame ],
        labNum: cc.Label,
        spChip: cc.Sprite,
        spLight: cc.Sprite,
        _idx: 0,
        _num: 0,
        _uid: 0,
        _area: 0
      },
      onLoad: function onLoad() {},
      start: function start() {},
      init: function init(idx, num, area, uid) {
        (idx < 0 || idx >= 6) && (idx = 0);
        this._idx = idx;
        this._num = num;
        this._uid = uid;
        this._area = area;
        this.spChip.spriteFrame = this.spfChip[idx];
        this.labNum.string = (num / 1e3).toFixed(0);
        this.setActive(true);
      },
      getUserID: function getUserID() {
        return this._uid;
      },
      getChipNum: function getChipNum() {
        return this._num;
      },
      getArea: function getArea() {
        return this._area;
      },
      setActive: function setActive(enable) {
        this.node.opacity = enable ? 255 : 0;
      },
      isActive: function isActive() {
        return this.node.opacity > 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlGameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e35bauL/SRFYoLoBc6IQ2sE", "bjlGameView");
    "use strict";
    var TIME_DELAY = 0;
    cc.Class({
      extends: cc.Component,
      properties: {
        Protocol: cc.Node,
        BaseLayer: cc.Node,
        MainLayer: cc.Node,
        UserLayer: cc.Node,
        RecordLayer: cc.Node,
        Audio: cc.Node,
        _protocol: null,
        _baseLayer: null,
        _mainLayer: null,
        _userLayer: null,
        _recordLayer: null,
        _audio: null,
        _userNum: 6,
        _myIndex: 3,
        _myChairID: 0,
        _gameStage: 0
      },
      onLoad: function onLoad() {
        cc.log("GameView onLoad");
        this._protocol = this.Protocol.getComponent("bjlProtocol");
        this._baseLayer = this.BaseLayer.getComponent("bjlBaseLayer");
        this._mainLayer = this.MainLayer.getComponent("bjlMainLayer");
        this._userLayer = this.UserLayer.getComponent("bjlUserLayer");
        this._recordLayer = this.RecordLayer.getComponent("bjlRecordLayer");
        this._audio = this.Audio.getComponent("bjlAudio");
        this._protocol.setDelegate(this);
        this._baseLayer.setDelegate(this);
        this._mainLayer.setDelegate(this);
        this._userLayer.setDelegate(this);
        this._recordLayer.setDelegate(this);
        this.AreaType = {
          ZDUI: 1,
          XDUI: 2,
          ZHUANG: 3,
          XIAN: 4,
          HE: 5
        };
        this.GameStage = {
          WAIT: 0,
          BETS: 1,
          OPEN: 2,
          OVER: 3
        };
      },
      start: function start() {
        this._audio.playBGM();
      },
      isChairValid: function isChairValid(chairID) {
        return chairID >= 0 && chairID < 5;
      },
      getIndexByChairID: function getIndexByChairID(chairID) {
        return (chairID - this._myChairID + this._myIndex + this._userNum) % this._userNum;
      },
      isBetsStage: function isBetsStage() {
        return this._gameStage == this.GameStage.BETS;
      },
      onUserInfo: function onUserInfo(data) {
        cc.log(data);
        this._userLayer.updateMyInfo(data);
      },
      onUserList: function onUserList(data) {
        cc.log(data);
        this._userLayer.updateUserList(data.userinfo);
      },
      onUserLeave: function onUserLeave(data) {},
      onUserReady: function onUserReady(data) {},
      onGameRestore: function onGameRestore(data) {
        cc.log(data);
        this._mainLayer.setChipValue(data.chouma);
        var totalScore = [ data.addAllScore.typeZhuangdui, data.addAllScore.typeXiandui, data.addAllScore.typeZhuang, data.addAllScore.typeXian, data.addAllScore.typeHe ];
        var myScore = [ data.selfadd.typeZhuangdui, data.selfadd.typeXiandui, data.selfadd.typeZhuang, data.selfadd.typeXian, data.selfadd.typeHe ];
        this._mainLayer.setLimitScore(data.personmaxadd);
        this._gameStage = data.gameStage;
        if (data.gameStage == this.GameStage.BETS || data.gameStage == this.GameStage.OPEN) {
          this._mainLayer.dealCard(false);
          this._mainLayer.startTimer(data.lefttime - TIME_DELAY, data.gameStage);
          for (var i = 0; i < 5; i++) {
            this._mainLayer.addTotalScore(i, totalScore[i]);
            this._mainLayer.addMyScore(i, myScore[i]);
            this._userLayer.addScoreNum(cc.ak.mc.userMgr.uid, -myScore[i]);
            data.addchouma && data.addchouma[i] && data.addchouma[i].chouma && this._mainLayer.addChipWithRestore(i, data.addchouma[i].chouma, cc.ak.mc.userMgr.uid, 0);
            totalScore[i] - myScore[i] > 0 && this._mainLayer.addChipWithRestore(i, [], 0, totalScore[i] - myScore[i]);
          }
          if (data.gameStage == this.GameStage.BETS) {
            cc.log("\u4e0b\u6ce8\u72b6\u6001");
            this._mainLayer.setOperChipVisible(true);
          }
          if (data.gameStage == this.GameStage.OPEN) {
            cc.log("\u5f00\u724c\u72b6\u6001");
            var opendata = {
              zhuangCard: [ data.zhuangcard[0], data.zhuangcard[1] ],
              xianCard: [ data.xiancard[0], data.xiancard[1] ],
              zhuangBuCard: [ data.zhuangcard[2] ],
              xianBuCard: [ data.xiancard[2] ]
            };
            this._mainLayer.openCardWithOutAni(opendata);
          }
        } else {
          cc.log("\u7b49\u5f85\u72b6\u6001");
          this._mainLayer.startTimer(data.lefttime - TIME_DELAY, this.GameStage.WAIT);
        }
        data.history && data.history.typewin && data.history.typedui && this._recordLayer.setRecordData(data.history.typewin, data.history.typedui, data.history.jiying);
      },
      onGameStart: function onGameStart(data) {
        cc.log(data);
        this._gameStage = this.GameStage.BETS;
        this._mainLayer.reset();
        this._mainLayer.startGame();
        this._mainLayer.startTimer(data.timeleft - TIME_DELAY, this.GameStage.BETS);
        this._audio.playSFX("bet_start");
      },
      onAddScore: function onAddScore(data) {
        cc.log(data);
        var uid = data.adduserId;
        false == this._userLayer.isUserExist(uid) && (uid = 0);
        var animate = null == data.animate || data.animate;
        var audio = null == data.audio || data.audio;
        this._mainLayer.addChipAni(data.addtype, data.addChipId, uid, animate, audio);
        var chipNum = this._mainLayer.getChipValue(data.addChipId);
        this._userLayer.addScoreNum(uid, -chipNum);
        this._mainLayer.addTotalScore(data.addtype, chipNum);
        if (uid == cc.ak.mc.userMgr.uid) {
          this._mainLayer.addMyScore(data.addtype, chipNum);
          this._mainLayer.setOperRevokeVisible(true);
          this._mainLayer.setOperRepeatVisible(false);
          this._mainLayer.addChipRecord(data.addtype, data.addChipId);
        }
      },
      onAddScoreOther: function onAddScoreOther(data) {
        cc.log(data);
        for (var i = 0; i < 5; i++) {
          var score = data.addscore[i];
          var list = this._mainLayer.getChipListByScore(score);
          for (var j = 0; j < list.length; j++) {
            var chipIndex = this._mainLayer.getChipIndexByScore(list[j]);
            this._mainLayer.addChipAni(i, chipIndex, 0, true, true);
          }
          this._mainLayer.addTotalScore(i, score);
        }
      },
      onAddScoreBatch: function onAddScoreBatch(data) {
        cc.log(data);
        var uid = data.adduserId;
        var areas = null != data.addtype ? data.addtype : [];
        var chips = null != data.addChipId ? data.addChipId : [];
        for (var i = 0; i < areas.length; i++) {
          var animate = i < 20;
          var audio = 1 == i;
          this.onAddScore({
            adduserId: uid,
            addtype: areas[i],
            addChipId: chips[i],
            animate: animate,
            audio: audio
          });
        }
      },
      onSubScore: function onSubScore(data) {
        cc.log(data);
        var uid = data.backUserId;
        false == this._userLayer.isUserExist(uid) && (uid = 0);
        for (var i = 0; i < 5; i++) {
          this._mainLayer.subChipAni(uid, i, data.backScore[i]);
          this._userLayer.addScoreNum(uid, data.backScore[i]);
          this._mainLayer.addTotalScore(i, -data.backScore[i]);
          if (uid == cc.ak.mc.userMgr.uid) {
            this._mainLayer.addMyScore(i, -data.backScore[i]);
            this._mainLayer.setOperRevokeVisible(false);
            this._mainLayer.clearChipRecord();
          }
        }
      },
      onOpenCard: function onOpenCard(data) {
        cc.log(data);
        this._gameStage = this.GameStage.OPEN;
        this._mainLayer.openCard(data);
        this._mainLayer.startTimer(data.timeleft - TIME_DELAY, this.GameStage.OPEN);
        this._mainLayer.setOperChipVisible(false);
        this._mainLayer.setOperRevokeVisible(false);
        this._mainLayer.setOperRepeatVisible(false);
        this._audio.playSFX("bet_stop");
      },
      onGameOver: function onGameOver(data) {
        var _this = this;
        cc.log(data);
        this._gameStage = this.GameStage.OVER;
        var areaList = [];
        1 == data.wintype ? areaList.push(2) : 2 == data.wintype ? areaList.push(3) : areaList.push(4);
        if (1 == data.typezhuangdui && data.typexiandui) {
          areaList.push(0);
          areaList.push(1);
        } else 1 == data.typezhuangdui ? areaList.push(0) : 1 == data.typexiandui && areaList.push(1);
        this._mainLayer.startResultAni(areaList);
        var uidList = null == data.rankUserId ? [] : data.rankUserId;
        var scoreList = null == data.rankScore ? [] : data.rankScore;
        var found = false;
        for (var i = 0; i < uidList.length; i++) if (uidList[i] == cc.ak.mc.userMgr.uid) {
          found = true;
          break;
        }
        if (false == found) {
          uidList.push(cc.ak.mc.userMgr.uid);
          scoreList.push(data.gameScore);
        }
        this._mainLayer.stopGame(uidList, scoreList, areaList, function() {
          for (var i = 0; i < uidList.length; i++) _this._userLayer.showAddScore(uidList[i], scoreList[i]);
          var otherscore = 0;
          _this._userLayer.showAddScore(0, otherscore);
          _this._audio.playSFX("gold");
        });
        this._mainLayer.startTimer(data.timeleft - TIME_DELAY, this.GameStage.OVER);
        var dui = 0;
        1 == data.typezhuangdui && data.typexiandui ? dui = 3 : 1 == data.typezhuangdui ? dui = 1 : 1 == data.typexiandui && (dui = 2);
        1 == data.isclear && this._recordLayer.clearRecord();
        this._recordLayer.addOneRecord(data.wintype, dui, data.jiying);
      },
      onOnlinePlayerNum: function onOnlinePlayerNum(data) {
        this._userLayer.setOnlineNum(data.onlinenum);
      },
      onErrorMsg: function onErrorMsg(data) {
        cc.log(data);
        switch (data.errortype) {
         case 1:
          cc.ak.ui.toast("\u60a8\u7684\u91d1\u94b1\u4e0d\u8db3!");
          break;

         case 2:
          cc.ak.ui.toast("\u4e0b\u6ce8\u8d85\u8fc7\u5f53\u524d\u533a\u57df\u4e0a\u9650!");
          break;

         case 3:
          cc.ak.ui.toast("\u52a0\u6ce8\u7b79\u7801\u4e0d\u5bf9!");
          break;

         case 4:
          cc.ak.ui.toast("\u4e0b\u6ce8\u7c7b\u578b\u4e0d\u5bf9!");
          break;

         case 5:
          cc.ak.ui.toast("\u4e0d\u662f\u4e0b\u6ce8\u9636\u6bb5!");
          break;

         case 6:
          cc.ak.ui.toast("\u8d85\u8fc7\u4e2a\u4eba\u4e0b\u6ce8\u4e0a\u9650!");
          break;

         default:
          cc.ak.ui.toast("\u672a\u77e5\u9519\u8bef!");
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "111f5RCdTFGzITzcN5/vYvm", "bjlInit");
    "use strict";
    var BjlInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "bjl"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("bjl module init!");
        bundle.bjl = {};
        bundle.bjl.key = {};
        bundle.bjl.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initBjlData: function initBjlData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.bjl.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.bjl.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.bjl.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.bjl.key.event = {
          ENTER_SCENE: "ENTER_SCENE",
          MY_USERINFO: "MY_USERINFO",
          VIP_USERINFO: "VIP_USERINFO",
          ONLINE_PLAYER_NUM: "ONLINE_PLAYER_NUM",
          BET_PLATFORM_INFO: "BET_PLATFORM_INFO",
          SELF_ONBET_RULEST: "SELF_ONBET_RULEST",
          VIP_ONBET_RULEST: "VIP_ONBET_RULEST",
          ONLINE_ONBET_RULEST: "ONLINE_ONBET_RULEST",
          SETTLEMENT_INFO: "SETTLEMENT_INFO",
          BTN_CONTINUE_STATUS: "SUB_REPEAT_BET_STATUS_RSP",
          ENTER_SETTLEMENT_SCENE: "ENTER_SETTLEMENT_SCENE"
        };
      },
      initCache: function initCache() {},
      initGlobalEventHandle: function initGlobalEventHandle() {
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + BjlInit.id, function(data) {
          cc.log("ENTER_GAME_SCENE_BJL");
          bundle.bjl.data.set(bundle.bjl.key.data.ENTER_ROOM_SUCC, data);
          if ("bjlGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("bjlGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + BjlInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== BjlInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = BjlInit;
    cc._RF.pop();
  }, {} ],
  bjlMainLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c531bA+MY1A06pi3PQixdjR", "bjlMainLayer");
    "use strict";
    var AREA_NUM = 5;
    var ZHUANG = 0;
    var XIAN = 1;
    var HE = 2;
    cc.Class({
      extends: cc.Component,
      properties: {
        preCard: cc.Prefab,
        preChip: cc.Prefab,
        TimerNode: cc.Node,
        labPointZ: cc.Label,
        labPointX: cc.Label,
        CardNode: cc.Node,
        AnimRoot: cc.Node,
        StartGame: cc.Node,
        StartChip: cc.Node,
        StopChip: cc.Node,
        ResultPanel: cc.Node,
        BetArea: [ cc.Node ],
        BetControl: cc.Node,
        TotalBet: cc.Node,
        _delegate: null,
        _chipIndex: -1,
        _areaIndex: -1,
        _posCardZ: [],
        _posCardX: [],
        _chipPool: null,
        _chipTemp: [],
        _chipList: [],
        _chipNums: [],
        _areaPoss: [],
        _chipVals: [],
        _totalScore: [],
        _myScore: [],
        _limitScore: 0,
        _chipRecord: [],
        _repeatUsed: false
      },
      setDelegate: function setDelegate(del) {
        this._delegate = del;
      },
      start: function start() {},
      reset: function reset() {
        this.setOperChipVisible(false);
        this.setOperRepeatVisible(false);
        this.setOperRevokeVisible(false);
        for (var i = 0; i < this._chipTemp.length; i++) {
          this._chipTemp[i].stopAllActions();
          this._chipPool.put(this._chipTemp[i]);
        }
        this._chipTemp = [];
        for (var i = 0; i < AREA_NUM; i++) this._chipNums[i] = 0;
        this.clearBetScore();
        this.node.stopAllActions();
        this.CardNode.removeAllChildren(true);
        this.setPointNum(ZHUANG, 0);
        this.setPointNum(XIAN, 0);
      },
      onLoad: function onLoad() {
        for (var _i = 0; _i < AREA_NUM; _i++) {
          var pos = this.BetArea[_i].getChildByName("nd_center").position;
          var worldpos = this.BetArea[_i].convertToWorldSpaceAR(pos);
          this._areaPoss[_i] = this.node.convertToNodeSpaceAR(worldpos);
        }
        this._chipPool = new cc.NodePool();
        for (var _i2 = 0; _i2 < 100; _i2++) {
          var chip = cc.instantiate(this.preChip);
          this._chipPool.put(chip);
        }
        this._chipTemp = [];
        for (var i = 0; i < AREA_NUM; i++) this._chipNums[i] = 0;
        for (var i = 0; i < AREA_NUM; i++) {
          var splice = this.BetArea[i].getChildByName("btn_splice");
          splice.getComponent("bjlSpliceButton").init(this.onBetareaClicked, this, i);
        }
        this.AnimRoot.zIndex = 1e4;
        this.TimerNode.getComponent("bjlTimer").init(this.onTimerUpdate, this, this._delegate._audio);
        this.reset();
      },
      onBetareaClicked: function onBetareaClicked(self, index) {
        if (false == self._delegate.isBetsStage()) return;
        var chipIndex = self.BetControl.getComponent("bjlBetControl").getChipIndex();
        if (chipIndex < 0 || chipIndex >= 6) return;
        var light = self.BetArea[index].getChildByName("sp_light");
        light.stopAllActions();
        light.runAction(cc.sequence(cc.fadeIn(.05), cc.fadeOut(.05)));
        var score = self._chipVals[chipIndex];
        if (false == self._delegate._userLayer.checkScore(score)) {
          cc.ak.ui.toast("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3!");
          return;
        }
        cc.log("chipIndex: " + chipIndex + ", areaIndex: " + index);
        self._delegate._protocol.sendAddScoreFinish(index, chipIndex);
        false == self.isMeHaveBet() && false == self.isRepeatUsed() && self.clearChipRecord();
      },
      onRevokeChip: function onRevokeChip() {
        this._delegate._protocol.sendSubScoreFinish();
      },
      onRepeatChip: function onRepeatChip() {
        if (false == this.isRepeatEnable()) return;
        var areaIndexs = [];
        var chipIndexs = [];
        for (var i = 0; i < this._chipRecord.length; i++) {
          var item = this._chipRecord[i];
          areaIndexs.push(item.areaIndex);
          chipIndexs.push(item.chipIndex);
        }
        if (areaIndexs.length <= 100) this._delegate._protocol.sendBatchScoreFinish(areaIndexs, chipIndexs); else {
          var n = Math.floor(areaIndexs.length / 100);
          var m = Math.floor(areaIndexs.length % 100);
          for (var i = 0; i < n + 1; i++) {
            var areaTemps = [];
            var chipTemps = [];
            if (i == n) {
              areaTemps = areaIndexs.slice(100 * i, 100 * i + m);
              chipTemps = chipIndexs.slice(100 * i, 100 * i + m);
            } else {
              areaTemps = areaIndexs.slice(100 * i, 100 * i + 100);
              chipTemps = chipIndexs.slice(100 * i, 100 * i + 100);
            }
            this._delegate._protocol.sendBatchScoreFinish(areaTemps, chipTemps);
          }
        }
        this._repeatUsed = true;
        this.clearChipRecord();
        this.setOperRepeatVisible(false);
      },
      startGame: function startGame() {
        this.startChip(true);
      },
      dealCard: function dealCard(animate) {},
      startChip: function startChip(animate) {
        var _this = this;
        cc.log("\u5f00\u59cb\u4e0b\u6ce8");
        if (false == animate) return;
        this.StartChip.active = true;
        this.StartChip.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
          _this.StartChip.active = false;
          _this.setOperChipVisible(true);
          _this.setOperRevokeVisible(false);
          _this.isRepeatEnable() && _this.setOperRepeatVisible(true);
        }, this)));
      },
      addChipAni: function addChipAni(areaIndex, chipIndex, uid, animate, audio) {
        var chip = this.createChip(chipIndex, areaIndex, uid);
        var areapos = this._areaPoss[areaIndex];
        var endpos = cc.v2(areapos.x, areapos.y);
        endpos.x += 70 * Math.random() * (Math.random() > .5 ? 1 : -1);
        endpos.y += 30 * Math.random() * (Math.random() > .5 ? 1 : -1);
        if (animate) {
          var startpos = this.getUserHeadPos(uid);
          chip.position = startpos;
          chip.stopAllActions();
          chip.runAction(cc.sequence(cc.moveTo(.3, endpos), cc.callFunc(function() {}, this)));
          this._delegate._userLayer.setHeadShake(uid);
          true == audio && this._delegate._audio.playSFX("chip_mulit");
        } else chip.position = endpos;
      },
      addChipWithRestore: function addChipWithRestore(areaIndex, chipList, uid, score) {
        if (uid == cc.ak.mc.userMgr.uid) for (var i = 0; i < chipList.length; i++) this.addChipAni(areaIndex, chipList[i], uid, false, false); else {
          var chipScoreList = this.getChipListByScore(score);
          for (var i = 0; i < chipScoreList.length; i++) {
            var chipIndex = this.getChipIndexByScore(chipScoreList[i]);
            this.addChipAni(areaIndex, chipIndex, 0, false, false);
          }
        }
      },
      subChipAni: function subChipAni(uid, areaIndex, score) {
        var subList = [];
        if (uid > 0) for (var i = 0; i < this._chipTemp.length; i++) {
          var chip = this._chipTemp[i].getComponent("bjlChipItem");
          chip._uid == uid && chip._area == areaIndex && subList.push(i);
        } else {
          var count = this.getUserChipCount(0, areaIndex);
          var radio = Math.floor(score / this._totalScore[areaIndex]);
          var delnum = 0;
          for (var i = 0; i < this._chipTemp.length; i++) {
            var chip = this._chipTemp[i].getComponent("bjlChipItem");
            if (0 == chip.uid && chip._area == areaIndex) {
              subList.push(i);
              delnum++;
            }
            if (delnum >= count * radio) break;
          }
        }
        var removeChip = function removeChip(target, idx) {
          target.stopAllActions();
          this._chipPool.put(target);
        };
        var endpos = this.getUserHeadPos(uid);
        for (var i = subList.length - 1; i >= 0; i--) {
          var idx = subList[i];
          this._chipTemp[idx].getComponent("bjlChipItem").setActive(true);
          this._chipTemp[idx].stopAllActions();
          this._chipTemp[idx].runAction(cc.sequence(cc.moveTo(.3, endpos), cc.callFunc(removeChip, this, idx)));
          this._chipTemp.splice(idx, 1);
          this._chipNums[areaIndex]--;
        }
        this._delegate._audio.playSFX("chip_mulit");
      },
      openCard: function openCard(data) {
        var _this2 = this;
        this.StopChip.active = true;
        this.StopChip.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
          _this2.StopChip.active = false;
        }, this)));
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
          _this2.dealACardAni(0, XIAN);
        }, this), cc.delayTime(.3), cc.callFunc(function() {
          _this2.dealACardAni(1, XIAN);
        }, this), cc.delayTime(.5), cc.callFunc(function() {
          _this2.dealACardAni(0, ZHUANG);
        }, this), cc.delayTime(.3), cc.callFunc(function() {
          _this2.dealACardAni(1, ZHUANG);
        }, this), cc.delayTime(.5), cc.callFunc(function() {
          _this2.openACardAni(0, XIAN, data.xianCard[0]);
          _this2.openACardAni(1, XIAN, data.xianCard[1]);
        }, this), cc.delayTime(.3), cc.callFunc(function() {
          _this2.setPointNum(XIAN, _this2.getCardPoint(data.xianCard));
        }, this), cc.delayTime(.5), cc.callFunc(function() {
          _this2.openACardAni(0, ZHUANG, data.zhuangCard[0]);
          _this2.openACardAni(1, ZHUANG, data.zhuangCard[1]);
        }, this), cc.delayTime(.3), cc.callFunc(function() {
          _this2.setPointNum(ZHUANG, _this2.getCardPoint(data.zhuangCard));
        }, this), cc.callFunc(function() {
          _this2.appendCard(data);
        }, this)));
      },
      appendCard: function appendCard(data) {
        var _this3 = this;
        this.node.stopAllActions();
        var bunum = 0;
        if (data.xianBuCard && data.xianBuCard > 0) {
          this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
            _this3.dealACardAni(2, XIAN);
            _this3._delegate._audio.playRET("add", XIAN, 0);
          }, this), cc.delayTime(.5), cc.callFunc(function() {
            _this3.openACardAni(2, XIAN, data.xianBuCard);
          }, this), cc.delayTime(.5), cc.callFunc(function() {
            _this3.setPointNum(XIAN, data.xianPoint);
          }, this)));
          bunum++;
        }
        if (data.zhuangBuCard && data.zhuangBuCard > 0) {
          this.node.runAction(cc.sequence(cc.delayTime(.5 + 1 * bunum), cc.callFunc(function() {
            _this3.dealACardAni(2, ZHUANG, true);
            _this3._delegate._audio.playRET("add", ZHUANG, 0);
          }, this), cc.delayTime(.5), cc.callFunc(function() {
            _this3.openACardAni(2, ZHUANG, data.zhuangBuCard);
          }, this), cc.delayTime(.5), cc.callFunc(function() {
            _this3.setPointNum(ZHUANG, data.zhuangPoint);
          }, this)));
          bunum++;
        }
        this.node.runAction(cc.sequence(cc.delayTime(1 + 1 * bunum), cc.callFunc(function() {
          _this3.openCardResultAni(data);
        }, this)));
      },
      openCardWithOutAni: function openCardWithOutAni(data) {
        for (var i = 0; i < 2; i++) {
          this.dealACardAni(i, XIAN);
          this.openACardAni(i, XIAN, data.xianCard[i]);
        }
        for (var i = 0; i < 2; i++) {
          this.dealACardAni(i, ZHUANG);
          this.openACardAni(i, ZHUANG, data.zhuangCard[i]);
        }
        var xianPoint = this.getCardPoint([ data.xianCard[0], data.xianCard[1], data.xianBuCard ]);
        if (data.xianBuCard > 0) {
          this.dealACardAni(2, XIAN);
          this.openACardAni(2, XIAN, data.xianBuCard);
          this.setPointNum(XIAN, xianPoint);
        }
        var zhuangPoint = this.getCardPoint([ data.zhuangCard[0], data.zhuangCard[1], data.zhuangBuCard ]);
        if (data.zhuangBuCard > 0) {
          this.dealACardAni(2, ZHUANG);
          this.openACardAni(2, ZHUANG, data.zhuangBuCard);
          this.setPointNum(ZHUANG, zhuangPoint);
        }
      },
      openCardResultAni: function openCardResultAni(data) {
        var _this4 = this;
        var zhuang = "\u5e84" + data.zhuangPoint.toString() + "\u70b9";
        var xian = "\u95f2" + data.xianPoint.toString() + "\u70b9";
        var result = "";
        var labZhuang = this.ResultPanel.getChildByName("lab_zhuang").getComponent(cc.Label);
        var labXian = this.ResultPanel.getChildByName("lab_xian").getComponent(cc.Label);
        var labResult = this.ResultPanel.getChildByName("lab_result").getComponent(cc.Label);
        if (data.zhuangPoint == data.xianPoint) {
          result = "\u548c";
          labResult.node.color = cc.color(50, 190, 50, 255);
        } else if (data.zhuangPoint > data.xianPoint) {
          result = "\u5e84\u8d62";
          labResult.node.color = cc.color(220, 80, 80, 255);
        } else {
          result = "\u95f2\u8d62";
          labResult.node.color = cc.color(75, 130, 240, 255);
        }
        labZhuang.string = zhuang;
        labXian.string = xian;
        labResult.string = result;
        this.ResultPanel.active = true;
        this.ResultPanel.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function(node) {
          node.active = false;
        })));
        var time = 1.7;
        if (1 == data.jiying) this._delegate._audio.playRET("tian", ZHUANG, data.zhuangPoint); else if (2 == data.jiying) this._delegate._audio.playRET("tian", XIAN, data.xianPoint); else {
          this._delegate._audio.playRET("ret", XIAN, data.xianPoint);
          this.scheduleOnce(function() {
            _this4._delegate._audio.playRET("ret", ZHUANG, data.zhuangPoint);
          }, time);
          time += 1.5;
        }
        this.scheduleOnce(function() {
          data.zhuangPoint == data.xianPoint ? _this4._delegate._audio.playRET("win", HE, 0) : data.zhuangPoint > data.xianPoint ? _this4._delegate._audio.playRET("win", ZHUANG, 0) : _this4._delegate._audio.playRET("win", XIAN, 0);
        }, time);
      },
      stopGame: function stopGame(uidList, scoreList, areaList, callback) {
        var _this5 = this;
        false == this.isMeHaveBet() && this.clearChipRecord();
        for (var i = 0; i < AREA_NUM; i++) this._myScore[i] = 0;
        this.scheduleOnce(function() {
          _this5.startGetChips(uidList, scoreList, areaList, callback);
        }, 1);
      },
      startGetChips: function startGetChips(uidList, scoreList, areaList, callback) {
        var _this6 = this;
        var finishGetChips = function finishGetChips(target, finish) {
          finish && this.startPutChips(uidList, scoreList, areaList, callback);
        };
        for (var i = 0; i < this._chipTemp.length; i++) {
          this._chipTemp[i].getComponent("bjlChipItem").setActive(true);
          var area = this._chipTemp[i].getComponent("bjlChipItem").getArea();
          var flag = false;
          for (var j = 0; j < areaList.length; j++) if (area == areaList[j]) {
            flag = true;
            break;
          }
          var finish = i == this._chipTemp.length - 1;
          if (false == flag) {
            var winarea = areaList[0];
            var areapos = this._areaPoss[winarea];
            var endpos = cc.v2(areapos.x + 200 * Math.random() - 100, areapos.y + 160 * Math.random() - 80);
            this._chipTemp[i].runAction(cc.sequence(cc.moveTo(.7, cc.v2(this.node.x, this.node.y + 600)), cc.delayTime(.3), cc.moveTo(.4, endpos), cc.delayTime(.3), cc.callFunc(finishGetChips, this, finish)));
          } else this._chipTemp[i].runAction(cc.sequence(cc.delayTime(1.7), cc.callFunc(finishGetChips, this, finish)));
        }
        if (this._chipTemp.length > 0) {
          this._delegate._audio.playSFX("chip_mulit");
          this.scheduleOnce(function() {
            _this6._delegate._audio.playSFX("chip_mulit");
          }, 1);
        }
      },
      startPutChips: function startPutChips(uidList, scoreList, areaList, callback) {
        var finishPutChips = function finishPutChips(target, e) {
          this._chipPool.put(target);
          e.finish && callback();
        };
        var getRandomPos = function getRandomPos(pos) {
          return cc.v2(pos.x + 300 * Math.random() - 150, pos.y + 300 * Math.random() - 150);
        };
        var chipCount = this._chipTemp.length;
        var dealpos = chipCount > 0 ? this._chipTemp[0].position : cc.v2(0, 600);
        var totalScore = 0;
        for (var i = 0; i < 5; i++) totalScore += this._totalScore[i];
        for (var i = 0; i < scoreList.length; i++) {
          if (scoreList[i] <= 0) continue;
          var rat = scoreList[i] / totalScore;
          var num = Math.floor(chipCount * rat);
          num = num > 0 ? num : 1;
          var headpos = this.getUserHeadPos(uidList[i]);
          var n = 0;
          for (var j = this._chipTemp.length - 1; j >= 0; j--) {
            this._chipTemp[j].getComponent("bjlChipItem").setActive(true);
            this._chipTemp[j].runAction(cc.sequence(cc.moveTo(.7, headpos), cc.callFunc(finishPutChips, this, {
              idx: j,
              finish: this._chipTemp.length <= 1
            })));
            this._chipTemp.splice(j, 1);
            n++;
            if (n >= num) break;
          }
          this._delegate._audio.playSFX("chip_mulit");
        }
        if (this._chipTemp.length > 0) {
          var headpos = this.getUserHeadPos(0);
          for (var i = this._chipTemp.length - 1; i >= 0; i--) {
            this._chipTemp[i].getComponent("bjlChipItem").setActive(true);
            this._chipTemp[i].runAction(cc.sequence(cc.moveTo(.7, headpos), cc.callFunc(finishPutChips, this, {
              idx: i,
              finish: this._chipTemp.length <= 1
            })));
            this._chipTemp.splice(i, 1);
          }
          this._delegate._audio.playSFX("chip_mulit");
        }
      },
      startResultAni: function startResultAni(areaList) {
        for (var i = 0; i < areaList.length; i++) {
          var light = this.BetArea[areaList[i]].getChildByName("sp_edge");
          light.stopAllActions();
          light.runAction(cc.sequence(cc.scaleTo(.01, .95), cc.fadeIn(.01), cc.spawn(cc.scaleTo(1, 1.05), cc.fadeOut(1)), cc.scaleTo(.01, .95), cc.fadeIn(.01), cc.spawn(cc.scaleTo(1, 1.05), cc.fadeOut(1)), cc.scaleTo(.01, .95), cc.fadeIn(.01), cc.spawn(cc.scaleTo(1, 1.05), cc.fadeOut(1)), cc.callFunc(function(node) {
            node.scale = 1;
            node.opacity = 0;
          }, this)));
        }
      },
      startWarnAni: function startWarnAni() {
        this.stopWarnAni();
        for (var i = 0; i < AREA_NUM; i++) {
          var light = this.BetArea[i].getChildByName("sp_edge");
          light.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.3), cc.fadeTo(.3, 70))));
        }
      },
      stopWarnAni: function stopWarnAni() {
        for (var i = 0; i < AREA_NUM; i++) {
          var light = this.BetArea[i].getChildByName("sp_edge");
          light.stopAllActions();
          light.runAction(cc.fadeOut(.01));
        }
      },
      startTimer: function startTimer(num, stage) {
        if (stage == this._delegate.GameStage.BETS) this.TimerNode.getComponent("bjlTimer").startTimer(num); else if (stage == this._delegate.GameStage.OPEN) {
          this.stopWarnAni();
          this.TimerNode.getComponent("bjlTimer").stopTimer();
        }
      },
      onTimerUpdate: function onTimerUpdate(self, time) {
        5 == time && self.startWarnAni();
      },
      dealACardAni: function dealACardAni(index, user, animate) {
        null == animate && (animate = true);
        var name = "xian_" + index;
        var pos = cc.v2(190 + 140 * index, 435);
        if (user == ZHUANG) {
          name = "zhuang_" + index;
          pos.x = -pos.x;
        }
        var node = cc.instantiate(this.preCard);
        node.getComponent("card").onLoad();
        node.getComponent("card").setBg(1);
        node.parent = this.CardNode;
        node.position = pos;
        node.scale = 1;
        node.name = name;
        node.zIndex = 3 - index;
        if (animate) {
          node.scale = .5;
          node.position = cc.v2(0, pos.y);
          node.runAction(cc.spawn(cc.scaleTo(.2, 1), cc.moveTo(.2, pos)));
          this._delegate._audio.playSFX("card");
        }
      },
      openACardAni: function openACardAni(index, user, card, animate) {
        null == animate && (animate = true);
        var name = "xian_" + index;
        user == ZHUANG && (name = "zhuang_" + index);
        var node = this.CardNode.getChildByName(name);
        if (animate) node.runAction(cc.sequence(cc.scaleTo(.2, 0, 1), cc.callFunc(function() {
          node.getComponent("card").setBg(0);
          node.getComponent("card").setCardvaule(card);
        }, this), cc.scaleTo(.2, 1, 1))); else {
          node.getComponent("card").setBg(0);
          node.getComponent("card").setCardvaule(card);
        }
      },
      createChip: function createChip(chipIndex, areaIndex, uid) {
        var chip = null;
        chip = this._chipPool.size() > 0 ? this._chipPool.get() : cc.instantiate(this.preChip);
        chip.parent = this.node;
        chip.scale = .5;
        chip.opacity = 0;
        chip.getComponent("bjlChipItem").init(chipIndex, this.getChipValue(chipIndex), areaIndex, uid);
        this._chipTemp.push(chip);
        this._chipNums[areaIndex]++;
        if (this._chipNums[areaIndex] > 100) for (var i = 0; i < this._chipTemp.length; i++) {
          var comp = this._chipTemp[i].getComponent("bjlChipItem");
          if (true == comp.isActive() && areaIndex == comp.getArea()) {
            comp.setActive(false);
            break;
          }
        }
        return chip;
      },
      removeChip: function removeChip(idx) {},
      setOperChipVisible: function setOperChipVisible(visible) {
        this.BetControl.getComponent("bjlBetControl").setChipEnable(visible);
      },
      setOperRevokeVisible: function setOperRevokeVisible(visible) {
        this.BetControl.getComponent("bjlBetControl").setRevokeEnable(visible);
      },
      setOperRepeatVisible: function setOperRepeatVisible(visible) {
        this.BetControl.getComponent("bjlBetControl").setRepeatEnable(visible);
      },
      setChipValue: function setChipValue(nums) {
        this._chipVals = nums;
        this.BetControl.getComponent("bjlBetControl").setChipValue(nums);
      },
      getChipValue: function getChipValue(index) {
        return this._chipVals[index];
      },
      getChipIndexByScore: function getChipIndexByScore(num) {
        for (var i = 0; i < this._chipVals.length; i++) if (this._chipVals[i] == num) return i;
        return 0;
      },
      getUserChipCount: function getUserChipCount(uid, areaIndex) {
        var num = 0;
        for (var i = this._chipTemp.length - 1; i >= 0; i--) {
          var chip = this._chipTemp[i].getComponent("bjlChipItem");
          chip._uid == uid && chip._area == areaIndex && num++;
        }
        return num;
      },
      addMyScore: function addMyScore(areaIndex, num) {
        this._myScore[areaIndex] += num;
        var lab = this.BetArea[areaIndex].getChildByName("bet_my").getChildByName("lab_bet").getComponent(cc.Label);
        lab.string = (this._myScore[areaIndex] / 1e3).toFixed(0);
        var count = 0;
        for (var i = 0; i < AREA_NUM; i++) count += this._myScore[i];
        var lab = this.TotalBet.getChildByName("lab_left_bet").getComponent(cc.Label);
        lab.string = ((this._limitScore - count) / 1e3).toFixed(0);
      },
      addTotalScore: function addTotalScore(areaIndex, num) {
        this._totalScore[areaIndex] += num;
        var lab = this.BetArea[areaIndex].getChildByName("bet_total").getChildByName("lab_bet").getComponent(cc.Label);
        lab.string = (this._totalScore[areaIndex] / 1e3).toFixed(0);
      },
      setLimitScore: function setLimitScore(score) {
        this._limitScore = score;
        this.TotalBet.getChildByName("lab_total_bet").getComponent(cc.Label).string = (this._limitScore / 1e3).toFixed(0);
        this.TotalBet.getChildByName("lab_left_bet").getComponent(cc.Label).string = (this._limitScore / 1e3).toFixed(0);
      },
      setBetScoreText: function setBetScoreText(areaIndex) {
        var colors = [ "#0C69D5", "#D64B46", "#0C69D5", "#D64B46", "#62A255" ];
        var s1 = (this._totalScore[areaIndex] / 1e3).toFixed(0);
        var s2 = (this._myScore[areaIndex] / 1e3).toFixed(0);
        var str = "<color=#19283C>" + s1 + "</c><color=" + colors[areaIndex] + "> (" + s2 + ")</color>";
        this.BetArea[areaIndex].getChildByName("lab_bet").getComponent(cc.RichText).string = str;
      },
      clearBetScore: function clearBetScore() {
        for (var i = 0; i < AREA_NUM; i++) {
          this._totalScore[i] = 0;
          this._myScore[i] = 0;
          this.BetArea[i].getChildByName("bet_my").getChildByName("lab_bet").getComponent(cc.Label).string = 0;
          this.BetArea[i].getChildByName("bet_total").getChildByName("lab_bet").getComponent(cc.Label).string = 0;
          this.TotalBet.getChildByName("lab_left_bet").getComponent(cc.Label).string = (this._limitScore / 1e3).toFixed(0);
        }
      },
      addChipRecord: function addChipRecord(areaIndex, chipIndex) {
        var data = {
          areaIndex: areaIndex,
          chipIndex: chipIndex
        };
        this._chipRecord.push(data);
        this._repeatUsed = false;
      },
      clearChipRecord: function clearChipRecord() {
        this._chipRecord = [];
        this._repeatUsed = true;
      },
      isRepeatEnable: function isRepeatEnable() {
        return this._chipRecord.length > 0;
      },
      isRepeatUsed: function isRepeatUsed() {
        return this._repeatUsed;
      },
      setPointNum: function setPointNum(user, num) {
        user == ZHUANG ? this.labPointZ.string = num : this.labPointX.string = num;
      },
      getCardPoint: function getCardPoint(cards) {
        var num = 0;
        for (var i = 0; i < cards.length; i++) {
          var val = 15 & cards[i];
          14 == val && (val = 1);
          val >= 10 && (val = 0);
          num += val;
        }
        num %= 10;
        return num;
      },
      getUserHeadPos: function getUserHeadPos(uid) {
        var pos = this._delegate._userLayer.getUserHeadPos(uid);
        return this.convertToCurrSpace(pos);
      },
      convertToCurrSpace: function convertToCurrSpace(worldpos) {
        var visible = cc.view.getVisibleSize();
        var pos = this.node.convertToNodeSpace(worldpos);
        pos.x -= visible.width / 2;
        pos.y -= visible.height / 2;
        return pos;
      },
      getChipListByScore: function getChipListByScore(score) {
        var list = [];
        for (var i = this._chipVals.length - 1; i >= 0; i--) {
          var num = this._chipVals[i];
          var count = Math.floor(score / num);
          if (count > 0) {
            for (var j = 0; j < count; j++) list.push(num);
            score %= num;
          }
        }
        return list;
      },
      isMeHaveBet: function isMeHaveBet() {
        var betscore = 0;
        for (var i = 0; i < 5; i++) betscore += this._myScore[i];
        return betscore > 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlOption: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54af7zff91I84+6F1jzGnjq", "bjlOption");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        gray: cc.Node,
        btnSetting: cc.Button,
        btnRules: cc.Button,
        _callback: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.active = false;
        this.btnSetting.node.on("click", function() {
          _this.node.active = false;
          _this._callback("SETTING");
        }, this);
        this.btnRules.node.on("click", function() {
          _this.node.active = false;
          _this._callback("RULES");
        }, this);
        this.gray.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this.node.active = false;
        }, this);
      },
      setCallback: function setCallback(callback) {
        this._callback = callback;
      },
      display: function display() {
        this.node.active = !this.node.active;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlProtocol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0deesJA/xEN6isscVpntug", "bjlProtocol");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _delegate: null
      },
      setDelegate: function setDelegate(del) {
        this._delegate = del;
      },
      onLoad: function onLoad() {
        this.initProto();
      },
      start: function start() {
        cc.ak.util.utils.loadGameSceneFinish();
      },
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_MATCH_SUCC, function(dv) {
          var data = new proto.cmd_base_info.EnterRoomSucc();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          bundle.bjl.data.set(bundle.bjl.key.data.ENTER_ROOM_SUCC, data);
        }, this);
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_ENTER_GAME_SCENCE, "EnterRoomSucc", function(data) {});
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_ONLINE_PLAYER_NUM, "OnlinePlayerNum", function(data) {
          _this._delegate.onOnlinePlayerNum(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_USERINFO_PUSH, "UserInfo", function(data) {
          _this._delegate.onUserInfo(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_LEAVE_GAME_RESULT, "LeaveGameResult", function(data) {
          data.userId == cc.ak.mc.userMgr.uid ? cc.ak.ui.loadLobbyScence() : _this._delegate.onUserLeave(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_UPDATA_RANK_USER, "UpdataRankUser", function(data) {
          _this._delegate.onUserList(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_USER_READY_SUCCESS, "ReadySuccess", function(data) {
          _this._delegate.onUserReady(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_RESTORE_DATA, "RestoreData", function(data) {
          _this._delegate.onGameRestore(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_GAME_START, "GameStart", function(data) {
          _this._delegate.onGameStart(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_GAME_OVER, "GameOver", function(data) {
          _this._delegate.onGameOver(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_ADD_SCORE, "AddScore", function(data) {
          _this._delegate.onAddScore(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_OTHER_ADD_SCORE, "OtherAddScore", function(data) {
          _this._delegate.onAddScoreOther(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_BATCH_ADD_SCORE, "BatchAddScore", function(data) {
          _this._delegate.onAddScoreBatch(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_TAKE_BACK_ADD_SCORE, "BackAddScore", function(data) {
          _this._delegate.onSubScore(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_OPEN_CARD, "OpenCard", function(data) {
          _this._delegate.onOpenCard(data);
        });
        this.registerMsg(proto.cmd_game_bjl.SUB_CMD_GAME.SUB_EEROR_MSG, "ErrorMsg", function(data) {
          _this._delegate.onErrorMsg(data);
        });
      },
      registerMsg: function registerMsg(nSubID, tabName, callback) {
        nSubID == proto.cmd_game_bjl.SUB_CMD_GAME.SUB_USERINFO_PUSH ? cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_base_info.UserInfo();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this) : cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_game_bjl[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this);
      },
      sendLeaveGame: function sendLeaveGame() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendUserReady: function sendUserReady() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_READY;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendEnterFinish: function sendEnterFinish() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_bjl.SUB_CMD_GAME.SUB_C_ENTER_FINISH);
      },
      sendAddScoreFinish: function sendAddScoreFinish(areaType, chipID) {
        var cmd = new proto.cmd_game_bjl.RequestAddScore();
        cmd.addtype = areaType;
        cmd.addChipId = chipID;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_bjl.SUB_CMD_GAME.SUB_C_ADD_SCORE, cmd);
      },
      sendSubScoreFinish: function sendSubScoreFinish() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_bjl.SUB_CMD_GAME.SUB_C_BACK_ADD_SCORE);
      },
      sendBatchScoreFinish: function sendBatchScoreFinish(areaTypes, chipIDs) {
        var cmd = new proto.cmd_game_bjl.RequestBatchAddScore();
        cmd.adduserId = 0;
        cmd.addtype = areaTypes;
        cmd.addChipId = chipIDs;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_bjl.SUB_CMD_GAME.SUB_C_BATCH_ADD_SCORE, cmd);
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlRecordLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9562ls2c9PEpfcM6OYwmUo", "bjlRecordLayer");
    "use strict";
    var SIZE_FULL = cc.v2(59, 59);
    var SIZE_LITE = cc.v2(40, 40);
    var RoadType = {
      MainRoad: 0,
      MainEyeRoad: 1,
      SmallRoad: 2,
      SmallStrRoad: 3
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        FullPanel: cc.Node,
        LitePanel: cc.Node,
        MiniPanel: cc.Node,
        spGridFull: cc.Node,
        spGridLite: cc.Node,
        spGridMini: cc.Node,
        preRoundItem: cc.Prefab,
        btnClose: cc.Node,
        _delegate: null,
        _opened: false,
        _ret: [],
        _dui: [],
        _win: []
      },
      setDelegate: function setDelegate(del) {
        this._delegate = del;
      },
      onLoad: function onLoad() {
        var _this = this;
        this.FullPanel.active = false;
        this.LitePanel.active = false;
        this.MiniPanel.active = true;
        this.spGridMini.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this.FullPanel.active = true;
        });
        this.btnClose.on("click", function(event) {
          _this.FullPanel.active = false;
        });
        this.FullPanel.getChildByName("sp_gray").on(cc.Node.EventType.TOUCH_START, function(event) {}, this);
      },
      start: function start() {},
      clear: function clear() {
        this.spGridFull.removeAllChildren(true);
        this.spGridLite.removeAllChildren(true);
        this.spGridMini.removeAllChildren(true);
      },
      setRecordData: function setRecordData(rets, duis, wins) {
        this._ret = rets;
        this._dui = duis;
        this._win = wins;
        this.updateRoad();
      },
      addOneRecord: function addOneRecord(ret, dui, win) {
        this._ret.push(ret);
        this._dui.push(dui);
        this._win.push(win);
        this.clear();
        this.updateRoad();
      },
      clearRecord: function clearRecord() {
        this._ret = [];
        this._dui = [];
        this._win = [];
        this.clear();
      },
      updateRoad: function updateRoad() {
        var road_arr = this.getSameArray(this._ret);
        var roadex_lst = this.getRoadList(road_arr, 1);
        var small_lst = this.getRoadList(road_arr, 2);
        var smallex_lst = this.getRoadList(road_arr, 3);
        var roadex_arr = this.getSameArray(roadex_lst);
        var small_arr = this.getSameArray(small_lst);
        var smallex_arr = this.getSameArray(smallex_lst);
        this.initGridFull(this._ret, this._dui, road_arr, roadex_arr, small_arr, smallex_arr);
        this.initGridMini(this._ret, this._dui, road_arr, roadex_arr, small_arr, smallex_arr);
        this.initFullInfo();
      },
      initGridFull: function initGridFull(ret, dui, road, road_ex, small, small_ex) {
        var bgSize = this.spGridFull.getContentSize();
        var GRID_NUM = cc.v2(7, 10);
        var GRID_SIZE = cc.size(58, 58);
        var list1 = this.getCutoutRet(ret, GRID_NUM.x * GRID_NUM.y);
        var list2 = this.getCutoutRet(dui, GRID_NUM.x * GRID_NUM.y);
        var origin = cc.v2(-bgSize.width / 2 + GRID_SIZE.width / 2, bgSize.height / 2 - GRID_SIZE.height / 2);
        this.createPlate(list1, list2, origin, GRID_SIZE, GRID_NUM.y, 1, this.spGridFull);
        var GRID_NUM = cc.v2(33, 5);
        var GRID_SIZE = cc.size(33, 33);
        var list = this.getCutoutRoad(road, GRID_NUM.x);
        var origin = cc.v2(-bgSize.width / 2 + 433 + GRID_SIZE.width / 2, bgSize.height / 2 - GRID_SIZE.height / 2);
        this.createRoad(0, list, origin, GRID_SIZE, GRID_NUM.y, 1, this.spGridFull);
        var GRID_NUM = cc.v2(33, 6);
        var GRID_SIZE = cc.size(33, 33);
        var list = this.getCutoutRoad(road_ex, GRID_NUM.x);
        var origin = cc.v2(-bgSize.width / 2 + 433 + GRID_SIZE.width / 2, bgSize.height / 2 - 190 - GRID_SIZE.height / 2);
        this.createRoad(1, list, origin, GRID_SIZE, GRID_NUM.y, 1, this.spGridFull);
        var GRID_NUM = cc.v2(16, 5);
        var GRID_SIZE = cc.size(33, 33);
        var list = this.getCutoutRoad(small, GRID_NUM.x);
        var origin = cc.v2(-bgSize.width / 2 + 433 + GRID_SIZE.width / 2, bgSize.height / 2 - 415 - GRID_SIZE.height / 2);
        this.createRoad(2, list, origin, GRID_SIZE, GRID_NUM.y, 1, this.spGridFull);
        var GRID_NUM = cc.v2(16, 5);
        var GRID_SIZE = cc.size(33, 33);
        var list = this.getCutoutRoad(small_ex, GRID_NUM.x);
        var origin = cc.v2(-bgSize.width / 2 + 996 + GRID_SIZE.width / 2, bgSize.height / 2 - 415 - GRID_SIZE.height / 2);
        this.createRoad(3, list, origin, GRID_SIZE, GRID_NUM.y, 1, this.spGridFull);
      },
      initGridLite: function initGridLite(ret, dui, road, road_ex, small, small_ex) {
        var bgSize = this.spGridLite.getContentSize();
        var list1 = this.getCutoutRet(ret, 36);
        var list2 = this.getCutoutRet(dui, 36);
        var origin = cc.v2(-bgSize.width / 2 + SIZE_LITE.x / 2, bgSize.height / 2 - 40 - SIZE_LITE.y / 2);
        this.createPlate(list1, list2, origin, SIZE_LITE, .8, this.spGridLite);
        var list = this.getCutoutRoad(road, 22);
        var origin = cc.v2(-bgSize.width / 2 + 6 * SIZE_LITE.x + SIZE_LITE.x / 4, bgSize.height / 2 - 40 - SIZE_LITE.y / 4);
        this.createRoad(0, list, origin, cc.size(SIZE_LITE.x / 2, SIZE_LITE.x / 2), .7, this.spGridLite);
        var list = this.getCutoutRoad(road_ex, 22);
        var origin = cc.v2(-bgSize.width / 2 + 6 * SIZE_LITE.x + SIZE_LITE.x / 8, bgSize.height / 2 - 40 - 3 * SIZE_LITE.y - SIZE_LITE.y / 8);
        this.createRoad(1, list, origin, cc.size(SIZE_LITE.x / 4, SIZE_LITE.x / 4), .35, this.spGridLite);
        var list = this.getCutoutRoad(small, 11);
        var origin = cc.v2(-bgSize.width / 2 + 6 * SIZE_LITE.x + SIZE_LITE.x / 8, bgSize.height / 2 - 40 - 3 * SIZE_LITE.y - SIZE_LITE.y / 2 * 3 - SIZE_LITE.y / 8);
        this.createRoad(2, list, origin, cc.size(SIZE_LITE.x / 4, SIZE_LITE.x / 4), .35, this.spGridLite);
        var list = this.getCutoutRoad(small_ex, 11);
        var origin = cc.v2(-bgSize.width / 2 + 6 * SIZE_LITE.x + SIZE_LITE.x / 2 * 11 + SIZE_LITE.x / 8, bgSize.height / 2 - 40 - 3 * SIZE_LITE.y - SIZE_LITE.y / 2 * 3 - SIZE_LITE.y / 8);
        this.createRoad(3, list, origin, cc.size(SIZE_LITE.x / 4, SIZE_LITE.x / 4), .35, this.spGridLite);
      },
      initGridMini: function initGridMini(ret, dui, road, road_ex, small, small_ex) {
        var bgSize = this.spGridMini.getContentSize();
        var GRID_NUM = cc.v2(5, 3);
        var GRID_SIZE = cc.size(40, 40);
        var list1 = this.getCutoutRet(ret, GRID_NUM.x * GRID_NUM.y);
        var list2 = this.getCutoutRet(dui, GRID_NUM.x * GRID_NUM.y);
        var origin = cc.v2(-bgSize.width / 2 + 10 + GRID_SIZE.width / 2, bgSize.height / 2 - 20 - GRID_SIZE.height / 2);
        this.createPlate(list1, list2, origin, GRID_SIZE, GRID_NUM.y, .6, this.spGridMini);
      },
      initFullInfo: function initFullInfo() {
        var lab = this.FullPanel.getChildByName("game_count").getChildByName("lab_num");
        lab.getComponent(cc.Label).string = this._ret.length;
        var lab = this.FullPanel.getChildByName("zhuang_count").getChildByName("lab_num");
        lab.getComponent(cc.Label).string = this.getRetCount(1);
        var lab = this.FullPanel.getChildByName("xian_count").getChildByName("lab_num");
        lab.getComponent(cc.Label).string = this.getRetCount(2);
        var lab = this.FullPanel.getChildByName("he_count").getChildByName("lab_num");
        lab.getComponent(cc.Label).string = this.getRetCount(0);
        var lab = this.FullPanel.getChildByName("zdui_count").getChildByName("lab_num");
        lab.getComponent(cc.Label).string = this.getDuiCount(1);
        var lab = this.FullPanel.getChildByName("xdui_count").getChildByName("lab_num");
        lab.getComponent(cc.Label).string = this.getDuiCount(2);
        var lab = this.FullPanel.getChildByName("road_zhuang").getChildByName("lab_num");
        var arr = this.getNextMaybeRoad(1);
        for (var i = 0; i < arr.length; i++) this.createRoundItem(i + 1, arr[i], 0, cc.v2(70 * i, 0), 1, lab);
        var lab = this.FullPanel.getChildByName("road_xian").getChildByName("lab_num");
        var arr = this.getNextMaybeRoad(2);
        for (var i = 0; i < arr.length; i++) this.createRoundItem(i + 1, arr[i], 0, cc.v2(70 * i, 0), 1, lab);
      },
      initTotalLabels: function initTotalLabels(node, isFull) {
        var lab = node.getChildByName("lab_zhuang").getComponent(cc.Label);
        lab.string = "\u5e84\uff1a" + this.getRetCount(1);
        var lab = node.getChildByName("lab_xian").getComponent(cc.Label);
        lab.string = "\u95f2\uff1a" + this.getRetCount(2);
        var lab = node.getChildByName("lab_he").getComponent(cc.Label);
        lab.string = "\u548c\uff1a" + this.getRetCount(0);
        var lab = node.getChildByName("lab_zhuang_dui").getComponent(cc.Label);
        lab.string = "\u5e84\u5bf9\uff1a" + this.getDuiCount(1);
        var lab = node.getChildByName("lab_xian_dui").getComponent(cc.Label);
        lab.string = "\u95f2\u5bf9\uff1a" + this.getDuiCount(2);
        var lab = node.getChildByName("lab_count").getComponent(cc.Label);
        lab.string = "\u5c40\u6570\uff1a" + this._ret.length;
        if (isFull) {
          var lab = node.getChildByName("lab_zhuang_jy").getComponent(cc.Label);
          lab.string = "\u5e84\u5373\u8d62\uff1a" + this.getWinCount(1);
          var lab = node.getChildByName("lab_xian_jy").getComponent(cc.Label);
          lab.string = "\u95f2\u5373\u8d62\uff1a" + this.getWinCount(1);
        }
        var lab = node.getChildByName("lab_zhuang_next");
        var arr = this.getNextMaybeRoad(1);
        for (var i = 0; i < arr.length; i++) this.createRoundItem(i + 1, arr[i], 0, cc.v2((isFull ? 150 : 100) + 30 * i, 0), .5, lab);
        var lab = node.getChildByName("lab_xian_next");
        var arr = this.getNextMaybeRoad(2);
        for (var i = 0; i < arr.length; i++) this.createRoundItem(i + 1, arr[i], 0, cc.v2((isFull ? 150 : 100) + 30 * i, 0), .5, lab);
      },
      createPlate: function createPlate(ret, dui, origin, size, maxh, scale, parent) {
        for (var i = 0; i < ret.length; i++) {
          var x = origin.x + size.width * Math.floor(i / maxh);
          var y = origin.y - size.height * Math.floor(i % maxh);
          var item = cc.instantiate(this.preRoundItem);
          item.getComponent("bjlRoundItem").setResult(ret[i], dui[i]);
          item.position = cc.v2(x, y);
          item.scale = scale;
          parent.addChild(item);
        }
      },
      createRoad: function createRoad(type, array, origin, size, maxh, scale, parent) {
        for (var i = 0; i < array.length; i++) {
          var idx = 0;
          for (var j = 0; j < array[i].length; j++) {
            var x = origin.x + size.width * i;
            var y = origin.y - size.height * idx;
            if (idx > maxh - 1) {
              x = origin.x + size.width * (i + idx - (maxh - 1));
              y = origin.y - size.height * (maxh - 1);
            }
            var num = this.getNextZeroNum(array[i], j + 1);
            this.createRoundItem(type, array[i][j], num, cc.v2(x, y), scale, parent);
            j += num;
            idx++;
          }
        }
      },
      createRoundItem: function createRoundItem(type, val, num, pos, scale, parent) {
        var item = cc.instantiate(this.preRoundItem);
        item.position = pos;
        item.scale = scale;
        parent.addChild(item);
        1 == type ? item.getComponent("bjlRoundItem").setCircel(val, 0) : 2 == type ? item.getComponent("bjlRoundItem").setRound(val) : 3 == type ? item.getComponent("bjlRoundItem").setBlock(val) : item.getComponent("bjlRoundItem").setCircel(val, num);
      },
      getSameArray: function getSameArray(vals) {
        var list = [];
        for (var i = 0; i < vals.length; ) {
          var arr = [ vals[i] ];
          for (var j = i + 1; j < vals.length; j++) {
            if (vals[i] != vals[j] && 0 != vals[j]) break;
            arr.push(vals[j]);
          }
          list.push(arr);
          i += arr.length;
        }
        return list;
      },
      getRoadList: function getRoadList(arrs, start) {
        var vals = this.filterZeroForRoad(arrs);
        var list = [];
        var x = start;
        if (vals.length <= start) return list;
        void 0 == vals[start][1] && (x = start + 1);
        for (var i = x; i < vals.length; i++) {
          var num = 0;
          for (var j = i == start ? 1 : 0; j < vals[i].length; j++) if (0 == j) vals[i - 1].length == vals[i - 1 - start].length ? list.push(1) : list.push(2); else if (null != vals[i - start][j]) list.push(1); else {
            num++;
            num > 1 ? list.push(1) : list.push(2);
          }
        }
        return list;
      },
      getNextZeroNum: function getNextZeroNum(list, start) {
        var num = 0;
        for (var i = start; i < list.length; i++) {
          if (0 !== list[i]) break;
          num++;
        }
        return num;
      },
      filterZeroForRoad: function filterZeroForRoad(list) {
        var arrs = [];
        for (var i = 0; i < list.length; i++) {
          var temp = [];
          for (var j = list[i].length - 1; j >= 0; j--) 0 != list[i][j] && temp.push(list[i][j]);
          arrs[i] = temp;
        }
        return arrs;
      },
      getCutoutRet: function getCutoutRet(ret, maxn) {
        var num = 0;
        if (!(ret.length > maxn)) return ret;
        num = ret.length - maxn;
        var arrs = [];
        for (var i = num; i < ret.length; i++) arrs.push(ret[i]);
        return arrs;
      },
      getCutoutRoad: function getCutoutRoad(list, maxn) {
        var num = 0;
        if (!(list.length > maxn)) return list;
        num = list.length - maxn;
        var arrs = [];
        for (var i = num; i < list.length; i++) arrs.push(list[i]);
        return arrs;
      },
      getRetCount: function getRetCount(type) {
        var count = 0;
        for (var i = 0; i < this._ret.length; i++) this._ret[i] == type && count++;
        return count;
      },
      getDuiCount: function getDuiCount(type) {
        var count = 0;
        for (var i = 0; i < this._dui.length; i++) this._dui[i] != type && 3 != this._dui[i] || count++;
        return count;
      },
      getWinCount: function getWinCount(type) {
        var count = 0;
        for (var i = 0; i < this._win.length; i++) this._win[i] == type && count++;
        return count;
      },
      getNextMaybeRoad: function getNextMaybeRoad(type) {
        var arr = [];
        this._ret.push(type);
        var road = this.getSameArray(this._ret);
        for (var i = 1; i <= 3; i++) {
          var list = this.getRoadList(road, i);
          arr.push(list[list.length - 1]);
        }
        this._ret.pop();
        return arr;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlRoundItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cae1ePy3JhJorhwjsN9SW+p", "bjlRoundItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Result: cc.Node,
        Circel: cc.Node,
        Round: cc.Node,
        Block: cc.Node,
        spResZhuang: cc.Sprite,
        spResXian: cc.Sprite,
        spResHe: cc.Sprite,
        spResZhuangDui: cc.Sprite,
        spResXianDui: cc.Sprite,
        spCircelRed: cc.Sprite,
        spCircelBlue: cc.Sprite,
        labCircelNum: cc.Label,
        spRoundRed: cc.Sprite,
        spRoundBlue: cc.Sprite,
        spBlockRed: cc.Sprite,
        spBlockBlue: cc.Sprite
      },
      onLoad: function onLoad() {},
      start: function start() {},
      setResult: function setResult(ret, dui) {
        this.Result.active = true;
        this.spResZhuang.node.active = false;
        this.spResXian.node.active = false;
        this.spResHe.node.active = false;
        this.spResZhuangDui.node.active = false;
        this.spResXianDui.node.active = false;
        0 === ret ? this.spResHe.node.active = true : 1 === ret ? this.spResZhuang.node.active = true : 2 === ret && (this.spResXian.node.active = true);
        if (1 === dui) this.spResZhuangDui.node.active = true; else if (2 === dui) this.spResXianDui.node.active = true; else if (3 === dui) {
          this.spResZhuangDui.node.active = true;
          this.spResXianDui.node.active = true;
        }
      },
      setCircel: function setCircel(val, num) {
        this.Circel.active = true;
        this.spCircelRed.node.active = false;
        this.spCircelBlue.node.active = false;
        this.labCircelNum.node.active = false;
        1 === val ? this.spCircelRed.node.active = true : 2 === val && (this.spCircelBlue.node.active = true);
        if (num > 0) {
          this.labCircelNum.node.active = true;
          this.labCircelNum.string = num;
        }
      },
      setRound: function setRound(val) {
        this.Round.active = true;
        this.spRoundRed.node.active = false;
        this.spRoundBlue.node.active = false;
        1 === val ? this.spRoundRed.node.active = true : 2 === val && (this.spRoundBlue.node.active = true);
      },
      setBlock: function setBlock(val) {
        this.Block.active = true;
        this.spBlockRed.node.active = false;
        this.spBlockBlue.node.active = false;
        1 === val ? this.spBlockRed.node.active = true : 2 === val && (this.spBlockBlue.node.active = true);
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlRuleBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "798edXGoHRFR6saL9zrEfYg", "bjlRuleBoard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClose: cc.Button
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  bjlSetupBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db2ae4NmbFLW5YxxFoqVSoP", "bjlSetupBoard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        SliderMusic: cc.Slider,
        SliderEffect: cc.Slider,
        btnClose: cc.Button,
        spGray: cc.Node,
        spBoard: cc.Sprite
      },
      onLoad: function onLoad() {
        var _this = this;
        this._spEffectBar = this.SliderEffect.node.getChildByName("sp_bar");
        this._spMusicBar = this.SliderMusic.node.getChildByName("sp_bar");
        cc.ak.util.audioMgr.getSFXVolume() ? this.SliderEffect.progress = cc.ak.util.audioMgr.getSFXVolume() : this.SliderEffect.progress = .5;
        cc.ak.util.audioMgr.getBGMVolume() ? this.SliderMusic.progress = cc.ak.util.audioMgr.getBGMVolume() : this.SliderMusic.progress = .5;
        this._spEffectBar.width = 566 * this.SliderEffect.progress;
        this._spMusicBar.width = 566 * this.SliderMusic.progress;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
      },
      start: function start() {},
      onEffectSliderEvent: function onEffectSliderEvent(sender, eventType) {
        this._spEffectBar.width = 566 * sender.progress;
        cc.ak.util.audioMgr.setSFXVolume(sender.progress);
      },
      onMusicSliderEvent: function onMusicSliderEvent(sender, eventType) {
        this._spMusicBar.width = 566 * sender.progress;
        cc.ak.util.audioMgr.setBGMVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlSpliceButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db9bdPGZntEo5qv50e+5OCc", "bjlSpliceButton");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Images: [ cc.Node ],
        _callback: null,
        _data: null,
        _target: null
      },
      onLoad: function onLoad() {
        var _this = this;
        for (var i = 0; i < this.Images.length; i++) this.Images[i].on(cc.Node.EventType.TOUCH_START, function(event) {
          _this._callback && _this._callback(_this._target, _this._data);
        }, this);
      },
      start: function start() {},
      init: function init(callback, target, data) {
        this._callback = callback;
        this._data = data;
        this._target = target;
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlTimer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb2e2kUOLlEwIinOi3Q9q0p", "bjlTimer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Progress: cc.ProgressBar,
        labNum: cc.Label,
        _delegate: null,
        _audio: null,
        _start: false,
        _total: 0,
        _time: 0,
        _curr: 0,
        _callback: null,
        _clock: 0
      },
      onLoad: function onLoad() {
        this.clear();
      },
      init: function init(callback, delegate, audio) {
        this._audio = audio;
        this._delegate = delegate;
        this._callback = callback;
      },
      update: function update(dt) {
        if (true == this._start) {
          this._time -= dt;
          if (this._time < 0) {
            this.clear();
            this._callback && this._callback(this._delegate, 0);
            return;
          }
          var time = Math.floor(this._time);
          this.labNum.string = time.toString();
          this.Progress.progress = this._time / this._total;
          if (this._curr != time) {
            this._curr = time;
            this._callback && this._callback(this._delegate, this._curr);
            5 == this._curr && (this.labNum.node.color = cc.Color.RED);
            this._curr <= 5 && this._audio.playSFX("timer");
            0 == this._curr && this._audio.playSFX("timer_over");
          }
        }
      },
      clear: function clear() {
        this._start = false;
        this._total = 0;
        this._time = 0;
        this._curr = 0;
        this.labNum.string = 0;
        this.labNum.node.color = cc.Color.WHITE;
        this.Progress.progress = 0;
        this.node.active = false;
      },
      startTimer: function startTimer(time) {
        this._start = true;
        this._total = time;
        this._time = time;
        this._curr = time;
        this.node.active = true;
      },
      stopTimer: function stopTimer() {
        this.clear();
      }
    });
    cc._RF.pop();
  }, {} ],
  bjlUserLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4edf5kr+QhJAa0p9wiIjl/U", "bjlUserLayer");
    "use strict";
    var USER_NUM = 5;
    cc.Class({
      extends: cc.Component,
      properties: {
        HeadList: [ cc.Node ],
        HeadMy: cc.Node,
        HeadAll: cc.Node,
        labOnline: cc.Label,
        _delegate: null,
        _userList: [],
        _myScore: 0
      },
      setDelegate: function setDelegate(del) {
        this._delegate = del;
      },
      onLoad: function onLoad() {
        var _this = this;
        for (var i = 0; i < USER_NUM; i++) this.HeadList[i].active = false;
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          var num = 0;
          for (var i = 0; i < data.Coins.length; i++) num += data.Coins[i].Amount;
          _this.addScoreNum(cc.ak.mc.userMgr.uid, num);
          var msg = "\u8d26\u6237\u8d44\u91d1\u589e\u52a0" + (num / 1e3).toFixed(2) + "\u5143";
          cc.ak.ui.alert({
            text: msg,
            btns: [ "\u786e\u5b9a" ]
          });
        });
      },
      start: function start() {},
      updateUserInfo: function updateUserInfo(userinfo) {},
      deleteUserInfo: function deleteUserInfo(uid) {},
      updateMyInfo: function updateMyInfo(userinfo) {
        if (userinfo.Uid == cc.ak.mc.userMgr.uid) {
          if (userinfo.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL) {
            cc.ak.event.off(cc.ak.key.event.COIN_CHANGE);
            cc.ak.ui.loadLobbyScence();
          }
          this._myScore = userinfo.AccountA + userinfo.AccountB;
          var name = this.HeadMy.getChildByName("lab_name").getComponent(cc.Label);
          var score = this.HeadMy.getChildByName("lab_score").getComponent(cc.Label);
          var head = this.HeadMy.getChildByName("headAnthologyItem").getComponent("headAnthologyItem");
          name.string = userinfo.NickName;
          score.string = (this._myScore / 1e3).toFixed(2);
          head.setAvatar(userinfo.HeadImgId ? userinfo.HeadImgId : 0);
        }
      },
      updateUserList: function updateUserList(userList) {
        if (null == userList || 0 == userList.length) return;
        this._userList = [];
        for (var i = 0; i < USER_NUM; i++) {
          var userinfo = userList[i];
          if (userinfo) {
            this._userList[i] = userinfo;
            this.HeadList[i].active = true;
            var name = this.HeadList[i].getChildByName("lab_name").getComponent(cc.Label);
            var score = this.HeadList[i].getChildByName("lab_score").getComponent(cc.Label);
            var head = this.HeadList[i].getChildByName("headAnthologyItem").getComponent("headAnthologyItem");
            name.string = userinfo.NickName;
            score.string = ((userinfo.AccountA + userinfo.AccountB) / 1e3).toFixed(2);
            head.setAvatar(userinfo.HeadImgId ? userinfo.HeadImgId : 0);
          } else this.HeadList[i].active = false;
        }
      },
      getUserHeadPos: function getUserHeadPos(uid) {
        if (uid == cc.ak.mc.userMgr.uid) return this.HeadMy.parent.convertToWorldSpace(cc.v2(0, 0));
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) return this.HeadList[i].parent.convertToWorldSpace(cc.v2(0, 0));
        return this.HeadAll.convertToWorldSpace(cc.v2(0, 0));
      },
      showAddScore: function showAddScore(uid, score) {
        this.addScoreNum(uid, score);
        if (0 == score) return;
        var lab = null;
        if (uid == cc.ak.mc.userMgr.uid) lab = this.HeadMy.getChildByName("lab_add_score"); else if (uid > 0) {
          for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) {
            lab = this.HeadList[i].getChildByName("lab_add_score");
            break;
          }
        } else lab = this.HeadAll.getChildByName("lab_add_score");
        if (lab) {
          var strscore = (score / 1e3).toFixed(2);
          score > 0 && (strscore = "+" + strscore);
          var pos = lab.position;
          lab.active = true;
          lab.getComponent(cc.Label).string = strscore;
          lab.runAction(cc.sequence(cc.moveTo(2, cc.v2(pos.x, pos.y + 30)), cc.fadeOut(2), cc.callFunc(function() {
            lab.active = false;
            lab.position = pos;
            lab.opacity = 255;
          }, this)));
        }
      },
      setOnlineNum: function setOnlineNum(num) {
        var lab = this.HeadAll.getChildByName("lab_online").getComponent(cc.Label);
        lab.string = num;
      },
      addScoreNum: function addScoreNum(uid, score) {
        if (uid == cc.ak.mc.userMgr.uid) {
          this._myScore += score;
          var lab = this.HeadMy.getChildByName("lab_score").getComponent(cc.Label);
          lab.string = (this._myScore / 1e3).toFixed(2);
        } else for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) {
          this._userList[i].AccountA += score;
          var lab = this.HeadList[i].getChildByName("lab_score").getComponent(cc.Label);
          lab.string = ((this._userList[i].AccountA + this._userList[i].AccountB) / 1e3).toFixed(2);
          break;
        }
      },
      setHeadShake: function setHeadShake(uid) {
        if (uid == cc.ak.mc.userMgr.uid) return;
        var idx = -1;
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) {
          idx = i;
          break;
        }
        if (idx >= 0) {
          this.HeadList[idx].stopAllActions();
          this.HeadList[idx].runAction(cc.sequence(cc.moveTo(.07, cc.v2(5, 0)), cc.moveTo(.07, cc.v2(-5, 0)), cc.moveTo(.07, cc.v2(5, 0)), cc.moveTo(.07, cc.v2(0, 0))));
        }
      },
      getUserInfo: function getUserInfo(uid) {
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) return this._userList[i];
        return null;
      },
      getUserIndex: function getUserIndex(uid) {
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) return i;
        return -1;
      },
      getUserHead: function getUserHead(uid) {
        var index = this.getUserIndex(uid);
        if (index > 0 && index < USER_NUM) return this.UserList[index];
        return null;
      },
      setUserHead: function setUserHead(chairID, bool) {
        var index = this._delegate.getIndexByChairID(chairID);
        this.HeadList[index].active = bool;
        var userinfo = this.getUserInfo(chairID);
        if (userinfo) {
          this._labNames[index].string = userinfo.NickName;
          this._labScores[index].string = userinfo.AccountA + userinfo.AccountB;
        }
      },
      setUserReady: function setUserReady(chairID, bool) {},
      isUserExist: function isUserExist(uid) {
        if (uid == cc.ak.mc.userMgr.uid) return true;
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) return true;
        return false;
      },
      checkScore: function checkScore(subscore) {
        return this._myScore - subscore >= 0;
      },
      getGenderByChairID: function getGenderByChairID(chairID) {
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].ChairID == chairID) return this._userList[i].Sex;
        return 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  cmd_game_bjl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "238cecbWEBAPIa5C68eM+dI", "cmd_game_bjl");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_bjl = {};
    proto.cmd_game_bjl.__cfg = {};
    (function(cfg) {
      cfg.UserInfo = {
        1: {
          na: "Uid",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        },
        3: {
          na: "Status",
          ty: "int"
        },
        4: {
          na: "Headimg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "Sex",
          ty: "int"
        },
        6: {
          na: "NickName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        7: {
          na: "IP",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        8: {
          na: "Score",
          ty: "int"
        },
        9: {
          na: "CardCount",
          ty: "int"
        },
        10: {
          na: "Gold",
          ty: "int"
        },
        11: {
          na: "IsLook",
          ty: "int"
        },
        12: {
          na: "Longitude",
          ty: "int"
        },
        13: {
          na: "Latitude",
          ty: "int"
        },
        14: {
          na: "Signature",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        15: {
          na: "TrustStatu",
          ty: "int"
        },
        16: {
          na: "WinAmount",
          ty: "int"
        },
        17: {
          na: "UserPhone",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        18: {
          na: "LastTimeLogin",
          ty: "int"
        },
        19: {
          na: "AccountA",
          ty: "int"
        },
        20: {
          na: "AccountB",
          ty: "int"
        },
        21: {
          na: "Leavel",
          ty: "int"
        },
        22: {
          na: "UserType",
          ty: "int"
        },
        23: {
          na: "HeadImgId",
          ty: "int"
        }
      };
      cfg.TableRule = {
        0: {
          na: "BaseRule",
          ty: "byte",
          ar: 1
        },
        1: {
          na: "CardNumber",
          ty: "int",
          ar: 1
        }
      };
      cfg.AddType = {
        1: {
          na: "typeZhuangdui",
          ty: "int"
        },
        2: {
          na: "typeXiandui",
          ty: "int"
        },
        3: {
          na: "typeZhuang",
          ty: "int"
        },
        4: {
          na: "typeXian",
          ty: "int"
        },
        5: {
          na: "typeHe",
          ty: "int"
        }
      };
      cfg.TouBao = {
        1: {
          na: "HandCard",
          ty: "byte",
          ar: 1
        }
      };
      cfg.History = {
        1: {
          na: "typewin",
          ty: "int",
          ar: 1
        },
        2: {
          na: "typedui",
          ty: "int",
          ar: 1
        },
        3: {
          na: "jiying",
          ty: "int",
          ar: 1
        }
      };
      cfg.AddChouma = {
        0: {
          na: "chouma",
          ty: "int",
          ar: 1
        }
      };
      cfg.EnterRoomSucc = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "PlayCfg",
          ty: "TableRule"
        },
        3: {
          na: "RuleDesc",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "GPSDistance",
          ty: "int"
        }
      };
      cfg.GameStart = {
        1: {
          na: "bet",
          ty: "int"
        },
        2: {
          na: "timeleft",
          ty: "int"
        }
      };
      cfg.AddScore = {
        1: {
          na: "adduserId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int"
        },
        3: {
          na: "addChipId",
          ty: "int"
        }
      };
      cfg.BatchAddScore = {
        1: {
          na: "adduserId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int",
          ar: 1
        },
        3: {
          na: "addChipId",
          ty: "int",
          ar: 1
        }
      };
      cfg.OtherAddScore = {
        1: {
          na: "addscore",
          ty: "int",
          ar: 1
        }
      };
      cfg.OpenCard = {
        1: {
          na: "zhuangCard",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "xianCard",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "zhuangBuCard",
          ty: "byte"
        },
        4: {
          na: "xianBuCard",
          ty: "byte"
        },
        5: {
          na: "zhuangPoint",
          ty: "int"
        },
        6: {
          na: "xianPoint",
          ty: "int"
        },
        7: {
          na: "jiying",
          ty: "int"
        },
        8: {
          na: "typezhuangdui",
          ty: "int"
        },
        9: {
          na: "typexiandui",
          ty: "int"
        },
        10: {
          na: "timeleft",
          ty: "int"
        }
      };
      cfg.BackAddScore = {
        1: {
          na: "backUserId",
          ty: "int"
        },
        2: {
          na: "backScore",
          ty: "int",
          ar: 1
        }
      };
      cfg.RestoreData = {
        1: {
          na: "conenctType",
          ty: "int"
        },
        2: {
          na: "connectChairId",
          ty: "int"
        },
        3: {
          na: "bet",
          ty: "int"
        },
        4: {
          na: "gameStage",
          ty: "int"
        },
        5: {
          na: "totalScore",
          ty: "int"
        },
        6: {
          na: "tableScore",
          ty: "int"
        },
        8: {
          na: "lefttime",
          ty: "int"
        },
        9: {
          na: "maxadd",
          ty: "AddType"
        },
        10: {
          na: "selfadd",
          ty: "AddType"
        },
        11: {
          na: "addAllScore",
          ty: "AddType"
        },
        12: {
          na: "chouma",
          ty: "int",
          ar: 1
        },
        13: {
          na: "history",
          ty: "History"
        },
        14: {
          na: "zhuangcard",
          ty: "byte",
          ar: 1
        },
        15: {
          na: "xiancard",
          ty: "byte",
          ar: 1
        },
        16: {
          na: "addchouma",
          ty: "AddChouma",
          ar: 1
        },
        17: {
          na: "personmaxadd",
          ty: "int"
        }
      };
      cfg.GameOver = {
        1: {
          na: "gameScore",
          ty: "int"
        },
        2: {
          na: "typezhuangdui",
          ty: "int"
        },
        3: {
          na: "typexiandui",
          ty: "int"
        },
        4: {
          na: "wintype",
          ty: "int"
        },
        5: {
          na: "zhuangcard",
          ty: "byte",
          ar: 1
        },
        6: {
          na: "xiancard",
          ty: "byte",
          ar: 1
        },
        7: {
          na: "timeleft",
          ty: "int"
        },
        8: {
          na: "jiying",
          ty: "int"
        },
        9: {
          na: "isclear",
          ty: "int"
        },
        10: {
          na: "rankUserId",
          ty: "int",
          ar: 1
        },
        11: {
          na: "rankScore",
          ty: "int",
          ar: 1
        }
      };
      cfg.LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.OnlinePlayerNum = {
        1: {
          na: "onlinenum",
          ty: "int"
        }
      };
      cfg.UpdataRankUser = {
        1: {
          na: "userinfo",
          ty: "UserInfo",
          ar: 1
        }
      };
      cfg.ErrorMsg = {
        1: {
          na: "errortype",
          ty: "int"
        },
        2: {
          na: "errorstr",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.RequestAddScore = {
        1: {
          na: "addtype",
          ty: "int"
        },
        2: {
          na: "addChipId",
          ty: "int"
        }
      };
      cfg.RequestBatchAddScore = {
        1: {
          na: "adduserId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int",
          ar: 1
        },
        3: {
          na: "addChipId",
          ty: "int",
          ar: 1
        }
      };
    })(proto.cmd_game_bjl.__cfg);
    proto.cmd_game_bjl.UserInfo = function() {
      this.__className = "proto.cmd_game_bjl.UserInfo";
      this.Uid = 0;
      this.ChairID = 0;
      this.Status = 0;
      this.Headimg = "";
      this.Sex = 0;
      this.NickName = "";
      this.IP = "";
      this.Score = 0;
      this.CardCount = 0;
      this.Gold = 0;
      this.IsLook = 0;
      this.Longitude = 0;
      this.Latitude = 0;
      this.Signature = "";
      this.TrustStatu = 0;
      this.WinAmount = 0;
      this.UserPhone = "";
      this.LastTimeLogin = 0;
      this.AccountA = 0;
      this.AccountB = 0;
      this.Leavel = 0;
      this.UserType = 0;
      this.HeadImgId = 0;
    };
    proto.cmd_game_bjl.TableRule = function() {
      this.__className = "proto.cmd_game_bjl.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
    };
    proto.cmd_game_bjl.AddType = function() {
      this.__className = "proto.cmd_game_bjl.AddType";
      this.typeZhuangdui = 0;
      this.typeXiandui = 0;
      this.typeZhuang = 0;
      this.typeXian = 0;
      this.typeHe = 0;
    };
    proto.cmd_game_bjl.TouBao = function() {
      this.__className = "proto.cmd_game_bjl.TouBao";
      this.HandCard = null;
    };
    proto.cmd_game_bjl.History = function() {
      this.__className = "proto.cmd_game_bjl.History";
      this.typewin = null;
      this.typedui = null;
      this.jiying = null;
    };
    proto.cmd_game_bjl.AddChouma = function() {
      this.__className = "proto.cmd_game_bjl.AddChouma";
      this.chouma = null;
    };
    proto.cmd_game_bjl.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_bjl.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_bjl.GameStart = function() {
      this.__className = "proto.cmd_game_bjl.GameStart";
      this.bet = 0;
      this.timeleft = 0;
    };
    proto.cmd_game_bjl.AddScore = function() {
      this.__className = "proto.cmd_game_bjl.AddScore";
      this.adduserId = 0;
      this.addtype = 0;
      this.addChipId = 0;
    };
    proto.cmd_game_bjl.BatchAddScore = function() {
      this.__className = "proto.cmd_game_bjl.BatchAddScore";
      this.adduserId = 0;
      this.addtype = null;
      this.addChipId = null;
    };
    proto.cmd_game_bjl.OtherAddScore = function() {
      this.__className = "proto.cmd_game_bjl.OtherAddScore";
      this.addscore = null;
    };
    proto.cmd_game_bjl.OpenCard = function() {
      this.__className = "proto.cmd_game_bjl.OpenCard";
      this.zhuangCard = null;
      this.xianCard = null;
      this.zhuangBuCard = 0;
      this.xianBuCard = 0;
      this.zhuangPoint = 0;
      this.xianPoint = 0;
      this.jiying = 0;
      this.typezhuangdui = 0;
      this.typexiandui = 0;
      this.timeleft = 0;
    };
    proto.cmd_game_bjl.BackAddScore = function() {
      this.__className = "proto.cmd_game_bjl.BackAddScore";
      this.backUserId = 0;
      this.backScore = null;
    };
    proto.cmd_game_bjl.RestoreData = function() {
      this.__className = "proto.cmd_game_bjl.RestoreData";
      this.conenctType = 0;
      this.connectChairId = 0;
      this.bet = 0;
      this.gameStage = 0;
      this.totalScore = 0;
      this.tableScore = 0;
      this.lefttime = 0;
      this.maxadd = null;
      this.selfadd = null;
      this.addAllScore = null;
      this.chouma = null;
      this.history = null;
      this.zhuangcard = null;
      this.xiancard = null;
      this.addchouma = null;
      this.personmaxadd = 0;
    };
    proto.cmd_game_bjl.GameOver = function() {
      this.__className = "proto.cmd_game_bjl.GameOver";
      this.gameScore = 0;
      this.typezhuangdui = 0;
      this.typexiandui = 0;
      this.wintype = 0;
      this.zhuangcard = null;
      this.xiancard = null;
      this.timeleft = 0;
      this.jiying = 0;
      this.isclear = 0;
      this.rankUserId = null;
      this.rankScore = null;
    };
    proto.cmd_game_bjl.LeaveGameResult = function() {
      this.__className = "proto.cmd_game_bjl.LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_bjl.OnlinePlayerNum = function() {
      this.__className = "proto.cmd_game_bjl.OnlinePlayerNum";
      this.onlinenum = 0;
    };
    proto.cmd_game_bjl.UpdataRankUser = function() {
      this.__className = "proto.cmd_game_bjl.UpdataRankUser";
      this.userinfo = null;
    };
    proto.cmd_game_bjl.ErrorMsg = function() {
      this.__className = "proto.cmd_game_bjl.ErrorMsg";
      this.errortype = 0;
      this.errorstr = "";
    };
    proto.cmd_game_bjl.RequestAddScore = function() {
      this.__className = "proto.cmd_game_bjl.RequestAddScore";
      this.addtype = 0;
      this.addChipId = 0;
    };
    proto.cmd_game_bjl.RequestBatchAddScore = function() {
      this.__className = "proto.cmd_game_bjl.RequestBatchAddScore";
      this.adduserId = 0;
      this.addtype = null;
      this.addChipId = null;
    };
    proto.cmd_game_bjl.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_ENTER_GAME_SCENCE: 5,
      SUB_GAME_START: 6,
      SUB_ADD_SCORE: 7,
      SUB_OTHER_ADD_SCORE: 8,
      SUB_BATCH_ADD_SCORE: 9,
      SUB_OPEN_CARD: 10,
      SUB_TAKE_BACK_ADD_SCORE: 11,
      SUB_RESTORE_DATA: 12,
      SUB_GAME_OVER: 13,
      SUB_LEAVE_GAME_RESULT: 14,
      SUB_ONLINE_PLAYER_NUM: 15,
      SUB_UPDATA_RANK_USER: 16,
      SUB_EEROR_MSG: 17,
      SUB_C_ADD_SCORE: 31,
      SUB_C_BATCH_ADD_SCORE: 32,
      SUB_C_BACK_ADD_SCORE: 33,
      SUB_C_LEAVE_GAME_SCENE: 34,
      SUB_C_ENTER_FINISH: 35
    };
    proto.cmd_game_bjl.TABLE_DISMISSION_STATUS = {
      DISMISSION_STATUS_AGREE: 1,
      DISMISSION_STATUS_DISAGREE: 2
    };
    proto.cmd_game_bjl.TABLE_RULE_ID = {
      RULE_COUNT: 19,
      RULE_PLAY_COIN_TYPE: 101,
      RULE_DI_ZHU: 102,
      RULE_RU_CHANG: 103,
      RULE_LI_CHANG: 104,
      RULE_PAY_COIN_TYPE: 105,
      RULE_PAY_COIN: 106,
      RULE_ROOM_TYPE: 107,
      RULE_GAME_TYPE: 108,
      RULE_AREA_TYPE: 109,
      RULE_PAY_TYPE: 110,
      RULE_PLAY_COUNT: 111,
      RULE_PLAYER_COUNT: 112,
      RULE_OPENED: 113,
      RULE_MIN_DI_ZHU: 114,
      RULE_MAX_DI_ZHU: 115,
      RULE_RU_CHANG_TIMES: 116,
      RULE_LI_CHANG_TIMES: 117,
      RULE_WAYEXPLAIN: 11
    };
    proto.cmd_game_bjl.ADD_TYPE = {
      TYPE_ZHUANGDUI: 0,
      TYPE_XIANDUI: 1,
      TYPE_ZHUANG: 2,
      TYPE_XIAN: 3,
      TYPE_HE: 4
    };
    proto.cmd_game_bjl.GAME_STAGE = {
      GAME_WAIT_STAGE: 0,
      GAME_ADDSCORE_STAGE: 1,
      GAME_OPENCARD_STAGE: 2,
      GAME_OVER_STAGE: 3
    };
    proto.cmd_game_bjl.CONNECT_TYPE = {
      TYPE_RECONNECT: 0,
      TYPE_WATCHER: 1
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "bjlInit", "bjlGameView", "bjlAudio", "bjlBetControl", "bjlChipItem", "bjlOption", "bjlRoundItem", "bjlRuleBoard", "bjlSetupBoard", "bjlSpliceButton", "bjlTimer", "bjlBaseLayer", "bjlMainLayer", "bjlRecordLayer", "bjlUserLayer", "bjlProtocol", "cmd_game_bjl" ]);