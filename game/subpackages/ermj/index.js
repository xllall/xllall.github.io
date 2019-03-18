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
  cmd_game_ermj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f55dcsh4ltDRZsfmdX0jhRn", "cmd_game_ermj");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_ermj = {};
    proto.cmd_game_ermj.__cfg = {};
    (function(cfg) {
      cfg.TableRule = {
        0: {
          na: "baseRule",
          ty: "byte",
          ar: 1
        },
        1: {
          na: "cardNumber",
          ty: "int",
          ar: 1
        }
      };
      cfg.HandCard = {
        1: {
          na: "cards",
          ty: "int",
          ar: 1
        }
      };
      cfg.HuaCards = {
        1: {
          na: "cards",
          ty: "int",
          ar: 1
        }
      };
      cfg.OutCards = {
        1: {
          na: "cards",
          ty: "int",
          ar: 1
        }
      };
      cfg.HandleGroup = {
        1: {
          na: "type",
          ty: "int"
        },
        2: {
          na: "card",
          ty: "int"
        },
        3: {
          na: "cards",
          ty: "int",
          ar: 1
        }
      };
      cfg.HandleGroups = {
        1: {
          na: "handlgroup",
          ty: "HandleGroup",
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
      cfg.GameInit = {
        1: {
          na: "bet",
          ty: "int"
        },
        2: {
          na: "menfeng",
          ty: "int"
        },
        3: {
          na: "quanfeng",
          ty: "int"
        }
      };
      cfg.GameStart = {
        1: {
          na: "isstart",
          ty: "int"
        }
      };
      cfg.PerflopMsg = {
        1: {
          na: "bankChair",
          ty: "int"
        },
        2: {
          na: "handcard",
          ty: "HandCard",
          ar: 1
        },
        3: {
          na: "remainCardNum",
          ty: "int"
        },
        4: {
          na: "card",
          ty: "int"
        },
        5: {
          na: "handle",
          ty: "int"
        },
        6: {
          na: "handleGroup",
          ty: "HandleGroup",
          ar: 1
        },
        7: {
          na: "tingcards",
          ty: "int",
          ar: 1
        },
        8: {
          na: "havebuhua",
          ty: "int"
        }
      };
      cfg.StartBuHuaMsg = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "buhuaCard",
          ty: "int",
          ar: 1
        },
        3: {
          na: "getCard",
          ty: "int",
          ar: 1
        }
      };
      cfg.EndBuHuaMsg = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "handle",
          ty: "int"
        },
        3: {
          na: "handleGroup",
          ty: "HandleGroup",
          ar: 1
        },
        4: {
          na: "tingcards",
          ty: "int",
          ar: 1
        }
      };
      cfg.GetACard = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "card",
          ty: "int"
        },
        3: {
          na: "handle",
          ty: "int"
        },
        4: {
          na: "handleGroup",
          ty: "HandleGroup",
          ar: 1
        },
        5: {
          na: "tingcards",
          ty: "int",
          ar: 1
        },
        6: {
          na: "autoplay",
          ty: "int"
        },
        7: {
          na: "getback",
          ty: "int"
        }
      };
      cfg.OutCard = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "card",
          ty: "int"
        },
        3: {
          na: "autoplay",
          ty: "int"
        }
      };
      cfg.CardHandle = {
        1: {
          na: "handle",
          ty: "int"
        },
        2: {
          na: "handleGroup",
          ty: "HandleGroup",
          ar: 1
        }
      };
      cfg.HandleResult = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "provideUser",
          ty: "int"
        },
        3: {
          na: "provideHandle",
          ty: "int"
        },
        4: {
          na: "handleGroup",
          ty: "HandleGroup"
        },
        5: {
          na: "nextHandle",
          ty: "int"
        },
        6: {
          na: "nextHandleGroup",
          ty: "HandleGroup",
          ar: 1
        },
        7: {
          na: "tingcards",
          ty: "int",
          ar: 1
        }
      };
      cfg.HandleTing = {
        1: {
          na: "chairId",
          ty: "int"
        }
      };
      cfg.RestoreData = {
        1: {
          na: "conenctType",
          ty: "int"
        },
        2: {
          na: "bet",
          ty: "int"
        },
        3: {
          na: "bankChair",
          ty: "int"
        },
        4: {
          na: "remainCardNum",
          ty: "int"
        },
        5: {
          na: "turn",
          ty: "int"
        },
        6: {
          na: "lastTurn",
          ty: "int"
        },
        7: {
          na: "lastCard",
          ty: "int"
        },
        8: {
          na: "handcard",
          ty: "HandCard",
          ar: 1
        },
        9: {
          na: "handle",
          ty: "int"
        },
        10: {
          na: "handleGroup",
          ty: "HandleGroup",
          ar: 1
        },
        11: {
          na: "outcards",
          ty: "OutCards",
          ar: 1
        },
        12: {
          na: "cardGroup",
          ty: "HandleGroups",
          ar: 1
        },
        13: {
          na: "huacards",
          ty: "HuaCards",
          ar: 1
        },
        14: {
          na: "baoting",
          ty: "int",
          ar: 1
        },
        15: {
          na: "tingcards",
          ty: "int",
          ar: 1
        },
        16: {
          na: "offline",
          ty: "int",
          ar: 1
        },
        17: {
          na: "trustee",
          ty: "int",
          ar: 1
        },
        18: {
          na: "timeleft",
          ty: "int"
        },
        19: {
          na: "gamestage",
          ty: "int"
        },
        20: {
          na: "gangCardnum",
          ty: "int"
        }
      };
      cfg.GameOver = {
        1: {
          na: "provideUser",
          ty: "int"
        },
        2: {
          na: "provideCard",
          ty: "int"
        },
        3: {
          na: "winner",
          ty: "int"
        },
        4: {
          na: "zimo",
          ty: "int"
        },
        5: {
          na: "flowBureau",
          ty: "int"
        },
        6: {
          na: "huFanShu",
          ty: "int"
        },
        7: {
          na: "rate",
          ty: "int"
        },
        8: {
          na: "huFantype",
          ty: "int",
          ar: 1
        },
        9: {
          na: "GameScore",
          ty: "int",
          ar: 1
        },
        10: {
          na: "handcard",
          ty: "HandCard",
          ar: 1
        },
        11: {
          na: "cardGroup",
          ty: "HandleGroups",
          ar: 1
        },
        12: {
          na: "guohucount",
          ty: "int"
        }
      };
      cfg.Trustee = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "trustee",
          ty: "int"
        }
      };
      cfg.ReadySuccess = {
        1: {
          na: "userId",
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
      cfg.RequestFinishBuHua = {
        1: {
          na: "chairId",
          ty: "int"
        }
      };
      cfg.RequestOutCard = {
        1: {
          na: "card",
          ty: "int"
        },
        2: {
          na: "tingtype",
          ty: "int"
        }
      };
      cfg.RequestCardHandle = {
        1: {
          na: "handle",
          ty: "int"
        },
        2: {
          na: "handleGroup",
          ty: "HandleGroup"
        },
        3: {
          na: "notdianguo",
          ty: "int"
        }
      };
      cfg.RequestTrustee = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "trustee",
          ty: "int"
        }
      };
    })(proto.cmd_game_ermj.__cfg);
    proto.cmd_game_ermj.TableRule = function() {
      this.__className = "proto.cmd_game_ermj.TableRule";
      this.baseRule = null;
      this.cardNumber = null;
    };
    proto.cmd_game_ermj.HandCard = function() {
      this.__className = "proto.cmd_game_ermj.HandCard";
      this.cards = null;
    };
    proto.cmd_game_ermj.HuaCards = function() {
      this.__className = "proto.cmd_game_ermj.HuaCards";
      this.cards = null;
    };
    proto.cmd_game_ermj.OutCards = function() {
      this.__className = "proto.cmd_game_ermj.OutCards";
      this.cards = null;
    };
    proto.cmd_game_ermj.HandleGroup = function() {
      this.__className = "proto.cmd_game_ermj.HandleGroup";
      this.type = 0;
      this.card = 0;
      this.cards = null;
    };
    proto.cmd_game_ermj.HandleGroups = function() {
      this.__className = "proto.cmd_game_ermj.HandleGroups";
      this.handlgroup = null;
    };
    proto.cmd_game_ermj.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_ermj.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_ermj.GameInit = function() {
      this.__className = "proto.cmd_game_ermj.GameInit";
      this.bet = 0;
      this.menfeng = 0;
      this.quanfeng = 0;
    };
    proto.cmd_game_ermj.GameStart = function() {
      this.__className = "proto.cmd_game_ermj.GameStart";
      this.isstart = 0;
    };
    proto.cmd_game_ermj.PerflopMsg = function() {
      this.__className = "proto.cmd_game_ermj.PerflopMsg";
      this.bankChair = 0;
      this.handcard = null;
      this.remainCardNum = 0;
      this.card = 0;
      this.handle = 0;
      this.handleGroup = null;
      this.tingcards = null;
      this.havebuhua = 0;
    };
    proto.cmd_game_ermj.StartBuHuaMsg = function() {
      this.__className = "proto.cmd_game_ermj.StartBuHuaMsg";
      this.chairId = 0;
      this.buhuaCard = null;
      this.getCard = null;
    };
    proto.cmd_game_ermj.EndBuHuaMsg = function() {
      this.__className = "proto.cmd_game_ermj.EndBuHuaMsg";
      this.chairId = 0;
      this.handle = 0;
      this.handleGroup = null;
      this.tingcards = null;
    };
    proto.cmd_game_ermj.GetACard = function() {
      this.__className = "proto.cmd_game_ermj.GetACard";
      this.chairId = 0;
      this.card = 0;
      this.handle = 0;
      this.handleGroup = null;
      this.tingcards = null;
      this.autoplay = 0;
      this.getback = 0;
    };
    proto.cmd_game_ermj.OutCard = function() {
      this.__className = "proto.cmd_game_ermj.OutCard";
      this.chairId = 0;
      this.card = 0;
      this.autoplay = 0;
    };
    proto.cmd_game_ermj.CardHandle = function() {
      this.__className = "proto.cmd_game_ermj.CardHandle";
      this.handle = 0;
      this.handleGroup = null;
    };
    proto.cmd_game_ermj.HandleResult = function() {
      this.__className = "proto.cmd_game_ermj.HandleResult";
      this.chairId = 0;
      this.provideUser = 0;
      this.provideHandle = 0;
      this.handleGroup = null;
      this.nextHandle = 0;
      this.nextHandleGroup = null;
      this.tingcards = null;
    };
    proto.cmd_game_ermj.HandleTing = function() {
      this.__className = "proto.cmd_game_ermj.HandleTing";
      this.chairId = 0;
    };
    proto.cmd_game_ermj.RestoreData = function() {
      this.__className = "proto.cmd_game_ermj.RestoreData";
      this.conenctType = 0;
      this.bet = 0;
      this.bankChair = 0;
      this.remainCardNum = 0;
      this.turn = 0;
      this.lastTurn = 0;
      this.lastCard = 0;
      this.handcard = null;
      this.handle = 0;
      this.handleGroup = null;
      this.outcards = null;
      this.cardGroup = null;
      this.huacards = null;
      this.baoting = null;
      this.tingcards = null;
      this.offline = null;
      this.trustee = null;
      this.timeleft = 0;
      this.gamestage = 0;
      this.gangCardnum = 0;
    };
    proto.cmd_game_ermj.GameOver = function() {
      this.__className = "proto.cmd_game_ermj.GameOver";
      this.provideUser = 0;
      this.provideCard = 0;
      this.winner = 0;
      this.zimo = 0;
      this.flowBureau = 0;
      this.huFanShu = 0;
      this.rate = 0;
      this.huFantype = null;
      this.GameScore = null;
      this.handcard = null;
      this.cardGroup = null;
      this.guohucount = 0;
    };
    proto.cmd_game_ermj.Trustee = function() {
      this.__className = "proto.cmd_game_ermj.Trustee";
      this.chairId = 0;
      this.trustee = 0;
    };
    proto.cmd_game_ermj.ReadySuccess = function() {
      this.__className = "proto.cmd_game_ermj.ReadySuccess";
      this.userId = 0;
    };
    proto.cmd_game_ermj.LeaveGameResult = function() {
      this.__className = "proto.cmd_game_ermj.LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_ermj.ErrorMsg = function() {
      this.__className = "proto.cmd_game_ermj.ErrorMsg";
      this.errortype = 0;
    };
    proto.cmd_game_ermj.RequestFinishBuHua = function() {
      this.__className = "proto.cmd_game_ermj.RequestFinishBuHua";
      this.chairId = 0;
    };
    proto.cmd_game_ermj.RequestOutCard = function() {
      this.__className = "proto.cmd_game_ermj.RequestOutCard";
      this.card = 0;
      this.tingtype = 0;
    };
    proto.cmd_game_ermj.RequestCardHandle = function() {
      this.__className = "proto.cmd_game_ermj.RequestCardHandle";
      this.handle = 0;
      this.handleGroup = null;
      this.notdianguo = 0;
    };
    proto.cmd_game_ermj.RequestTrustee = function() {
      this.__className = "proto.cmd_game_ermj.RequestTrustee";
      this.chairId = 0;
      this.trustee = 0;
    };
    proto.cmd_game_ermj.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_ENTER_GAME_SCENCE: 5,
      SUB_GAME_INIT: 6,
      SUB_GAME_START: 7,
      SUB_GAME_DICE: 8,
      SUB_DICE_RESULT: 9,
      SUB_GAME_PERFLOP: 10,
      SUB_GAME_START_BUHUA: 11,
      SUB_GAME_END_BUHUA: 12,
      SUB_GET_CARD: 13,
      SUB_OUT_CARD: 14,
      SUB_CARD_HANDLE: 15,
      SUB_HANDLE_RESULT: 16,
      SUB_HANDLE_TING: 17,
      SUB_RESTORE_DATA: 18,
      SUB_GAME_OVER: 19,
      SUB_GAME_TRUSTEE: 20,
      SUB_LEAVE_GAME_RESULT: 21,
      SUB_USER_READY_SUCCESS: 22,
      SUB_EEROR_MSG: 23,
      SUB_C_FINISH_BUHUA: 30,
      SUB_C_OUT_CARD: 31,
      SUB_C_CARD_HANDLE: 32,
      SUB_C_GAME_TRUSTEE: 33,
      SUB_C_LEAVE_GAME_SCENE: 34,
      SUB_C_ENTER_FINISH: 35,
      SUB_C_USER_READY: 36
    };
    proto.cmd_game_ermj.TABLE_RULE_ID = {
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
    proto.cmd_game_ermj.CONNECT_TYPE = {
      TYPE_RECONNECT: 0,
      TYPE_WATCHER: 1
    };
    cc._RF.pop();
  }, {} ],
  ermjActionList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc6f4P27ChJb6/klq9VhOzd", "ermjActionList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _ActionList: [],
        _mutex: false
      },
      onLoad: function onLoad() {},
      start: function start() {},
      push: function push(data, body, fini) {
        var action = {
          data: data,
          body: body,
          fini: fini,
          sign: false
        };
        this._ActionList.push(action);
      },
      pop: function pop() {
        if (this._ActionList.length <= 0) return;
        this._ActionList[0].fini(this._ActionList[0].data);
        this._ActionList.splice(0, 1);
        this._mutex = false;
      },
      popall: function popall() {
        for (var i = 0; i < this._ActionList.length; i++) this._ActionList[i].fini(this._ActionList[i].data);
        this.clear();
      },
      clear: function clear() {
        this._ActionList = [];
        this._mutex = false;
      },
      delay: function delay(time) {
        var _this = this;
        this.push({}, function() {
          _this.node.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(function() {
            _this.pop();
          })));
        }, function() {
          _this.node.stopAllActions();
        });
      },
      empty: function empty() {
        return this._ActionList.length <= 0;
      },
      update: function update(dt) {
        if (this._ActionList.length <= 0) return;
        if (false == this._mutex) {
          this._ActionList[0].data.sign = true;
          this._ActionList[0].body(this._ActionList[0].data);
          this._mutex = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c8b9lf4YFFDqAOba8yEHZ+", "ermjAction");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preOpers: [ cc.Prefab ],
        ActionMy: cc.Node,
        ActionOp: cc.Node,
        sfPanel: [ cc.SpriteFrame ],
        sfText: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {},
      playOperAction: function playOperAction(index, operate) {
        var _this = this;
        var node = null;
        if (operate == def.Operate.CHI) node = cc.instantiate(this.preOpers[0]); else if (operate == def.Operate.PENG) node = cc.instantiate(this.preOpers[1]); else if (operate == def.Operate.GANG_MING || operate == def.Operate.GANG_AN || operate == def.Operate.GANG_BU) node = cc.instantiate(this.preOpers[2]); else if (operate == def.Operate.TING) node = cc.instantiate(this.preOpers[3]); else {
          if (operate != def.Operate.HU) return;
          node = cc.instantiate(this.preOpers[4]);
        }
        var pos = cc.v2(0, 120);
        index == def.MY_INDEX && (pos = cc.v2(0, -350));
        node.position = pos;
        node.parent = this.node;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
          _this.node.removeAllChildren(true);
        }, this)));
      },
      play: function play(index, operate) {
        var ActionNode = null;
        ActionNode = index == def.MY_INDEX ? this.ActionMy : this.ActionOp;
        ActionNode.active = true;
        var spPanel = ActionNode.getChildByName("sp_panel").getComponent(cc.Sprite);
        var spText = ActionNode.getChildByName("sp_text").getComponent(cc.Sprite);
        if (operate == def.Operate.CHI) {
          spPanel.spriteFrame = this.sfPanel[0];
          spText.spriteFrame = this.sfText[0];
        }
        if (operate == def.Operate.PENG) {
          spPanel.spriteFrame = this.sfPanel[1];
          spText.spriteFrame = this.sfText[1];
        }
        if (operate == def.Operate.GANG_MING || operate == def.Operate.GANG_AN || operate == def.Operate.GANG_BU) {
          spPanel.spriteFrame = this.sfPanel[2];
          spText.spriteFrame = this.sfText[2];
        }
        if (operate == def.Operate.TING) {
          spPanel.spriteFrame = this.sfPanel[3];
          spText.spriteFrame = this.sfText[3];
        }
        if (operate == def.Operate.HU) {
          spPanel.spriteFrame = this.sfPanel[4];
          spText.spriteFrame = this.sfText[4];
        }
        spPanel.node.scale = 0;
        spPanel.node.runAction(cc.sequence(cc.scaleTo(.1, 1), cc.delayTime(1)));
        spText.node.scale = 3;
        spText.node.runAction(cc.sequence(cc.scaleTo(.1, 1), cc.delayTime(1), cc.callFunc(function() {
          ActionNode.active = false;
        }, this)));
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6391MMss5GoI6HxnPJLCCC", "ermjAudio");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        bgm: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u80cc\u666f"
        },
        game_start: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u5f00\u59cb"
        },
        game_win: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8d62\u4e86"
        },
        game_lose: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u8f93\u4e86"
        },
        mj_deal: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u53d1\u724c"
        },
        mj_out: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u51fa\u724c"
        },
        mj_touch: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u6478\u724c"
        },
        mj_select: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u9009\u62e9"
        },
        mj_turn: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u65cb\u8f6c"
        },
        men_mj: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u9ebb\u5c06"
        },
        men_operate: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u64cd\u4f5c"
        },
        women_mj: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u9ebb\u5c06"
        },
        women_operate: {
          type: cc.AudioClip,
          default: [],
          displayName: "\u64cd\u4f5c"
        }
      },
      playBGM: function playBGM() {
        cc.ak.util.audioMgr.playBGM(this.getAudio("bgm"));
      },
      playSFX: function playSFX(name) {
        cc.ak.util.audioMgr.playSFX(this.getAudio(name));
      },
      playCard: function playCard(card, gender) {
        var color = (240 & card) >> 4;
        var point = 15 & card;
        var index = 0;
        if (color == def.Color.WAN) index = point - 1; else if (color == def.Color.FENG) index = 9 + point - 1; else {
          if (color != def.Color.JIAN) return;
          index = 13 + point - 1;
        }
        1 == gender ? cc.ak.util.audioMgr.playSFX(this.getAudio("men_mj", index)) : cc.ak.util.audioMgr.playSFX(this.getAudio("women_mj", index));
      },
      playOper: function playOper(operate, gender) {
        cc.log("operate: " + operate);
        var index = 0;
        if (operate == def.Operate.CHI) index = 0; else if (operate == def.Operate.PENG) index = 1; else if (operate == def.Operate.GANG_AN || operate == def.Operate.GANG_MING || operate == def.Operate.GANG_BU) index = 2; else if (operate == def.Operate.TING) index = 3; else {
          if (operate != def.Operate.HU) {
            index = 5;
            return;
          }
          index = 4;
        }
        cc.log("index: " + index);
        1 == gender ? cc.ak.util.audioMgr.playSFX(this.getAudio("men_operate", index)) : cc.ak.util.audioMgr.playSFX(this.getAudio("women_operate", index));
      },
      getAudio: function getAudio(name, index) {
        switch (name) {
         case "bgm":
          return this.bgm;

         case "game_start":
          return this.game_start;

         case "game_win":
          return this.game_win;

         case "game_lose":
          return this.game_lose;

         case "mj_deal":
          return this.mj_deal;

         case "mj_out":
          return this.mj_out;

         case "mj_touch":
          return this.mj_touch;

         case "mj_select":
          return this.mj_select;

         case "mj_turn":
          return this.mj_turn;

         case "men_mj":
          return this.men_mj[index];

         case "men_operate":
          return this.men_operate[index];

         case "women_mj":
          return this.women_mj[index];

         case "women_operate":
          return this.women_operate[index];
        }
        return null;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjBaseLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8be28rpB9lAk6OywsNztGsx", "ermjBaseLayer");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        Option: cc.Node,
        Setting: cc.Node,
        Rules: cc.Node,
        btnReturn: cc.Node,
        btnOption: cc.Node,
        btnRecharge: cc.Node,
        labBet: cc.Label,
        preRecharge: cc.Prefab,
        MatchText: cc.Node,
        _GameViewComp: null,
        _OptionComp: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.zIndex = def.ZIndex.BASE;
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this._OptionComp = this.Option.getComponent("ermjOption");
        this.btnReturn.parent = this.GameView;
        this.btnReturn.zIndex = def.ZIndex.BOARD;
        this.btnReturn.on("click", function(node) {
          if (_this._GameViewComp.isGameStarted()) {
            cc.ak.ui.toast("\u6e38\u620f\u4e2d\u65e0\u6cd5\u9000\u51fa\uff01");
            return;
          }
          _this._GameViewComp._ProtocolComp.sendUserLeave();
        }, this);
        this.btnOption.parent = this.GameView;
        this.btnOption.zIndex = def.ZIndex.BOARD;
        this.btnOption.on("click", function(node) {
          _this._OptionComp.display();
        }, this);
        this._OptionComp.setCallback(function(name) {
          "setting" == name ? _this.Setting.active = true : "rules" == name && (_this.Rules.active = true);
        });
      },
      start: function start() {},
      setBet: function setBet(bet) {
        this.labBet.string = "\u5e95\u6ce8\uff1a" + Math.floor(bet / 1e3);
      },
      setMatchTips: function setMatchTips(visible) {
        this.MatchText.getComponent("ermjMatchText").node.active = visible;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjBoardLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbe76af1hlEvZf2eCvQETlO", "ermjBoardLayer");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.zIndex = def.ZIndex.BOARD;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjCardLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64d9cujVbJFKrxmKQ6Afhxf", "ermjCardLayer");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        preMJGroup: cc.Prefab,
        GameView: cc.Node,
        ActionList: cc.Node,
        MJHand: [ cc.Node ],
        MJOut: [ cc.Node ],
        MJHua: [ cc.Node ],
        MJWall: cc.Node,
        Pointer: cc.Node,
        _GameViewComp: null,
        _ActionListComp: null,
        _MJHandComp: [],
        _MJOutComp: [],
        _MJHuaComp: [],
        _MJWallComp: null,
        _PointerComp: null,
        _nShootIndex: -1,
        _bTouchMutex: false,
        _touchEnable: false,
        _outEnable: false,
        _tingModel: false
      },
      onLoad: function onLoad() {
        this._MJHuaComp = [];
        this.node.zIndex = def.ZIndex.CARD;
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this._ActionListComp = this.ActionList.getComponent("ermjActionList");
        this._PointerComp = this.Pointer.getComponent("ermjPointer");
        for (var i = 0; i < def.USER_NUM; i++) {
          this._MJHandComp[i] = this.MJHand[i].getComponent("ermjMJHand");
          this._MJHandComp[i].init(i);
          this._MJOutComp[i] = this.MJOut[i].getComponent("ermjMJOut");
          this._MJOutComp[i].init(i);
          this._MJHuaComp[i] = this.MJHua[i].getComponent("ermjMJHua");
          this._MJHuaComp[i].init(i);
        }
        this._MJWallComp = this.MJWall.getComponent("ermjMJWall");
        this._MJWallComp.init();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
      },
      start: function start() {},
      clear: function clear(data) {
        this.node.stopAllActions();
        this._ActionListComp.clear();
        for (var i = 0; i < def.USER_NUM; i++) {
          this._MJHandComp[i].clear();
          this._MJOutComp[i].clear();
          this._MJHuaComp[i].clear();
        }
        this._MJWallComp.clear();
        this._PointerComp.hide();
        this._touchEnable = false;
        this._outEnable = false;
        this._tingModel = false;
      },
      loadWall: function loadWall(data) {
        this._MJWallComp.reset();
        if (data) {
          this._MJWallComp.subCard(def.WALL_NUM - data.wallnum - data.gangnum, false);
          this._MJWallComp.subCard(data.gangnum, true);
        }
      },
      loadCard: function loadCard(data) {
        for (var i = 0; i < def.USER_NUM; i++) {
          var viewID = this._GameViewComp._UserLayerComp.getIndexByChairID(i);
          var hands = data.handcards[i] ? data.handcards[i] : [];
          for (var j = 0; j < hands.length; j++) this._MJHandComp[viewID].addNode(hands[j]);
          var groups = data.handgroups[i] ? data.handgroups[i] : [];
          for (var j = 0; j < groups.length; j++) this._MJHandComp[viewID].addGroup(groups[j]);
          var outs = data.outcards[i] ? data.outcards[i] : [];
          for (var j = 0; j < outs.length; j++) this._MJOutComp[viewID].addNode(outs[j]);
          var huas = data.huacards[i] ? data.huacards[i] : [];
          for (var j = 0; j < huas.length; j++) this._MJHuaComp[viewID].addNode(huas[j]);
        }
      },
      dealCard: function dealCard(data, callback) {
        var _this = this;
        this._ActionListComp.push(data, function(data) {
          var idx = 0;
          for (var m = 0; m < 5; m++) {
            for (var i = 0; i < def.USER_NUM; i++) {
              var viewID = _this._GameViewComp._UserLayerComp.getIndexByChairID(i);
              var cards = [ data.handcards[i][idx], data.handcards[i][idx + 1], data.handcards[i][idx + 2], data.handcards[i][idx + 3] ];
              if (3 == m) cards = [ data.handcards[i][idx] ]; else if (4 == m) {
                if (i != data.banker) continue;
                cards = [ data.bankercard ];
              }
              var endpos = _this._MJHandComp[viewID].getNextPosWithWorldSpace(0, idx);
              var time = .2;
              var delay = (2 * m + i) * time;
              var node = _this.createCard(cards[0], viewID == def.MY_INDEX ? def.MJNodeDir.FRONT : def.MJNodeDir.BACK, 7);
              node.runAction(cc.spawn(cc.sequence(cc.hide(), cc.delayTime(delay), cc.show(), cc.scaleTo(time, _this._MJHandComp[viewID].getNodeScale())), cc.sequence(cc.delayTime(delay), cc.callFunc(function(node, n) {
                var startpos = _this._MJWallComp.subCard(n, false);
                node.position = _this.node.convertToNodeSpaceAR(startpos);
              }, _this, cards.length), cc.moveTo(time, _this.node.convertToNodeSpaceAR(endpos)), cc.callFunc(function(node, d) {
                node.removeFromParent(true);
                for (var k = 0; k < d.cards.length; k++) _this._MJHandComp[d.viewID].addNode(d.cards[k]);
                _this._GameViewComp._AudioComp.playSFX("mj_touch");
                if (d.finish) {
                  _this._MJHandComp[0].sortNodeWithRotate(function(self) {}, _this);
                  _this._MJHandComp[1].sortNodeWithRotate(function(self) {
                    self._ActionListComp.pop();
                  }, _this);
                }
              }, _this, {
                viewID: viewID,
                cards: cards,
                finish: 3 == m && 1 == i
              }))));
              for (var k = 1; k <= cards.length - 1; k++) {
                var nd = _this.createCard(cards[k], viewID == def.MY_INDEX ? def.MJNodeDir.FRONT : def.MJNodeDir.BACK, 7);
                nd.position = cc.v2(_this._MJHandComp[viewID].getNodeSize().width * k, 0);
                nd.parent = node;
              }
            }
            idx += m < 3 ? 4 : 1;
          }
        }, function(data) {
          if (true != data.sign) for (var i = 0; i < def.USER_NUM; i++) {
            var viewID = _this._GameViewComp._UserLayerComp.getIndexByChairID(i);
            for (var j = 0; j < 13; j++) {
              _this._MJHandComp[viewID].addNode(data.handcards[i][j]);
              _this._MJHandComp[viewID].sortNode(true);
              _this._MJWallComp.subCard(1, false);
            }
          }
          callback && callback(data);
        });
      },
      touchCard: function touchCard(data, callback) {
        var _this2 = this;
        this._ActionListComp.push(data, function(data) {
          var viewID = _this2._GameViewComp._UserLayerComp.getIndexByChairID(data.chairID);
          var endpos = _this2._MJHandComp[viewID].getNextPosWithWorldSpace();
          var node = _this2.createCard(data.card, viewID == def.MY_INDEX ? def.MJNodeDir.FRONT : def.MJNodeDir.BACK, 7);
          node.runAction(cc.spawn(cc.scaleTo(.2, _this2._MJHandComp[viewID].getNodeScale()), cc.sequence(cc.callFunc(function(node) {
            var startpos = _this2._MJWallComp.subCard(1, data.tail);
            node.position = _this2.node.convertToNodeSpaceAR(startpos);
          }, _this2), cc.moveTo(.2, _this2.node.convertToNodeSpaceAR(endpos)), cc.callFunc(function() {
            node.removeFromParent(true);
            _this2._MJHandComp[viewID].addNode(data.card);
            viewID != def.MY_INDEX && _this2._MJHandComp[viewID].sortNode(false);
            _this2._GameViewComp._AudioComp.playSFX("mj_touch");
            _this2._ActionListComp.pop();
          }, _this2))));
        }, function(data) {
          var viewID = _this2._GameViewComp._UserLayerComp.getIndexByChairID(data.chairID);
          if (true != data.sign) {
            _this2._MJHandComp[viewID].addNode(data.card);
            _this2._MJWallComp.subCard(1, data.tail);
          }
          callback && callback(data);
        });
      },
      outCard: function outCard(data, callback) {
        var _this3 = this;
        this._ActionListComp.push(data, function(data) {
          var viewID = _this3._GameViewComp._UserLayerComp.getIndexByChairID(data.chairID);
          var handpos = cc.v2(0, 0);
          handpos = viewID == def.MY_INDEX ? null != data.index ? _this3._MJHandComp[viewID].deleteNodeByIndex(data.index) : _this3._MJHandComp[viewID].deleteNode(data.card) : _this3._MJHandComp[viewID].deleteNodeByLast();
          var outpos = cc.v2(0, 0);
          var outscale = 1;
          if (true == data.hua) {
            outpos = _this3._MJHuaComp[viewID].getNextPosWithWorldSpace();
            outscale = _this3._MJHuaComp[viewID].getNodeScale();
          } else {
            outpos = _this3._MJOutComp[viewID].getNextPosWithWorldSpace();
            outscale = _this3._MJOutComp[viewID].getNodeScale();
          }
          var node = _this3.createCard(data.card, def.MJNodeDir.UPWARD, 7);
          node.position = _this3.node.convertToNodeSpaceAR(handpos);
          node.scale = _this3._MJHandComp[viewID].getNodeScale();
          node.runAction(cc.spawn(cc.scaleTo(.2, outscale), cc.sequence(cc.moveTo(.2, _this3.node.convertToNodeSpaceAR(outpos)), cc.callFunc(function() {
            node.removeFromParent(true);
            if (true == data.hua) _this3._MJHuaComp[viewID].addNode(data.card); else {
              _this3._MJOutComp[viewID].addNode(data.card);
              _this3.setPointer(viewID, _this3.node.convertToNodeSpaceAR(outpos));
            }
            _this3._GameViewComp._AudioComp.playSFX("mj_out");
            _this3._ActionListComp.pop();
          }, _this3))));
          _this3._GameViewComp._AudioComp.playCard(data.card, _this3._GameViewComp._UserLayerComp.getGenderByChairID(data.chairID));
        }, function(data) {
          var viewID = _this3._GameViewComp._UserLayerComp.getIndexByChairID(data.chairID);
          if (true != data.sign) {
            null != data.index ? _this3._MJHandComp[viewID].deleteNodeByIndex(data.index) : _this3._MJHandComp[viewID].deleteNode(data.card);
            if (true == data.hua) _this3._MJHuaComp[viewID].addNode(data.card); else {
              var outpos = _this3._MJOutComp[viewID].getNextPosWithWorldSpace();
              _this3.setPointer(viewID, _this3.node.convertToNodeSpaceAR(outpos));
              _this3._MJOutComp[viewID].addNode(data.card);
            }
          }
          viewID == def.MY_INDEX && _this3.setSelectCard(-1);
          callback && callback(data);
        });
      },
      operCard: function operCard(data, callback) {
        var _this4 = this;
        this._ActionListComp.push(data, function(data) {
          _this4.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
            _this4._ActionListComp.pop();
          }, _this4)));
          _this4._GameViewComp._AudioComp.playOper(data.operate, _this4._GameViewComp._UserLayerComp.getGenderByChairID(data.chairID));
        }, function(data) {
          var viewID = _this4._GameViewComp._UserLayerComp.getIndexByChairID(data.chairID);
          var targetViewID = _this4._GameViewComp._UserLayerComp.getIndexByChairID(data.targetID);
          var handNum = 0;
          var outNum = 0;
          if (data.group.type == def.GroupType.GANG_AN) {
            handNum = 4;
            outNum = 0;
          } else if (data.group.type == def.GroupType.GANG_BU) {
            handNum = 1;
            outNum = 0;
          } else if (data.group.type == def.GroupType.GANG_MING) {
            handNum = 3;
            outNum = 1;
          } else if (data.group.type == def.GroupType.PENG) {
            handNum = 2;
            outNum = 1;
          } else {
            handNum = 2;
            outNum = 1;
          }
          if (viewID == def.MY_INDEX) if (data.group.type == def.GroupType.CHI_LEFT || data.group.type == def.GroupType.CHI_CENTER || data.group.type == def.GroupType.CHI_RIGHT) for (var i = 0; i < 3; i++) {
            if (data.group.card == data.group.cards[i]) continue;
            _this4._MJHandComp[viewID].deleteNode(data.group.cards[i]);
          } else for (var i = 0; i < handNum; i++) _this4._MJHandComp[viewID].deleteNode(data.group.card); else for (var i = 0; i < handNum; i++) _this4._MJHandComp[viewID].deleteNodeByLast();
          if (outNum > 0) {
            _this4._MJOutComp[targetViewID].deleteNodeByLast();
            _this4._PointerComp.hide();
          }
          data.group.type == def.GroupType.GANG_BU ? _this4._MJHandComp[viewID].convertGroup(def.GroupType.PENG, data.group) : _this4._MJHandComp[viewID].addGroup(data.group);
          viewID == def.MY_INDEX && _this4.setSelectCard(-1);
          callback && callback(data);
        });
      },
      openCard: function openCard(data, callback) {
        var _this5 = this;
        this._ActionListComp.push(data, function(data) {
          _this5.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
            _this5._ActionListComp.pop();
          }, _this5)));
        }, function(data) {
          for (var i = 0; i < def.USER_NUM; i++) {
            var viewID = _this5._GameViewComp._UserLayerComp.getIndexByChairID(i);
            _this5._MJHandComp[viewID].clear();
            _this5._MJHandComp[viewID].rotateNodes(def.MJNodeDir.UPWARD);
            var hands = data.handcards[i] ? data.handcards[i] : [];
            for (var j = 0; j < hands.length; j++) _this5._MJHandComp[viewID].addNode(hands[j]);
            var groups = data.handgroups[i] ? data.handgroups[i] : [];
            for (var j = 0; j < groups.length; j++) _this5._MJHandComp[viewID].addGroup(groups[j], false);
          }
          callback && callback(data);
        });
      },
      customAction: function customAction(data, callback) {
        var _this6 = this;
        this._ActionListComp.push(data, function(data) {
          _this6.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
            _this6._ActionListComp.pop();
          }, _this6)));
        }, function(data) {
          callback && callback(data);
        });
      },
      stopActions: function stopActions() {
        this._ActionListComp.popall();
      },
      onTouchStart: function onTouchStart(event) {
        if (false == this._touchEnable) return;
        this._MJHandComp[def.MY_INDEX].setNodeShoot(-1, false);
        var index = this._MJHandComp[def.MY_INDEX].getTouchIndex(event.getStartLocation());
        if (index >= 0) {
          this._MJHandComp[def.MY_INDEX].setNodeShoot(index, true);
          this._GameViewComp._AudioComp.playSFX("mj_select");
          if (this._nShootIndex == index) {
            this.onOutCard(index);
            this._bTouchMutex = true;
          } else {
            this.setSelectCard(index);
            this._bTouchMutex = false;
          }
        } else this.setSelectCard(-1);
      },
      onTouchMoved: function onTouchMoved(event) {
        if (false == this._touchEnable) return;
        if (this._bTouchMutex) return;
        var index = this._MJHandComp[def.MY_INDEX].getTouchIndex(event.getLocation());
        if (index >= 0 && index != this._nShootIndex) {
          this.setSelectCard(index);
          this._MJHandComp[def.MY_INDEX].setNodeShoot(-1, false);
          this._MJHandComp[def.MY_INDEX].setNodeShoot(index, true);
          this._GameViewComp._AudioComp.playSFX("mj_select");
        }
      },
      onTouchEnded: function onTouchEnded(event) {
        if (false == this._touchEnable) return;
        if (this._bTouchMutex) return;
        event.getLocation().y - event.getStartLocation().y > 70 && this.onOutCard(this._nShootIndex);
      },
      onOutCard: function onOutCard(index) {
        if (index < 0) return;
        if (false == this._outEnable) return;
        if (false == this._ActionListComp.empty()) return;
        var data = {};
        data.chairID = this._GameViewComp._UserLayerComp.getMyChairID();
        data.index = index;
        data.card = this._MJHandComp[def.MY_INDEX].getCardByIndex(index);
        this.outCard(data);
        this._GameViewComp._ProtocolComp.sendOutCard(data.card, this._tingModel ? 1 : 0);
        this.setSelectCard(-1);
        this.setOutEnable(false);
        if (this._tingModel) {
          this.setTingModel(null);
          this._GameViewComp._OperLayerComp.clear();
        }
      },
      setSelectCard: function setSelectCard(index) {
        this._nShootIndex = index;
        var card = index >= 0 ? this._MJHandComp[def.MY_INDEX].getCardByIndex(index) : 0;
        var color = index >= 0 ? cc.color(220, 220, 150, 255) : null;
        for (var i = 0; i < def.USER_NUM; i++) {
          this._MJHandComp[i].setCardColor(card, color);
          this._MJOutComp[i].setCardColor(card, color);
        }
      },
      createCard: function createCard(card, type, index) {
        var node = cc.instantiate(this.preMJNode);
        node.getComponent("ermjMJNode").init();
        node.getComponent("ermjMJNode").setData(card);
        node.getComponent("ermjMJNode").setType(type);
        node.getComponent("ermjMJNode").setIndex(index);
        node.parent = this.node;
        return node;
      },
      createGroup: function createGroup(group) {
        var node = cc.instantiate(this.preMJGroup);
        node.getComponent("ermjMJGroup").init();
        node.getComponent("ermjMJGroup").setData(group);
        node.getComponent("ermjMJGroup").setType(def.MJGroupDev.CENTER);
        node.parent = this.node;
        return node;
      },
      getDealCardPos: function getDealCardPos() {
        return this.MJWall.position;
      },
      setRemainCardNum: function setRemainCardNum(num) {
        this._MJWallComp.setRemainNum(num);
      },
      setOutEnable: function setOutEnable(enable) {
        this._outEnable = enable;
      },
      setTouchEnable: function setTouchEnable(enable) {
        this._touchEnable = enable;
      },
      setTingModel: function setTingModel(outcards) {
        if (outcards instanceof Array) {
          this._tingModel = true;
          this._MJHandComp[def.MY_INDEX].setTingModel(outcards);
          this.setOutEnable(true);
        } else {
          this._tingModel = false;
          this._MJHandComp[def.MY_INDEX].setTingModel(null);
          this.setOutEnable(false);
        }
      },
      isHuaCard: function isHuaCard(card) {
        var color = (240 & card) >> 4;
        return color == def.Color.HUA;
      },
      setPointer: function setPointer(viewID, pos) {
        viewID == def.UserDir.ME ? this._PointerComp.show(cc.v2(pos.x, pos.y + 70), 1) : this._PointerComp.show(cc.v2(pos.x, pos.y + 50), .7);
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30046a96qRFvJXbqzaVPPoW", "ermjDefine");
    "use strict";
    var def = {
      USER_NUM: 2,
      MY_INDEX: 0,
      HAND_NUM: 14,
      GROUP_NUM: 4,
      WALL_NUM: 72,
      OPER_TIME: 15,
      Group: {
        type: 0,
        card: 0,
        cards: []
      },
      Color: {
        WAN: 0,
        TIAO: 1,
        TONG: 2,
        FENG: 3,
        JIAN: 4,
        HUA: 5
      },
      Operate: {
        NONE: 0,
        CHI: 1,
        PENG: 2,
        GANG_MING: 4,
        GANG_AN: 8,
        GANG_BU: 16,
        TING: 32,
        HU: 64
      },
      GroupType: {
        NONE: 0,
        CHI_LEFT: 2,
        CHI_CENTER: 3,
        CHI_RIGHT: 4,
        PENG: 5,
        GANG_MING: 6,
        GANG_AN: 7,
        GANG_BU: 8
      },
      UserDir: {
        ME: 0,
        OP: 1
      },
      MJNodeDir: {
        FRONT: 0,
        BACK: 1,
        UPWARD: 2,
        DOWN: 3,
        HORIZON: 4
      },
      MJGroupDev: {
        CENTER: 0,
        LEFT: 1,
        RIGHT: 2
      },
      GameStage: {
        WAIT: 0,
        DICE: 1,
        BUHUA: 2,
        PLAY: 3,
        REPLAY: 4,
        OVER: 5
      },
      ZIndex: {
        BASE: 0,
        CARD: 10,
        USER: 20,
        OPER: 30,
        SCORE: 40,
        BOARD: 50
      },
      FanType: {
        DASIXI: 0,
        DASANYUAN: 1,
        JIUDENG: 2,
        DAYUWU: 3,
        XIAOYUWU: 4,
        DAQIXING: 5,
        SIGANG: 6,
        LIANQIDUI: 7,
        TIANHU: 8,
        DIHU: 9,
        XIAOSIXI: 10,
        XIAOSANYUAN: 11,
        SIANKE: 12,
        YISESHUANGLONG: 13,
        ZIYISE: 14,
        RENHU: 15,
        YISESITONG: 16,
        SANYUANQIDUI: 17,
        SIXIQIDUI: 18,
        YISESIJIEGAO: 19,
        YISESIBUGAO: 20,
        HUNYAOJIU: 21,
        SANGANG: 22,
        TIANTING: 23,
        SIZIKE: 24,
        DASANFENG: 25,
        YISESANTONG: 26,
        QIDUI: 27,
        YISESANJIEGAO: 28,
        QINGLONG: 29,
        YISESANBUGAO: 30,
        QUANHUA: 31,
        SANANKE: 32,
        QINGYISE: 33,
        MIAOSHOU: 34,
        HAIDINAO: 35,
        GANGKAI: 36,
        QIANGGANG: 37,
        XIAOSANFENG: 38,
        SHUANGJIANKE: 39,
        PENGPENGHU: 40,
        SHUANGANGANG: 41,
        HUNYISE: 42,
        QUANQIUREN: 43,
        QUANDAIYAO: 44,
        SHUANGMINGGANG: 45,
        BUQIUREN: 46,
        HUJUEZHANG: 47,
        MENFENGKE: 48,
        QUANFENGKE: 49,
        JIANKE: 50,
        PINGHU: 51,
        SIGUIYI: 52,
        SHUANGANKE: 53,
        ANGANG: 54,
        MENQING: 55,
        BAOTING: 56,
        YIBANGAO: 57,
        LIANLIU: 58,
        LAOSHAOFU: 59,
        HUAPAI: 60,
        MINGGANG: 61,
        BIANZHANG: 62,
        KANZHANG: 63,
        DANGDIAO: 64,
        ZIMO: 65,
        GUOHU: 66
      },
      FanName: [ "\u5927\u56db\u559c", "\u5927\u4e09\u5143", "\u4e5d\u83b2\u5b9d\u706f", "\u5927\u4e8e\u4e94", "\u5c0f\u4e8e\u4e94", "\u5927\u4e03\u661f", "\u56db\u6760", "\u8fde\u4e03\u5bf9", "\u5929\u80e1", "\u5730\u80e1", "\u5c0f\u56db\u559c", "\u5c0f\u4e09\u5143", "\u56db\u6697\u523b", "\u4e00\u8272\u53cc\u9f99\u4f1a", "\u5b57\u4e00\u8272", "\u4eba\u80e1", "\u4e00\u8272\u56db\u540c\u987a", "\u4e09\u5143\u4e03\u5bf9\u5b50", "\u56db\u559c\u4e03\u5bf9\u5b50", "\u4e00\u8272\u56db\u8282\u9ad8", "\u4e00\u8272\u56db\u6b65\u9ad8", "\u6df7\u5e7a\u4e5d", "\u4e09\u6760", "\u5929\u542c", "\u56db\u5b57\u523b", "\u5927\u4e09\u98ce", "\u4e00\u8272\u4e09\u540c\u987a", "\u4e03\u5bf9", "\u4e00\u8272\u4e09\u8282\u9ad8", "\u6e05\u9f99", "\u4e00\u8272\u4e09\u6b65\u9ad8", "\u5168\u82b1", "\u4e09\u6697\u523b", "\u6e05\u4e00\u8272", "\u5999\u624b\u56de\u6625", "\u6d77\u5e95\u635e\u6708", "\u6760\u4e0a\u5f00\u82b1", "\u62a2\u6760\u548c", "\u5c0f\u4e09\u98ce", "\u53cc\u7bad\u523b", "\u78b0\u78b0\u548c", "\u53cc\u6697\u6760", "\u6df7\u4e00\u8272", "\u5168\u6c42\u4eba", "\u5168\u5e26\u5e7a", "\u53cc\u660e\u6760", "\u4e0d\u6c42\u4eba", "\u80e1\u7edd\u5f20", "\u95e8\u98ce\u523b", "\u5708\u98ce\u523b", "\u7bad\u523b", "\u5e73\u548c", "\u56db\u5f52\u4e00", "\u53cc\u6697\u523b", "\u6697\u6760", "\u95e8\u524d\u6e05", "\u62a5\u542c", "\u4e00\u822c\u9ad8", "\u8fde\u516d", "\u8001\u5c11\u526f", "\u82b1\u724c", "\u660e\u6760", "\u8fb9\u5f20", "\u574e\u5f20", "\u5355\u9493\u5c06", "\u81ea\u6478", "\u8fc7\u80e1" ],
      FanNum: [ 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 64, 64, 64, 64, 64, 64, 48, 48, 48, 48, 32, 32, 32, 32, 24, 24, 24, 24, 24, 16, 16, 16, 16, 16, 8, 8, 8, 8, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ]
    };
    module.exports = def;
    cc._RF.pop();
  }, {} ],
  ermjGameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d137XSVM1JALzdqXMZY+zF", "ermjGameView");
    "use strict";
    var def = require("ermjDefine");
    var util = require("ermjUtils");
    cc.Class({
      extends: cc.Component,
      properties: {
        Protocol: cc.Node,
        Audio: cc.Node,
        BaseLayer: cc.Node,
        UserLayer: cc.Node,
        CardLayer: cc.Node,
        OperLayer: cc.Node,
        ScoreLayer: cc.Node,
        _ProtocolComp: null,
        _AudioComp: null,
        _BaseLayerComp: null,
        _UserLayerComp: null,
        _CardLayerComp: null,
        _OperLayerComp: null,
        _ScoreLayerComp: null,
        _started: false
      },
      onLoad: function onLoad() {
        cc.log("onLoad GameView");
        this._ProtocolComp = this.Protocol.getComponent("ermjProtocol");
        this._AudioComp = this.Audio.getComponent("ermjAudio");
        this._BaseLayerComp = this.BaseLayer.getComponent("ermjBaseLayer");
        this._UserLayerComp = this.UserLayer.getComponent("ermjUserLayer");
        this._CardLayerComp = this.CardLayer.getComponent("ermjCardLayer");
        this._OperLayerComp = this.OperLayer.getComponent("ermjOperLayer");
        this._ScoreLayerComp = this.ScoreLayer.getComponent("ermjScoreLayer");
      },
      clear: function clear() {
        this._UserLayerComp.clear();
        this._CardLayerComp.clear();
        this._OperLayerComp.clear();
        this._ScoreLayerComp.clear();
        this._UserLayerComp.deleteAllUser();
        this._UserLayerComp.setCurrentUser(-1, 0);
        this._OperLayerComp.setReadyVisible(false);
        this._OperLayerComp.setTrusteeVisible(false);
        this._BaseLayerComp.setMatchTips(true);
      },
      start: function start() {
        this._AudioComp.playBGM();
      },
      onUserInfo: function onUserInfo(data) {
        cc.log("enter: uid=" + data.Uid + ",name=" + data.NickName + ",chair=" + data.ChairID);
        this._UserLayerComp.updateUser(data);
      },
      onUserLeave: function onUserLeave(data) {
        cc.log("leave: uid=" + data.userId);
        this._UserLayerComp.deleteUser(data.userId);
      },
      onUserReady: function onUserReady(data) {
        cc.log("ready: uid=" + data.userId);
        this._UserLayerComp.updateReady(data.userId);
      },
      onUserTrustee: function onUserTrustee(data) {
        var chairID = data.chairId;
        var trustee = data.trustee ? 1 : 0;
        cc.log(data);
        this._UserLayerComp.setTrustee(chairID, trustee);
        chairID == this._UserLayerComp.getMyChairID() && this._OperLayerComp.setTrusteeVisible(trustee);
      },
      onGameInit: function onGameInit(data) {
        var bet = data.bet;
        var menfeng = data.menfeng;
        var quanfeng = data.quanfeng;
        this._BaseLayerComp.setBet(bet);
        this._UserLayerComp.setFengDir(menfeng);
        this._UserLayerComp.setTimerLight();
      },
      onGameStart: function onGameStart(data) {
        cc.log(data);
        this._started = true;
        this._BaseLayerComp.setMatchTips(false);
        this._CardLayerComp.loadWall();
        this._AudioComp.playSFX("game_start");
      },
      onGameOver: function onGameOver(data) {
        var _this = this;
        var winuser = data.winner;
        var paouser = data.provideUser;
        var paocard = data.provideCard;
        var zimo = data.zimo;
        var huang = data.flowBureau;
        var fanshu = data.huFanShu;
        var fantype = data.huFantype;
        var score = data.GameScore;
        var handcards = [ data.handcard[0].cards, data.handcard[1].cards ];
        var handgroups = [ data.cardGroup[0].handlgroup, data.cardGroup[1].handlgroup ];
        cc.log(data);
        this._started = false;
        this._CardLayerComp.stopActions();
        this._OperLayerComp.clear();
        this._OperLayerComp.setTrusteeVisible(false);
        this._UserLayerComp.setCurrentUser(-1, 0);
        winuser >= 0 && handcards[winuser].push(paocard);
        this._CardLayerComp.openCard({
          handcards: handcards,
          handgroups: handgroups,
          paocard: paocard
        }, function() {});
        this._CardLayerComp.setTouchEnable(false);
        if (winuser >= 0) {
          this._OperLayerComp.playAction(winuser, def.Operate.HU);
          winuser == this._UserLayerComp.getMyChairID() ? this._AudioComp.playSFX("game_win") : this._AudioComp.playSFX("game_lose");
        }
        for (var i = 0; i < def.USER_NUM; i++) this._UserLayerComp.addScore(i, score[i]);
        util.delay(this.node, 2, function() {
          _this._ScoreLayerComp.showLayer(data);
        }, this);
      },
      onGameRestore: function onGameRestore(data) {
        var bet = data.bet;
        var banker = data.bankChair;
        var remainNum = data.remainCardNum;
        var gangNum = data.gangCardnum;
        var currentUser = data.turn;
        var lastUser = data.lastTurn;
        var lastCard = data.lastCard;
        var handcards = [ data.handcard[0].cards, data.handcard[1].cards ];
        var handgroups = [ data.cardGroup[0].handlgroup, data.cardGroup[1].handlgroup ];
        var outcards = [ data.outcards[0].cards, data.outcards[1].cards ];
        var huacards = [ data.huacards[0].cards, data.huacards[1].cards ];
        var operate = this._OperLayerComp.selectOperate(data.handle);
        var groups = data.handleGroup;
        var tingcards = data.tingcards;
        var baoting = data.baoting;
        var offline = data.offline;
        var trustee = data.trustee;
        var time = data.timeleft;
        var stage = data.gamestage;
        cc.log(data);
        this._CardLayerComp.clear();
        this._OperLayerComp.clear();
        this._CardLayerComp.loadWall({
          wallnum: remainNum,
          gangnum: gangNum
        });
        this._CardLayerComp.loadCard({
          handcards: handcards,
          handgroups: handgroups,
          outcards: outcards,
          huacards: huacards
        });
        this._CardLayerComp.setTouchEnable(true);
        this._UserLayerComp.setCurrentUser(currentUser, time);
        this._BaseLayerComp.setMatchTips(false);
        this._UserLayerComp.setBanker(banker);
        for (var i = 0; i < def.USER_NUM; i++) {
          1 == trustee[i] && this._UserLayerComp.setTrustee(i, true);
          1 == baoting[i] && this._UserLayerComp.setBaoting(i);
          i == this._UserLayerComp.getMyChairID() && this._OperLayerComp.setTrusteeVisible(1 == trustee[i]);
        }
        if (stage == def.GameStage.BUHUA) return;
        this._UserLayerComp.isMyTurn() ? operate > 0 ? this._OperLayerComp.setOperateVisible(true, {
          operate: operate,
          groups: groups,
          tingcards: tingcards
        }) : this._CardLayerComp.setOutEnable(true) : operate > 0 && this._OperLayerComp.setOperateVisible(true, {
          operate: operate,
          groups: groups,
          tingcards: tingcards
        });
      },
      onGameError: function onGameError(data) {
        cc.log(data);
        switch (data.errortype) {
         case 1:
          cc.ak.ui.toast("\u4e0d\u662f\u5f53\u524d\u73a9\u5bb6");
          break;

         case 2:
          cc.ak.ui.toast("\u51fa\u724c\u4e0d\u5408\u6cd5");
          break;

         case 3:
          cc.ak.ui.toast("\u64cd\u4f5c\u4e0d\u5408\u6cd5");
          break;

         case 4:
          cc.ak.ui.toast("\u7528\u6237\u4e0d\u5408\u6cd5");
          break;

         default:
          cc.ak.ui.toast("\u672a\u77e5\u9519\u8bef");
        }
      },
      onGameDiceBegin: function onGameDiceBegin(data) {
        cc.log("dice begin");
      },
      onGameDiceFinish: function onGameDiceFinish(data) {
        cc.log("dice finish");
      },
      onGameDealCard: function onGameDealCard(data) {
        var _this2 = this;
        var banker = data.bankChair;
        var handcards = [ data.handcard[0].cards, data.handcard[1].cards ];
        var bankercard = data.card;
        var operate = this._OperLayerComp.selectOperate(data.handle);
        var groups = data.handleGroup;
        var tingcards = data.tingcards;
        var buhua = 1 == data.havebuhua;
        cc.log(data);
        this._UserLayerComp.setBanker(banker);
        this._CardLayerComp.dealCard({
          handcards: handcards,
          banker: banker,
          bankercard: bankercard
        }, function() {
          _this2._CardLayerComp.setTouchEnable(true);
          _this2._UserLayerComp.setCurrentUser(banker, def.OPER_TIME);
          false == buhua && _this2._UserLayerComp.isMyTurn() && (operate > 0 ? _this2._OperLayerComp.setOperateVisible(true, {
            operate: operate,
            groups: groups,
            tingcards: tingcards
          }) : _this2._CardLayerComp.setOutEnable(true));
        });
      },
      onGameBuhuaBegin: function onGameBuhuaBegin(data) {
        var _this3 = this;
        var chairID = data.chairId;
        var outcards = data.buhuaCard;
        var getcards = data.getCard;
        cc.log(data);
        this._CardLayerComp.customAction({}, function() {
          _this3._UserLayerComp.setCurrentUser(chairID, def.OPER_TIME);
        });
        for (var i = 0; i < outcards.length; i++) this._CardLayerComp.outCard({
          chairID: chairID,
          card: outcards[i],
          index: null,
          hua: true
        }, function() {});
        for (var i = 0; i < getcards.length; i++) this._CardLayerComp.touchCard({
          chairID: chairID,
          card: getcards[i],
          tail: true,
          finish: i == getcards.length - 1
        }, function(d) {
          d.finish && _this3._UserLayerComp.getMyChairID() == chairID && _this3._ProtocolComp.sendBuhuaFinish();
        });
      },
      onGameBuhuaFinish: function onGameBuhuaFinish(data) {
        var chairID = data.chairId;
        var operate = this._OperLayerComp.selectOperate(data.handle);
        var groups = data.handleGroup;
        var tingcards = data.tingcards;
        cc.log(data);
        this._UserLayerComp.setCurrentUser(chairID, def.OPER_TIME);
        if (this._UserLayerComp.isMyTurn()) if (operate > 0) {
          this._OperLayerComp.setOperateVisible(true, {
            operate: operate,
            groups: groups,
            tingcards: tingcards
          });
          this._CardLayerComp.setOutEnable(true);
        } else this._CardLayerComp.setOutEnable(true);
      },
      onGameTouchCard: function onGameTouchCard(data) {
        var _this4 = this;
        var chairID = data.chairId;
        var card = data.card;
        var operate = this._OperLayerComp.selectOperate(data.handle);
        var groups = data.handleGroup;
        var tingcards = data.tingcards;
        var auto = 1 == data.autoplay;
        var tail = 1 == data.getback;
        cc.log(data);
        chairID == this._UserLayerComp.getMyChairID() && this._OperLayerComp.setOperateVisible(false);
        this._CardLayerComp.touchCard({
          chairID: chairID,
          card: card,
          tail: tail
        }, function() {
          _this4._UserLayerComp.setCurrentUser(chairID, def.OPER_TIME);
          if (_this4._UserLayerComp.isMyTurn()) if (false == auto) {
            operate > 0 && _this4._OperLayerComp.setOperateVisible(true, {
              operate: operate,
              groups: groups,
              tingcards: tingcards
            });
            _this4._CardLayerComp.setOutEnable(true);
          } else {
            operate > 0 && _this4._OperLayerComp.setOperateVisible(true, {
              operate: operate,
              groups: groups,
              tingcards: tingcards
            });
            _this4._CardLayerComp.setOutEnable(false);
          } else _this4._CardLayerComp.setOutEnable(false);
        });
      },
      onGameOutCard: function onGameOutCard(data) {
        var chairID = data.chairId;
        var card = data.card;
        var auto = 1 == data.autoplay;
        cc.log(data);
        this._CardLayerComp.setOutEnable(false);
        chairID == this._UserLayerComp.getMyChairID() && this._OperLayerComp.setOperateVisible(false);
        if (false == auto && chairID == this._UserLayerComp.getMyChairID()) return;
        var isHua = this._CardLayerComp.isHuaCard(card);
        this._CardLayerComp.outCard({
          chairID: chairID,
          card: card,
          index: null,
          hua: isHua
        }, function() {});
      },
      onGameOperNotice: function onGameOperNotice(data) {
        var operate = this._OperLayerComp.selectOperate(data.handle);
        var groups = data.handleGroup;
        cc.log(data);
        this._UserLayerComp.setCurrentUser(-1, def.OPER_TIME);
        operate > 0 && this._OperLayerComp.setOperateVisible(true, {
          operate: operate,
          groups: groups,
          tingcards: []
        });
      },
      onGameOperResult: function onGameOperResult(data) {
        var _this5 = this;
        var chairID = data.chairId;
        var targetID = data.provideUser;
        var operType = this._OperLayerComp.selectOperate(data.provideHandle);
        var operGroup = data.handleGroup;
        var operate = this._OperLayerComp.selectOperate(data.nextHandle);
        var groups = data.nextHandleGroup;
        var tingcards = data.tingcards;
        cc.log(data);
        this._CardLayerComp.operCard({
          chairID: chairID,
          targetID: targetID,
          operate: operType,
          group: operGroup
        }, function() {
          _this5._OperLayerComp.playAction(chairID, operType);
          _this5._UserLayerComp.setCurrentUser(chairID, def.OPER_TIME);
          _this5._UserLayerComp.isMyTurn() && (operate > 0 ? _this5._OperLayerComp.setOperateVisible(true, {
            operate: operate,
            groups: groups,
            tingcards: tingcards
          }) : _this5._UserLayerComp.isBaoting(chairID) || _this5._CardLayerComp.setOutEnable(true));
        });
      },
      onGameOperTing: function onGameOperTing(data) {
        var chairID = data.chairId;
        cc.log(data);
        this._UserLayerComp.setBaoting(chairID);
        chairID == this._UserLayerComp.getMyChairID() && this._CardLayerComp.setTingModel([]);
        this._OperLayerComp.playAction(chairID, def.Operate.TING);
        this._AudioComp.playOper(def.Operate.TING, this._UserLayerComp.getGenderByChairID(chairID));
      },
      isGameStarted: function isGameStarted() {
        return this._started;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine",
    ermjUtils: "ermjUtils"
  } ],
  ermjHeadItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1905aJV/ENDsIMNSL9k1t1s", "ermjHeadItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spHead: cc.Sprite,
        spLight: cc.Sprite,
        spBanker: cc.Sprite,
        spReady: cc.Label,
        spTrustee: cc.Label,
        spTing: cc.Label,
        labName: cc.Label,
        labScore: cc.Label,
        labAddScore: cc.Label,
        HeadItem: cc.Node,
        _UserInfo: null,
        _score: 0
      },
      onLoad: function onLoad() {
        this.clear();
      },
      start: function start() {},
      clear: function clear() {
        this.node.active = false;
        this.labName.string = "";
        this.labScore.string = "0";
        this.setReverse(false);
        this.setBanker(false);
        this.setReady(false);
        this.setTrustee(false);
        this.setTing(false);
      },
      setInfo: function setInfo(info) {
        this.clear();
        this._UserInfo = info;
        this._score = info.AccountA + info.AccountB;
        this.node.active = true;
        this.labName.string = info.NickName;
        this.labScore.string = (this._score / 1e3).toFixed(2);
        var headID = info.HeadImgId ? info.HeadImgId : 0;
        this.HeadItem.getComponent("headAnthologyItem").setAvatar(headID);
        info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_READY || info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_OFFLINE;
      },
      setReverse: function setReverse(reverse) {
        if (reverse) {
          this.spReady.node.x = -this.spReady.node.x;
          this.spTrustee.node.x = -this.spTrustee.node.x;
          this.spTing.node.x = -this.spTing.node.x;
        } else {
          this.spReady.node.x = Math.abs(this.spReady.node.x);
          this.spTrustee.node.x = Math.abs(this.spTrustee.node.x);
          this.spTing.node.x = Math.abs(this.spTing.node.x);
        }
      },
      setBanker: function setBanker(visible) {
        this.spBanker.node.active = visible;
      },
      setReady: function setReady(visible) {
        this.spReady.node.active = visible;
      },
      setTrustee: function setTrustee(trustee) {
        this.spTrustee.node.active = trustee;
      },
      setTing: function setTing(ting) {
        this.spTing.node.active = ting;
      },
      addScore: function addScore(num) {
        this._score += num;
        this.labScore.string = (this._score / 1e3).toFixed(2);
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "747d4IP+wxGzpuP6jUxHih6", "ermjInit");
    "use strict";
    var ErmjInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "ermj"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("ermj module init!");
        bundle.ermj = {};
        bundle.ermj.key = {};
        bundle.ermj.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initErmjData: function initErmjData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.ermj.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.ermj.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.ermj.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.ermj.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + ErmjInit.id, function(data) {
          cc.log("ENTER_GAME_SCENE");
          bundle.ermj.data.set(bundle.ermj.key.data.ENTER_ROOM_SUCC, data);
          if ("ermjGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("ermjGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + ErmjInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== ErmjInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = ErmjInit;
    cc._RF.pop();
  }, {} ],
  ermjMJGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38bfeKMbC9FHoVlrE7H4kGW", "ermjMJGroup");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        MJNode: [ cc.Node ],
        Container: [ cc.Node ],
        _NodeComp: [],
        _userdir: 0,
        _data: null,
        _index: 0,
        _groupSize: cc.size(0, 0),
        _nodeSize: cc.size(0, 0),
        _nodeSpace: -25,
        _hidden: true
      },
      init: function init(idx, dir, hidden) {
        null == dir && (dir = 0);
        null == idx && (idx = 2);
        null == hidden && (hidden = true);
        this._index = idx;
        this._userdir = dir;
        this._hidden = hidden;
        var mjindex = 0;
        if (0 == idx) {
          this._nodeSpace = -25;
          this.setNodeZOrder(false);
          mjindex = 3;
        } else if (1 == idx) {
          this._nodeSpace = -18;
          this.setNodeZOrder(false);
          mjindex = 5;
        } else if (2 == idx) {
          this._nodeSpace = -5;
          this.setNodeZOrder(false);
          mjindex = 7;
        } else if (3 == idx) {
          this._nodeSpace = -12;
          this.setNodeZOrder(true);
          mjindex = 8;
        } else {
          this._nodeSpace = -20;
          this.setNodeZOrder(true);
          mjindex = 10;
        }
        for (var i = 0; i < 4; i++) {
          this._NodeComp[i] = this.MJNode[i].getComponent("ermjMJNode");
          this._NodeComp[i].init();
          this._NodeComp[i].setType(def.MJNodeDir.UPWARD);
          this._NodeComp[i].setIndex(mjindex);
        }
        this._nodeSize = this._NodeComp[0].getSize();
        this._groupSize = cc.size(3 * (this._nodeSize.width + this._nodeSpace), this._nodeSize.height + this._nodeSize.width);
        this._data = {
          type: 0,
          num: 3,
          cards: [ 0, 0, 0 ]
        };
      },
      setData: function setData(group) {
        this._data = group;
        if (group.type == def.GroupType.GANG_AN) {
          this.MJNode[3].active = true;
          for (var i = 0; i < 3; i++) this._NodeComp[i].setType(def.MJNodeDir.DOWN);
          if (this._userdir == def.UserDir.OP && this._hidden) this._NodeComp[3].setType(def.MJNodeDir.DOWN); else {
            this._NodeComp[3].setData(group.card);
            this._NodeComp[3].setType(def.MJNodeDir.UPWARD);
          }
        } else if (group.type == def.GroupType.GANG_MING || group.type == def.GroupType.GANG_BU) {
          this.MJNode[3].active = true;
          for (var i = 0; i < 4; i++) this._NodeComp[i].setData(group.card);
        } else {
          this.MJNode[3].active = false;
          for (var i = 0; i < group.cards.length; i++) this._NodeComp[i].setData(group.cards[i]);
        }
      },
      setType: function setType(type) {
        var width = this._nodeSize.width;
        var space = this._nodeSpace;
        var posx = [ -(width + space), 0, width + space, 0 ];
        type == def.MJGroupDev.LEFT ? posx = [ 0, width + space, 2 * (width + space), width + space ] : type == def.MJGroupDev.RIGHT && (posx = [ 2 * -(width + space), -(width + space), 0, -(width + space) ]);
        for (var i = 0; i < 4; i++) this.Container[i].x = posx[i];
      },
      getSize: function getSize() {
        return this._groupSize;
      },
      getData: function getData() {
        return this._data;
      },
      setNodeZOrder: function setNodeZOrder(reverse) {
        if (false == reverse) {
          for (var i = 0; i < 3; i++) this.Container[i].zIndex = i;
          this.Container[3].zIndex = 4;
        } else {
          for (var i = 0; i < 3; i++) this.Container[i].zIndex = 3 - i;
          this.Container[3].zIndex = 4;
        }
      },
      setHidden: function setHidden(hidden) {
        this._hidden = hidden;
        this.setData(this._data);
      },
      setCardColor: function setCardColor(card, color) {
        for (var i = 0; i < this._NodeComp.length; i++) card == this._NodeComp[i].getData() ? this._NodeComp[i].setColor(color) : this._NodeComp[i].setColor(null);
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjMJHand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88cf3+49IpO374YB3CCTbOQ", "ermjMJHand");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        preMJGroup: cc.Prefab,
        _startPos: cc.v2(0, 0),
        _nodeSize: cc.size(0, 0),
        _groupSize: cc.size(0, 0),
        _szNodeList: [],
        _szGroupList: [],
        _userDir: 0,
        _nodeDir: 0,
        _nodeScale: 1,
        _downScale: 1,
        _groupScale: 1,
        _nodeSpace: 0,
        _downSpace: 0,
        _groupSpace: 0,
        _lastSpace: 0,
        _connSpace: 0
      },
      init: function init(dir) {
        this._userDir = dir;
        this._nodeDir = def.MJNodeDir.FRONT;
        var nodeComp = cc.instantiate(this.preMJNode).getComponent("ermjMJNode");
        nodeComp.init();
        nodeComp.setType(def.MJNodeDir.FRONT);
        this._nodeSize = nodeComp.getSize();
        var groupComp = cc.instantiate(this.preMJGroup).getComponent("ermjMJGroup");
        groupComp.init();
        this._groupSize = groupComp.getSize();
        if (dir == def.UserDir.ME) {
          this._nodeScale = .86;
          this._downScale = 1.47;
          this._groupScale = 1.2;
          this._nodeSpace = -3;
          this._downSpace = -3;
          this._groupSpace = 25;
          this._lastSpace = 40;
          this._connSpace = 20;
          this._startPos = cc.v2(-(13 * (this._nodeSize.width + this._nodeSpace) + this._lastSpace) * this._nodeScale / 2, 0);
        } else if (dir == def.UserDir.OP) {
          nodeComp.setType(def.MJNodeDir.BACK);
          this._nodeSize = nodeComp.getSize();
          this._nodeScale = .65;
          this._downScale = .65;
          this._groupScale = .65;
          this._nodeSpace = -32;
          this._downSpace = -38;
          this._groupSpace = 25;
          this._lastSpace = 25;
          this._connSpace = 20;
          this._startPos = cc.v2((13 * (this._nodeSize.width + this._nodeSpace) + this._lastSpace) * this._nodeScale / 2, 0);
        }
      },
      clear: function clear() {
        for (var i = 0; i < this._szNodeList.length; i++) this._szNodeList[i].removeFromParent(true);
        for (var i = 0; i < this._szGroupList.length; i++) this._szGroupList[i].removeFromParent(true);
        this._szNodeList = [];
        this._szGroupList = [];
        this._nodeDir = def.MJNodeDir.FRONT;
      },
      addNode: function addNode(card) {
        var scale = this._nodeScale;
        this._nodeDir != def.MJNodeDir.DOWN && this._nodeDir != def.MJNodeDir.UPWARD || (scale = this._downScale);
        this._nodeDir == def.MJNodeDir.FRONT && this._userDir == def.UserDir.OP && (this._nodeDir = def.MJNodeDir.BACK);
        var idx = this._szNodeList.length;
        this._userDir == def.UserDir.OP && (idx = def.HAND_NUM - 1 - idx);
        var node = cc.instantiate(this.preMJNode);
        node.getComponent("ermjMJNode").init();
        node.getComponent("ermjMJNode").setData(card);
        node.getComponent("ermjMJNode").setType(this._nodeDir);
        node.getComponent("ermjMJNode").setIndex(idx);
        node.parent = this.node;
        node.position = this.getNextPos();
        node.scale = scale;
        this._szNodeList.push(node);
      },
      deleteNode: function deleteNode(card) {
        var worldpos = cc.v2(0, 0);
        for (var i = this._szNodeList.length - 1; i >= 0; i--) {
          var node = this._szNodeList[i];
          if (card == node.getComponent("ermjMJNode").getData()) {
            worldpos = this.node.convertToWorldSpaceAR(node.position);
            node.removeFromParent(true);
            this._szNodeList.splice(i, 1);
            break;
          }
        }
        this.adjust(true, false);
        return worldpos;
      },
      deleteNodeByIndex: function deleteNodeByIndex(index) {
        var worldpos = cc.v2(0, 0);
        if (index < 0 || index >= this._szNodeList.length) return worldpos;
        var node = this._szNodeList[index];
        worldpos = this.node.convertToWorldSpaceAR(node.position);
        node.removeFromParent(true);
        this._szNodeList.splice(index, 1);
        this.adjust(true, true);
        return worldpos;
      },
      deleteNodeByLast: function deleteNodeByLast() {
        var worldpos = cc.v2(0, 0);
        var index = this._szNodeList.length - 1;
        if (index < 0 || index >= this._szNodeList.length) return worldpos;
        var node = this._szNodeList[index];
        worldpos = this.node.convertToWorldSpaceAR(node.position);
        node.removeFromParent(true);
        this._szNodeList.splice(index, 1);
        this.adjust(false, false);
        return worldpos;
      },
      rotateNodes: function rotateNodes(dir) {
        null == dir && (dir = def.MJNodeDir.FRONT);
        this._nodeDir = dir;
        var scale = this._nodeScale;
        dir != def.MJNodeDir.DOWN && dir != def.MJNodeDir.UPWARD || (scale = this._downScale);
        dir == def.MJNodeDir.FRONT && this._userDir == def.UserDir.OP && (dir = def.MJNodeDir.BACK);
        for (var i = 0; i < this._szNodeList.length; i++) {
          this._szNodeList[i].getComponent("ermjMJNode").setType(dir);
          this._szNodeList[i].scale = scale;
        }
        this.adjust(false, false);
      },
      sortNode: function sortNode(sort, action) {
        this.adjust(sort, action);
      },
      sortNodeWithRotate: function sortNodeWithRotate(callback, target) {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
          _this.rotateNodes(def.MJNodeDir.DOWN);
        }, this), cc.delayTime(.3), cc.callFunc(function() {
          _this.adjust(true, false);
          _this.rotateNodes(def.MJNodeDir.FRONT);
        }, this), cc.delayTime(.4), cc.callFunc(function() {
          callback && callback(target);
        }, this)));
      },
      addGroup: function addGroup(group, hidden) {
        var idx = this._szGroupList.length;
        this._userDir == def.UserDir.OP && (idx = def.GROUP_NUM - idx);
        var node = cc.instantiate(this.preMJGroup);
        node.getComponent("ermjMJGroup").init(idx, this._userDir, hidden);
        node.getComponent("ermjMJGroup").setData(group);
        node.getComponent("ermjMJGroup").setType(def.MJGroupDev.LEFT);
        this._userDir == def.UserDir.OP && node.getComponent("ermjMJGroup").setType(def.MJGroupDev.RIGHT);
        node.parent = this.node;
        node.scale = this._groupScale;
        this._szGroupList.push(node);
        this.adjust(true, false);
      },
      convertGroup: function convertGroup(type, group) {
        for (var i = 0; i < this._szGroupList.length; i++) {
          var data = this._szGroupList[i].getComponent("ermjMJGroup").getData();
          if (data.type == type && data.card == group.card) {
            this._szGroupList[i].getComponent("ermjMJGroup").setData(group);
            break;
          }
        }
      },
      getStartPos: function getStartPos(adjust) {
        var pos = this.getNextPos(0, 13);
        adjust && (pos = this.getNextPos(this._szGroupList.length - 1, this._szNodeList.length - 1));
        this._userDir == def.UserDir.ME && (pos.x = -pos.x);
        this._startPos = cc.v2(pos.x / 2, 0);
      },
      getNextPos: function getNextPos(groupNum, nodeNum) {
        null == groupNum && (groupNum = this._szGroupList.length);
        null == nodeNum && (nodeNum = this._szNodeList.length);
        var nodeSpace = this._nodeSpace;
        this._nodeDir != def.MJNodeDir.UPWARD && this._nodeDir != def.MJNodeDir.DOWN || (nodeSpace = this._downSpace);
        var x = (this._groupSize.width + this._groupSpace) * groupNum * this._groupScale + (this._nodeSize.width + nodeSpace) * nodeNum * this._nodeScale;
        var y = 0;
        groupNum == this._szGroupList.length ? x += this._connSpace * this._nodeScale : y = -20;
        3 * groupNum + nodeNum >= 13 && (x += this._lastSpace * this._nodeScale);
        this._userDir == def.UserDir.OP && (x = -x);
        return cc.v2(this._startPos.x + x, this._startPos.y + y);
      },
      getNextPosWithWorldSpace: function getNextPosWithWorldSpace(groupNum, nodeNum) {
        var pos = this.getNextPos(groupNum, nodeNum);
        return this.node.convertToWorldSpaceAR(pos);
      },
      getTouchIndex: function getTouchIndex(point) {
        for (var i = 0; i < this._szNodeList.length; i++) {
          var node = this._szNodeList[i];
          if (node.getComponent("ermjMJNode").isTouchInside(point)) return i;
        }
        return -1;
      },
      setNodeShoot: function setNodeShoot(index, shoot) {
        if (index >= 0 && index < this._szNodeList.length) shoot ? this._szNodeList[index].y += 50 : this._szNodeList[index].y = 0; else for (var i = 0; i < this._szNodeList.length; i++) this._szNodeList[i].y = 0;
      },
      getNodeByIndex: function getNodeByIndex(index) {
        if (index < 0 || index >= this._szNodeList.length) return null;
        return this._szNodeList[index];
      },
      getCardByIndex: function getCardByIndex(index) {
        if (index < 0 || index >= this._szNodeList.length) return 0;
        return this._szNodeList[index].getComponent("ermjMJNode").getData();
      },
      getNodeScale: function getNodeScale() {
        return this._nodeScale;
      },
      getNodeSize: function getNodeSize() {
        return this._nodeSize;
      },
      setTingModel: function setTingModel(outcards) {
        if (null == outcards) for (var i = 0; i < this._szNodeList.length; i++) var card = this._szNodeList[i].getComponent("ermjMJNode").setEnable(true); else for (var i = 0; i < this._szNodeList.length; i++) {
          var card = this._szNodeList[i].getComponent("ermjMJNode").getData();
          var found = false;
          for (var j = 0; j < outcards.length; j++) if (card == outcards[j]) {
            found = true;
            break;
          }
          false == found && this._szNodeList[i].getComponent("ermjMJNode").setEnable(false);
        }
      },
      setCardColor: function setCardColor(card, color) {
        for (var i = 0; i < this._szNodeList.length; i++) {
          var cardComp = this._szNodeList[i].getComponent("ermjMJNode");
          card == cardComp.getData() ? cardComp.setColor(color) : cardComp.setColor(null);
        }
        for (var i = 0; i < this._szGroupList.length; i++) {
          var groupComp = this._szGroupList[i].getComponent("ermjMJGroup");
          groupComp.setCardColor(card, color);
        }
      },
      sort: function sort() {
        this._szNodeList.sort(function(a, b) {
          var card1 = a.getComponent("ermjMJNode").getData();
          var card2 = b.getComponent("ermjMJNode").getData();
          return card1 > card2 ? 1 : card1 < card2 ? -1 : 0;
        });
      },
      adjust: function adjust(sort, action) {
        null == sort && (sort = true);
        null == action && (action = false);
        if (action) for (var i = 0; i < this._szNodeList.length; i++) i == this._szNodeList.length - 1 ? this._szNodeList[i].last = true : this._szNodeList[i].last = false;
        sort && this.sort();
        var index = 0;
        for (var i = 0; i < this._szGroupList.length; i++) {
          this._szGroupList[i].position = this.getNextPos(i, 0);
          this._userDir == def.UserDir.OP && (this._szGroupList[i].y += 20);
          index++;
        }
        index *= 3;
        for (var i = 0; i < this._szNodeList.length; i++) {
          var pos = this.getNextPos(this._szGroupList.length, i);
          if (action) {
            var move = cc.moveTo(.3, pos);
            if (true == this._szNodeList[i].last && index < def.HAND_NUM - 2) {
              var poscurr = this._szNodeList[i].position;
              move = cc.sequence(cc.moveTo(.1, cc.v2(poscurr.x, poscurr.y + 170)), cc.moveTo(.3, cc.v2(pos.x, pos.y + 170)), cc.moveTo(.1, pos));
            }
            this._szNodeList[i].stopAllActions();
            this._szNodeList[i].runAction(move);
          } else this._szNodeList[i].position = pos;
          this._userDir == def.UserDir.ME ? this._szNodeList[i].getComponent("ermjMJNode").setIndex(index) : this._szNodeList[i].getComponent("ermjMJNode").setIndex(def.HAND_NUM - 1 - index);
          index++;
        }
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjMJHua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b856o9kVdNnaRGGnncL/iG", "ermjMJHua");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        _direction: 0,
        _szNodeList: [],
        _nodeSize: cc.size(0, 0),
        _nodeScale: 1,
        _nodeSpace: 0,
        _nextSpaceX: 0,
        _nextSpaceY: 0
      },
      init: function init(dir) {
        this._direction = dir;
        var nodeComp = cc.instantiate(this.preMJNode).getComponent("ermjMJNode");
        nodeComp.init();
        nodeComp.setType(def.MJNodeDir.UPWARD);
        this._nodeSize = nodeComp.getSize();
        if (dir == def.UserDir.ME) {
          this._nodeScale = .77;
          this._nodeSpace = -30;
          this._nextSpaceX = -25;
          this._nextSpaceY = -38;
        } else if (dir == def.UserDir.OP) {
          this._nodeScale = .56;
          this._nodeSpace = -30;
          this._nextSpaceX = 25;
          this._nextSpaceY = -38;
        }
      },
      clear: function clear() {
        for (var i = 0; i < this._szNodeList.length; i++) this._szNodeList[i].removeFromParent(true);
        this._szNodeList = [];
      },
      addNode: function addNode(card) {
        var m = Math.floor(this._szNodeList.length / 4);
        var n = Math.floor(this._szNodeList.length % 4);
        var idx = 0;
        var zorder = m;
        if (this._direction == def.UserDir.OP) {
          idx = def.HAND_NUM - 1;
          zorder = -m;
        }
        var node = cc.instantiate(this.preMJNode);
        node.getComponent("ermjMJNode").init();
        node.getComponent("ermjMJNode").setData(card);
        node.getComponent("ermjMJNode").setType(def.MJNodeDir.UPWARD);
        node.getComponent("ermjMJNode").setIndex(idx);
        node.parent = this.node;
        node.position = this.getNextPos();
        node.scale = this._nodeScale;
        node.zIndex = zorder;
        this._szNodeList.push(node);
      },
      getNextPos: function getNextPos() {
        var m = Math.floor(this._szNodeList.length / 4);
        var n = Math.floor(this._szNodeList.length % 4);
        var x = (this._nodeSize.width + this._nodeSpace) * this._nodeScale * n + this._nextSpaceX * this._nodeScale * m;
        var y = (this._nodeSize.height + this._nextSpaceY) * this._nodeScale * m;
        if (this._direction == def.UserDir.OP) {
          x = -x;
          y = -y;
        }
        return cc.v2(x, -y);
      },
      getNextPosWithWorldSpace: function getNextPosWithWorldSpace() {
        var pos = this.getNextPos();
        return this.node.convertToWorldSpaceAR(pos);
      },
      getNodeScale: function getNodeScale() {
        return this._nodeScale;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjMJNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47634i6GhxKwZXQf9n//z4m", "ermjMJNode");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        spBase: cc.Sprite,
        spData: cc.Sprite,
        spGray: cc.Sprite,
        labTag: cc.Label,
        a: {
          default: null,
          displayName: "\u9ebb\u5c06\u5e95\u677f"
        },
        sfFront: [ cc.SpriteFrame ],
        sfBack: [ cc.SpriteFrame ],
        sfUpward: [ cc.SpriteFrame ],
        sfDown: [ cc.SpriteFrame ],
        sfLeftDown: [ cc.SpriteFrame ],
        b: {
          default: null,
          displayName: "\u9ebb\u5c06\u82b1\u8272-\u5927"
        },
        sfWan: [ cc.SpriteFrame ],
        sfFeng: [ cc.SpriteFrame ],
        sfJian: [ cc.SpriteFrame ],
        sfHua: [ cc.SpriteFrame ],
        c: {
          default: null,
          displayName: "\u9ebb\u5c06\u82b1\u8272-\u5de6"
        },
        sfWan1: [ cc.SpriteFrame ],
        sfFeng1: [ cc.SpriteFrame ],
        sfJian1: [ cc.SpriteFrame ],
        sfHua1: [ cc.SpriteFrame ],
        d: {
          default: null,
          displayName: "\u9ebb\u5c06\u82b1\u8272-\u4e2d"
        },
        sfWan2: [ cc.SpriteFrame ],
        sfFeng2: [ cc.SpriteFrame ],
        sfJian2: [ cc.SpriteFrame ],
        sfHua2: [ cc.SpriteFrame ],
        e: {
          default: null,
          displayName: "\u9ebb\u5c06\u82b1\u8272-\u53f3"
        },
        sfWan3: [ cc.SpriteFrame ],
        sfFeng3: [ cc.SpriteFrame ],
        sfJian3: [ cc.SpriteFrame ],
        sfHua3: [ cc.SpriteFrame ],
        _card: 0,
        _enable: true,
        _direction: 0,
        _index: 0
      },
      init: function init() {
        this._card = 0;
        this._enable = true;
      },
      setData: function setData(card) {
        this._card = card;
        if (0 == card) this.spData.node.active = false; else {
          this.spData.node.active = true;
          this.updateData();
        }
      },
      getData: function getData() {
        return this._card;
      },
      getSize: function getSize() {
        return this.spBase.node.getContentSize();
      },
      isTouchInside: function isTouchInside(point) {
        if (false == this.isEnable()) return false;
        var pt = this.node.convertToNodeSpace(point);
        var x = this.spBase.node.x;
        var y = this.spBase.node.y;
        var w = this.spBase.node.width;
        var h = this.spBase.node.height;
        var rc = cc.rect(x - w / 2, y - h / 2, w, h);
        return rc.contains(pt);
      },
      setType: function setType(dir) {
        null == dir && (dir = 0);
        this._direction = dir;
        this.updateBase();
        this.updateData();
      },
      setIndex: function setIndex(idx) {
        null == idx && (idx = 0);
        this._index = idx;
        this.updateBase();
        this.updateData();
      },
      setEnable: function setEnable(enable) {
        this._enable = enable;
        this.spGray.node.active = !enable;
      },
      isEnable: function isEnable() {
        return this._enable;
      },
      setTag: function setTag(tag) {
        this.labTag.node.active = true;
        this.labTag.string = tag;
      },
      setColor: function setColor(color) {
        this.spBase.node.color = null != color ? color : cc.color(255, 255, 255, 255);
      },
      updateBase: function updateBase() {
        var index = this.convertIndex(this._direction, this._index);
        var flip = this.convertFlip(this._direction, this._index);
        var zorder = this.convertZOrder(this._direction, this._index);
        if (this._direction == def.MJNodeDir.BACK) {
          this.spBase.spriteFrame = this.sfBack[index];
          this.spBase.node.scaleX = flip ? -1 : 1;
          this.node.zIndex = zorder;
        } else if (this._direction == def.MJNodeDir.UPWARD) {
          this.spBase.spriteFrame = this.sfUpward[index];
          this.spBase.node.scaleX = flip ? -1 : 1;
          this.spData.node.y = 10;
          this.node.zIndex = zorder;
        } else if (this._direction == def.MJNodeDir.DOWN) {
          this.spBase.spriteFrame = this.sfDown[index];
          this.spBase.node.scaleX = flip ? -1 : 1;
          this.node.zIndex = zorder;
        } else if (this._direction == def.MJNodeDir.HORIZON) {
          this.spBase.spriteFrame = this.sfLeftDown[index];
          this.spBase.node.scaleX = flip ? -1 : 1;
          this.node.zIndex = zorder;
        } else {
          this.spBase.spriteFrame = this.sfFront[index];
          this.spBase.node.scaleX = flip ? -1 : 1;
          this.node.zIndex = zorder;
        }
      },
      updateData: function updateData() {
        var color = (240 & this._card) >> 4;
        var point = 15 & this._card;
        if (this._direction == def.MJNodeDir.BACK) this.spData.node.active = false; else if (this._direction == def.MJNodeDir.UPWARD) {
          this.spData.node.active = true;
          this.spData.node.skewX = this.getSkewValue();
          this.spData.node.scaleX = .5;
          this.spData.node.scaleY = .45;
          this.spData.node.y = 15;
        } else if (this._direction == def.MJNodeDir.DOWN) this.spData.node.active = false; else if (this._direction == def.MJNodeDir.HORIZON) this.spData.node.active = false; else {
          this.spData.node.active = true;
          this.spData.node.scale = 1;
          this.spData.node.y = -10;
        }
        switch (color) {
         case def.Color.WAN:
          this.spData.spriteFrame = this.sfWan[point - 1];
          break;

         case def.Color.TIAO:
         case def.Color.TONG:
          break;

         case def.Color.FENG:
          this.spData.spriteFrame = this.sfFeng[point - 1];
          break;

         case def.Color.JIAN:
          this.spData.spriteFrame = this.sfJian[point - 1];
          break;

         case def.Color.HUA:
          this.spData.spriteFrame = this.sfHua[point - 1];
        }
      },
      convertIndex: function convertIndex(dir, idx) {
        idx < 0 && (idx = 0);
        idx >= 14 && (idx = 14);
        var ret = 0;
        if (dir == def.MJNodeDir.BACK) {
          var sz = [ 0, 0, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0 ];
          ret = sz[idx];
        } else if (dir == def.MJNodeDir.UPWARD) {
          var sz = [ 0, 0, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0 ];
          ret = sz[idx];
        } else if (dir == def.MJNodeDir.DOWN) {
          var sz = [ 0, 0, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0 ];
          ret = sz[idx];
        } else ret = (dir == def.MJNodeDir.HORIZON, 0);
        return ret;
      },
      convertFlip: function convertFlip(dir, idx) {
        (idx < 0 || idx >= 14) && (idx = 0);
        var ret = false;
        dir == def.MJNodeDir.BACK ? idx > 7 && (ret = true) : dir == def.MJNodeDir.UPWARD ? idx > 7 && (ret = true) : dir == def.MJNodeDir.DOWN ? idx > 7 && (ret = true) : ret = (dir == def.MJNodeDir.HORIZON, 
        false);
        return ret;
      },
      convertZOrder: function convertZOrder(dir, idx) {
        idx < 0 && (idx = 0);
        idx >= 14 && (idx = 14);
        var ret = 0;
        if (dir == def.MJNodeDir.BACK) {
          var sz = [ 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1 ];
          ret = sz[idx];
        } else if (dir == def.MJNodeDir.UPWARD) {
          var sz = [ 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1 ];
          ret = sz[idx];
        } else if (dir == def.MJNodeDir.DOWN) {
          var sz = [ 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1 ];
          ret = sz[idx];
        } else ret = (dir == def.MJNodeDir.HORIZON, 0);
        return ret;
      },
      getSkewValue: function getSkewValue() {
        var index = this.convertIndex(this._direction, this._index);
        var flip = this.convertFlip(this._direction, this._index);
        var ret = 0;
        ret = 5 == index ? 0 : 4 == index ? 5 : 3 == index ? 9 : 2 == index ? 13 : 1 == index ? 17 : 20;
        flip && (ret = -ret);
        return ret;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjMJOut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ccd0MeXolCYKjk7Mum1n/P", "ermjMJOut");
    "use strict";
    var def = require("ermjDefine");
    var MAX_NUM = 11;
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        _startPos: cc.v2(0, 0),
        _nodeSize: cc.size(0, 0),
        _szNodeList: [],
        _userDir: 0,
        _nodeScale: 1,
        _nodeSpaceX: 0,
        _nodeSpaceY: 0,
        _nextSpaceX: 0
      },
      init: function init(dir) {
        this._userDir = dir;
        var node = cc.instantiate(this.preMJNode);
        node.getComponent("ermjMJNode").init();
        node.getComponent("ermjMJNode").setType(def.MJNodeDir.UPWARD);
        this._nodeSize = node.getComponent("ermjMJNode").getSize();
        if (dir == def.UserDir.ME) {
          this._nodeScale = .9;
          this._nodeSpaceX = -30;
          this._nodeSpaceY = -38;
          this._nextOffset = -13;
          this._startPos = cc.v2(-(this._nodeSize.width + this._nodeSpaceX) * this._nodeScale * (MAX_NUM - 1) / 2, 0);
        } else if (dir == def.UserDir.OP) {
          this._nodeScale = .78;
          this._nodeSpaceX = -30;
          this._nodeSpaceY = -38;
          this._nextOffset = 13;
          this._startPos = cc.v2((this._nodeSize.width + this._nodeSpaceX) * this._nodeScale * (MAX_NUM - 1) / 2, 0);
        }
      },
      clear: function clear() {
        for (var i = 0; i < this._szNodeList.length; i++) this._szNodeList[i].removeFromParent(true);
        this._szNodeList = [];
      },
      addNode: function addNode(card) {
        var m = Math.floor(this._szNodeList.length / MAX_NUM);
        var n = Math.floor(this._szNodeList.length % MAX_NUM);
        var all_index = [ 5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9 ];
        var all_order = [ 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1 ];
        var scale = 1;
        var order = 0;
        var index = 0;
        if (this._userDir == def.UserDir.ME) {
          scale = 1 + .03 * m;
          index = all_index[n];
          order = all_order[n] + m * MAX_NUM;
        } else {
          scale = 1 - .03 * m;
          index = all_index[MAX_NUM - 1 - n];
          order = all_order[MAX_NUM - 1 - n] - m * MAX_NUM;
        }
        var node = cc.instantiate(this.preMJNode);
        node.getComponent("ermjMJNode").init();
        node.getComponent("ermjMJNode").setData(card);
        node.getComponent("ermjMJNode").setType(def.MJNodeDir.UPWARD);
        node.getComponent("ermjMJNode").setIndex(index);
        node.parent = this.node;
        node.position = this.getNextPos(scale);
        node.scale = this._nodeScale * scale;
        node.zIndex = order;
        this._szNodeList.push(node);
      },
      deleteNodeByLast: function deleteNodeByLast() {
        var worldpos = cc.v2(0, 0);
        var index = this._szNodeList.length - 1;
        if (index < 0) return worldpos;
        var node = this._szNodeList[index];
        worldpos = this.node.convertToWorldSpaceAR(node.position);
        node.removeFromParent(true);
        this._szNodeList.splice(index, 1);
        return worldpos;
      },
      setCardColor: function setCardColor(card, color) {
        for (var i = 0; i < this._szNodeList.length; i++) {
          var cardComp = this._szNodeList[i].getComponent("ermjMJNode");
          card == cardComp.getData() ? cardComp.setColor(color) : cardComp.setColor(null);
        }
      },
      getNextPos: function getNextPos(scaleex) {
        null == scaleex && (scaleex = 1);
        var m = Math.floor(this._szNodeList.length / MAX_NUM);
        var n = Math.floor(this._szNodeList.length % MAX_NUM);
        var x = (this._nodeSize.width + this._nodeSpaceX) * n * this._nodeScale * scaleex + this._nextOffset * m * this._nodeScale * scaleex;
        var y = -(this._nodeSize.height + this._nodeSpaceY) * m * this._nodeScale * scaleex;
        if (this._userDir == def.UserDir.OP) {
          x = -x;
          y = -y;
        }
        return cc.v2(this._startPos.x + x, this._startPos.y + y);
      },
      getNextPosWithWorldSpace: function getNextPosWithWorldSpace() {
        var pos = this.getNextPos();
        return this.node.convertToWorldSpaceAR(pos);
      },
      getNodeScale: function getNodeScale() {
        return this._nodeScale;
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjMJWall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7aadYVXDdIJKH3j95IZbrs", "ermjMJWall");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        labRemain: cc.Label,
        _NodePool: null,
        _NodeList: [],
        _remain: 0,
        _head: 0,
        _tail: 0
      },
      init: function init() {
        this.initNode();
        this.createWall();
      },
      clear: function clear() {
        for (var i = 0; i < this._NodeList.length; i++) this._NodeList[i].active = false;
        this._head = 0;
        this._tail = 0;
        this._remain = 0;
        this.setRemainNum(0);
      },
      reset: function reset() {
        for (var i = 0; i < this._NodeList.length; i++) this._NodeList[i].active = true;
        this._head = 0;
        this._tail = this._NodeList.length - 1;
        this._remain = def.WALL_NUM;
        this.setRemainNum(this._remain);
      },
      setRemainNum: function setRemainNum(num) {},
      subCard: function subCard(num, tail) {
        null == tail && (tail = false);
        var pos = cc.v2(0, 0);
        if (this._tail >= this._head) {
          if (true == tail) for (var i = 0; i < num; i++) {
            var idx = this._head;
            var n = Math.floor(this._head % 2);
            0 == n && true == this._NodeList[idx + 1].active && (idx += 1);
            1 == n && true == this._NodeList[idx - 1].active && (idx -= 1);
            pos = this._NodeList[idx].position;
            this._NodeList[idx].active = false;
            this._head++;
            if (this._head > this._tail) break;
          } else for (var i = 0; i < num; i++) {
            var idx = this._tail;
            pos = this._NodeList[idx].position;
            this._tail == this._head && false == this._NodeList[idx].active && (idx -= 1);
            this._NodeList[idx].active = false;
            this._tail--;
            if (this._tail < this._head) break;
          }
          this._remain -= num;
          this._remain < 0 && (this._remain = 0);
          this.setRemainNum(this._remain);
        } else cc.log("\u724c\u5899\u5df2\u7ecf\u6ca1\u6709\u724c\u4e86!");
        return this.node.convertToWorldSpaceAR(pos);
      },
      createNode: function createNode() {
        var node = cc.instantiate(this.preMJNode);
        node.getComponent("ermjMJNode").init();
        node.getComponent("ermjMJNode").setData(0);
        node.getComponent("ermjMJNode").setType(def.MJNodeDir.HORIZON);
        node.parent = this.node;
        return node;
      },
      initNode: function initNode() {
        this._NodePool = new cc.NodePool();
        for (var i = 0; i < def.WALL_NUM; i++) {
          var node = this.createNode();
          this._NodePool.put(node);
        }
      },
      getNode: function getNode() {
        var node = null;
        node = this._NodePool.size() > 0 ? this._NodePool.get() : this.createNode();
        return node;
      },
      createWall: function createWall() {
        var wallnum = def.WALL_NUM / 2;
        var nodesize = cc.size(91, 69);
        var offsetUp = cc.v2(9, 24);
        var offsetNext = cc.v2(9.5, -27);
        var startpos = cc.v2(610, -210);
        var scale = 1;
        for (var i = 0; i < wallnum; i++) {
          var m = Math.floor(i / 2);
          var n = Math.floor(i % 2);
          0 == n && (scale = 1 - .01 * m);
          var x = startpos.x - m * offsetNext.x * scale + n * offsetUp.x * scale;
          var y = startpos.y + m * (nodesize.height + offsetNext.y) * scale + n * offsetUp.y * scale;
          var node = this.getNode();
          node.parent = this.node;
          node.position = cc.v2(x, y);
          node.scaleX = -scale;
          node.scaleY = scale;
          node.zIndex = i % 2 == 0 ? wallnum - 2 * m : wallnum - 2 * m + 1;
          node.active = false;
          this._NodeList.push(node);
        }
        var TempList = [];
        var startpos = cc.v2(-600, -210);
        var scale = 1;
        for (var i = 0; i < wallnum; i++) {
          var m = Math.floor(i / 2);
          var n = Math.floor(i % 2);
          0 == n && (scale = 1 - .01 * m);
          var x = startpos.x + m * offsetNext.x * scale - n * offsetUp.x * scale;
          var y = startpos.y + m * (nodesize.height + offsetNext.y) * scale + n * offsetUp.y * scale;
          var node = this.getNode();
          node.parent = this.node;
          node.position = cc.v2(x, y);
          node.scaleX = scale;
          node.scaleY = scale;
          node.zIndex = i % 2 == 0 ? wallnum - 2 * m : wallnum - 2 * m + 1;
          node.active = false;
          TempList.push(node);
        }
        for (var i = TempList.length - 1; i > 0; ) {
          this._NodeList.push(TempList[i - 1]);
          this._NodeList.push(TempList[i]);
          i -= 2;
        }
      },
      deleteWall: function deleteWall() {
        for (var i = 0; i < this._NodeList.length; i++) this._NodePool.put(this._NodeList[i]);
        this._NodeList = [];
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjMatchText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c199WywC1DQ6/0LkpjBUXw", "ermjMatchText");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ndTexts: [ cc.Node ]
      },
      onLoad: function onLoad() {
        var num = this.ndTexts.length;
        for (var i = 0; i < num; i++) {
          var pos = this.ndTexts[i].position;
          this.ndTexts[i].runAction(cc.repeatForever(cc.sequence(cc.delayTime(.2 * i), cc.moveTo(.1, cc.v2(pos.x, pos.y + 30)), cc.moveTo(.1, cc.v2(pos.x, pos.y)), cc.delayTime(.2 * (num - i - 1)))));
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjOperLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0a0aWBDCNAlK1PKeUWQehK", "ermjOperLayer");
    "use strict";
    var def = require("ermjDefine");
    var SPACE_BTN = 235;
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        Operate: cc.Node,
        btnChi: cc.Button,
        btnPeng: cc.Button,
        btnGang: cc.Button,
        btnTing: cc.Button,
        btnHu: cc.Button,
        btnPass: cc.Button,
        btnCancel: cc.Button,
        btnReady: cc.Button,
        Select: cc.Node,
        Panels: [ cc.Node ],
        Trustee: cc.Node,
        Action: cc.Node,
        _GameViewComp: null,
        _ActionComp: null,
        _data: null,
        _operate: 0,
        _selected: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.zIndex = def.ZIndex.OPER;
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this._ActionComp = this.Action.getComponent("ermjAction");
        this.Operate.active = false;
        this.Select.active = false;
        this.btnChi.node.on("click", this.onButtonChi, this);
        this.btnPeng.node.on("click", this.onButtonPeng, this);
        this.btnGang.node.on("click", this.onButtonGang, this);
        this.btnTing.node.on("click", this.onButtonTing, this);
        this.btnHu.node.on("click", this.onButtonHu, this);
        this.btnPass.node.on("click", this.onButtonPass, this);
        this.btnCancel.node.on("click", this.onButtonCancel, this);
        for (var i = 0; i < 4; i++) {
          this.Panels[i].i = i;
          this.Panels[i].on("click", this.onSelectClicked, this);
        }
        this.Trustee.on(cc.Node.EventType.TOUCH_START, function() {
          _this._GameViewComp._ProtocolComp.sendTrustee(false);
        });
        this.btnReady.node.on("click", function() {
          _this._GameViewComp._ProtocolComp.sendUserReady();
        });
      },
      start: function start() {},
      clear: function clear() {
        this.Select.active = false;
        this.Operate.active = false;
        this.btnCancel.node.active = false;
        this._data = null;
        this._operate = 0;
        this._selected = null;
      },
      setOperateVisible: function setOperateVisible(visible, data) {
        this.Operate.active = visible;
        this._data = data;
        visible ? this.updateOperate() : this._data = null;
      },
      updateOperate: function updateOperate() {
        this.clearOperate();
        var operate = this._data.operate;
        var posx = 0;
        this.btnPass.node.x = posx;
        this.btnPass.node.active = true;
        if (0 != (operate & def.Operate.HU)) {
          posx -= SPACE_BTN;
          this.btnHu.node.x = posx;
          this.btnHu.node.active = true;
        }
        if (0 != (operate & def.Operate.TING)) {
          posx -= SPACE_BTN;
          this.btnTing.node.x = posx;
          this.btnTing.node.active = true;
        }
        if (0 != (operate & def.Operate.GANG_MING) || 0 != (operate & def.Operate.GANG_AN) || 0 != (operate & def.Operate.GANG_BU)) {
          posx -= SPACE_BTN;
          this.btnGang.node.x = posx;
          this.btnGang.node.active = true;
        }
        if (0 != (operate & def.Operate.PENG)) {
          posx -= SPACE_BTN;
          this.btnPeng.node.x = posx;
          this.btnPeng.node.active = true;
        }
        if (0 != (operate & def.Operate.CHI)) {
          posx -= SPACE_BTN;
          this.btnChi.node.x = posx;
          this.btnChi.node.active = true;
        }
      },
      clearOperate: function clearOperate() {
        this.btnChi.node.active = false;
        this.btnPeng.node.active = false;
        this.btnGang.node.active = false;
        this.btnTing.node.active = false;
        this.btnHu.node.active = false;
        this.btnPass.node.active = false;
        this.btnCancel.node.active = false;
      },
      onButtonChi: function onButtonChi(node) {
        var list = this.selectGroups(def.Operate.CHI);
        if (list.length <= 0) return;
        1 == list.length ? this.sendMessage(def.Operate.CHI, list[0]) : this.setSelectVisible(true, def.Operate.CHI, list);
      },
      onButtonPeng: function onButtonPeng(node) {
        var list = this.selectGroups(def.Operate.PENG);
        if (list.length <= 0) return;
        this.sendMessage(def.Operate.PENG, list[0]);
      },
      onButtonGang: function onButtonGang(node) {
        if (0 != (this._data.operate & def.Operate.GANG_MING)) {
          var list = this.selectGroups(def.Operate.GANG_MING);
          list.length > 0 && this.sendMessage(def.Operate.GANG_MING, list[0]);
        } else if (0 != (this._data.operate & def.Operate.GANG_BU)) {
          var list = this.selectGroups(def.Operate.GANG_BU);
          list.length > 0 && this.sendMessage(def.Operate.GANG_BU, list[0]);
        } else if (0 != (this._data.operate & def.Operate.GANG_AN)) {
          var list = this.selectGroups(def.Operate.GANG_AN);
          if (list.length <= 0) return;
          1 == list.length ? this.sendMessage(def.Operate.GANG_AN, list[0]) : this.setSelectVisible(true, def.Operate.GANG_AN, list);
        }
      },
      onButtonTing: function onButtonTing(node) {
        this.Select.active = false;
        this.Operate.active = false;
        this._selected = null;
        this._GameViewComp._CardLayerComp.setTingModel(this._data.tingcards);
      },
      onButtonHu: function onButtonHu(node) {
        this.sendMessage(def.Operate.HU, this.createGroup());
      },
      onButtonPass: function onButtonPass(node) {
        this._GameViewComp._UserLayerComp.isMyTurn() && (this._GameViewComp._UserLayerComp.isBaoting(this._GameViewComp._UserLayerComp.getMyChairID()) || this._GameViewComp._CardLayerComp.setOutEnable(true));
        this.sendMessage(def.Operate.NONE, this.createGroup());
        this.clear();
      },
      onButtonCancel: function onButtonCancel(node) {
        if (null == this._selected) {
          this.Operate.active = true;
          this.btnCancel.node.active = false;
          this._GameViewComp._CardLayerComp.setTingModel(null);
        } else this.setSelectVisible(false);
      },
      setSelectVisible: function setSelectVisible(visible, operate, list) {
        this.Select.active = visible;
        this.Operate.active = !visible;
        if (visible) {
          this._selected = {
            operate: operate,
            list: list
          };
          operate != def.Operate.CHI && operate != def.Operate.GANG_AN || this.updateSelect(list);
        } else this._selected = null;
      },
      updateSelect: function updateSelect(list) {
        this.clearSelect();
        var posx = [ -600, -200, 200, 600 ];
        3 == list.length ? posx = [ -400, 0, 400 ] : 2 == list.length && (posx = [ -200, 200 ]);
        for (var i = 0; i < list.length; i++) {
          this.Panels[i].active = true;
          this.Panels[i].x = posx[i];
          var node = this.createMJGroup(list[i], this.Panels[i]);
          node.scale = 1;
        }
      },
      clearSelect: function clearSelect() {
        for (var i = 0; i < this.Panels.length; i++) {
          this.Panels[i].active = false;
          this.Panels[i].removeAllChildren(true);
        }
      },
      onSelectClicked: function onSelectClicked(event) {
        var i = event.node.i;
        if (i < 0 || i >= 4) return;
        if (null == this._selected) return;
        var operate = this._selected.operate;
        var group = this._selected.list[i];
        this.sendMessage(operate, group);
      },
      selectGroups: function selectGroups(operate) {
        var list = [];
        for (var i = 0; i < this._data.groups.length; i++) {
          var group = this._data.groups[i];
          operate == def.Operate.CHI ? group.type != def.GroupType.CHI_LEFT && group.type != def.GroupType.CHI_CENTER && group.type != def.GroupType.CHI_RIGHT || list.push(group) : operate == def.Operate.PENG ? group.type == def.GroupType.PENG && list.push(group) : operate == def.Operate.GANG_MING ? group.type == def.GroupType.GANG_MING && list.push(group) : operate == def.Operate.GANG_AN ? group.type == def.GroupType.GANG_AN && list.push(group) : operate == def.Operate.GANG_BU && group.type == def.GroupType.GANG_BU && list.push(group);
        }
        return list;
      },
      selectOperate: function selectOperate(operate) {
        var ret = def.Operate.NONE;
        0 != (operate & def.Operate.CHI) && (ret |= def.Operate.CHI);
        0 != (operate & def.Operate.PENG) && (ret |= def.Operate.PENG);
        0 != (operate & def.Operate.GANG_MING) && (ret |= def.Operate.GANG_MING);
        0 != (operate & def.Operate.GANG_AN) && (ret |= def.Operate.GANG_AN);
        0 != (operate & def.Operate.GANG_BU) && (ret |= def.Operate.GANG_BU);
        0 != (operate & def.Operate.TING) && (ret |= def.Operate.TING);
        0 != (operate & def.Operate.HU) && (ret |= def.Operate.HU);
        return ret;
      },
      createMJGroup: function createMJGroup(group, parent) {
        var node = cc.instantiate(this._GameViewComp._CardLayerComp.preMJGroup);
        node.getComponent("ermjMJGroup").init();
        node.getComponent("ermjMJGroup").setData(group);
        node.getComponent("ermjMJGroup").setType(def.MJGroupDev.CENTER);
        node.parent = parent;
        return node;
      },
      createGroup: function createGroup(type, card, cards) {
        null == type && (type = 0);
        null == card && (card = 0);
        null == cards && (cards = [ 0, 0, 0 ]);
        return {
          type: type,
          card: card,
          cards: cards
        };
      },
      sendMessage: function sendMessage(operate, group) {
        this._GameViewComp._ProtocolComp.sendOperCard(operate, group);
        this.clear();
      },
      setReadyVisible: function setReadyVisible(visible) {
        this.btnReady.node.active = visible;
      },
      setTrusteeVisible: function setTrusteeVisible(visible) {
        this.Trustee.active = visible;
      },
      playAction: function playAction(chairID, operate) {
        var index = this._GameViewComp._UserLayerComp.getIndexByChairID(chairID);
        this._ActionComp.playOperAction(index, operate);
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjOption: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a253G08EBN4atueYygqBbj", "ermjOption");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        preSetBoard: cc.Prefab,
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
          _this.setVisible(false);
          _this._callback && _this._callback("setting");
        }, this);
        this.btnRules.node.on("click", function() {
          _this.setVisible(false);
          _this._callback && _this._callback("rules");
        }, this);
        this.gray.on(cc.Node.EventType.TOUCH_START, function(event) {
          _this.setVisible(false);
        }, this);
      },
      start: function start() {},
      setVisible: function setVisible(visible) {
        this.node.active = visible;
      },
      isVisible: function isVisible() {
        return this.node.active;
      },
      display: function display() {
        this.node.active = !this.node.active;
      },
      setCallback: function setCallback(callback) {
        this._callback = callback;
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjPointer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acef4L9ZGdKhZ2OwPVBLs83", "ermjPointer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spPointer: cc.Sprite,
        sfImage: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        this.spPointer.node.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.moveTo(1, cc.v2(0, -30)), cc.moveTo(1, cc.v2(0, 0))), cc.sequence(cc.scaleTo(1, .9), cc.scaleTo(1, 1)))));
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show(pos, scale) {
        this.node.active = true;
        this.node.position = pos;
        this.node.scale = scale;
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjProtocol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8cf7UMA79EgIH7CwYdut1Q", "ermjProtocol");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        _GameViewComp: null
      },
      onLoad: function onLoad() {
        cc.log("onLoad Protocol");
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this.initProto();
      },
      start: function start() {
        cc.ak.util.utils.loadGameSceneFinish();
        cc.log("ENTER_GAME_SCENE_FINISH");
      },
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_MATCH_SUCC, function(dv) {
          var data = new proto.cmd_base_info.EnterRoomSucc();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          bundle.ermj.data.set(bundle.ermj.key.data.ENTER_ROOM_SUCC, data);
        }, this);
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_ENTER_GAME_SCENCE, "EnterRoomSucc", function(data) {
          cc.log("EnterRoomSucc");
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_USERINFO_PUSH, "UserInfo", function(data) {
          _this._GameViewComp.onUserInfo(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_LEAVE_GAME_RESULT, "LeaveGameResult", function(data) {
          data.userId == cc.ak.mc.userMgr.uid ? cc.ak.ui.loadLobbyScence() : _this._GameViewComp.onUserLeave(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_USER_READY_SUCCESS, "ReadySuccess", function(data) {
          _this._GameViewComp.onUserReady(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_TRUSTEE, "Trustee", function(data) {
          _this._GameViewComp.onUserTrustee(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_EEROR_MSG, "ErrorMsg", function(data) {
          _this._GameViewComp.onGameError(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_INIT, "GameInit", function(data) {
          _this._GameViewComp.onGameInit(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_START, "GameStart", function(data) {
          _this._GameViewComp.onGameStart(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_DICE, "DiceMsg", function(data) {
          _this._GameViewComp.onGameDiceBegin(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_DICE_RESULT, "DiceResultMsg", function(data) {
          _this._GameViewComp.onGameDiceFinish(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_PERFLOP, "PerflopMsg", function(data) {
          _this._GameViewComp.onGameDealCard(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_START_BUHUA, "StartBuHuaMsg", function(data) {
          _this._GameViewComp.onGameBuhuaBegin(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_END_BUHUA, "EndBuHuaMsg", function(data) {
          _this._GameViewComp.onGameBuhuaFinish(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GET_CARD, "GetACard", function(data) {
          _this._GameViewComp.onGameTouchCard(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_OUT_CARD, "OutCard", function(data) {
          _this._GameViewComp.onGameOutCard(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_CARD_HANDLE, "CardHandle", function(data) {
          _this._GameViewComp.onGameOperNotice(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_HANDLE_RESULT, "HandleResult", function(data) {
          _this._GameViewComp.onGameOperResult(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_HANDLE_TING, "HandleTing", function(data) {
          _this._GameViewComp.onGameOperTing(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_GAME_OVER, "GameOver", function(data) {
          _this._GameViewComp.onGameOver(data);
        });
        this.registerMsg(proto.cmd_game_ermj.SUB_CMD_GAME.SUB_RESTORE_DATA, "RestoreData", function(data) {
          _this._GameViewComp.onGameRestore(data);
        });
      },
      registerMsg: function registerMsg(nSubID, tabName, callback) {
        nSubID == proto.cmd_game_ermj.SUB_CMD_GAME.SUB_USERINFO_PUSH ? cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_base_info.UserInfo();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this) : cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          var info = new proto.cmd_game_ermj[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          callback(info);
        }, this);
      },
      sendUserSitDown: function sendUserSitDown() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_SIT_DOWN;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendUserLeave: function sendUserLeave() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendUserReady: function sendUserReady() {},
      sendEnterFinish: function sendEnterFinish() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ermj.SUB_CMD_GAME.SUB_C_ENTER_FINISH);
      },
      sendOutCard: function sendOutCard(card, ting) {
        var cmd = new proto.cmd_game_ermj.RequestOutCard();
        cmd.card = card;
        cmd.tingtype = ting;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ermj.SUB_CMD_GAME.SUB_C_OUT_CARD, cmd);
      },
      sendOperCard: function sendOperCard(operate, group) {
        var grp = new proto.cmd_game_ermj.HandleGroup();
        grp.type = group.type;
        grp.card = group.card;
        grp.cards = group.cards;
        var cmd = new proto.cmd_game_ermj.RequestCardHandle();
        cmd.handle = operate;
        cmd.handleGroup = grp;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ermj.SUB_CMD_GAME.SUB_C_CARD_HANDLE, cmd);
      },
      sendTrustee: function sendTrustee(trustee) {
        var cmd = new proto.cmd_game_ermj.RequestTrustee();
        cmd.chairId = 0;
        cmd.trustee = trustee ? 1 : 0;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ermj.SUB_CMD_GAME.SUB_C_GAME_TRUSTEE, cmd);
      },
      sendBuhuaFinish: function sendBuhuaFinish(chairID) {
        var cmd = new proto.cmd_game_ermj.RequestFinishBuHua();
        cmd.chairId = chairID;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ermj.SUB_CMD_GAME.SUB_C_FINISH_BUHUA, cmd);
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjRules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14383l97T1GLaXgoY8lqaS/", "ermjRules");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnClose: cc.Button,
        spGray: cc.Node
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjScoreLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be8a0pfIF1JTpn4DQwLPoGv", "ermjScoreLayer");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        preMJNode: cc.Prefab,
        preMJGroup: cc.Prefab,
        GameView: cc.Node,
        spGray: cc.Sprite,
        btnClose: cc.Button,
        btnContinue: cc.Button,
        Board: cc.Node,
        NodeWin: cc.Node,
        NodeLose: cc.Node,
        NodeHe: cc.Node,
        UserLeft: cc.Node,
        UserRight: cc.Node,
        Content: cc.Node,
        Item: cc.Node,
        NodeMJ: cc.Node,
        _GameViewComp: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.zIndex = def.ZIndex.SCORE;
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this.node.active = false;
        this.btnClose.node.on("click", function() {
          _this.hideBoard();
        });
        this.btnContinue.node.on("click", function() {
          _this._GameViewComp._ProtocolComp.sendUserSitDown();
          _this._GameViewComp.clear();
          _this.hideLayer();
        });
      },
      clear: function clear() {
        this.hideLayer();
        this.Content.removeAllChildren(true);
        this.NodeMJ.removeAllChildren(true);
      },
      showLayer: function showLayer(data) {
        this.node.active = true;
        this.node.active = true;
        this.updateData(data);
        this.showBoard();
      },
      hideLayer: function hideLayer() {
        this.node.active = false;
      },
      showBoard: function showBoard() {
        this.spGray.node.active = true;
        this.Board.active = true;
      },
      hideBoard: function hideBoard() {
        this.spGray.node.active = false;
        this.Board.active = false;
      },
      updateData: function updateData(data) {
        var winuser = data.winner;
        var paouser = data.provideUser;
        var paocard = data.provideCard;
        var zimo = data.zimo;
        var huang = data.flowBureau;
        var fanshu = data.huFanShu;
        var guohu = data.guohucount;
        var fantype = data.huFantype;
        var score = data.GameScore;
        var handcards = [ data.handcard[0].cards, data.handcard[1].cards ];
        var handgroups = [ data.cardGroup[0].handlgroup, data.cardGroup[1].handlgroup ];
        var myChairID = this._GameViewComp._UserLayerComp.getMyChairID();
        if (1 == huang) {
          this.NodeWin.active = false;
          this.NodeLose.active = false;
          this.NodeHe.active = true;
        } else if (winuser == myChairID) {
          this.NodeWin.active = true;
          this.NodeLose.active = false;
          this.NodeHe.active = false;
          this.NodeWin.getChildByName("lab_fan_num").getComponent(cc.Label).string = fanshu;
          this.NodeWin.getChildByName("lab_fun_score").getComponent(cc.Label).string = Math.floor(score[myChairID] / 1e3);
          this.NodeWin.getChildByName("lab_score_left").getComponent(cc.Label).string = Math.floor(score[myChairID] / 1e3);
          this.NodeWin.getChildByName("lab_score_right").getComponent(cc.Label).string = Math.floor(score[myChairID] / 1e3);
        } else {
          this.NodeWin.active = false;
          this.NodeLose.active = true;
          this.NodeHe.active = false;
          this.NodeLose.getChildByName("lab_fan_num").getComponent(cc.Label).string = fanshu;
          this.NodeLose.getChildByName("lab_fun_score").getComponent(cc.Label).string = Math.floor(score[myChairID] / 1e3);
          this.NodeLose.getChildByName("lab_score_left").getComponent(cc.Label).string = Math.floor(score[myChairID] / 1e3);
          this.NodeLose.getChildByName("lab_score_right").getComponent(cc.Label).string = Math.floor(score[myChairID] / 1e3);
        }
        var posx = [ -400, 0, 400 ];
        var count = 0;
        var height = 60;
        fantype[def.FanType.GUOHU] = guohu > 0 ? 2 * guohu : 0;
        for (var i = 0; i < fantype.length; i++) if (fantype[i] > 0) {
          var name = def.FanName[i];
          var fanstr = def.FanNum[i] + "\u756a";
          i == def.FanType.HUAPAI && (fanstr = fantype[i] + "\u756a");
          i == def.FanType.GUOHU && (fanstr = "\xd7" + fantype[i] + "\u500d");
          var m = Math.floor(count % 3);
          var n = Math.floor(count / 3);
          var item = cc.instantiate(this.Item);
          item.active = true;
          item.parent = this.Content;
          item.position = cc.v2(posx[m], -20 - height / 2 - height * n);
          item.getChildByName("lab_fantype").getComponent(cc.Label).string = name;
          item.getChildByName("lab_fannum").getComponent(cc.Label).string = fanstr;
          count++;
        }
        this.Content.height = Math.ceil(count / 3) * height + 50;
        var posx = -600;
        var groups = null != handgroups[winuser] ? handgroups[winuser] : [];
        for (var i = 0; i < groups.length; i++) {
          0 == i && (posx += 40);
          var node = cc.instantiate(this.preMJGroup);
          node.getComponent("ermjMJGroup").init(null, null, false);
          node.getComponent("ermjMJGroup").setData(groups[i]);
          node.getComponent("ermjMJGroup").setType(def.MJGroupDev.LEFT);
          node.parent = this.NodeMJ;
          node.position = cc.v2(posx, -10);
          node.scale = .85;
          posx = posx + node.getComponent("ermjMJGroup").getSize().width * node.scale + 20;
        }
        posx += 20;
        var hands = null != handcards[winuser] ? handcards[winuser] : [];
        for (var i = 0; i < hands.length; i++) {
          var node = cc.instantiate(this.preMJNode);
          node.getComponent("ermjMJNode").init();
          node.getComponent("ermjMJNode").setData(hands[i]);
          node.getComponent("ermjMJNode").setType(def.MJNodeDir.FRONT);
          node.getComponent("ermjMJNode").setIndex(0);
          node.parent = this.NodeMJ;
          node.position = cc.v2(posx, 0);
          node.scale = .6;
          posx += node.getComponent("ermjMJNode").getSize().width * node.scale;
          3 * groups.length + i == 12 && (posx += 20);
        }
        var userList = this._GameViewComp._UserLayerComp._szUserList;
        for (var i = 0; i < userList.length; i++) {
          var nickName = userList[i].NickName ? userList[i].NickName : "";
          var headID = userList[i].HeadImgId ? userList[i].HeadImgId : 0;
          if (cc.ak.mc.userMgr.uid == userList[i].Uid) {
            this.UserLeft.getChildByName("lab_name").getComponent(cc.Label).string = nickName;
            this.UserLeft.getChildByName("headAnthologyItem").getComponent("headAnthologyItem").setAvatar(headID);
          } else {
            this.UserRight.getChildByName("lab_name").getComponent(cc.Label).string = nickName;
            this.UserRight.getChildByName("headAnthologyItem").getComponent("headAnthologyItem").setAvatar(headID);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b315+/XSdGW4QUA7HQ7kP9", "ermjSetting");
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
        this._spSoundBar.width = 567 * this.SliderSound.progress;
        this._spMusicBar.width = 567 * this.SliderMusic.progress;
        this.btnClose.node.on("click", function() {
          _this.node.active = false;
        }, this);
      },
      onSoundSliderEvent: function onSoundSliderEvent(sender, eventType) {
        this._spSoundBar.width = 567 * sender.progress;
        cc.ak.util.audioMgr.setSFXVolume(sender.progress);
      },
      onMusicSliderEvent: function onMusicSliderEvent(sender, eventType) {
        this._spMusicBar.width = 567 * sender.progress;
        cc.ak.util.audioMgr.setBGMVolume(sender.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjTestLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd3f3sSbudAAqWX5wdfJHqa", "ermjTestLayer");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        ButtonList: [ cc.Button ],
        _GameViewComp: null
      },
      onLoad: function onLoad() {
        var _this = this;
        if (true == this.node.active) {
          cc.log("TestLayer");
          window.cc.ak = {};
          window.cc.ak.mc = {};
          window.cc.ak.mc.userMgr = {};
          window.cc.ak.mc.userMgr.uid = 10001;
          window.cc.ak.mc.userMgr.nick = "";
          window.cc.ak.util = {};
          window.cc.ak.util.audioMgr = {};
          window.cc.ak.util.audioMgr.playBGM = function() {};
          window.cc.ak.util.audioMgr.playSFX = function() {};
        }
        this.node.zIndex = 100;
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this.ButtonList[0].node.on("click", function(node) {
          cc.log("aaaaaaaaa");
          var data = {};
          data.bankChair = 0;
          data.handcard = [ {
            cards: [ 1, 9, 3, 49, 65, 52, 7, 3, 1, 7, 49, 4, 2 ]
          }, {
            cards: [ 1, 9, 3, 49, 65, 52, 7, 3, 1, 7, 49, 4, 2 ]
          } ];
          data.card = 65;
          data.handle = 0;
          data.handleGroup = null;
          data.tingcards = null;
          data.havebuhua = 0;
          _this._GameViewComp.onGameDealCard(data);
          cc.log("bbbbbbbbbbbb");
        }, this);
        this.ButtonList[1].node.on("click", function(node) {
          var data = {};
          data.chairId = Math.floor(10 * Math.random() % 2);
          data.card = 2;
          data.handle = 0;
          data.handleGroup = null;
          data.tingcards = null;
          data.autoplay = 0;
          _this._GameViewComp.onGameTouchCard(data);
        }, this);
        this.ButtonList[2].node.on("click", function(node) {
          var data = {};
          data.chairId = Math.random() > .5 ? 0 : 1;
          data.card = Math.random() > .5 ? 2 : 81;
          data.autoplay = 1;
          _this._GameViewComp.onGameOutCard(data);
        }, this);
        this.ButtonList[3].node.on("click", function(node) {
          var data = {};
          data.chairId = 0;
          data.provideUser = 1;
          data.provideHandle = 0;
          data.handleGroup = {
            type: 3,
            card: 1,
            cards: [ 1, 2, 3 ]
          };
          data.nextHandle = 0;
          data.nextHandleGroup = null;
          data.tingcards = null;
          _this._GameViewComp.onGameOperResult(data);
          var data = {};
          data.chairId = 1;
          data.provideUser = 0;
          data.provideHandle = 0;
          data.handleGroup = {
            type: 3,
            card: 1,
            cards: [ 1, 2, 3 ]
          };
          data.nextHandle = 0;
          data.nextHandleGroup = null;
          data.tingcards = null;
          _this._GameViewComp.onGameOperResult(data);
        }, this);
        this.ButtonList[4].node.on("click", function(node) {
          var data = {};
          data.handcards = [ [ 1, 9, 3, 49, 65, 52, 7, 3, 1, 7, 49, 4, 2, 2 ], [ 1, 9, 3, 49, 65, 52, 7, 3, 1, 7, 49, 4, 2, 2 ] ];
          data.handgroups = [ [], [] ];
          data.outcards = [ [ 1, 9, 3, 49, 65, 52, 7, 3, 1, 7, 49, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 1, 9, 3, 49, 65, 52, 7, 3, 1, 7, 49, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ];
          data.huacards = [ [ 81, 82, 83, 84, 85, 86, 87, 88 ], [ 81, 82, 83, 84, 85, 86, 87, 88 ] ];
          _this._GameViewComp._CardLayerComp.loadCard(data);
        }, this);
        this.ButtonList[5].node.on("click", function(node) {
          _this._GameViewComp._CardLayerComp._MJHandComp[0].rotateNodes(def.MJNodeDir.UPWARD);
          _this._GameViewComp._CardLayerComp._MJHandComp[1].rotateNodes(def.MJNodeDir.UPWARD);
        }, this);
        this.ButtonList[6].node.on("click", function(node) {
          _this._GameViewComp.onGameStart();
          _this._GameViewComp.onUserInfo({
            Uid: 10001,
            NickName: "\u73a9\u5bb6\u6635\u79f0",
            ChairID: 0,
            Status: 3
          });
          _this._GameViewComp.onUserInfo({
            Uid: 10002,
            NickName: "\u73a9\u5bb6\u6635\u79f0",
            ChairID: 1,
            Status: 3
          });
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjTimer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16428iykOdNN4HNklB9j7nQ", "ermjTimer");
    "use strict";
    var ARROW_NUM = 4;
    cc.Class({
      extends: cc.Component,
      properties: {
        labNum: cc.Label,
        Arrows: [ cc.Sprite ],
        Grays: [ cc.Sprite ],
        Lights: [ cc.Sprite ],
        sfGrays: [ cc.SpriteFrame ],
        sfLights: [ cc.SpriteFrame ],
        _num: 0,
        _callback: null,
        _target: null
      },
      onLoad: function onLoad() {
        var pos = [ cc.v2(0, -55), cc.v2(85, 10), cc.v2(0, 68), cc.v2(-85, 10) ];
        var scale = [ 1, .9, .8, .8 ];
        var rotate = [ 0, -90, 180, 90 ];
        for (var i = 0; i < ARROW_NUM; i++) {
          this.Arrows[i].node.active = false;
          this.Grays[i].node.active = true;
          this.Grays[i].node.position = pos[i];
          this.Grays[i].node.scaleY = scale[i];
          this.Grays[i].node.rotation = rotate[i];
          this.Lights[i].node.active = false;
          this.Lights[i].node.position = pos[i];
          this.Lights[i].node.scaleY = scale[i];
          this.Lights[i].node.rotation = rotate[i];
        }
      },
      setCallback: function setCallback(callback, target) {
        this._callback = callback;
        this._target = target;
      },
      setDir: function setDir(dir) {
        (dir < 0 || dir >= ARROW_NUM) && (dir = 0);
        var idx = dir;
        for (var i = 0; i < ARROW_NUM; i++) {
          this.Grays[i].spriteFrame = this.sfGrays[idx];
          this.Lights[i].spriteFrame = this.sfLights[idx];
          idx = (idx + 1 + ARROW_NUM) % ARROW_NUM;
        }
      },
      setUser: function setUser(index, num) {
        1 == index && (index = 2);
        this.setArrow(index);
        this.setTimer(num);
      },
      setLight: function setLight() {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.callFunc(function() {
          _this.setArrow(ARROW_NUM);
        }, this), cc.delayTime(.5), cc.callFunc(function() {
          _this.setArrow(-1);
        }, this)));
      },
      setArrow: function setArrow(index) {
        var all = index >= ARROW_NUM;
        for (var i = 0; i < ARROW_NUM; i++) if (i == index || all) {
          this.Arrows[i].node.active = true;
          this.Lights[i].node.active = true;
          this.Arrows[i].node.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(1), cc.fadeTo(1, 100))));
        } else {
          this.Arrows[i].node.active = false;
          this.Lights[i].node.active = false;
        }
      },
      setTimer: function setTimer(num) {
        var _this2 = this;
        this._num = num;
        this.node.stopAllActions();
        this.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
          _this2.labNum.string = _this2._num;
          _this2._num--;
          if (_this2._num < 0) {
            _this2.node.stopAllActions();
            _this2.labNum.string = "0";
            _this2._callback && _this2._callback(_this2._target);
          }
        }, this), cc.delayTime(1))));
      }
    });
    cc._RF.pop();
  }, {} ],
  ermjUserLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c557awtqPJBDKebgsy0sXbN", "ermjUserLayer");
    "use strict";
    var def = require("ermjDefine");
    cc.Class({
      extends: cc.Component,
      properties: {
        GameView: cc.Node,
        UserHead: [ cc.Node ],
        Timer: cc.Node,
        _GameViewComp: null,
        _UserHeadComp: [],
        _TimerComp: null,
        _szUserList: [],
        _myChairID: -1,
        _currentUser: 0,
        _trustee: [],
        _baoting: []
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.zIndex = def.ZIndex.USER;
        this._GameViewComp = this.GameView.getComponent("ermjGameView");
        this._TimerComp = this.Timer.getComponent("ermjTimer");
        for (var i = 0; i < def.USER_NUM; i++) this._UserHeadComp[i] = this.UserHead[i].getComponent("ermjHeadItem");
        this._TimerComp.setCallback(this.onTimerFinish, this);
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          var num = 0;
          for (var i = 0; i < data.Coins.length; i++) num += data.Coins[i].Amount;
          _this.addScore(_this._myChairID, num);
          var msg = "\u8d26\u6237\u8d44\u91d1\u589e\u52a0" + (num / 1e3).toFixed(2) + "\u5143";
          cc.ak.ui.alert({
            text: msg,
            btns: [ "\u786e\u5b9a" ]
          });
        });
      },
      start: function start() {},
      clear: function clear() {
        for (var i = 0; i < def.USER_NUM; i++) {
          this._UserHeadComp[i].clear();
          this._trustee[i] = false;
          this._baoting[i] = false;
        }
      },
      updateUser: function updateUser(info) {
        cc.log(info);
        if (info.Uid == cc.ak.mc.userMgr.uid) {
          this._myChairID = info.ChairID;
          if (info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL) {
            cc.ak.event.off(cc.ak.key.event.COIN_CHANGE);
            cc.ak.ui.loadLobbyScence();
          } else info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_STANDUP || info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_SIT_DOWN || info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_READY || info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_PLAY || info.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_OFFLINE;
        }
        var oldinfo = this.getUserInfo(info.Uid);
        if (null != oldinfo) {
          var oldidx = this.getIndexByChairID(oldinfo.ChairID);
          this._szUserList[oldidx] = null;
          this._UserHeadComp[oldidx].clear();
        }
        var newidx = this.getIndexByChairID(info.ChairID);
        this._szUserList[newidx] = info;
        this._UserHeadComp[newidx].setInfo(info);
        1 == newidx && this._UserHeadComp[newidx].setReverse(true);
      },
      deleteUser: function deleteUser(uid) {
        var info = this.getUserInfo(uid);
        if (null == info) {
          cc.log("\u7528\u6237\u4e0d\u5b58\u5728\uff01");
          return;
        }
        var index = this.getIndexByChairID(info.ChairID);
        this._szUserList[index] = null;
        this._UserHeadComp[index].clear();
      },
      deleteAllUser: function deleteAllUser() {
        for (var i = 0; i < this._szUserList.length; i++) {
          var uid = this._szUserList[i].Uid;
          uid != cc.ak.mc.userMgr.uid && this.deleteUser(uid);
        }
      },
      updateReady: function updateReady(uid) {
        var info = this.getUserInfo(uid);
        if (null == info) {
          cc.log("\u7528\u6237\u4e0d\u5b58\u5728\uff01");
          return;
        }
      },
      getIndexByChairID: function getIndexByChairID(chairID) {
        return (chairID - this._myChairID + def.MY_INDEX + def.USER_NUM) % def.USER_NUM;
      },
      getUserInfo: function getUserInfo(uid) {
        for (var i = 0; i < def.USER_NUM; i++) {
          var info = this._szUserList[i];
          if (null == info) continue;
          if (info.Uid == uid) return info;
        }
        return null;
      },
      getMyChairID: function getMyChairID() {
        return this._myChairID;
      },
      getUserInfoByChairID: function getUserInfoByChairID(chairID) {
        for (var i = 0; i < def.USER_NUM; i++) {
          var info = this._szUserList[i];
          if (null == info) continue;
          if (info.ChairID == chairID) return info;
        }
        return null;
      },
      getGenderByChairID: function getGenderByChairID(chairID) {
        for (var i = 0; i < def.USER_NUM; i++) {
          var info = this._szUserList[i];
          if (null == info) continue;
          if (info.ChairID == chairID) return info.Sex;
        }
        return 0;
      },
      setCurrentUser: function setCurrentUser(chairID, num) {
        null == num && (num = def.OPER_TIME);
        if (chairID >= 0 && chairID < def.USER_NUM) {
          this._currentUser = chairID;
          var index = this.getIndexByChairID(chairID);
          this._TimerComp.setUser(index, num);
        } else this._TimerComp.setUser(-1, num);
      },
      getCurrentUser: function getCurrentUser() {
        return this._currentUser;
      },
      isMyTurn: function isMyTurn() {
        return this._currentUser == this._myChairID;
      },
      setBanker: function setBanker(chairID) {
        var index = this.getIndexByChairID(chairID);
        this._UserHeadComp[index].setBanker(true);
      },
      setTrustee: function setTrustee(chairID, trustee) {
        var index = this.getIndexByChairID(chairID);
        this._UserHeadComp[index].setTrustee(trustee);
        this._trustee[index] = trustee;
      },
      setBaoting: function setBaoting(chairID) {
        var index = this.getIndexByChairID(chairID);
        this._UserHeadComp[index].setTing(true);
        this._baoting[index] = true;
      },
      isBaoting: function isBaoting(chairID) {
        var index = this.getIndexByChairID(chairID);
        return this._baoting[index];
      },
      setFengDir: function setFengDir(dir) {
        this._TimerComp.setDir(dir);
      },
      setTimerLight: function setTimerLight() {
        this._TimerComp.setLight();
      },
      addScore: function addScore(chairID, num) {
        var userInfo = this.getUserInfoByChairID(chairID);
        if (userInfo) {
          userInfo.AccountA += num;
          var index = this.getIndexByChairID(chairID);
          this._UserHeadComp[index].addScore(num);
        }
      },
      onTimerFinish: function onTimerFinish(self) {
        cc.log("time out");
        if (self.isMyTurn()) {
          self._GameViewComp._OperLayerComp.clear();
          false == self.isBaoting(self._myChairID) && self._GameViewComp._CardLayerComp.setTingModel(null);
        }
      }
    });
    cc._RF.pop();
  }, {
    ermjDefine: "ermjDefine"
  } ],
  ermjUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a492TG6thCTJpN40KxnGJw", "ermjUtils");
    "use strict";
    var util = cc.Class({
      statics: {
        delay: function delay(node, time, callback, target) {
          node.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(callback, target)));
        },
        convertDir: function convertDir(dir) {},
        convertChairID: function convertChairID(chairID) {
          return (chairID - myChairID + def.MY_INDEX + def.USER_NUM) % def.USER_NUM;
        }
      }
    });
    module.exports = util;
    cc._RF.pop();
  }, {} ]
}, {}, [ "ermjInit", "ermjGameView", "ermjAction", "ermjActionList", "ermjAudio", "ermjHeadItem", "ermjMJGroup", "ermjMJHand", "ermjMJHua", "ermjMJNode", "ermjMJOut", "ermjMJWall", "ermjMatchText", "ermjOption", "ermjPointer", "ermjRules", "ermjSetting", "ermjTimer", "ermjBaseLayer", "ermjBoardLayer", "ermjCardLayer", "ermjOperLayer", "ermjScoreLayer", "ermjTestLayer", "ermjUserLayer", "cmd_game_ermj", "ermjProtocol", "ermjDefine", "ermjUtils" ]);