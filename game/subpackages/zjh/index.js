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
  cmd_game_zjh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c324p2KaxLbZFZup0G9woT", "cmd_game_zjh");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_zjh = {};
    proto.cmd_game_zjh.__cfg = {};
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
      cfg.HandCardData = {
        1: {
          na: "Cards",
          ty: "byte",
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
          na: "bankChair",
          ty: "int"
        },
        3: {
          na: "currentUser",
          ty: "int"
        },
        4: {
          na: "playStatus",
          ty: "int",
          ar: 1
        },
        5: {
          na: "cardData",
          ty: "byte",
          ar: 1
        }
      };
      cfg.AddScore = {
        1: {
          na: "currentUser",
          ty: "int"
        },
        2: {
          na: "addScoreUser",
          ty: "int"
        },
        3: {
          na: "addScore",
          ty: "int"
        },
        4: {
          na: "addCount",
          ty: "int"
        },
        5: {
          na: "addtype",
          ty: "int"
        }
      };
      cfg.LookCard = {
        1: {
          na: "lookCardUser",
          ty: "int"
        },
        2: {
          na: "cardData",
          ty: "HandCardData"
        }
      };
      cfg.GiveUp = {
        1: {
          na: "giveUpUser",
          ty: "int"
        },
        2: {
          na: "cardData",
          ty: "HandCardData"
        },
        3: {
          na: "currentUser",
          ty: "int"
        }
      };
      cfg.WaitCompare = {
        1: {
          na: "compareUserId",
          ty: "int"
        }
      };
      cfg.CompareCard = {
        1: {
          na: "currentUser",
          ty: "int"
        },
        2: {
          na: "compareUser",
          ty: "int",
          ar: 1
        },
        3: {
          na: "loseUser",
          ty: "int"
        },
        4: {
          na: "addscore",
          ty: "int"
        },
        5: {
          na: "cardData",
          ty: "HandCardData"
        },
        6: {
          na: "addCount",
          ty: "int"
        }
      };
      cfg.OpenCard = {
        1: {
          na: "winUser",
          ty: "int"
        },
        2: {
          na: "cardData",
          ty: "HandCardData",
          ar: 1
        }
      };
      cfg.RestoreData = {
        1: {
          na: "conenctType",
          ty: "int"
        },
        2: {
          na: "connectUser",
          ty: "int"
        },
        3: {
          na: "bankChair",
          ty: "int"
        },
        4: {
          na: "currentUser",
          ty: "int"
        },
        5: {
          na: "bet",
          ty: "int"
        },
        6: {
          na: "gameStart",
          ty: "int"
        },
        7: {
          na: "compareState",
          ty: "int"
        },
        8: {
          na: "totalScore",
          ty: "int"
        },
        9: {
          na: "playStatus",
          ty: "int",
          ar: 1
        },
        10: {
          na: "tableScore",
          ty: "int",
          ar: 1
        },
        11: {
          na: "dynamicJoin",
          ty: "int",
          ar: 1
        },
        12: {
          na: "mingZhu",
          ty: "int",
          ar: 1
        },
        13: {
          na: "offline",
          ty: "int",
          ar: 1
        },
        14: {
          na: "cardData",
          ty: "byte",
          ar: 1
        },
        15: {
          na: "addCount",
          ty: "int",
          ar: 1
        },
        16: {
          na: "giveup",
          ty: "int",
          ar: 1
        },
        17: {
          na: "currenScore",
          ty: "int"
        },
        18: {
          na: "lefttime",
          ty: "int"
        },
        19: {
          na: "addchouma",
          ty: "int",
          ar: 1
        }
      };
      cfg.GameOver = {
        1: {
          na: "gameScore",
          ty: "int",
          ar: 1
        },
        2: {
          na: "cardData",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "cardtype",
          ty: "int",
          ar: 1
        },
        4: {
          na: "openend",
          ty: "int"
        }
      };
      cfg.LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.ReadySuccess = {
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
      cfg.RequestAddScore = {
        1: {
          na: "addScoreUser",
          ty: "int"
        },
        2: {
          na: "addScore",
          ty: "int"
        }
      };
      cfg.RequestLookCard = {
        1: {
          na: "lookCardUser",
          ty: "int"
        }
      };
      cfg.RequestGiveUp = {
        1: {
          na: "giveUpUser",
          ty: "int"
        }
      };
      cfg.RequestWaitCompare = {
        1: {
          na: "waitCompareUser",
          ty: "int"
        }
      };
      cfg.RequestCompareCard = {
        1: {
          na: "compareUser",
          ty: "int"
        },
        2: {
          na: "targetUser",
          ty: "int"
        }
      };
    })(proto.cmd_game_zjh.__cfg);
    proto.cmd_game_zjh.TableRule = function() {
      this.__className = "proto.cmd_game_zjh.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
    };
    proto.cmd_game_zjh.HandCardData = function() {
      this.__className = "proto.cmd_game_zjh.HandCardData";
      this.Cards = null;
    };
    proto.cmd_game_zjh.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_zjh.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_zjh.GameStart = function() {
      this.__className = "proto.cmd_game_zjh.GameStart";
      this.bet = 0;
      this.bankChair = 0;
      this.currentUser = 0;
      this.playStatus = null;
      this.cardData = null;
    };
    proto.cmd_game_zjh.AddScore = function() {
      this.__className = "proto.cmd_game_zjh.AddScore";
      this.currentUser = 0;
      this.addScoreUser = 0;
      this.addScore = 0;
      this.addCount = 0;
      this.addtype = 0;
    };
    proto.cmd_game_zjh.LookCard = function() {
      this.__className = "proto.cmd_game_zjh.LookCard";
      this.lookCardUser = 0;
      this.cardData = null;
    };
    proto.cmd_game_zjh.GiveUp = function() {
      this.__className = "proto.cmd_game_zjh.GiveUp";
      this.giveUpUser = 0;
      this.cardData = null;
      this.currentUser = 0;
    };
    proto.cmd_game_zjh.WaitCompare = function() {
      this.__className = "proto.cmd_game_zjh.WaitCompare";
      this.compareUserId = 0;
    };
    proto.cmd_game_zjh.CompareCard = function() {
      this.__className = "proto.cmd_game_zjh.CompareCard";
      this.currentUser = 0;
      this.compareUser = null;
      this.loseUser = 0;
      this.addscore = 0;
      this.cardData = null;
      this.addCount = 0;
    };
    proto.cmd_game_zjh.OpenCard = function() {
      this.__className = "proto.cmd_game_zjh.OpenCard";
      this.winUser = 0;
      this.cardData = null;
    };
    proto.cmd_game_zjh.RestoreData = function() {
      this.__className = "proto.cmd_game_zjh.RestoreData";
      this.conenctType = 0;
      this.connectUser = 0;
      this.bankChair = 0;
      this.currentUser = 0;
      this.bet = 0;
      this.gameStart = 0;
      this.compareState = 0;
      this.totalScore = 0;
      this.playStatus = null;
      this.tableScore = null;
      this.dynamicJoin = null;
      this.mingZhu = null;
      this.offline = null;
      this.cardData = null;
      this.addCount = null;
      this.giveup = null;
      this.currenScore = 0;
      this.lefttime = 0;
      this.addchouma = null;
    };
    proto.cmd_game_zjh.GameOver = function() {
      this.__className = "proto.cmd_game_zjh.GameOver";
      this.gameScore = null;
      this.cardData = null;
      this.cardtype = null;
      this.openend = 0;
    };
    proto.cmd_game_zjh.LeaveGameResult = function() {
      this.__className = "proto.cmd_game_zjh.LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_zjh.ReadySuccess = function() {
      this.__className = "proto.cmd_game_zjh.ReadySuccess";
      this.userId = 0;
    };
    proto.cmd_game_zjh.ErrorMsg = function() {
      this.__className = "proto.cmd_game_zjh.ErrorMsg";
      this.errortype = 0;
    };
    proto.cmd_game_zjh.RequestAddScore = function() {
      this.__className = "proto.cmd_game_zjh.RequestAddScore";
      this.addScoreUser = 0;
      this.addScore = 0;
    };
    proto.cmd_game_zjh.RequestLookCard = function() {
      this.__className = "proto.cmd_game_zjh.RequestLookCard";
      this.lookCardUser = 0;
    };
    proto.cmd_game_zjh.RequestGiveUp = function() {
      this.__className = "proto.cmd_game_zjh.RequestGiveUp";
      this.giveUpUser = 0;
    };
    proto.cmd_game_zjh.RequestWaitCompare = function() {
      this.__className = "proto.cmd_game_zjh.RequestWaitCompare";
      this.waitCompareUser = 0;
    };
    proto.cmd_game_zjh.RequestCompareCard = function() {
      this.__className = "proto.cmd_game_zjh.RequestCompareCard";
      this.compareUser = 0;
      this.targetUser = 0;
    };
    proto.cmd_game_zjh.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_ENTER_GAME_SCENCE: 5,
      SUB_GAME_START: 6,
      SUB_ADD_SCORE: 7,
      SUB_LOOK_CARD: 8,
      SUB_GIVE_UP: 9,
      SUB_WAIT_COMPARE: 10,
      SUB_COMPARE_CARD: 11,
      SUB_OPEN_CARD: 12,
      SUB_RESTORE_DATA: 13,
      SUB_GAME_OVER: 14,
      SUB_LEAVE_GAME_RESULT: 15,
      SUB_USER_READY_SUCCESS: 16,
      SUB_EEROR_MSG: 17,
      SUB_C_ADD_SCORE: 31,
      SUB_C_LOOK_CARD: 32,
      SUB_C_GIVE_UP: 33,
      SUB_C_WAIT_COMPARE: 34,
      SUB_C_COMPARE_CARD: 35,
      SUB_C_LEAVE_GAME_SCENE: 36,
      SUB_C_ENTER_FINISH: 37,
      SUB_C_USER_READY: 38
    };
    proto.cmd_game_zjh.TABLE_DISMISSION_STATUS = {
      DISMISSION_STATUS_AGREE: 1,
      DISMISSION_STATUS_DISAGREE: 2
    };
    proto.cmd_game_zjh.TABLE_RULE_ID = {
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
    proto.cmd_game_zjh.CARD_TYPE = {
      CT_SINGLE: 1,
      CT_DOUBLE: 2,
      CT_SHUN_ZI: 3,
      CT_JIN_HUA: 4,
      CT_SHUN_JIN: 5,
      CT_BAO_ZI: 6,
      CT_SPECIAL: 7
    };
    proto.cmd_game_zjh.CARD_STATU = {
      CARD_STATUS_WKP: 1,
      CARD_STATUS_KP: 2,
      CARD_STATUS_WKPBPS: 3,
      CARD_STATUS_KPBPS: 4,
      CARD_STATUS_WKPQP: 5,
      CARD_STATUS_KPQP: 6
    };
    proto.cmd_game_zjh.CONNECT_TYPE = {
      TYPE_RECONNECT: 0,
      TYPE_WATCHER: 1
    };
    cc._RF.pop();
  }, {} ],
  zjhAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89b1ehz1jZFprTJ3uGqyIQD", "zjhAudio");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgm: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u80cc\u666f\u97f3\u6548"
        },
        heguan_ready: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8377\u5b98.\u51c6\u5907\u597d\u4e86\u5417"
        },
        heguan_start: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8377\u5b98.\u5f00\u59cb\u53d1\u724c"
        },
        girl_genzhu_num: 0,
        girl_genzhu: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u5973.\u8ddf\u6ce8"
        },
        girl_jiazhu_num: 0,
        girl_jiazhu: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u5973.\u52a0\u6ce8"
        },
        girl_kanpai_num: 0,
        girl_kanpai: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u5973.\u770b\u724c"
        },
        girl_bipai_num: 0,
        girl_bipai: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u5973.\u6bd4\u724c"
        },
        girl_qipai_num: 0,
        girl_qipai: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u5973.\u5f03\u724c"
        },
        boy_genzhu_num: 0,
        boy_genzhu: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u7537.\u8ddf\u6ce8"
        },
        boy_jiazhu_num: 0,
        boy_jiazhu: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u7537.\u52a0\u6ce8"
        },
        boy_kanpai_num: 0,
        boy_kanpai: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u7537.\u770b\u724c"
        },
        boy_bipai_num: 0,
        boy_bipai: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u7537.\u6bd4\u724c"
        },
        boy_qipai_num: 0,
        boy_qipai: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u7537.\u5f03\u724c"
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      getAudio: function getAudio(name, gender) {
        switch (name) {
         case "bgm":
          return this.bgm;

         case "ready":
          return this.heguan_ready;

         case "start":
          return this.heguan_start;

         case "genzhu":
          if (1 == gender) {
            var n = Math.floor(10 * Math.random() % this.boy_genzhu_num);
            return this.boy_genzhu[n];
          }
          var n = Math.floor(10 * Math.random() % this.girl_genzhu_num);
          return this.girl_genzhu[n];

         case "jiazhu":
          if (1 == gender) {
            var n = Math.floor(10 * Math.random() % this.boy_jiazhu_num);
            return this.boy_jiazhu[n];
          }
          var n = Math.floor(10 * Math.random() % this.girl_jiazhu_num);
          return this.girl_jiazhu[n];

         case "kanpai":
          if (1 == gender) {
            var n = Math.floor(10 * Math.random() % this.boy_kanpai_num);
            return this.boy_kanpai[n];
          }
          var n = Math.floor(10 * Math.random() % this.girl_kanpai_num);
          return this.girl_kanpai[n];

         case "bipai":
          if (1 == gender) {
            var n = Math.floor(10 * Math.random() % this.boy_bipai_num);
            return this.boy_bipai[n];
          }
          var n = Math.floor(10 * Math.random() % this.girl_bipai_num);
          return this.girl_bipai[n];

         case "qipai":
          if (1 == gender) {
            var n = Math.floor(10 * Math.random() % this.boy_qipai_num);
            return this.boy_qipai[n];
          }
          var n = Math.floor(10 * Math.random() % this.girl_qipai_num);
          return this.girl_qipai[n];
        }
        return null;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhBetPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "362e0pQvRNDOZ5x6IhlhF2B", "zjhBetPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labBet: cc.Label,
        labCount: cc.Label,
        labTurns: cc.Label,
        _count: 0
      },
      onLoad: function onLoad() {
        this.clear();
      },
      start: function start() {},
      setBet: function setBet(bet) {
        this.labBet.string = (bet / 1e3).toFixed(2);
      },
      setCount: function setCount(num) {
        this._count = num;
        this.labCount.string = (num / 1e3).toFixed(2);
      },
      setTurns: function setTurns(num) {
        this.labTurns.string = num + "/10";
      },
      addChip: function addChip(num) {
        this._count += num;
        this.labCount.string = (this._count / 1e3).toFixed(2);
      },
      clear: function clear() {
        this.labBet.string = "0";
        this.labCount.string = "0";
        this.labTurns.string = "0";
        this._count = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhCardLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad3d5NYVBlBlaxgeladMGHY", "zjhCardLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        preCard: cc.Prefab,
        preCardType: cc.Prefab,
        preTypeAni: [ cc.Prefab ],
        nodeCard: [ cc.Node ],
        spDealer: cc.Sprite,
        _cardList: [],
        _delegate: cc.Node,
        _cardTypes: []
      },
      onLoad: function onLoad() {
        var visibleSize = cc.view.getVisibleSize();
        for (var i = 0; i < 5; i++) this._cardList[i] = null;
      },
      start: function start() {},
      setDelegate: function setDelegate(delegate) {
        this._delegate = delegate;
      },
      createCard: function createCard(index, values) {
        var cards = [];
        for (var i = 0; i < 3; i++) {
          var card = cc.instantiate(this.preCard);
          card.getComponent("card").onLoad();
          card.position = cc.v2(50 * i, 0);
          card.scale = 1.2;
          this.nodeCard[index].addChild(card);
          cards[i] = card;
          if (0 != values[i]) {
            card.getComponent("card").setBg(0);
            card.getComponent("card").setCardvaule(values[i]);
          } else card.getComponent("card").setBg(1);
        }
        this._cardList[index] = cards;
        var type = cc.instantiate(this.preCardType);
        type.position = cc.v2(50, -50);
        this.nodeCard[index].addChild(type);
        this._cardTypes[index] = type;
      },
      dealCard: function dealCard(callback) {
        var self = this;
        var finishCreateCard = function finishCreateCard(target) {};
        var startCreateCard = function startCreateCard(target, data) {
          target.removeFromParent(true);
          if (true == data["finish"]) {
            this.createCard(data["index"], [ 0, 0, 0 ]);
            true == data["allfinish"] && callback();
          }
        };
        var userList = this._delegate.getUserList();
        for (var i = 0; i < userList.length; i++) {
          if (userList[i].IsLook > 0) continue;
          var index = this._delegate.getIndexByChairID(userList[i].ChairID);
          var startpos = this.spDealer.node.position;
          var endpos = this.nodeCard[index].position;
          for (var j = 0; j < 3; j++) {
            var card = cc.instantiate(this.preCard);
            card.getComponent("card").onLoad();
            card.getComponent("card").setBg(1);
            card.position = startpos;
            this.node.addChild(card);
            var time = cc.delayTime(.1 * j);
            var ani1 = cc.moveTo(.3, endpos);
            var func = cc.callFunc(startCreateCard, this, {
              index: index,
              finish: 2 == j,
              allfinish: i == userList.length - 1
            });
            var sequ = cc.sequence(time, ani1, func);
            card.runAction(sequ);
          }
        }
      },
      dealCardWithoutAnim: function dealCardWithoutAnim() {
        var userList = this._delegate.getUserList();
        for (var i = 0; i < userList.length; i++) {
          if (userList[i].IsLook > 0) continue;
          var index = this._delegate.getIndexByChairID(userList[i].ChairID);
          this.createCard(index, [ 0, 0, 0 ]);
        }
      },
      showCard: function showCard(chairID, cardData) {
        var index = this._delegate.getIndexByChairID(chairID);
        var cards = this._cardList[index];
        for (var i = 0; i < cards.length; i++) {
          cards[i].getComponent("card").setBg(0);
          cards[i].getComponent("card").setCardvaule(cardData[i]);
          cc.log("cardvalue:" + cardData[i]);
        }
      },
      showAllCard: function showAllCard(cardData, cardTypes) {
        var userList = this._delegate.getUserList();
        for (var i = 0; i < userList.length; i++) {
          if (userList[i].IsLook > 0) continue;
          var chairID = userList[i].ChairID;
          this.showCard(chairID, cardData[chairID]);
          var index = this._delegate.getIndexByChairID(chairID);
          this._cardTypes[index].getComponent("zjhCardType").setType(cardTypes[chairID]);
        }
      },
      removeAllCard: function removeAllCard() {
        for (var i = 0; i < 5; i++) this.nodeCard[i].removeAllChildren(true);
        for (var _i = 0; _i < 5; _i++) this._cardList[_i] = null;
      },
      showKanpai: function showKanpai(chairID, val) {
        var index = this._delegate.getIndexByChairID(chairID);
        this._cardTypes[index].getComponent("zjhCardType").setKanpai(val);
      },
      showQipai: function showQipai(chairID, val) {
        var index = this._delegate.getIndexByChairID(chairID);
        this._cardTypes[index].getComponent("zjhCardType").setQipai(val);
      },
      showLose: function showLose(chairID, val) {
        var index = this._delegate.getIndexByChairID(chairID);
        this._cardTypes[index].getComponent("zjhCardType").setLose(val);
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhCardType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18d14Z4ob1KQZFPZykeT7f/", "zjhCardType");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spTypes: {
          type: cc.Sprite,
          default: []
        },
        spQipai: cc.Sprite,
        spKanpai: cc.Sprite,
        spLose: cc.Sprite
      },
      onLoad: function onLoad() {
        for (var i = 0; i < this.spTypes.length; i++) this.spTypes[i].node.active = false;
        this.spQipai.node.active = false;
        this.spKanpai.node.active = false;
        this.spLose.node.active = false;
      },
      start: function start() {},
      setType: function setType(type) {
        var index = type - 1;
        (index < 0 || index >= 6) && (index = 0);
        for (var i = 0; i < this.spTypes.length; i++) if (i == index) {
          this.spTypes[index].node.active = true;
          this.spTypes[index].node.scale = 0;
          this.spTypes[index].node.runAction(cc.sequence(cc.scaleTo(.08, 1.2), cc.scaleTo(.05, .9), cc.scaleTo(.05, 1)));
        } else this.spTypes[i].node.active = false;
        this.spQipai.node.active = false;
        this.spKanpai.node.active = false;
        this.spLose.node.active = false;
      },
      setQipai: function setQipai(val) {
        this.spQipai.node.active = true;
        this.spKanpai.node.active = false;
        this.spLose.node.active = false;
      },
      setKanpai: function setKanpai(val) {
        this.spQipai.node.active = false;
        this.spKanpai.node.active = true;
        this.spLose.node.active = false;
      },
      setLose: function setLose(val) {
        this.spQipai.node.active = false;
        this.spKanpai.node.active = false;
        this.spLose.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhChipItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63e1eCfXQ1AsK7DD3DOy2Uj", "zjhChipItem");
    "use strict";
    var CHIP_NUM = 3;
    cc.Class({
      extends: cc.Component,
      properties: {
        texChip: [ cc.SpriteFrame ],
        spChip: cc.Sprite,
        labNum: cc.Label
      },
      onLoad: function onLoad() {},
      start: function start() {},
      setType: function setType(index) {
        (index < 0 || index >= CHIP_NUM) && (index = 0);
        this.spChip.spriteFrame = this.texChip[index];
      },
      setNumber: function setNumber(num) {
        this.labNum.string = (num / 1e3).toFixed(0);
        this.setType(Math.floor(num / 1e3) % CHIP_NUM);
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhChipLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7bc3++RIxDiKCp/pxz1JMf", "zjhChipLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prePanel: cc.Prefab,
        nodePanel: [ cc.Node ],
        ChipPanel: [ cc.Node ],
        preChipItem: cc.Prefab,
        nodeOut: cc.Node,
        _delegate: cc.Node,
        _panels: [],
        _chips: [],
        _endPos: cc.v2(0, 0)
      },
      onLoad: function onLoad() {
        var visibleSize = cc.view.getVisibleSize();
        for (var i = 0; i < 5; i++) {
          this.ChipPanel[i].getComponent("zjhChipPanel").setNumber(0);
          this.ChipPanel[i].active = false;
          this._panels[i] = this.ChipPanel[i];
        }
        this._chips = [];
        this._endPos = this.nodeOut.position;
      },
      start: function start() {},
      setDelegate: function setDelegate(delegate) {
        this._delegate = delegate;
      },
      showPanel: function showPanel() {
        var userList = this._delegate.getUserList();
        for (var i = 0; i < userList.length; i++) {
          if (userList[i].IsLook > 0) continue;
          var index = this._delegate.getIndexByChairID(userList[i].ChairID);
          this._panels[index].active = true;
        }
      },
      addChipForAllUser: function addChipForAllUser(num, callback) {
        var userList = this._delegate.getUserList();
        for (var i = 0; i < userList.length; i++) this.addChip(userList[i].ChairID, num, callback);
      },
      addChip: function addChip(chairID, num, callback) {
        var index = this._delegate.getIndexByChairID(chairID);
        this._panels[index].getComponent("zjhChipPanel").addNumber(num);
        var startpos = cc.v2(this.nodePanel[index].position.x, this.nodePanel[index].position.y - 100);
        var endpos = cc.v2(this.nodeOut.position.x + 300 * Math.random() - 150, this.nodeOut.position.y + 200 * Math.random() - 100);
        var chip = cc.instantiate(this.preChipItem);
        chip.position = startpos;
        chip.scale = .8;
        chip.getComponent("zjhChipItem").setNumber(num);
        this.node.addChild(chip);
        var ani1 = cc.moveTo(.3, endpos);
        var func = cc.callFunc(callback);
        var sequ = cc.sequence(ani1, func);
        chip.runAction(sequ);
        this._chips.push(chip);
      },
      addChipWithOutAnim: function addChipWithOutAnim(nums) {
        for (var i = 0; i < nums.length; i++) {
          var endpos = cc.v2(this.nodeOut.position.x + 300 * Math.random() - 150, this.nodeOut.position.y + 200 * Math.random() - 100);
          var chip = cc.instantiate(this.preChipItem);
          chip.position = endpos;
          chip.scale = .8;
          chip.getComponent("zjhChipItem").setNumber(nums[i]);
          this.node.addChild(chip);
          this._chips.push(chip);
        }
      },
      dispatchChip: function dispatchChip(chairID, callback) {
        var _this = this;
        if (chairID < 0) {
          callback && callback();
          return;
        }
        var index = this._delegate.getIndexByChairID(chairID);
        var headpos = cc.v2(this.nodePanel[index].position.x, this.nodePanel[index].position.y - 100);
        for (var i = 0; i < this._chips.length; i++) this._chips[i].runAction(cc.sequence(cc.delayTime(1), cc.moveTo(.7, headpos), cc.callFunc(function(node, finish) {
          node.removeFromParent(true);
          if (finish) {
            _this._chips = [];
            callback && callback();
          }
        }, this, i == this._chips.length - 1)));
      },
      setChipNum: function setChipNum(chairID, num) {
        var index = this._delegate.getIndexByChairID(chairID);
        this._panels[index].getComponent("zjhChipPanel").addNumber(num);
      },
      clear: function clear() {
        for (var i = 0; i < this._chips.length; i++) this._chips[i].removeFromParent(true);
        this._chips = [];
        for (var _i = 0; _i < 5; _i++) {
          this._panels[_i].active = false;
          this._panels[_i].getComponent("zjhChipPanel").setNumber(0);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhChipPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46589RrBJdHNIWaY1BhXV8p", "zjhChipPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labChipNum: cc.Label,
        _num: 0
      },
      onLoad: function onLoad() {
        this._num = 0;
      },
      start: function start() {},
      setNumber: function setNumber(num) {
        this._num = num;
        this.labChipNum.string = (num / 1e3).toFixed(2);
      },
      addNumber: function addNumber(num) {
        this._num += num;
        this.setNumber(this._num);
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhCompare: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "877adqyz2FARYF7hbml7oqv", "zjhCompare");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spGray: cc.Sprite,
        nodeCompare: cc.Node,
        nodeUser1: cc.Node,
        nodeUser2: cc.Node,
        nodeVS: cc.Node,
        nodeTips: cc.Node,
        labTips: cc.Label
      },
      onLoad: function onLoad() {
        this.nodeHead1 = this.nodeUser1.getChildByName("sp_head_bg");
        this.labName1 = this.nodeHead1.getChildByName("lab_name").getComponent(cc.Label);
        this.spWin1 = this.nodeUser1.getChildByName("sp_win").getComponent(cc.Sprite);
        this.spLose1 = this.nodeUser1.getChildByName("sp_lose").getComponent(cc.Sprite);
        this.nodeHead2 = this.nodeUser2.getChildByName("sp_head_bg");
        this.labName2 = this.nodeHead2.getChildByName("lab_name").getComponent(cc.Label);
        this.spWin2 = this.nodeUser2.getChildByName("sp_win").getComponent(cc.Sprite);
        this.spLose2 = this.nodeUser2.getChildByName("sp_lose").getComponent(cc.Sprite);
        this.spVS = this.nodeVS.getChildByName("sp_vs").getComponent(cc.Sprite);
        this.clear();
      },
      start: function start() {},
      clear: function clear() {
        this.node.active = false;
        this.nodeCompare.active = false;
        this.nodeTips.active = false;
      },
      showTips: function showTips() {
        this.node.active = true;
        this.nodeCompare.active = false;
        this.nodeTips.active = true;
      },
      showCompare: function showCompare(user1, user2, loseUser, parent, callback) {
        var _this = this;
        this.node.active = true;
        this.nodeCompare.active = true;
        this.nodeTips.active = false;
        var userInfo1 = parent.getUserInfoByChairID(user1);
        userInfo1 && (this.labName1.string = userInfo1.NickName);
        var userInfo2 = parent.getUserInfoByChairID(user2);
        userInfo2 && (this.labName2.string = userInfo2.NickName);
        var pos1 = this.nodeUser1.position;
        this.nodeUser1.x = pos1.x - 1e3;
        this.nodeUser1.stopAllActions();
        this.nodeUser1.runAction(cc.moveTo(.2, pos1));
        var pos2 = this.nodeUser2.position;
        this.nodeUser2.x = pos2.x + 1e3;
        this.nodeUser2.stopAllActions();
        this.nodeUser2.runAction(cc.moveTo(.2, pos2));
        this.nodeVS.scale = 3;
        this.nodeVS.opacity = 0;
        this.nodeVS.stopAllActions();
        this.nodeVS.runAction(cc.sequence(cc.delayTime(.4), cc.fadeIn(.1), cc.scaleTo(.2, 1)));
        var nodeRet1 = null;
        var nodeRet2 = null;
        if (user1 == loseUser) {
          this.spWin2.node.active = true;
          this.spLose1.node.active = true;
          this.spWin1.node.active = false;
          this.spLose2.node.active = false;
          nodeRet1 = this.spLose1.node;
          nodeRet2 = this.spWin2.node;
        } else if (user2 == loseUser) {
          this.spWin1.node.active = true;
          this.spLose2.node.active = true;
          this.spWin2.node.active = false;
          this.spLose1.node.active = false;
          nodeRet1 = this.spWin1.node;
          nodeRet2 = this.spLose2.node;
        }
        nodeRet1.scale = 0;
        nodeRet1.stopAllActions();
        nodeRet1.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.2, 1.2), cc.scaleTo(.1, .9), cc.scaleTo(.1, 1)));
        nodeRet2.scale = 0;
        nodeRet2.stopAllActions();
        nodeRet2.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.2, 1.2), cc.scaleTo(.1, .9), cc.scaleTo(.1, 1)));
        this.nodeCompare.stopAllActions();
        this.nodeCompare.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
          callback();
          _this.clear();
        }, this)));
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6219aoWraBJCL4p7O54SvMH", "zjhConfig");
    "use strict";
    var zjhConfig = {
      HeadPos: []
    };
    module.exports = zjhConfig;
    cc._RF.pop();
  }, {} ],
  zjhGameLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e218ekMZ/JIwqiDQRxb6XMw", "zjhGameLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cardLayer: cc.Node,
        chipLayer: cc.Node,
        preHead: cc.Prefab,
        preOption: cc.Prefab,
        preBetPanel: cc.Prefab,
        preOperator: cc.Prefab,
        preTimer: cc.Prefab,
        preCompare: cc.Prefab,
        preSetBoard: cc.Prefab,
        preRuleBoard: cc.Prefab,
        preRecharge: cc.Prefab,
        btnBack: cc.Button,
        btnOption: cc.Button,
        btnRecharge: cc.Button,
        btnReady: cc.Button,
        nodeHeads: [ cc.Node ],
        HeadItems: [ cc.Node ],
        nodeTimers: [ cc.Node ],
        TimerItems: [ cc.Node ],
        spReadys: [ cc.Node ],
        labScores: [ cc.Label ],
        OperItem: cc.Node,
        OptionItem: cc.Node,
        BetPanel: cc.Node,
        TipsOver: cc.Node,
        labWaitTips: cc.Label,
        AudioNode: cc.Node,
        _optionItem: cc.Node,
        _operNode: cc.Node,
        _betPanel: cc.Node,
        _compareLayer: cc.Node,
        _AudioComp: cc.Node,
        _posHead: [],
        _headList: [],
        _timerList: [],
        _userList: [],
        _myChairID: 0,
        _bankChairID: 0,
        _bet: 0,
        _currentUser: 0,
        _state: 0,
        _userScore: [],
        _userKanpai: [],
        _userQipai: [],
        _userLose: [],
        _lastScore: 0,
        _firstChip: false
      },
      reset: function reset() {
        for (var i = 0; i < 5; i++) {
          this._userScore[i] = 0;
          this._userKanpai[i] = false;
          this._userQipai[i] = false;
          this._userLose[i] = false;
        }
        this._lastScore = 0;
        this._firstChip = true;
        for (var _i = 0; _i < this._userList.length; _i++) this._userList[_i].IsLook = 0;
        this.labWaitTips.node.active = false;
      },
      clearTable: function clearTable() {
        this.node.stopAllActions();
        this._operNode.getComponent("zjhOperItem").hide();
        this.cardLayer.getComponent("zjhCardLayer").removeAllCard();
        this.chipLayer.getComponent("zjhChipLayer").clear();
        this._betPanel.getComponent("zjhBetPanel").clear();
        this.btnReady.node.active = true;
        this.labWaitTips.node.active = true;
        this.startTimer(-1);
        this.setState(bundle.zjh.key.state.FREE);
        for (var i = 0; i < this._headList.length; i++) {
          var headComp = this._headList[i].getComponent("zjhHeadItem");
          headComp.clearFlag();
          headComp.getUserID() != cc.ak.mc.userMgr.uid && headComp.clear();
        }
        for (var i = this._userList.length - 1; i >= 0; i--) {
          var userInfo = this._userList[i];
          if (userInfo.Uid != cc.ak.mc.userMgr.uid) {
            this.setReady(userInfo.ChairID, false);
            this._userList.splice(i, 1);
          }
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var visibleSize = cc.view.getVisibleSize();
        this._posHead = [ cc.v2(200, visibleSize.height / 2 + 230), cc.v2(200, visibleSize.height / 2 - 30), cc.v2(visibleSize.width / 2 - 100, 300), cc.v2(visibleSize.width - 200, visibleSize.height / 2 + 230), cc.v2(visibleSize.width - 200, visibleSize.height / 2 - 30) ];
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          var start = event.getStartLocation();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          var start = event.getLocation();
        });
        this.setState(bundle.zjh.key.state.FREE);
        this.init();
        this.cardLayer.getComponent("zjhCardLayer").setDelegate(this);
        this.chipLayer.getComponent("zjhChipLayer").setDelegate(this);
        var str = "\u6b63\u5728\u4e3a\u60a8\u5339\u914d....";
        var idx = 0;
        this.labWaitTips.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
          _this.labWaitTips.string = str.substr(0, 7 + idx);
          idx++;
          idx > 3 && (idx = 0);
        }, this), cc.delayTime(1))));
        this._AudioComp = this.AudioNode.getComponent("zjhAudio");
        cc.ak.util.audioMgr.playBGM(this._AudioComp.getAudio("bgm"));
      },
      init: function init() {
        var _this2 = this;
        var self = this;
        var visibleSize = cc.view.getVisibleSize();
        cc.log(visibleSize.width + ", " + visibleSize.height);
        this.OperItem.getComponent("zjhOperItem").setDelegate(this);
        this._operNode = this.OperItem;
        this._betPanel = this.BetPanel;
        for (var i = 0; i < 5; i++) {
          this.HeadItems[i].getComponent("zjhHeadItem").clear();
          this.HeadItems[i].getComponent("zjhHeadItem").setDelegate(this);
          this._headList[i] = this.HeadItems[i];
        }
        for (var _i2 = 0; _i2 < 5; _i2++) this._timerList[_i2] = this.TimerItems[_i2];
        this._compareLayer = cc.instantiate(self.preCompare);
        this._compareLayer.zIndex = 100;
        this.node.addChild(this._compareLayer);
        this._optionItem = this.OptionItem;
        this._optionItem.zIndex = 10;
        this._optionItem.getComponent("zjhOptionItem").setCallback(function(key) {
          if ("SETTING" == key) {
            var setboard = cc.instantiate(_this2.preSetBoard);
            setboard.position = cc.v2(visibleSize.width / 2, visibleSize.height / 2);
            setboard.zIndex = 100;
            _this2.node.addChild(setboard);
          } else if ("RULES" == key) {
            var ruleboard = cc.instantiate(_this2.preRuleBoard);
            ruleboard.position = cc.v2(visibleSize.width / 2, visibleSize.height / 2);
            ruleboard.zIndex = 100;
            _this2.node.addChild(ruleboard);
          }
        }, this);
        this.btnBack.node.on("click", function() {
          if (_this2._state != bundle.zjh.key.state.FREE) {
            cc.ak.ui.toast("\u6e38\u620f\u4e2d\u65e0\u6cd5\u9000\u51fa\uff01");
            return;
          }
          var cmd = new proto.cmd_room.RoomChairAction();
          cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
        }, this);
        this.btnOption.node.on("click", function() {
          _this2._optionItem.active = !_this2._optionItem.active;
        }, this);
        this.btnRecharge.node.on("click", function() {
          var shop = cc.instantiate(_this2.preRecharge);
          shop.zIndex = 100;
          shop.parent = _this2.node;
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
        this.btnReady.node.active = false;
        this.btnReady.node.on("click", function() {
          _this2.clearTable();
          _this2.btnReady.node.active = false;
          var cmd = new proto.cmd_room.RoomChairAction();
          cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_SIT_DOWN;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
        }, this);
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          var num = 0;
          for (var i = 0; i < data.Coins.length; i++) num += data.Coins[i].Amount;
          var index = _this2.getIndexByChairID(_this2._myChairID);
          _this2._headList[index].getComponent("zjhHeadItem").addScore(num);
          var msg = "\u8d26\u6237\u8d44\u91d1\u589e\u52a0" + (num / 1e3).toFixed(2) + "\u5143";
          cc.ak.ui.alert({
            text: msg,
            btns: [ "\u786e\u5b9a" ]
          });
        });
      },
      start: function start() {},
      isChairValid: function isChairValid(chairID) {
        return chairID >= 0 && chairID < 5;
      },
      getUserList: function getUserList() {
        return this._userList;
      },
      getMyChairID: function getMyChairID() {
        return this._myChairID;
      },
      getCurrentUser: function getCurrentUser() {
        return this._currentUser;
      },
      getIndexByChairID: function getIndexByChairID(chairID) {
        return (chairID - this._myChairID + 2 + 5) % 5;
      },
      getGameBet: function getGameBet() {
        return this._bet;
      },
      getUserInfoByUserID: function getUserInfoByUserID(userID) {},
      getUserInfoByChairID: function getUserInfoByChairID(chairID) {
        for (var i = 0; i < this._userList.length; i++) {
          var userinfo = this._userList[i];
          if (userinfo.ChairID == chairID) return userinfo;
        }
        return null;
      },
      setState: function setState(state) {
        this._state = state;
      },
      setReady: function setReady(chairID, ready) {
        var index = this.getIndexByChairID(chairID);
        this.spReadys[index].active = ready;
      },
      getGoldNum: function getGoldNum(num) {
        return (num / 1e3).toFixed(2);
      },
      getHeadItem: function getHeadItem(uid) {
        for (var i = 0; i < this._headList.length; i++) {
          var headComp = this._headList[i].getComponent("zjhHeadItem");
          if (headComp.getUserID() == uid) return this._headList[i];
        }
        return null;
      },
      onEnterRoomSucc: function onEnterRoomSucc(data) {},
      updateUserInfo: function updateUserInfo(data) {
        cc.log(data);
        if (data.Uid == cc.ak.mc.userMgr.uid) {
          this._myChairID = data.ChairID;
          cc.log("myChairID: " + this._myChairID);
          if (data.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL) {
            cc.ak.event.off(cc.ak.key.event.COIN_CHANGE);
            cc.ak.ui.loadLobbyScence();
          }
        }
        var flag = false;
        for (var _i3 = 0; _i3 < this._userList.length; _i3++) if (this._userList[_i3].Uid == data.Uid) {
          this._userList[_i3] = data;
          flag = true;
          break;
        }
        false == flag && this._userList.push(data);
        var index = this.getIndexByChairID(data.ChairID);
        for (var i = 0; i < this._headList.length; i++) {
          var headComp = this._headList[i].getComponent("zjhHeadItem");
          headComp.getUserID() == data.Uid && headComp.clear();
          i == index && headComp.setData(data);
        }
      },
      onUserLeave: function onUserLeave(uid) {
        if (this._state != bundle.zjh.key.state.FREE) return;
        var oldChair = 0;
        var flag = false;
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].Uid == uid) {
          oldChair = this._userList[i].ChairID;
          this._userList.splice(i, 1);
          flag = true;
          break;
        }
        if (true == flag) {
          var oldIndex = this.getIndexByChairID(oldChair);
          this._headList[oldIndex].getComponent("zjhHeadItem").clear();
          this.setReady(oldChair, false);
        }
      },
      onUserReady: function onUserReady(data) {
        for (var i = 0; i < this._userList.length; i++) {
          var userinfo = this._userList[i];
          if (userinfo.Uid == data.userId) {
            userinfo.Status = proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_READY;
            this.setReady(userinfo.ChairID, true);
            break;
          }
        }
        data.userId == cc.ak.mc.userMgr.uid && (this.btnReady.node.active = false);
      },
      onGameStart: function onGameStart(data) {
        this.reset();
        var self = this;
        var addChipFinish = function addChipFinish() {
          self._operNode.getComponent("zjhOperItem").show();
          self.startTimer();
        };
        var dealCardFinish = function dealCardFinish() {
          for (var i = 0; i < self._userList.length; i++) self.addChip(self._userList[i].ChairID, data.bet, 0, addChipFinish);
        };
        this._bet = data.bet;
        this._currentUser = data.currentUser;
        this._betPanel.getComponent("zjhBetPanel").setBet(data.bet);
        this.chipLayer.getComponent("zjhChipLayer").showPanel();
        this.cardLayer.getComponent("zjhCardLayer").dealCard(dealCardFinish);
        this._bankChairID = data.bankChair;
        var bankIndex = this.getIndexByChairID(data.bankChair);
        this._headList[bankIndex].getComponent("zjhHeadItem").setBanker();
        this.setState(bundle.zjh.key.state.PLAY);
        for (var i = 0; i < this._userList.length; i++) {
          this.setReady(this._userList[i].ChairID, false);
          this._userList[i].IsLook = 0;
        }
        cc.ak.util.audioMgr.playSFX(this._AudioComp.getAudio("start"));
      },
      onGameRestore: function onGameRestore(data) {
        if (data.connectUser == this._myChairID) {
          this.reset();
          if (data.gameStart > 0) {
            data.compareState > 0 ? this.setState(bundle.zjh.key.state.COMPARE) : this.setState(bundle.zjh.key.state.PLAY);
            this._bet = data.bet;
            this._currentUser = data.currentUser;
            this._lastScore = data.currenScore;
            this._firstChip = data.addCount[this._myChairID] < 1;
            for (var i = 0; i < this._userList.length; i++) {
              var chairID = this._userList[i].ChairID;
              var index = this.getIndexByChairID(chairID);
              this._userKanpai[index] = data.mingZhu[chairID] > 0;
              this._userQipai[index] = data.giveup[chairID] > 0;
              this._userScore[index] = data.tableScore[chairID];
              data.dynamicJoin[chairID] > 0 ? this._userList[i].IsLook = 1 : this._userList[i].IsLook = 0;
              this.setReady(chairID, false);
            }
            this.cardLayer.getComponent("zjhCardLayer").dealCardWithoutAnim();
            this._betPanel.getComponent("zjhBetPanel").setBet(data.bet);
            this._betPanel.getComponent("zjhBetPanel").setCount(data.totalScore);
            this._betPanel.getComponent("zjhBetPanel").setTurns(data.addCount[this._myChairID]);
            this.chipLayer.getComponent("zjhChipLayer").addChipWithOutAnim(data.addchouma);
            this.chipLayer.getComponent("zjhChipLayer").showPanel();
            for (var _i4 = 0; _i4 < this._userList.length; _i4++) {
              var chairID = this._userList[_i4].ChairID;
              var index = this.getIndexByChairID(chairID);
              this.chipLayer.getComponent("zjhChipLayer").setChipNum(chairID, this._userScore[index]);
            }
            this._bankChairID = data.bankChair;
            var bankIndex = this.getIndexByChairID(data.bankChair);
            this._headList[bankIndex].getComponent("zjhHeadItem").setBanker();
            for (var _i5 = 0; _i5 < this._userList.length; _i5++) {
              var chairID = this._userList[_i5].ChairID;
              var index = this.getIndexByChairID(chairID);
              if (data.playStatus[chairID] > 0) this._userKanpai[index] && (chairID == this._myChairID ? this.cardLayer.getComponent("zjhCardLayer").showCard(chairID, data.cardData) : this.cardLayer.getComponent("zjhCardLayer").showKanpai(chairID, true)); else if (this._userQipai[index]) this.cardLayer.getComponent("zjhCardLayer").showQipai(chairID, true); else if (this._userList[_i5].IsLook > 0) ; else {
                this._userLose[index] = true;
                chairID == this._myChairID ? this.cardLayer.getComponent("zjhCardLayer").showCard(chairID, data.cardData) : this.cardLayer.getComponent("zjhCardLayer").showLose(chairID, true);
              }
            }
            this._operNode.getComponent("zjhOperItem").show();
            this.startTimer(data.lefttime);
          } else this.setState(bundle.zjh.key.state.FREE);
        }
      },
      onGameOver: function onGameOver(data) {
        var _this3 = this;
        this._operNode.getComponent("zjhOperItem").hide();
        this._compareLayer.getComponent("zjhCompare").clear();
        this.btnReady.node.active = true;
        this.startTimer(-1);
        this.setState(bundle.zjh.key.state.FREE);
        var CardData = [];
        for (var _i6 = 0; _i6 < 5; _i6++) {
          CardData[_i6] = [];
          for (var j = 0; j < 3; j++) CardData[_i6][j] = data.cardData[3 * _i6 + j];
        }
        this.cardLayer.getComponent("zjhCardLayer").showAllCard(CardData, data.cardtype);
        var winner = -1;
        for (var i = 0; i < data.gameScore.length; i++) if (data.gameScore[i] > 0) {
          winner = i;
          break;
        }
        this.chipLayer.getComponent("zjhChipLayer").dispatchChip(winner, function() {
          for (var i = 0; i < _this3._userList.length; i++) {
            var chairID = _this3._userList[i].ChairID;
            var index = _this3.getIndexByChairID(chairID);
            var pos = _this3.labScores[index].node.position;
            var score = data.gameScore[chairID];
            _this3.labScores[index].string = score > 0 ? "+" + (score / 1e3).toFixed(2) : (score / 1e3).toFixed(2);
            _this3.labScores[index].node.opacity = 255;
            _this3.labScores[index].node.runAction(cc.sequence(cc.moveTo(2, cc.v2(pos.x, pos.y + 50)), cc.fadeOut(2), cc.place(pos)));
            if (score > 0) {
              score += _this3._userScore[index];
              _this3._headList[index].getComponent("zjhHeadItem").addScore(score);
            }
            _this3._userList[i].AccountA += score;
            score > 0 ? _this3._headList[index].getComponent("zjhHeadItem").setWinner() : _this3._headList[index].getComponent("zjhHeadItem").setLoser();
          }
        });
        if (data.openend > 0) {
          this.TipsOver.active = true;
          this.TipsOver.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(2), cc.callFunc(function() {
            _this3.TipsOver.active = false;
          }, this)));
        }
      },
      onOperResult: function onOperResult(data, type) {
        var self = this;
        switch (type) {
         case bundle.zjh.key.event.OPER_ADD_SCORE:
          cc.log("currentUser:" + data.currentUser + ", addScoreUser:" + data.addScoreUser + ", addScore:" + data.addScore);
          var addScoreFinish = function addScoreFinish() {
            self._operNode.getComponent("zjhOperItem").show(type);
            self.startTimer();
          };
          self._currentUser = data.currentUser;
          self.addChip(data.addScoreUser, data.addScore, data.addCount, addScoreFinish);
          1 == data.addtype ? cc.ak.util.audioMgr.playSFX(this._AudioComp.getAudio("jiazhu", this.getGenderByChairID(data.addScoreUser))) : cc.ak.util.audioMgr.playSFX(this._AudioComp.getAudio("genzhu", this.getGenderByChairID(data.addScoreUser)));
          break;

         case bundle.zjh.key.event.OPER_LOOK_CARD:
          cc.log("lookCardUser:" + data.lookCardUser);
          data.lookCardUser == self._myChairID ? self.cardLayer.getComponent("zjhCardLayer").showCard(data.lookCardUser, data.cardData.Cards) : self.cardLayer.getComponent("zjhCardLayer").showKanpai(data.lookCardUser, true);
          var index = self.getIndexByChairID(data.lookCardUser);
          self._userKanpai[index] = true;
          self._operNode.getComponent("zjhOperItem").show(type);
          self.startTimer();
          cc.ak.util.audioMgr.playSFX(this._AudioComp.getAudio("kanpai", this.getGenderByChairID(data.lookCardUser)));
          break;

         case bundle.zjh.key.event.OPER_GIVE_UP:
          cc.log("giveUpUser:" + data.giveUpUser + "currentUser:" + data.currentUser);
          data.giveUpUser == self._myChairID && self.cardLayer.getComponent("zjhCardLayer").showCard(data.giveUpUser, data.cardData.Cards);
          self.cardLayer.getComponent("zjhCardLayer").showQipai(data.giveUpUser, true);
          var index = self.getIndexByChairID(data.giveUpUser);
          self._userQipai[index] = true;
          self._currentUser = data.currentUser;
          self._compareLayer.getComponent("zjhCompare").clear();
          self.onHeadClicked(null);
          self._operNode.getComponent("zjhOperItem").show(type);
          self.startTimer();
          cc.ak.util.audioMgr.playSFX(this._AudioComp.getAudio("qipai", this.getGenderByChairID(data.giveUpUser)));
          break;

         case bundle.zjh.key.event.OPER_COMPARE_WAIT:
          cc.log("compareUserId: " + data.compareUserId);
          break;

         case bundle.zjh.key.event.OPER_COMPARE_CARD:
          cc.log("currentUser:" + data.currentUser + ", compareUser:" + data.compareUser[0] + ", " + data.compareUser[1] + ", loseUser:" + data.loseUser + "addscore:" + data.addscore);
          self._currentUser = data.currentUser;
          var index = self.getIndexByChairID(data.loseUser);
          self._userLose[index] = true;
          self.addChip(data.compareUser[0], data.addscore, data.addCount, function() {});
          var compareFinish = function compareFinish() {
            if (self._myChairID == data.loseUser) {
              self.cardLayer.getComponent("zjhCardLayer").showCard(data.loseUser, data.cardData.Cards);
              self.cardLayer.getComponent("zjhCardLayer").showLose(data.loseUser, true);
            } else self.cardLayer.getComponent("zjhCardLayer").showLose(data.loseUser, true);
            if (self.isChairValid(data.currentUser)) {
              self._operNode.getComponent("zjhOperItem").show(type);
              self.startTimer();
            } else {
              self._operNode.getComponent("zjhOperItem").hide();
              self.startTimer(-1);
            }
          };
          self._compareLayer.getComponent("zjhCompare").clear();
          self._compareLayer.getComponent("zjhCompare").showCompare(data.compareUser[0], data.compareUser[1], data.loseUser, self, compareFinish);
          cc.ak.util.audioMgr.playSFX(this._AudioComp.getAudio("bipai", this.getGenderByChairID(data.compareUser[0])));
        }
      },
      startTimer: function startTimer(num) {
        if (false == this.isChairValid(this._currentUser)) {
          for (var i = 0; i < 5; i++) this._timerList[i].getComponent("zjhTimerItem").setInvalid();
          return;
        }
        var index = this.getIndexByChairID(this._currentUser);
        void 0 == num ? num = 15 : -1 == num && (index = -1);
        for (var i = 0; i < 5; i++) i == index ? this._timerList[index].getComponent("zjhTimerItem").setTimer(num) : this._timerList[i].getComponent("zjhTimerItem").setInvalid();
      },
      startCompare: function startCompare() {
        this.setState(bundle.zjh.key.state.COMPARE);
        this._compareLayer.getComponent("zjhCompare").showTips();
        var count = 0;
        var tempidx = 0;
        for (var i = 0; i < this._userList.length; i++) {
          var chairID = this._userList[i].ChairID;
          var index = this.getIndexByChairID(chairID);
          if (chairID != this._myChairID && false == this._userQipai[index] && false == this._userLose[index] && 0 == this._userList[i].IsLook) {
            this.nodeHeads[index].zIndex = 150;
            this._headList[index].getComponent("zjhHeadItem").setLight(true);
            count++;
            tempidx = i;
          }
        }
        1 == count && this.onHeadClicked(this._userList[tempidx]);
      },
      onHeadClicked: function onHeadClicked(userinfo) {
        if (this._state == bundle.zjh.key.state.COMPARE) {
          if (userinfo) {
            var index = this.getIndexByChairID(userinfo.ChairID);
            if (userinfo.ChairID == this._myChairID || false != this._userQipai[index] || false != this._userLose[index] || 0 != userinfo.IsLook) return;
            var msg = new proto.cmd_game_zjh.RequestCompareCard();
            msg.compareUser = this._myChairID;
            msg.targetUser = userinfo.ChairID;
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_zjh.SUB_CMD_GAME.SUB_C_COMPARE_CARD, msg);
          }
          for (var i = 0; i < 5; i++) {
            this.nodeHeads[i].zIndex = 10;
            this._headList[i].getComponent("zjhHeadItem").setLight(false);
          }
          this.setState(bundle.zjh.key.state.PLAY);
        }
      },
      addChip: function addChip(chairID, addScore, addCount, callback) {
        this.chipLayer.getComponent("zjhChipLayer").addChip(chairID, addScore, callback);
        this._betPanel.getComponent("zjhBetPanel").addChip(addScore);
        chairID == this._myChairID && this._betPanel.getComponent("zjhBetPanel").setTurns(addCount);
        var index = this.getIndexByChairID(chairID);
        this._userScore[index] += addScore;
        true == this._userKanpai[index] ? this._lastScore = addScore / 2 : this._lastScore = addScore;
        chairID == this._myChairID && addCount > 0 && (this._firstChip = false);
        this._headList[index].getComponent("zjhHeadItem").addScore(-addScore);
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].ChairID == chairID) {
          this._userList[i].AccountA -= addScore;
          break;
        }
      },
      checkGold: function checkGold(chairID, needGold) {
        for (var i = 0; i < this._userList.length; i++) {
          var userinfo = this._userList[i];
          if (userinfo.ChairID == chairID) {
            var index = this.getIndexByChairID(chairID);
            if (userinfo.AccountA + userinfo.AccountB >= needGold) return true;
            break;
          }
        }
        return false;
      },
      getGenderByChairID: function getGenderByChairID(chairID) {
        for (var i = 0; i < this._userList.length; i++) if (this._userList[i].ChairID == chairID) return this._userList[i].Sex;
        return 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhHeadItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0982bltqfZKqp9scjrKCxwM", "zjhHeadItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spPanel: cc.Sprite,
        spHeadImg: cc.Sprite,
        labUserName: cc.Label,
        labUserScore: cc.Label,
        spZhuang: cc.Sprite,
        spLight: cc.Sprite,
        spWin: cc.Sprite,
        spLose: cc.Sprite,
        HeadItem: cc.Node,
        _userinfo: null,
        _delegate: null,
        _score: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.spPanel.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this._delegate && _this._delegate.onHeadClicked(_this._userinfo);
        }, this);
      },
      start: function start() {},
      clear: function clear() {
        this.node.active = false;
        this.spZhuang.node.active = false;
        this.spWin.node.active = false;
        this.spLose.node.active = false;
      },
      clearFlag: function clearFlag() {
        this.spZhuang.node.active = false;
        this.spWin.node.active = false;
        this.spLose.node.active = false;
      },
      setData: function setData(data) {
        if (void 0 == data) return;
        this._userinfo = data;
        this._score = data.AccountA + data.AccountB;
        this.node.active = true;
        this.labUserName.string = data.NickName;
        this.labUserScore.string = (this._score / 1e3).toFixed(2);
        var headID = data.HeadImgId ? data.HeadImgId : 0;
        this.HeadItem.getComponent("headAnthologyItem").setAvatar(headID);
      },
      setBanker: function setBanker() {
        this.spZhuang.node.active = true;
      },
      getUserInfo: function getUserInfo() {
        return this._userinfo;
      },
      getUserID: function getUserID() {
        return null != this._userinfo ? this._userinfo.Uid : 0;
      },
      setDelegate: function setDelegate(del) {
        this._delegate = del;
      },
      setLight: function setLight(show) {
        if (show) {
          this.spLight.node.active = true;
          var ani1 = cc.fadeTo(1, 100);
          var ani2 = cc.fadeIn(1);
          var sequ = cc.sequence(ani1, ani2);
          this.spLight.node.runAction(cc.repeatForever(sequ));
        } else {
          this.spLight.node.active = false;
          this.spLight.node.stopAllActions();
        }
      },
      addScore: function addScore(num) {
        this._score += num;
        this.labUserScore.string = (this._score / 1e3).toFixed(2);
      },
      setWinner: function setWinner() {
        this.spWin.node.active = true;
      },
      setLoser: function setLoser() {
        this.spLose.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd4e0+S19VBP7Vx4F3YEsGh", "zjhInit");
    "use strict";
    var ZjhInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "zjh"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("zjh module init!");
        bundle.zjh = {};
        bundle.zjh.key = {};
        bundle.zjh.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initZjhData: function initZjhData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.zjh.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.zjh.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.zjh.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ",
          USERINFO_PUSH: "user_info_push"
        };
        bundle.zjh.key.state = {
          FREE: 0,
          PLAY: 1,
          COMPARE: 2
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.zjh.key.event = {
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
          ENTER_SETTLEMENT_SCENE: "ENTER_SETTLEMENT_SCENE",
          OPER_ADD_SCORE: "OPER_ADD_SCORE",
          OPER_LOOK_CARD: "OPER_LOOK_CARD",
          OPER_GIVE_UP: "OPER_GIVE_UP",
          OPER_COMPARE_WAIT: "OPER_COMPARE_WAIT",
          OPER_COMPARE_CARD: "OPER_COMPARE_CARD"
        };
      },
      initCache: function initCache() {},
      initGlobalEventHandle: function initGlobalEventHandle() {
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + ZjhInit.id, function(data) {
          cc.log("ENTER_GAME_SCENE");
          bundle.zjh.data.set(bundle.zjh.key.data.ENTER_ROOM_SUCC, data);
          if ("zjhGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("zjhGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + ZjhInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== ZjhInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = ZjhInit;
    cc._RF.pop();
  }, {} ],
  zjhManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19b3a60qRxL6odfxPlZAiP8", "zjhManager");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        uiLayer: cc.Node
      },
      onLoad: function onLoad() {
        cc.log("zjhManager onLoad");
        this.initProto();
      },
      start: function start() {
        cc.log("ENTER_GAME_SCENE_FINISH");
        cc.ak.util.utils.loadGameSceneFinish();
      },
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_MATCH_SUCC, function(dv) {
          var data = new proto.cmd_base_info.EnterRoomSucc();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          bundle.zjh.data.set(bundle.zjh.key.data.ENTER_ROOM_SUCC, data);
        }, this);
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_ENTER_GAME_SCENCE, "EnterRoomSucc", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onEnterRoomSucc(data);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_USERINFO_PUSH, "UserInfo", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").updateUserInfo(data);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_LEAVE_GAME_RESULT, "LeaveGameResult", function(data) {
          data.userId == cc.ak.mc.userMgr.uid ? cc.ak.ui.loadLobbyScence() : _this.uiLayer.getComponent("zjhGameLayer").onUserLeave(data.userId);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_USER_READY_SUCCESS, "ReadySuccess", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onUserReady(data);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_GAME_START, "GameStart", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onGameStart(data);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_RESTORE_DATA, "RestoreData", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onGameRestore(data);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_GAME_OVER, "GameOver", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onGameOver(data);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_ADD_SCORE, "AddScore", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onOperResult(data, bundle.zjh.key.event.OPER_ADD_SCORE);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_LOOK_CARD, "LookCard", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onOperResult(data, bundle.zjh.key.event.OPER_LOOK_CARD);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_GIVE_UP, "GiveUp", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onOperResult(data, bundle.zjh.key.event.OPER_GIVE_UP);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_WAIT_COMPARE, "WaitCompare", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onOperResult(data, bundle.zjh.key.event.OPER_COMPARE_WAIT);
        });
        this.registerMsg(proto.cmd_game_zjh.SUB_CMD_GAME.SUB_COMPARE_CARD, "CompareCard", function(data) {
          _this.uiLayer.getComponent("zjhGameLayer").onOperResult(data, bundle.zjh.key.event.OPER_COMPARE_CARD);
        });
      },
      registerMsg: function registerMsg(nSubID, tabName, callback) {
        nSubID == proto.cmd_game_zjh.SUB_CMD_GAME.SUB_USERINFO_PUSH ? cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_base_info.UserInfo();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this) : cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_game_zjh[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhOperItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50ce8urFh1Am6+v8EyzNmgl", "zjhOperItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnKanpai: cc.Button,
        btnBipai: cc.Button,
        btnJiazhu: cc.Button,
        btnGenzhu: cc.Button,
        btnQipai: cc.Button,
        spfXiazhu: cc.SpriteFrame,
        spfGenzhu: cc.SpriteFrame,
        spGenPanel: cc.Sprite,
        labGenScore: cc.Label,
        spJiaPanel: cc.Sprite,
        btnJiaScore: {
          default: [],
          type: cc.Button
        },
        labJiaScore: {
          default: [],
          type: cc.Label
        },
        _delegate: cc.Node,
        _opration: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        var self = this;
        this.hide();
        this.spGenPanel.node.active = false;
        this.spJiaPanel.node.active = false;
        this.btnBipai.active = true;
        this.btnKanpai.active = true;
        this.btnJiazhu.active = true;
        this.btnGenzhu.active = true;
        this.btnQipai.active = true;
        var index = this._delegate.getIndexByChairID(this._delegate._myChairID);
        this.btnGenzhu.node.on("click", function() {
          if (false == self._delegate.checkGold(self._delegate.getMyChairID(), self.getGenzhuScore())) {
            cc.ak.ui.toast("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3!");
            return;
          }
          var msg = new proto.cmd_game_zjh.RequestAddScore();
          msg.addScoreUser = self._delegate.getMyChairID();
          msg.addScore = 0;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_zjh.SUB_CMD_GAME.SUB_C_ADD_SCORE, msg);
          self.hide();
        }, this);
        this.btnJiazhu.node.on("click", function() {
          self.spJiaPanel.node.active = !self.spJiaPanel.node.active;
          for (var i = 0; i < 3; i++) true == self._delegate._userKanpai[index] ? self.labJiaScore[i].string = (2 * (self._delegate.getGameBet() * (i + 1) + self._delegate._lastScore) / 1e3).toFixed(2) : self.labJiaScore[i].string = ((self._delegate.getGameBet() * (i + 1) + self._delegate._lastScore) / 1e3).toFixed(2);
        }, this);
        this.btnKanpai.node.on("click", function() {
          var msg = new proto.cmd_game_zjh.RequestLookCard();
          msg.lookCardUser = self._delegate.getMyChairID();
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_zjh.SUB_CMD_GAME.SUB_C_LOOK_CARD, msg);
          self.hide();
        }, this);
        this.btnBipai.node.on("click", function() {
          var myChairID = _this._delegate.getMyChairID();
          if (false == _this._delegate.checkGold(myChairID, _this.getGenzhuScore())) {
            cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u591f\u6bd4\u724c\uff01");
            return;
          }
          self._delegate.startCompare();
          self.hide();
        }, this);
        this.btnQipai.node.on("click", function() {
          var msg = new proto.cmd_game_zjh.RequestGiveUp();
          msg.giveUpUser = self._delegate.getMyChairID();
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_zjh.SUB_CMD_GAME.SUB_C_GIVE_UP, msg);
          self.hide();
        }, this);
        var _loop = function _loop(i) {
          _this.btnJiaScore[i].node.on("click", function(event) {
            if (false == self._delegate.checkGold(self._delegate.getMyChairID(), self.getJiazhuScore(i))) {
              cc.ak.ui.toast("\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3!");
              return;
            }
            var msg = new proto.cmd_game_zjh.RequestAddScore();
            msg.addScoreUser = self._delegate.getMyChairID();
            true == self._delegate._userKanpai[index] ? msg.addScore = self._delegate.getGameBet() * (i + 1) * 2 : msg.addScore = self._delegate.getGameBet() * (i + 1);
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_zjh.SUB_CMD_GAME.SUB_C_ADD_SCORE, msg);
            self.hide();
          }, _this);
        };
        for (var i = 0; i < 3; i++) _loop(i);
      },
      start: function start() {},
      show: function show(type) {
        var myChairID = this._delegate.getMyChairID();
        var index = this._delegate.getIndexByChairID(myChairID);
        if (this._delegate.getCurrentUser() == myChairID) {
          this.btnBipai.interactable = true;
          this.btnKanpai.interactable = true;
          this.btnJiazhu.interactable = true;
          this.btnGenzhu.interactable = true;
          this.btnQipai.interactable = true;
          type == bundle.zjh.key.event.OPER_LOOK_CARD && (this.btnKanpai.interactable = false);
          true == this._delegate._firstChip && (this.btnBipai.interactable = false);
          this._delegate._bankChairID == myChairID && (this._delegate._firstChip ? this.btnGenzhu.getComponent(cc.Sprite).spriteFrame = this.spfXiazhu : this.btnGenzhu.getComponent(cc.Sprite).spriteFrame = this.spfGenzhu);
          true == this._delegate._userKanpai[index] && (this.btnKanpai.interactable = false);
          if (false == this._delegate.checkGold(myChairID, this.getGenzhuScore())) {
            this.btnGenzhu.interactable = false;
            this.btnJiazhu.interactable = false;
          } else false == this._delegate.checkGold(myChairID, this.getJiazhuScore(0)) && (this.btnJiazhu.interactable = false);
          this.node.active = true;
          this.spGenPanel.node.active = true;
          true == this._delegate._userKanpai[index] ? this.labGenScore.string = (2 * this._delegate._lastScore / 1e3).toFixed(2) : this.labGenScore.string = (this._delegate._lastScore / 1e3).toFixed(2);
          this.spJiaPanel.node.active = false;
        } else this.node.active = false;
      },
      hide: function hide() {
        this.node.active = false;
      },
      setDelegate: function setDelegate(delegate) {
        this._delegate = delegate;
      },
      getGenzhuScore: function getGenzhuScore() {
        var index = this._delegate.getIndexByChairID(this._delegate._myChairID);
        return true == this._delegate._userKanpai[index] ? 2 * this._delegate._lastScore : this._delegate._lastScore;
      },
      getJiazhuScore: function getJiazhuScore(i) {
        var index = this._delegate.getIndexByChairID(this._delegate._myChairID);
        return true == this._delegate._userKanpai[index] ? 2 * (this._delegate.getGameBet() * (i + 1) + this._delegate._lastScore) : this._delegate.getGameBet() * (i + 1) + this._delegate._lastScore;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhOptionItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7998eLCGNDnpJFKX934nxB", "zjhOptionItem");
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
      start: function start() {},
      setCallback: function setCallback(callback) {
        this._callback = callback;
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhRules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "279fdMNpqFDY59OeBYM7Ez8", "zjhRules");
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
          _this.node.removeFromParent(true);
        }, this);
        this.spGray.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          return true;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  zjhSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12b864GB6VGaZ6boc/lZw9L", "zjhSetting");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClose: cc.Button,
        spGray: cc.Node,
        SliderMusic: cc.Slider,
        SliderSound: cc.Slider
      },
      onLoad: function onLoad() {
        var _this = this;
        this._spSoundBar = this.SliderSound.node.getChildByName("sp_bar");
        this._spMusicBar = this.SliderMusic.node.getChildByName("sp_bar");
        cc.ak.util.audioMgr.getSFXVolume() ? this.SliderSound.progress = cc.ak.util.audioMgr.getSFXVolume() : this.SliderSound.progress = .5;
        cc.ak.util.audioMgr.getBGMVolume() ? this.SliderMusic.progress = cc.ak.util.audioMgr.getBGMVolume() : this.SliderMusic.progress = .5;
        this._spSoundBar.width = 640 * this.SliderSound.progress;
        this._spMusicBar.width = 640 * this.SliderMusic.progress;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
      },
      onSoundSliderEvent: function onSoundSliderEvent(sender, eventType) {
        this._spSoundBar.width = 640 * sender.progress;
        cc.ak.util.audioMgr.setSFXVolume(sender.progress);
      },
      onMusicSliderEvent: function onMusicSliderEvent(sender, eventType) {
        this._spMusicBar.width = 640 * sender.progress;
        cc.ak.util.audioMgr.setBGMVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  zjhTimerItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37f17Eb79lEnabHHX7tXCof", "zjhTimerItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labNum: cc.Label,
        _num: 0
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {},
      setTimer: function setTimer(num) {
        var self = this;
        self._num = num;
        self.node.active = true;
        self.labNum.string = num;
        var callback = function callback() {
          self._num = self._num - 1;
          if (self._num < 0) {
            self._num = 0;
            self.node.stopAllActions();
          }
          self.labNum.string = self._num;
        };
        var time = cc.delayTime(1);
        var func = cc.callFunc(callback);
        var sequ = cc.sequence(time, func);
        this.node.stopAllActions();
        this.node.runAction(cc.repeatForever(sequ));
      },
      setInvalid: function setInvalid() {
        this.node.active = false;
        this.node.stopAllActions();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "zjhConfig", "zjhAudio", "zjhBetPanel", "zjhCardType", "zjhChipItem", "zjhChipPanel", "zjhCompare", "zjhHeadItem", "zjhOperItem", "zjhOptionItem", "zjhRules", "zjhSetting", "zjhTimerItem", "zjhCardLayer", "zjhChipLayer", "zjhGameLayer", "cmd_game_zjh", "zjhManager", "zjhInit" ]);