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
  cmd_game_sgj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98179dZfx1AT6B3j28CWKtk", "cmd_game_sgj");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_sgj = {};
    proto.cmd_game_sgj.__cfg = {};
    (function(cfg) {
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
      cfg.GameInitData = {
        1: {
          na: "gezitype",
          ty: "int",
          ar: 1
        },
        2: {
          na: "maxadd",
          ty: "int",
          ar: 1
        },
        3: {
          na: "userscore",
          ty: "int"
        }
      };
      cfg.LightStart = {
        1: {
          na: "prizescore",
          ty: "int"
        },
        2: {
          na: "prizetype",
          ty: "int"
        },
        3: {
          na: "prizeindex",
          ty: "int"
        },
        4: {
          na: "nextluckytype",
          ty: "int"
        },
        5: {
          na: "userscore",
          ty: "int"
        }
      };
      cfg.AddLucky = {
        1: {
          na: "luckytype",
          ty: "int"
        },
        2: {
          na: "prizescore",
          ty: "int",
          ar: 1
        },
        3: {
          na: "prizetype",
          ty: "int",
          ar: 1
        },
        4: {
          na: "prizeindex",
          ty: "int",
          ar: 1
        },
        5: {
          na: "nextluckytype",
          ty: "int"
        }
      };
      cfg.AddAndSubtract = {
        1: {
          na: "addsubtype",
          ty: "int"
        },
        2: {
          na: "changescore",
          ty: "int"
        }
      };
      cfg.BigOrSmall = {
        1: {
          na: "point",
          ty: "int"
        },
        2: {
          na: "prizescore",
          ty: "int"
        },
        3: {
          na: "userscore",
          ty: "int"
        }
      };
      cfg.GameOver = {
        1: {
          na: "userscore",
          ty: "int"
        },
        2: {
          na: "isloseover",
          ty: "int"
        }
      };
      cfg.LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.ErrorMsg = {
        1: {
          na: "errortype",
          ty: "int"
        }
      };
      cfg.RequestLightStart = {
        1: {
          na: "addtype",
          ty: "int",
          ar: 1
        },
        2: {
          na: "addscore",
          ty: "int",
          ar: 1
        }
      };
      cfg.RequestAddAndSubtract = {
        1: {
          na: "addsubtype",
          ty: "int"
        }
      };
      cfg.RequestBigOrSmall = {
        1: {
          na: "bigsmalltype",
          ty: "int"
        }
      };
    })(proto.cmd_game_sgj.__cfg);
    proto.cmd_game_sgj.TableRule = function() {
      this.__className = "proto.cmd_game_sgj.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
    };
    proto.cmd_game_sgj.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_sgj.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_sgj.GameInitData = function() {
      this.__className = "proto.cmd_game_sgj.GameInitData";
      this.gezitype = null;
      this.maxadd = null;
      this.userscore = 0;
    };
    proto.cmd_game_sgj.LightStart = function() {
      this.__className = "proto.cmd_game_sgj.LightStart";
      this.prizescore = 0;
      this.prizetype = 0;
      this.prizeindex = 0;
      this.nextluckytype = 0;
      this.userscore = 0;
    };
    proto.cmd_game_sgj.AddLucky = function() {
      this.__className = "proto.cmd_game_sgj.AddLucky";
      this.luckytype = 0;
      this.prizescore = null;
      this.prizetype = null;
      this.prizeindex = null;
      this.nextluckytype = 0;
    };
    proto.cmd_game_sgj.AddAndSubtract = function() {
      this.__className = "proto.cmd_game_sgj.AddAndSubtract";
      this.addsubtype = 0;
      this.changescore = 0;
    };
    proto.cmd_game_sgj.BigOrSmall = function() {
      this.__className = "proto.cmd_game_sgj.BigOrSmall";
      this.point = 0;
      this.prizescore = 0;
      this.userscore = 0;
    };
    proto.cmd_game_sgj.GameOver = function() {
      this.__className = "proto.cmd_game_sgj.GameOver";
      this.userscore = 0;
      this.isloseover = 0;
    };
    proto.cmd_game_sgj.LeaveGameResult = function() {
      this.__className = "proto.cmd_game_sgj.LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_sgj.ErrorMsg = function() {
      this.__className = "proto.cmd_game_sgj.ErrorMsg";
      this.errortype = 0;
    };
    proto.cmd_game_sgj.RequestLightStart = function() {
      this.__className = "proto.cmd_game_sgj.RequestLightStart";
      this.addtype = null;
      this.addscore = null;
    };
    proto.cmd_game_sgj.RequestAddAndSubtract = function() {
      this.__className = "proto.cmd_game_sgj.RequestAddAndSubtract";
      this.addsubtype = 0;
    };
    proto.cmd_game_sgj.RequestBigOrSmall = function() {
      this.__className = "proto.cmd_game_sgj.RequestBigOrSmall";
      this.bigsmalltype = 0;
    };
    proto.cmd_game_sgj.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_ENTER_GAME_SCENCE: 5,
      SUB_GAME_INIT_DATA: 6,
      SUB_ADD_SCORE: 7,
      SUB_LIGHT_START: 8,
      SUB_ADD_SUBTRACT_SCORE: 9,
      SUB_BIG_OR_SMALL: 10,
      SUB_ADD_LUCKY: 11,
      SUB_GAME_OVER: 12,
      SUB_LEAVE_GAME_RESULT: 13,
      SUB_EEROR_MSG: 14,
      SUB_C_ADD_SCORE: 31,
      SUB_C_LIGHT_START: 32,
      SUB_C_ADD_SUBTRACT: 33,
      SUB_C_BIG_OR_SMALL: 34,
      SUB_C_GAME_OVER: 35,
      SUB_C_LEAVE_GAME_SCENE: 36,
      SUB_C_ENTER_FINISH: 37
    };
    proto.cmd_game_sgj.TABLE_DISMISSION_STATUS = {
      DISMISSION_STATUS_AGREE: 1,
      DISMISSION_STATUS_DISAGREE: 2
    };
    proto.cmd_game_sgj.TABLE_RULE_ID = {
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
    proto.cmd_game_sgj.GAME_STAGE = {
      GAME_WAIT_STAGE: 0,
      GAME_START_STARGE: 1
    };
    proto.cmd_game_sgj.ADD_TYPE = {
      TYPE_PINGGUO: 0,
      TYPE_JUZI: 1,
      TYPE_NINGMENG: 2,
      TYPE_LINGDANG: 3,
      TYPE_XIGUA: 4,
      TYPE_XINGXING: 5,
      TYPE_77: 6,
      TYPE_BAR: 7
    };
    proto.cmd_game_sgj.GEZI_TYPE = {
      GEZI_PINGGUO: 0,
      GEZI_JUZI: 1,
      GEZI_DANGUA: 2,
      GEZI_LINGDANG: 3,
      GEZI_SHUANGGUA: 4,
      GEZI_XINGXING: 5,
      GEZI_77: 6,
      GEZI_BAR: 7,
      GEZI_LUCKY: 8,
      GEZI_LUCKY2: 9,
      GEZI_PINGGUO2: 10,
      GEZI_JUZI2: 11,
      GEZI_DANGUA2: 12,
      GEZI_LINGDANG2: 13,
      GEZI_SHUANGGUA2: 14,
      GEZI_XINGXING2: 15,
      GEZI_77X2: 16,
      GEZI_BAR2: 17
    };
    proto.cmd_game_sgj.CONNECT_TYPE = {
      TYPE_RECONNECT: 0,
      TYPE_WATCHER: 1
    };
    cc._RF.pop();
  }, {} ],
  sgjAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ace1lzN9JBU60GnKmsgZGj", "sgjAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        GoldFall: cc.Node
      },
      onLoad: function onLoad() {},
      showGoldFall: function showGoldFall() {
        var _this = this;
        var visibleSize = cc.view.getVisibleSize();
        var vSize = cc.size(visibleSize.height, visibleSize.width);
        var spGold = this.GoldFall.getChildByName("sp_gold");
        this.GoldFall.active = true;
        this.schedule(function() {
          for (var i = 0; i < 5 * Math.random() + 3; i++) {
            var jumpx = 200 * Math.random() - 100;
            var jumpy = 200 * Math.random() + 100;
            var startpos = cc.v2(Math.random() * vSize.width - vSize.width / 2, vSize.height / 2 + 100);
            var temppos = cc.v2(startpos.x, -vSize.height / 2);
            var endpos = cc.v2(startpos.x + jumpx, temppos.y - 100);
            var gold = cc.instantiate(spGold);
            gold.active = true;
            gold.position = startpos;
            gold.parent = _this.GoldFall;
            gold.runAction(cc.spawn(cc.sequence(cc.scaleTo(.4, .1, 1), cc.scaleTo(.4, 1), cc.scaleTo(.4, .1, 1), cc.scaleTo(.4, 1)), cc.sequence(cc.moveTo(1, temppos), cc.jumpTo(.6, endpos, jumpy, 1), cc.removeSelf(true))));
          }
        }, .1, 20);
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9212bzrzWtK0bvKT1F69JBk", "sgjAudio");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgm: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u80cc\u666f\u97f3\u6548"
        },
        button: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u6309\u94ae"
        },
        gold: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u91d1\u5e01"
        },
        bet: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u4e0b\u6ce8"
        },
        please_bet: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8bf7\u4e0b\u6ce8"
        },
        lamp: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u706f"
        },
        lucky: {
          type: cc.AudioClip,
          default: null,
          displayName: "Lucky"
        },
        roll_start: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8f6c\u706f\u5f00\u59cb"
        },
        roll_loop: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8f6c\u706f\u5faa\u73af"
        },
        roll_end: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8f6c\u706f\u5b8c\u6210"
        },
        success: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u4e2d\u5956"
        },
        ding: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u53ee\u53ee\u53ee"
        },
        speed: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u52a0\u901f"
        },
        rand_point: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8f6c\u70b9\u6570"
        },
        _bgmVolume: 0
      },
      playBGM: function playBGM(name) {
        cc.ak.util.audioMgr.playBGM(this.getAudio(name));
      },
      playSFX: function playSFX(name, type) {
        cc.ak.util.audioMgr.playSFX(this.getAudio(name, type));
      },
      reduceBGM: function reduceBGM() {
        this._bgmVolume = cc.ak.util.audioMgr.getBGMVolume();
        this._bgmVolume > 0 && cc.ak.util.audioMgr.setBGMVolume(0, true);
      },
      resumeBGM: function resumeBGM() {
        cc.ak.util.audioMgr.setBGMVolume(this._bgmVolume, true);
      },
      getAudio: function getAudio(name, type) {
        switch (name) {
         case "bgm":
          return this.bgm;

         case "button":
          return this.button;

         case "gold":
          return this.gold;

         case "bet":
          return this.bet[type];

         case "please_bet":
          return this.please_bet;

         case "ding":
          return this.ding;

         case "speed":
          return this.speed;

         case "lamp":
          return this.lamp[type];

         case "lucky":
          return this.lucky;

         case "roll_start":
          return this.roll_start;

         case "roll_loop":
          return this.roll_loop;

         case "roll_end":
          return this.roll_end;

         case "success":
          return this.success;

         case "rand_point":
          return this.rand_point;
        }
        return null;
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjBetArea: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "571d8UziilJobpb1jisTm/r", "sgjBetArea");
    "use strict";
    var MAX_COUNT = 8;
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        Buttons: [ cc.Button ],
        Scores: [ cc.Label ],
        btnAll: cc.Button,
        btnClear: cc.Button,
        btnAdd: cc.Button,
        btnSub: cc.Button,
        btnBig: cc.Button,
        btnSmall: cc.Button,
        btnStart: cc.Button,
        _GameViewComp: null,
        _nums: [],
        _maxNums: [],
        _setup: false,
        _touch: false,
        _index: 0
      },
      onLoad: function onLoad() {
        this._GameViewComp = this.GameView.getComponent("sgjGameView");
        this.btnStart.node.on(cc.Node.EventType.TOUCH_START, this.onButtonStart, this);
        this.btnStart.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnStart.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        this.btnBig.node.on(cc.Node.EventType.TOUCH_START, this.onButtonBig, this);
        this.btnBig.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnBig.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        this.btnSmall.node.on(cc.Node.EventType.TOUCH_START, this.onButtonSmall, this);
        this.btnSmall.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnSmall.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        this.btnAdd.node.on(cc.Node.EventType.TOUCH_START, this.onButtonAdd, this);
        this.btnAdd.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnAdd.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        this.btnSub.node.on(cc.Node.EventType.TOUCH_START, this.onButtonSub, this);
        this.btnSub.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnSub.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        this.btnClear.node.on(cc.Node.EventType.TOUCH_START, this.onButtonClear, this);
        this.btnClear.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnClear.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        this.btnAll.node.on(cc.Node.EventType.TOUCH_START, this.onButtonAll, this);
        this.btnAll.node.on(cc.Node.EventType.TOUCH_END, this.onCancelBtn, this);
        this.btnAll.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBtn, this);
        for (var i = 0; i < 8; i++) {
          this._maxNums[i] = 99;
          this.Buttons[i].node.on(cc.Node.EventType.TOUCH_START, this.onButtonBet, this);
          this.Buttons[i].node.on(cc.Node.EventType.TOUCH_END, this.onCancelBet, this);
          this.Buttons[i].node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelBet, this);
        }
        this.reset();
      },
      onButtonStart: function onButtonStart(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        var betscore = 0;
        for (var i = 0; i < 8; i++) betscore += this._nums[i];
        if (false == this._setup && false == this._GameViewComp._ScoreComp.checkAccount(betscore)) {
          cc.ak.ui.toast("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3!");
          return;
        }
        if (betscore <= 0) {
          cc.ak.util.audioMgr.playSFX(this._GameViewComp._AudioComp.getAudio("please_bet"));
          cc.ak.ui.toast("\u8bf7\u4e0b\u6ce8!");
          return;
        }
        var bets = this.getCurrBets();
        var types = [];
        var nums = [];
        for (var i = 0; i < bets.length; i++) {
          types.push(bets[i].type);
          nums.push(bets[i].num);
        }
        this._GameViewComp._ProtocolComp.sendLightStart(types, nums);
      },
      onButtonBig: function onButtonBig(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        if (this._GameViewComp._ScoreComp.getCurrent() <= 0) return;
        this._GameViewComp._ProtocolComp.sendBigOrSmall(2);
      },
      onButtonSmall: function onButtonSmall(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        if (this._GameViewComp._ScoreComp.getCurrent() <= 0) return;
        this._GameViewComp._ProtocolComp.sendBigOrSmall(1);
      },
      onButtonAdd: function onButtonAdd(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        this._GameViewComp._ProtocolComp.sendAddAndSub(1);
      },
      onButtonSub: function onButtonSub(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        if (this._GameViewComp._ScoreComp.getCurrent() <= 0) return;
        this._GameViewComp._ProtocolComp.sendAddAndSub(2);
      },
      onButtonClear: function onButtonClear(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        for (var i = 0; i < this._nums.length; i++) {
          true == this._setup && this._GameViewComp._ScoreComp.setAccount(this._nums[i], true);
          this.Scores[i].string = "00";
          this._nums[i] = 0;
        }
        this._setup = false;
      },
      onButtonAll: function onButtonAll(event) {
        this.setBtnLight(event.target, true);
        this._GameViewComp._AudioComp.playSFX("button");
        if (false == this.isOperEnable()) return;
        if (false == this._GameViewComp.checkAccount()) return;
        for (var i = 0; i < 8; i++) if (false == this.addBet(i)) break;
      },
      onButtonBet: function onButtonBet(event) {
        var _this = this;
        this.setBtnLight(event.target, true);
        if (false == this.isOperEnable()) return;
        if (false == this._GameViewComp.checkAccount()) return;
        this._touch = true;
        var index = 0;
        for (var i = 0; i < 8; i++) if (this.Buttons[i].node.name == event.target.name) {
          index = i;
          break;
        }
        this.addBet(index);
        this._GameViewComp._AudioComp.playSFX("bet", index);
        this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
          _this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
            if (false == _this.addBet(index)) {
              _this._touch = false;
              _this.node.stopAllActions();
            }
            _this._GameViewComp._AudioComp.playSFX("bet", index);
          }))));
        })));
      },
      onCancelBet: function onCancelBet(event) {
        this._touch = false;
        this.node.stopAllActions();
        this.setBtnLight(event.target, false);
      },
      onCancelBtn: function onCancelBtn(event) {
        this.setBtnLight(event.target, false);
      },
      reset: function reset() {
        for (var i = 0; i < 8; i++) {
          this._nums[i] = 0;
          this.Scores[i].string = "00";
        }
      },
      initBet: function initBet(maxNums) {
        this._maxNums = maxNums;
      },
      addBet: function addBet(index) {
        if (index < 0 || index >= 8) return false;
        var betscore = 1e3;
        if (false == this._GameViewComp._ScoreComp.checkAccount(betscore)) {
          cc.ak.ui.toast("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3!");
          return false;
        }
        if (false == this._setup) {
          this.reset();
          this._setup = true;
        }
        if (this._nums[index] + betscore > this._maxNums[index]) return false;
        this._nums[index] += betscore;
        var ss = (this._nums[index] / 1e3).toFixed(0);
        ss < 10 && (ss = "0" + ss);
        this.Scores[index].string = ss;
        0 == this._nums[index] ? this._GameViewComp._ScoreComp.setAccount(this._maxNums[index], true) : this._GameViewComp._ScoreComp.setAccount(-betscore, true);
        return true;
      },
      getCurrBets: function getCurrBets() {
        var bets = [];
        for (var i = 0; i < 8; i++) bets.push({
          type: i,
          num: this._nums[i]
        });
        return bets;
      },
      setBetUsed: function setBetUsed() {
        this._setup = false;
      },
      isSetupBet: function isSetupBet() {
        return this._setup;
      },
      isOperEnable: function isOperEnable() {
        if (this._GameViewComp._RollLampComp.isBusy()) return false;
        if (this._GameViewComp._RandPointComp.isBusy()) return false;
        return true;
      },
      setBtnLight: function setBtnLight(node, visible) {
        node.getChildByName("sp_normal").active = !visible;
        node.getChildByName("sp_light").active = visible;
      },
      setBetLight: function setBetLight(type) {
        if (type < 0 || type >= 18) return;
        if (8 == type || 9 == type) return;
        type >= 10 && (type -= 10);
        var light = this.Buttons[type].node.getChildByName("sp_light");
        light.active = true;
        light.opacity = 0;
        light.runAction(cc.sequence(cc.fadeTo(1, 170), cc.fadeOut(1), cc.fadeTo(1, 170), cc.fadeOut(1), cc.callFunc(function() {
          light.active = false;
        }, this)));
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjGameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81a71uYE+5GI5Oo87zKjt3u", "sgjGameView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Canvas: cc.Node,
        RollLamp: cc.Node,
        BetArea: cc.Node,
        Protocol: cc.Node,
        RandPoint: cc.Node,
        Score: cc.Node,
        History: cc.Node,
        Audio: cc.Node,
        Action: cc.Node,
        _RollLampComp: null,
        _BetAreaComp: null,
        _ProtocolComp: null,
        _HistoryComp: null,
        _RandPointComp: null,
        _ScoreComp: null,
        _AudioComp: null,
        _ActionComp: null,
        _started: false
      },
      onLoad: function onLoad() {
        var visibleSize = cc.view.getVisibleSize();
        this.Canvas.rotation = -90;
        this.node.width = visibleSize.height;
        this.node.height = visibleSize.width;
        this._RollLampComp = this.RollLamp.getComponent("sgjRollLamp");
        this._BetAreaComp = this.BetArea.getComponent("sgjBetArea");
        this._ProtocolComp = this.Protocol.getComponent("sgjProtocol");
        this._HistoryComp = this.History.getComponent("sgjHistory");
        this._RandPointComp = this.RandPoint.getComponent("sgjRandPoint");
        this._ScoreComp = this.Score.getComponent("sgjScore");
        this._AudioComp = this.Audio.getComponent("sgjAudio");
        this._ActionComp = this.Action.getComponent("sgjAction");
      },
      start: function start() {
        this._AudioComp.playBGM("bgm");
      },
      reset: function reset() {
        this._started = false;
        this._RandPointComp.setVisible(false);
      },
      onUserInfo: function onUserInfo(data) {
        cc.log(data);
        if (data.Uid == cc.ak.mc.userMgr.uid && data.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL) {
          cc.ak.event.off(cc.ak.key.event.COIN_CHANGE);
          cc.ak.ui.loadLobbyScence();
        }
      },
      onInitData: function onInitData(data) {
        cc.log(data);
        this._RollLampComp.initLamp(data.gezitype);
        this._ScoreComp.setAccount(data.userscore);
        this._BetAreaComp.initBet(data.maxadd);
      },
      onLightStart: function onLightStart(data) {
        cc.log(data);
        this._started = true;
        this._RollLampComp.clearRoll();
        this._RollLampComp.addRoll(0, [ data.prizeindex ], [ data.prizescore ], [ data.prizetype ]);
        this._RollLampComp.startRoll();
        this._ScoreComp.setAccount(data.userscore);
        this._BetAreaComp.setBetUsed();
        this._AudioComp.reduceBGM();
      },
      onGameLucky: function onGameLucky(data) {
        cc.log(data);
        this._RollLampComp.addLucky(data);
      },
      onAddAndSub: function onAddAndSub(data) {
        cc.log(data);
        this._ScoreComp.addCurrent(data.changescore);
      },
      onBigOrSmall: function onBigOrSmall(data) {
        var _this = this;
        cc.log(data);
        this._RandPointComp.randPoint(data.point, function() {
          _this._ScoreComp.setAccount(data.userscore);
          _this._ScoreComp.setCurrent(data.prizescore);
          data.prizescore <= 0 && _this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            _this.reset();
          }, _this)));
        });
      },
      onGameOver: function onGameOver(data) {
        cc.log(data);
        this._started = false;
        if (this._RollLampComp.isBusy() || this._RandPointComp.isBusy()) ; else {
          this._ScoreComp.setAccount(data.userscore);
          this.reset();
          this._AudioComp.playSFX("gold");
        }
      },
      onErrorMsg: function onErrorMsg(data) {
        cc.log(data);
        switch (data.errortype) {
         case 1:
          cc.ak.ui.toast("\u60a8\u7684\u8d44\u91d1\u4e0d\u8db3!");
          break;

         case 2:
          cc.ak.ui.toast("\u4e0b\u6ce8\u5df2\u7ecf\u8d85\u8fc7\u4e0a\u9650!");
          break;

         case 3:
          cc.ak.ui.toast("\u4e0b\u6ce8\u6570\u636e\u9519\u8bef!");
          break;

         case 4:
          cc.ak.ui.toast("\u4e0b\u6ce8\u6570\u76ee\u9519\u8bef!");
          break;

         default:
          cc.ak.ui.toast("\u672a\u77e5\u9519\u8bef!");
        }
      },
      rollLampFinish: function rollLampFinish(prizeList, allFinish) {
        var _this2 = this;
        var bets = this._BetAreaComp.getCurrBets();
        for (var i = 0; i < prizeList.length; i++) {
          var prizetype = prizeList[i];
          this._HistoryComp.append(prizetype);
          this._BetAreaComp.setBetLight(prizetype);
          prizetype >= 5 && prizetype <= 7 && bets[prizetype].num > 0 && this._ActionComp.showGoldFall();
        }
        prizeList.length > 0 && this._AudioComp.playSFX("success");
        if (allFinish) {
          cc.log("roll lamp all finish.");
          this._RandPointComp.setVisible(true);
          this.scheduleOnce(function() {
            _this2._AudioComp.resumeBGM();
          }, 2);
        }
      },
      checkAccount: function checkAccount() {
        if (this._started) {
          this._ProtocolComp.sendGameOver();
          return false;
        }
        return true;
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03f9e4XlzVEoLdR96tZGK1k", "sgjHistory");
    "use strict";
    var MAX_NUM = 9;
    cc.Class({
      extends: cc.Component,
      properties: {
        preItem: cc.Prefab,
        spPanel: cc.Sprite,
        _historyList: [],
        _itemList: []
      },
      onLoad: function onLoad() {
        var size = this.spPanel.node.getContentSize();
        for (var i = 0; i < MAX_NUM; i++) {
          var item = cc.instantiate(this.preItem);
          item.getComponent("sgjLamp").init(-1);
          item.getComponent("sgjLamp").hidePanel();
          item.parent = this.spPanel.node;
          item.position = cc.v2(-size.width / 2 + 140 + 90 * i, 0);
          item.scale = .7;
          this._itemList.push(item);
        }
      },
      start: function start() {},
      init: function init(list) {
        this._historyList = list;
        this.refresh();
      },
      append: function append(type) {
        this._historyList.length >= MAX_NUM && this._historyList.splice(0, 1);
        this._historyList.push(type);
        this.refresh();
      },
      refresh: function refresh() {
        for (var i = 0; i < MAX_NUM; i++) {
          var type = this._historyList[i];
          void 0 == type && (type = -1);
          this._itemList[i].getComponent("sgjLamp").init(type);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d4d7J/bapJXaRbyey0yNLG", "sgjInit");
    "use strict";
    var SgjInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "sgj"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("sgj module init!");
        bundle.sgj = {};
        bundle.sgj.key = {};
        bundle.sgj.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initSgjData: function initSgjData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.sgj.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.sgj.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.sgj.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.sgj.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + SgjInit.id, function(data) {
          bundle.sgj.data.set(bundle.sgj.key.data.ENTER_ROOM_SUCC, data);
          if ("sgjGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("sgjGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + SgjInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== SgjInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = SgjInit;
    cc._RF.pop();
  }, {} ],
  sgjLamp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "294943tFolPOYkZpOoNMBm/", "sgjLamp");
    "use strict";
    var LAMP_NUM = 18;
    cc.Class({
      extends: cc.Component,
      properties: {
        spPanel: cc.Sprite,
        spImage: cc.Sprite,
        spFlash: cc.Sprite,
        spLight: cc.Sprite,
        spfImg: [ cc.SpriteFrame ]
      },
      init: function init(type) {
        this.spImage.spriteFrame = type >= 0 && type < LAMP_NUM ? this.spfImg[type] : null;
        this.light(false);
      },
      clear: function clear() {
        this.spLight.node.active = false;
        this.spFlash.node.active = false;
      },
      light: function light(active) {
        this.spLight.node.active = active;
      },
      flash: function flash(active, time) {
        null == active && (active = true);
        null == time && (time = .2);
        this.spFlash.node.active = active;
        if (active) {
          this.spFlash.node.stopAllActions();
          this.spFlash.node.opacity = 255;
          this.spFlash.node.runAction(cc.fadeOut(time));
        }
      },
      hidePanel: function hidePanel() {
        this.spPanel.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjOption: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcd23ZDuU9IOIQhMi6bxl5H", "sgjOption");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        SettingBoard: cc.Node,
        RulesBoard: cc.Node,
        gray: cc.Node,
        btnSetting: cc.Button,
        btnRules: cc.Button,
        _callback: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.active = false;
        var visibleSize = cc.view.getVisibleSize();
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
      start: function start() {},
      display: function display() {
        this.node.active = !this.node.active;
      },
      setCallback: function setCallback(callback) {
        this._callback = callback;
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjProtocol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89921g79kJPR67EUL2/wT82", "sgjProtocol");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        _gameView: null
      },
      onLoad: function onLoad() {
        this._gameView = this.GameView.getComponent("sgjGameView");
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
          bundle.sgj.data.set(bundle.sgj.key.data.ENTER_ROOM_SUCC, data);
        }, this);
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_ENTER_GAME_SCENCE, "EnterRoomSucc", function(data) {
          cc.log("EnterRoomSucc");
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_USERINFO_PUSH, "UserInfo", function(data) {
          _this._gameView.onUserInfo(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_LEAVE_GAME_RESULT, "LeaveGameResult", function(data) {
          data.userId == cc.ak.mc.userMgr.uid ? cc.ak.ui.loadLobbyScence() : _this._gameView.onUserLeave(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_GAME_INIT_DATA, "GameInitData", function(data) {
          cc.log("GameInitData");
          _this._gameView.onInitData(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_ADD_SCORE, "AddScore", function(data) {
          cc.log("AddScore");
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_LIGHT_START, "LightStart", function(data) {
          cc.log("LightStart");
          _this._gameView.onLightStart(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_ADD_SUBTRACT_SCORE, "AddAndSubtract", function(data) {
          cc.log("AddAndSubtract");
          _this._gameView.onAddAndSub(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_BIG_OR_SMALL, "BigOrSmall", function(data) {
          cc.log("BigOrSmall");
          _this._gameView.onBigOrSmall(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_ADD_LUCKY, "AddLucky", function(data) {
          cc.log("AddLucky");
          _this._gameView.onGameLucky(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_GAME_OVER, "GameOver", function(data) {
          cc.log("GameOver");
          _this._gameView.onGameOver(data);
        });
        this.registerMsg(proto.cmd_game_sgj.SUB_CMD_GAME.SUB_EEROR_MSG, "ErrorMsg", function(data) {
          _this._gameView.onErrorMsg(data);
        });
      },
      registerMsg: function registerMsg(nSubID, tabName, callback) {
        nSubID == proto.cmd_game_sgj.SUB_CMD_GAME.SUB_USERINFO_PUSH ? cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_base_info.UserInfo();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this) : cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_game_sgj[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this);
      },
      sendEnterFinish: function sendEnterFinish() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_sgj.SUB_CMD_GAME.SUB_C_ENTER_FINISH);
      },
      sendLeaveGame: function sendLeaveGame() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendLightStart: function sendLightStart(addtype, addscore) {
        var cmd = new proto.cmd_game_sgj.RequestLightStart();
        cmd.addtype = addtype;
        cmd.addscore = addscore;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_sgj.SUB_CMD_GAME.SUB_C_LIGHT_START, cmd);
      },
      sendAddAndSub: function sendAddAndSub(type) {
        var cmd = new proto.cmd_game_sgj.RequestAddAndSubtract();
        cmd.addsubtype = type;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_sgj.SUB_CMD_GAME.SUB_C_ADD_SUBTRACT, cmd);
      },
      sendBigOrSmall: function sendBigOrSmall(type) {
        var cmd = new proto.cmd_game_sgj.RequestBigOrSmall();
        cmd.bigsmalltype = type;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_sgj.SUB_CMD_GAME.SUB_C_BIG_OR_SMALL, cmd);
      },
      sendGameOver: function sendGameOver() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_sgj.SUB_CMD_GAME.SUB_C_GAME_OVER);
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjRandPoint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e823cLAvm9GBrjN1W12FmsX", "sgjRandPoint");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        spLightGray: cc.Sprite,
        spPointGray: cc.Sprite,
        spLight: cc.Sprite,
        spPoint: cc.Sprite,
        labNum1: cc.Label,
        labNum2: cc.Label,
        fontGray: cc.Font,
        fontLight: cc.Font,
        _GameViewComp: null,
        _mutex: false
      },
      onLoad: function onLoad() {
        var _this = this;
        this._GameViewComp = this.GameView.getComponent("sgjGameView");
        this.setVisible(false);
        this.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
          if (_this.spLight.node.active) {
            _this.spLight.node.active = false;
            _this.spLightGray.node.active = true;
          } else {
            _this.spLight.node.active = true;
            _this.spLightGray.node.active = false;
          }
        }, this), cc.delayTime(1))));
      },
      setVisible: function setVisible(visible) {
        this.node.stopAllActions();
        this.spLight.node.active = visible;
        this.spPoint.node.active = visible;
        this.spLightGray.node.active = !visible;
        this.spPointGray.node.active = !visible;
        if (visible) {
          this.labNum1.font = this.fontLight;
          this.labNum2.font = this.fontLight;
          this.labNum1.string = "0";
          this.labNum2.string = "0";
        } else {
          this.labNum1.font = this.fontGray;
          this.labNum2.font = this.fontGray;
        }
      },
      randPoint: function randPoint(point, callback) {
        var _this2 = this;
        this._mutex = true;
        var count = 0;
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.02), cc.callFunc(function() {
          count++;
          if (count >= 50) {
            _this2.node.stopAllActions();
            _this2.labNum1.string = parseInt(point / 10);
            _this2.labNum2.string = parseInt(point % 10);
            _this2._mutex = false;
            callback && callback();
          } else {
            _this2.labNum1.string = Math.floor(10 * Math.random());
            _this2.labNum2.string = Math.floor(10 * Math.random());
          }
        }))));
        this._GameViewComp._AudioComp.playSFX("rand_point");
      },
      isBusy: function isBusy() {
        return this._mutex;
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjRollLamp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62e51IhYI5GtY7uYDPkqnR3", "sgjRollLamp");
    "use strict";
    var LAMP_NUM = 24;
    var RollType = {
      NORMAL: 0,
      THREE: 1,
      TRIPLE: 2
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        preLamp: cc.Prefab,
        GameView: cc.Node,
        Lamps: [ cc.Node ],
        Lights: [ cc.Node ],
        LampComp: [],
        _GameViewComp: null,
        _lampTypes: [],
        _luckyList: [],
        _rollsList: [],
        _lastIndex: 0,
        _start: false,
        _mutex: false,
        _index: 0,
        _timer: 0,
        _clock: 0,
        _speed: 0,
        _marks: 0,
        _rolls: null,
        _lucky: null,
        _countUp: 0,
        _countKeep: 0,
        _countDown: 0,
        _speedInit: 0,
        _speedKeep: 0,
        _speedFini: 0,
        _stepsUp: 0,
        _stepsDown: 0
      },
      onLoad: function onLoad() {
        this._GameViewComp = this.GameView.getComponent("sgjGameView");
        var poss = [ cc.v2(-435, 435), cc.v2(-290, 435), cc.v2(-145, 435), cc.v2(0, 435), cc.v2(145, 435), cc.v2(290, 435), cc.v2(435, 435), cc.v2(435, 290), cc.v2(435, 145), cc.v2(435, 0), cc.v2(435, -145), cc.v2(435, -290), cc.v2(435, -435), cc.v2(290, -435), cc.v2(145, -435), cc.v2(0, -435), cc.v2(-145, -435), cc.v2(-290, -435), cc.v2(-435, -435), cc.v2(-435, -290), cc.v2(-435, -145), cc.v2(-435, 0), cc.v2(-435, 145), cc.v2(-435, 290) ];
        for (var i = 0; i < LAMP_NUM; i++) {
          var lamp = cc.instantiate(this.preLamp);
          lamp.position = cc.v2(poss[i].x, poss[i].y + 80);
          lamp.parent = this.node;
          this.Lamps[i] = lamp;
          this.LampComp[i] = lamp.getComponent("sgjLamp");
        }
      },
      start: function start() {},
      initLamp: function initLamp(lampTypes) {
        this._lampTypes = lampTypes;
        for (var i = 0; i < LAMP_NUM; i++) this.Lamps[i].getComponent("sgjLamp").init(lampTypes[i]);
        this.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(this.idle, this), cc.delayTime(1))));
      },
      addLucky: function addLucky(lucky) {
        1 == lucky.luckytype ? this.addRoll(RollType.THREE, lucky.prizeindex, lucky.prizescore, lucky.prizetype) : 2 == lucky.luckytype && this.addRoll(RollType.TRIPLE, lucky.prizeindex, lucky.prizescore, lucky.prizetype);
      },
      addRoll: function addRoll(rollType, indexList, scoreList, prizeList) {
        if (rollType == RollType.NORMAL) {
          var roll = {
            type: rollType,
            index: indexList[0],
            score: scoreList[0],
            prize: prizeList
          };
          this._rollsList.push(roll);
        } else if (rollType == RollType.THREE) for (var i = 0; i < indexList.length; i++) {
          var roll = {
            type: rollType,
            index: indexList[i],
            score: scoreList[i],
            prize: [ prizeList[i] ]
          };
          this._rollsList.push(roll);
        } else if (rollType == RollType.TRIPLE) {
          var roll = {
            type: rollType,
            index: indexList[2],
            score: scoreList[2],
            prize: prizeList
          };
          this._rollsList.push(roll);
        }
      },
      clearRoll: function clearRoll() {
        this.setLampLight(-1);
        this._rollsList = [];
        this.node.stopAllActions();
      },
      startRoll: function startRoll() {
        if (this._start) return;
        if (this._rollsList.length <= 0) return;
        var roll = this._rollsList[0];
        this._rolls = roll;
        this._index = this._lastIndex;
        this._start = true;
        this._mutex = true;
        this.LampComp[this._index].flash(true, .5);
        this._countUp = 10;
        this._countKeep = 100;
        this._countDown = 8;
        this._speedInit = 10;
        this._speedKeep = 2;
        this._speedFini = 30;
        this._stepsUp = (this._speedInit - this._speedKeep) / this._countUp;
        this._stepsDown = (this._speedFini - this._speedKeep) / this._countDown;
        this._speed = this._speedInit;
        this._clock = 0;
        this._marks = 1;
        this._timer = this._speedInit;
        var keep = (this._index + this._countUp + this._countDown) % LAMP_NUM;
        keep = (roll.index - keep + LAMP_NUM) % LAMP_NUM;
        this._countKeep = keep + 2 * LAMP_NUM;
        this._GameViewComp._AudioComp.playSFX("roll_start");
      },
      finishRoll: function finishRoll() {
        if (this._rolls) {
          this._lastIndex = this._rolls.index;
          if (this._rolls.type == RollType.TRIPLE) {
            var a = this._rolls.index;
            var b = this.getPreIndex(a);
            var c = this.getPreIndex(b);
            this.setLampLight(a);
            this.setLampLight(b);
            this.setLampLight(c);
          } else this.setLampLight(this._rolls.index);
          this._GameViewComp._ScoreComp.setCurrent(this._rolls.score, true);
          var betType = this.getBetTypeByIndex(this._rolls.index);
          betType >= 0 ? cc.ak.util.audioMgr.playSFX(this._GameViewComp._AudioComp.getAudio("lamp", betType)) : cc.ak.util.audioMgr.playSFX(this._GameViewComp._AudioComp.getAudio("lucky"));
        } else cc.log("finish roll error.");
        this._rollsList.splice(0, 1);
        if (this._rollsList.length > 0) {
          this._GameViewComp.rollLampFinish(this._rolls.prize, false);
          this.startRoll();
        } else {
          this._mutex = false;
          this._GameViewComp.rollLampFinish(this._rolls.prize, true);
        }
      },
      setLightPos: function setLightPos(index, same) {},
      setLightOpacity: function setLightOpacity(same) {},
      setLampLight: function setLampLight(index) {
        if (index >= 0 && index < LAMP_NUM) this.LampComp[index].light(true); else for (var i = 0; i < LAMP_NUM; i++) this.LampComp[i].light(false);
      },
      isBusy: function isBusy() {
        return this._mutex;
      },
      getPreIndex: function getPreIndex(index) {
        var ret = index - 1;
        ret < 0 && (ret = LAMP_NUM - 1);
        return ret;
      },
      update: function update(dt) {
        if (false == this._start) return;
        this._timer--;
        if (this._timer <= 0) {
          this._clock++;
          this._index++;
          this._index > LAMP_NUM - 1 && (this._index = 0);
          if (this._rolls.type == RollType.TRIPLE) {
            var a = this._index;
            var b = this.getPreIndex(a);
            var c = this.getPreIndex(b);
            var d = this.getPreIndex(c);
            if (this._speed < 9) {
              this.LampComp[a].flash(true, .5);
              this.LampComp[b].flash(true, .5);
              this.LampComp[c].flash(true, .5);
              this.LampComp[d].flash(true, .2);
            } else {
              this.LampComp[a].flash(true, 5);
              this.LampComp[b].flash(true, 5);
              this.LampComp[c].flash(true, 5);
              this.LampComp[d].flash(false, 0);
            }
          } else {
            var a = this._index;
            var b = this.getPreIndex(a);
            if (this._speed < 9) {
              this.LampComp[a].flash(true, .5);
              this.LampComp[b].flash(true, .2);
            } else {
              this.LampComp[a].flash(true, 10);
              this.LampComp[b].flash(false, 0);
            }
          }
          this._GameViewComp._AudioComp.playSFX("ding");
          if (this._marks > 0) {
            this._countUp--;
            this._speed = this._speed - this._stepsUp;
            this._timer = this._speed;
            if (this._countUp <= 0) {
              this._marks = 0;
              this._GameViewComp._AudioComp.playSFX("roll_loop");
            }
          } else if (this._marks < 0) {
            this._countDown--;
            this._speed = this._speed + this._stepsDown;
            this._timer = this._speed;
            if (this._countDown <= 0) {
              this._start = false;
              this.finishRoll();
            }
          } else {
            this._countKeep--;
            this._timer = this._speedKeep;
            if (this._countKeep <= 0) {
              this._marks = -1;
              this._speed = this._speedKeep;
              this._GameViewComp._AudioComp.playSFX("roll_end");
            }
          }
        }
      },
      idle: function idle() {
        var a = this._index;
        var b = (a + 1 + LAMP_NUM) % LAMP_NUM;
        var c = (b + 8 + LAMP_NUM) % LAMP_NUM;
        var d = (c + 1 + LAMP_NUM) % LAMP_NUM;
        var e = (d + 8 + LAMP_NUM) % LAMP_NUM;
        var f = (e + 1 + LAMP_NUM) % LAMP_NUM;
        for (var i = 0; i < LAMP_NUM; i++) i == a || i == c || i == e ? this.LampComp[i].flash(true, 1) : i == b || i == d || i == f ? this.LampComp[i].flash(true, 1) : this.LampComp[i].flash(false);
        this._index++;
        this._index >= LAMP_NUM && (this._index = 0);
      },
      getBetTypeByIndex: function getBetTypeByIndex(index) {
        var lampType = this._lampTypes[index];
        switch (lampType) {
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_PINGGUO:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_PINGGUO2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_PINGGUO;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_JUZI:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_JUZI2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_JUZI;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_DANGUA:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_DANGUA2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_NINGMENG;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_LINGDANG:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_LINGDANG2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_LINGDANG;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_SHUANGGUA:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_SHUANGGUA2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_XIGUA;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_XINGXING:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_XINGXING2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_XINGXING;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_77:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_77X2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_77;

         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_BAR:
         case proto.cmd_game_sgj.GEZI_TYPE.GEZI_BAR2:
          return proto.cmd_game_sgj.ADD_TYPE.TYPE_BAR;

         default:
          return -1;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjRules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ce16ysd6VGtaqV+3NN9Gh4", "sgjRules");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClose: cc.Button,
        spGray: cc.Sprite
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
        this.spGray.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          return true;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  sgjScore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd28840EBdCTpx0Kl3k/+0O", "sgjScore");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        labAccount: cc.Label,
        labCurrent: cc.Label,
        btnAdd: cc.Button,
        preRecharge: cc.Prefab,
        _GameViewComp: null,
        _account: 0,
        _current: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this._GameViewComp = this.GameView.getComponent("sgjGameView");
        this.btnAdd.node.on("click", function() {
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
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          var num = 0;
          for (var i = 0; i < data.Coins.length; i++) num += data.Coins[i].Amount;
          _this.setAccount(num, true);
          var msg = "\u8d26\u6237\u8d44\u91d1\u589e\u52a0" + (num / 1e3).toFixed(2) + "\u5143";
          cc.ak.ui.alert({
            text: msg,
            btns: [ "\u786e\u5b9a" ]
          });
        });
      },
      start: function start() {},
      setAccount: function setAccount(score, append) {
        if (true == append) {
          this._account += score;
          this.labAccount.string = Math.floor(this._account / 1e3);
        } else {
          this._account = score;
          this._current = 0;
          this.labAccount.string = Math.floor(this._account / 1e3);
          this.labCurrent.string = "0";
        }
      },
      setCurrent: function setCurrent(score, append) {
        true == append ? this._current += score : this._current = score;
        this.labCurrent.string = Math.floor(this._current / 1e3);
      },
      addCurrent: function addCurrent(score) {
        this._current = this._current + score;
        this._account = this._account - score;
        this.labCurrent.string = Math.floor(this._current / 1e3);
        this.labAccount.string = Math.floor(this._account / 1e3);
      },
      checkAccount: function checkAccount(subscore) {
        return this._account + this._current - subscore >= 0;
      },
      getCurrent: function getCurrent() {
        return this._current;
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8be4fodnVFJabCI7xZoQO/M", "sgjSetting");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClose: cc.Button,
        spGray: cc.Node,
        SliderMusic: cc.Slider,
        SliderSound: cc.Slider,
        maxLen: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this._spSoundBar = this.SliderSound.node.getChildByName("sp_bar");
        this._spMusicBar = this.SliderMusic.node.getChildByName("sp_bar");
        cc.ak.util.audioMgr.getSFXVolume() ? this.SliderSound.progress = cc.ak.util.audioMgr.getSFXVolume() : this.SliderSound.progress = .5;
        cc.ak.util.audioMgr.getBGMVolume() ? this.SliderMusic.progress = cc.ak.util.audioMgr.getBGMVolume() : this.SliderMusic.progress = .5;
        this._spSoundBar.width = this.SliderSound.progress * this.maxLen;
        this._spMusicBar.width = this.SliderMusic.progress * this.maxLen;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
      },
      onSoundSliderEvent: function onSoundSliderEvent(sender, eventType) {
        this._spSoundBar.width = sender.progress * this.maxLen;
        cc.ak.util.audioMgr.setSFXVolume(sender.progress);
      },
      onMusicSliderEvent: function onMusicSliderEvent(sender, eventType) {
        this._spMusicBar.width = sender.progress * this.maxLen;
        cc.ak.util.audioMgr.setBGMVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  sgjTopBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fda4D3BXpCGrftetbY1rxN", "sgjTopBar");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        Option: cc.Node,
        Setting: cc.Node,
        Rules: cc.Node,
        labJackpot: cc.Label,
        btnExit: cc.Button,
        btnOption: cc.Button,
        _GameViewComp: null,
        _jackpot: 0,
        _target: 0,
        _current: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this._GameViewComp = this.GameView.getComponent("sgjGameView");
        this.btnExit.node.on("click", function(node) {
          _this._GameViewComp._ProtocolComp.sendLeaveGame();
        }, this);
        this.btnOption.node.on("click", function(node) {
          _this.Setting.active = true;
        }, this);
        this.Option.getComponent("sgjOption").setCallback(function(name) {
          "SETTING" == name ? _this.Setting.active = true : "RULES" == name && (_this.Rules.active = true);
        });
        this._jackpot = this.getJackpot();
        this._current = this._jackpot;
        this.labJackpot.string = this._current;
        this.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(this.updateJackpot, this), cc.delayTime(10))));
      },
      start: function start() {},
      update: function update() {
        var val = this._target - this._current;
        if (val < 1 && val > -1) return;
        var num = 1;
        val > 1e4 && (num = 1e3);
        val > 1e3 && (num = 100);
        val > 100 && (num = 10);
        val < 0 ? this._current -= num : val > 0 && (this._current += num);
        this.labJackpot.string = this._current.toFixed(0);
      },
      updateJackpot: function updateJackpot() {
        this._target = this.getJackpot();
      },
      getJackpot: function getJackpot() {
        var myDate = new Date();
        var year = myDate.getFullYear() - 2019;
        var month = myDate.getMonth();
        var day = myDate.getDate();
        var hour = myDate.getHours();
        var min = myDate.getMinutes();
        var sec = myDate.getSeconds();
        var main = 2e7 + 123456 * (360 * year + 30 * month + day);
        var sub = 123 * (3600 * hour + 60 * min);
        var ext = Math.random() > .5 ? 12 * sec : 12 * -sec;
        return main + sub + ext;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "sgjAction", "sgjAudio", "sgjBetArea", "sgjHistory", "sgjLamp", "sgjOption", "sgjRandPoint", "sgjRollLamp", "sgjRules", "sgjScore", "sgjSetting", "sgjTopBar", "cmd_game_sgj", "sgjProtocol", "sgjGameView", "sgjInit" ]);