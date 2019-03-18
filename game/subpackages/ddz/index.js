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
  cmd_game_ddz: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93a2drXmTVGYZ4/paBvFo2y", "cmd_game_ddz");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_ddz = {};
    proto.cmd_game_ddz.__cfg = {};
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
        },
        2: {
          na: "DiFen",
          ty: "int"
        }
      };
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
      cfg.UserHandCard = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Animation",
          ty: "int"
        }
      };
      cfg.PlayerEndData = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Score",
          ty: "int"
        },
        3: {
          na: "cards",
          ty: "UserHandCard"
        },
        4: {
          na: "UserInf",
          ty: "UserInfo"
        },
        5: {
          na: "RobDizhuMult",
          ty: "int"
        },
        6: {
          na: "paiXinBeiLv",
          ty: "int"
        },
        7: {
          na: "Difen",
          ty: "int"
        },
        8: {
          na: "BeiLv",
          ty: "int"
        }
      };
      cfg.PlayGameEnd = {
        1: {
          na: "Banker",
          ty: "int"
        },
        2: {
          na: "EndTime",
          ty: "int"
        },
        3: {
          na: "AllPlayerData",
          ty: "PlayerEndData",
          ar: 1
        },
        4: {
          na: "SpingType",
          ty: "int"
        }
      };
      cfg.SendCardData = {
        1: {
          na: "card",
          ty: "int"
        },
        2: {
          na: "HanderChairId",
          ty: "int"
        },
        3: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "TimerLen",
          ty: "int"
        }
      };
      cfg.OutCardDataReq = {
        1: {
          na: "Cards",
          ty: "byte",
          ar: 1
        }
      };
      cfg.OutCardData = {
        1: {
          na: "result",
          ty: "int"
        },
        2: {
          na: "ChairId",
          ty: "int"
        },
        3: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "Type",
          ty: "int"
        },
        5: {
          na: "TimerLen",
          ty: "int"
        },
        6: {
          na: "NextChairId",
          ty: "int"
        },
        7: {
          na: "OutCardType",
          ty: "int"
        },
        8: {
          na: "BeiLv",
          ty: "int"
        }
      };
      cfg.UserState = {
        1: {
          na: "FirstHander",
          ty: "int"
        },
        2: {
          na: "Currency",
          ty: "int"
        },
        3: {
          na: "ChairId",
          ty: "int"
        },
        4: {
          na: "LeftOneCard",
          ty: "int"
        },
        5: {
          na: "LeftTwoCard",
          ty: "int"
        },
        6: {
          na: "IsAllCard",
          ty: "int"
        },
        7: {
          na: "WinStatus",
          ty: "int"
        }
      };
      cfg.UserCardsInfo = {
        1: {
          na: "ChairId",
          ty: "int"
        },
        2: {
          na: "Number",
          ty: "int"
        }
      };
      cfg.StateData = {
        1: {
          na: "Hander",
          ty: "int"
        },
        2: {
          na: "Banker",
          ty: "int"
        },
        4: {
          na: "CanOutCard",
          ty: "int"
        },
        5: {
          na: "LastOutUser",
          ty: "int"
        },
        6: {
          na: "RobDizhuMult",
          ty: "int"
        },
        7: {
          na: "LastOutCard",
          ty: "byte",
          ar: 1
        },
        8: {
          na: "LeaveTime",
          ty: "int"
        },
        9: {
          na: "UserLeftCardsNum",
          ty: "UserCardsInfo",
          ar: 1
        },
        10: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        11: {
          na: "TuoGuanChair",
          ty: "int",
          ar: 1
        },
        12: {
          na: "paiXinBeiLv",
          ty: "int"
        },
        13: {
          na: "DiPai",
          ty: "int",
          ar: 1
        },
        14: {
          na: "BeiLv",
          ty: "int"
        }
      };
      cfg.RobDizhuInfoReq = {
        1: {
          na: "Beilv",
          ty: "int"
        }
      };
      cfg.RobDizhuInfoRsp = {
        1: {
          na: "Beilv",
          ty: "int"
        },
        2: {
          na: "DiZhu",
          ty: "int"
        },
        3: {
          na: "ChairId",
          ty: "int"
        },
        4: {
          na: "NextChairId",
          ty: "int"
        },
        5: {
          na: "TimerLen",
          ty: "int"
        },
        6: {
          na: "MinBeilv",
          ty: "int"
        },
        7: {
          na: "DiZhuBeilv",
          ty: "int"
        }
      };
      cfg.TargetCards = {
        1: {
          na: "Cards",
          ty: "byte",
          ar: 1
        }
      };
      cfg.TipsResp = {
        1: {
          na: "TipsList",
          ty: "TargetCards",
          ar: 1
        }
      };
      cfg.TrustReq = {
        1: {
          na: "Status",
          ty: "int"
        }
      };
      cfg.TrustRsp = {
        1: {
          na: "Status",
          ty: "int"
        },
        2: {
          na: "ChairId",
          ty: "int"
        }
      };
      cfg.TimeOutTip = {
        1: {
          na: "ChairId",
          ty: "int"
        }
      };
      cfg.RobDizhuSceneInfo = {
        1: {
          na: "TimerLen",
          ty: "int"
        },
        2: {
          na: "DiPai",
          ty: "int",
          ar: 1
        },
        3: {
          na: "Hander",
          ty: "int"
        },
        4: {
          na: "RobedInfo",
          ty: "RobDizhuInfoRsp",
          ar: 1
        },
        5: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        6: {
          na: "bankerCard",
          ty: "int"
        },
        7: {
          na: "bankerCardUser",
          ty: "int"
        },
        8: {
          na: "BeiLv",
          ty: "int"
        },
        9: {
          na: "MinBeilv",
          ty: "int"
        }
      };
      cfg.CardsLeftInfo = {
        1: {
          na: "card",
          ty: "int"
        },
        2: {
          na: "LeftNumber",
          ty: "int"
        }
      };
      cfg.UserCardsLeftInfo = {
        1: {
          na: "LeftCardsInfo",
          ty: "CardsLeftInfo",
          ar: 1
        }
      };
      cfg.DiPaiInfo = {
        1: {
          na: "cards",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "BankerId",
          ty: "int"
        },
        3: {
          na: "TimerLen",
          ty: "int"
        }
      };
      cfg.JiaBeiReq = {
        1: {
          na: "Beilv",
          ty: "int"
        }
      };
      cfg.JiaBeiInfoRsp = {
        1: {
          na: "Beilv",
          ty: "int"
        },
        2: {
          na: "ChairId",
          ty: "int"
        },
        3: {
          na: "GameStartFlag",
          ty: "int"
        },
        4: {
          na: "BankerId",
          ty: "int"
        },
        5: {
          na: "TimerLen",
          ty: "int"
        }
      };
      cfg.JiaBeiInfo = {
        1: {
          na: "Beilv",
          ty: "int"
        },
        2: {
          na: "ChairId",
          ty: "int"
        }
      };
      cfg.JiaBeiSceneInfo = {
        1: {
          na: "TimerLen",
          ty: "int"
        },
        2: {
          na: "DiPai",
          ty: "int",
          ar: 1
        },
        3: {
          na: "Hander",
          ty: "int",
          ar: 1
        },
        4: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        5: {
          na: "BankerId",
          ty: "int"
        },
        6: {
          na: "JiaBeiedInfo",
          ty: "JiaBeiInfo",
          ar: 1
        },
        7: {
          na: "TuoGuanChair",
          ty: "int",
          ar: 1
        },
        8: {
          na: "BeiLv",
          ty: "int"
        }
      };
    })(proto.cmd_game_ddz.__cfg);
    proto.cmd_game_ddz.TableRule = function() {
      this.__className = "proto.cmd_game_ddz.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
      this.DiFen = 0;
    };
    proto.cmd_game_ddz.UserInfo = function() {
      this.__className = "proto.cmd_game_ddz.UserInfo";
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
    proto.cmd_game_ddz.UserHandCard = function() {
      this.__className = "proto.cmd_game_ddz.UserHandCard";
      this.ChairID = 0;
      this.Cards = null;
      this.Animation = 0;
    };
    proto.cmd_game_ddz.PlayerEndData = function() {
      this.__className = "proto.cmd_game_ddz.PlayerEndData";
      this.ChairID = 0;
      this.Score = 0;
      this.cards = null;
      this.UserInf = null;
      this.RobDizhuMult = 0;
      this.paiXinBeiLv = 0;
      this.Difen = 0;
      this.BeiLv = 0;
    };
    proto.cmd_game_ddz.PlayGameEnd = function() {
      this.__className = "proto.cmd_game_ddz.PlayGameEnd";
      this.Banker = 0;
      this.EndTime = 0;
      this.AllPlayerData = null;
      this.SpingType = 0;
    };
    proto.cmd_game_ddz.SendCardData = function() {
      this.__className = "proto.cmd_game_ddz.SendCardData";
      this.card = 0;
      this.HanderChairId = 0;
      this.Cards = null;
      this.TimerLen = 0;
    };
    proto.cmd_game_ddz.OutCardDataReq = function() {
      this.__className = "proto.cmd_game_ddz.OutCardDataReq";
      this.Cards = null;
    };
    proto.cmd_game_ddz.OutCardData = function() {
      this.__className = "proto.cmd_game_ddz.OutCardData";
      this.result = 0;
      this.ChairId = 0;
      this.Cards = null;
      this.Type = 0;
      this.TimerLen = 0;
      this.NextChairId = 0;
      this.OutCardType = 0;
      this.BeiLv = 0;
    };
    proto.cmd_game_ddz.UserState = function() {
      this.__className = "proto.cmd_game_ddz.UserState";
      this.FirstHander = 0;
      this.Currency = 0;
      this.ChairId = 0;
      this.LeftOneCard = 0;
      this.LeftTwoCard = 0;
      this.IsAllCard = 0;
      this.WinStatus = 0;
    };
    proto.cmd_game_ddz.UserCardsInfo = function() {
      this.__className = "proto.cmd_game_ddz.UserCardsInfo";
      this.ChairId = 0;
      this.Number = 0;
    };
    proto.cmd_game_ddz.StateData = function() {
      this.__className = "proto.cmd_game_ddz.StateData";
      this.Hander = 0;
      this.Banker = 0;
      this.CanOutCard = 0;
      this.LastOutUser = 0;
      this.RobDizhuMult = 0;
      this.LastOutCard = null;
      this.LeaveTime = 0;
      this.UserLeftCardsNum = null;
      this.Cards = null;
      this.TuoGuanChair = null;
      this.paiXinBeiLv = 0;
      this.DiPai = null;
      this.BeiLv = 0;
    };
    proto.cmd_game_ddz.RobDizhuInfoReq = function() {
      this.__className = "proto.cmd_game_ddz.RobDizhuInfoReq";
      this.Beilv = 0;
    };
    proto.cmd_game_ddz.RobDizhuInfoRsp = function() {
      this.__className = "proto.cmd_game_ddz.RobDizhuInfoRsp";
      this.Beilv = 0;
      this.DiZhu = 0;
      this.ChairId = 0;
      this.NextChairId = 0;
      this.TimerLen = 0;
      this.MinBeilv = 0;
      this.DiZhuBeilv = 0;
    };
    proto.cmd_game_ddz.TargetCards = function() {
      this.__className = "proto.cmd_game_ddz.TargetCards";
      this.Cards = null;
    };
    proto.cmd_game_ddz.TipsResp = function() {
      this.__className = "proto.cmd_game_ddz.TipsResp";
      this.TipsList = null;
    };
    proto.cmd_game_ddz.TrustReq = function() {
      this.__className = "proto.cmd_game_ddz.TrustReq";
      this.Status = 0;
    };
    proto.cmd_game_ddz.TrustRsp = function() {
      this.__className = "proto.cmd_game_ddz.TrustRsp";
      this.Status = 0;
      this.ChairId = 0;
    };
    proto.cmd_game_ddz.TimeOutTip = function() {
      this.__className = "proto.cmd_game_ddz.TimeOutTip";
      this.ChairId = 0;
    };
    proto.cmd_game_ddz.RobDizhuSceneInfo = function() {
      this.__className = "proto.cmd_game_ddz.RobDizhuSceneInfo";
      this.TimerLen = 0;
      this.DiPai = null;
      this.Hander = 0;
      this.RobedInfo = null;
      this.Cards = null;
      this.bankerCard = 0;
      this.bankerCardUser = 0;
      this.BeiLv = 0;
      this.MinBeilv = 0;
    };
    proto.cmd_game_ddz.CardsLeftInfo = function() {
      this.__className = "proto.cmd_game_ddz.CardsLeftInfo";
      this.card = 0;
      this.LeftNumber = 0;
    };
    proto.cmd_game_ddz.UserCardsLeftInfo = function() {
      this.__className = "proto.cmd_game_ddz.UserCardsLeftInfo";
      this.LeftCardsInfo = null;
    };
    proto.cmd_game_ddz.DiPaiInfo = function() {
      this.__className = "proto.cmd_game_ddz.DiPaiInfo";
      this.cards = null;
      this.BankerId = 0;
      this.TimerLen = 0;
    };
    proto.cmd_game_ddz.JiaBeiReq = function() {
      this.__className = "proto.cmd_game_ddz.JiaBeiReq";
      this.Beilv = 0;
    };
    proto.cmd_game_ddz.JiaBeiInfoRsp = function() {
      this.__className = "proto.cmd_game_ddz.JiaBeiInfoRsp";
      this.Beilv = 0;
      this.ChairId = 0;
      this.GameStartFlag = 0;
      this.BankerId = 0;
      this.TimerLen = 0;
    };
    proto.cmd_game_ddz.JiaBeiInfo = function() {
      this.__className = "proto.cmd_game_ddz.JiaBeiInfo";
      this.Beilv = 0;
      this.ChairId = 0;
    };
    proto.cmd_game_ddz.JiaBeiSceneInfo = function() {
      this.__className = "proto.cmd_game_ddz.JiaBeiSceneInfo";
      this.TimerLen = 0;
      this.DiPai = null;
      this.Hander = null;
      this.Cards = null;
      this.BankerId = 0;
      this.JiaBeiedInfo = null;
      this.TuoGuanChair = null;
      this.BeiLv = 0;
    };
    proto.cmd_game_ddz.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_TRUST_REQ: 5,
      SUB_TRUST_RSP: 6,
      SUB_PLAY_GAME_END: 7,
      SUB_ROOM_GAME_END: 8,
      SUB_ENTER_GAME_SCENCE: 9,
      SUB_USER_AUTO_READY: 10,
      SUB_USER_AUTO_PLAY: 11,
      SUB_SCENCE_DISMISSION: 12,
      SUB_CARD_INFO_RSP: 31,
      SUB_USER_OUT_CARD_REQ: 32,
      SUB_USER_OUT_CARD_RESP: 33,
      SUB_USER_TIP_REQ: 34,
      SUB_USER_TIP_RESP: 35,
      SUB_ROB_DIZHU_REQ: 36,
      SUB_ROB_DIZHU_RSP: 37,
      SUB_USER_NOT_OUT_CARD_REQ: 38,
      SUB_NOT_ROB_DIZHU_REQ: 39,
      SUB_ROB_DIZHU_SCENE: 40,
      SUB_USER_HAND_CARD: 41,
      SUB_SEND_CARDS: 42,
      SUB_USER_STATE: 43,
      SUB_STATE: 44,
      SUB_CARDS_LEFT: 45,
      SUB_SEND_DIPAI: 46,
      SUB_TIMEOUT_TIP: 47,
      SUB_JIABEI_REQ: 48,
      SUB_JIABEI_RSP: 49,
      SUB_JIABEI_SCENE: 50,
      SUB_SCENCE_REQ: 69
    };
    proto.cmd_game_ddz.TABLE_DISMISSION_STATUS = {
      DISMISSION_STATUS_AGREE: 1,
      DISMISSION_STATUS_DISAGREE: 2
    };
    proto.cmd_game_ddz.TABLE_RULE_ID = {
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
    proto.cmd_game_ddz.DDZ_CARD_TYPE = {
      NOBIGER: -2,
      NOTOUT: -1,
      ROCKET: 0,
      BOMB: 1,
      THREE_STRAIGHT: 2,
      TWO_STRAIGHT: 3,
      STRAIGHT: 4,
      THREE: 5,
      ONE_PAIR: 6,
      SINGLE: 7
    };
    proto.cmd_game_ddz.OUT_CARD_RESULT = {
      OUT_CARD_SUCCESS: 0,
      OUT_CARD_TIMEOUT: 1,
      OUT_CARD_ERROR: 2
    };
    cc._RF.pop();
  }, {} ],
  ddzCallBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1a82s8fFRAK6xd9vzh7uWV", "ddzCallBtn");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btn: cc.Button,
        btnSp: cc.Sprite,
        bgSp: {
          default: [],
          type: cc.SpriteFrame
        },
        sroceSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        _index: -1
      },
      onLoad: function onLoad() {},
      init: function init(index, bgIndex) {
        this.btnSp.spriteFrame = this.sroceSpf[index];
        this.node.getComponent(cc.Sprite).spriteFrame = this.bgSp[bgIndex];
        this._index = index;
        this.callBack();
      },
      callBack: function callBack() {
        var _this = this;
        this.node.on("click", function() {
          var beilv = _this._index;
          var req = new proto.cmd_game_ddz.RobDizhuInfoReq();
          req.Beilv = beilv;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_ROB_DIZHU_REQ, req);
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzCardLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f52diwTStKLZKFUAgxblcl", "ddzCardLayer");
    "use strict";
    var ddzLogic = require("ddzLogic");
    cc.Class({
      extends: cc.Component,
      properties: {
        cardPf: cc.Prefab,
        myCardNode: cc.Node,
        myCardNodeMask: cc.Node,
        landCardsNode: cc.Node,
        myOutCardNode: cc.Node,
        rightOutCardNode: cc.Node,
        leftOutCardNode: cc.Node,
        startX: 0,
        moveX: 0,
        _moveFlag: false,
        myPlayNotingSp: cc.Sprite,
        rightPlayNotingSp: cc.Sprite,
        leftPlayNotingSp: cc.Sprite,
        index1: cc.Node,
        index2: cc.Node
      },
      onLoad: function onLoad() {
        this.cardsPool = new cc.NodePool();
        this.lastOutCardArr = [];
        this.outCardValueArr = [];
        this._initCardValue = [];
        this.tipCardsIndex = 0;
        this.playNotingArr = [];
        this.playNotingArr.push(this.myPlayNotingSp);
        this.playNotingArr.push(this.rightPlayNotingSp);
        this.playNotingArr.push(this.leftPlayNotingSp);
        this.onTouchMyCardNode();
      },
      creatorMyCard: function creatorMyCard(cardVaules) {
        this._initCardValue.splice(0, this._initCardValue.length);
        var x = this.myCardNode.width / 2;
        cc.log("\u521b\u5efa\u724c myCardNode,width : " + this.myCardNode.width);
        this.myCardNode.getComponent(cc.Layout).type = cc.Layout.Type.NONE;
        this.myCardNode.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.NONE;
        this.myCardNode.getComponent(cc.Layout).updateLayout();
        for (var i = 0; i < cardVaules.length; i++) {
          var cardNode = null;
          cardNode = this.creatorCard();
          cardNode.x = 500;
          cardNode.y = 0;
          this.myCardNode.addChild(cardNode);
          var cardCpm = cardNode.getComponent("ddzCard");
          cardCpm.setCardvaule(cardVaules[i]);
          this._initCardValue.push(cardVaules[i]);
        }
      },
      sendCardAnim: function sendCardAnim(chairID, time, callBack) {
        var _this = this;
        var children = this.myCardNode.children;
        var _loop = function _loop(i) {
          var cardNode = children[i];
          var distance = Math.abs(500 - (500 - 60 * (children.length - i)));
          cc.log(" distance : " + distance);
          var x = 500 - 60 * (children.length - i);
          cardNode.runAction(cc.sequence(cc.moveTo(distance / 550, x, 0), cc.callFunc(function(card) {
            if (0 == i) {
              callBack(chairID, time);
              var layout = this.myCardNode.getComponent(cc.Layout);
              layout.type = cc.Layout.Type.HORIZONTAL;
              layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
              layout.spacingX = -150;
              layout.updateLayout();
            }
          }.bind(_this))));
        };
        for (var i = 0; i < children.length; i++) _loop(i);
      },
      reconnectionCardUpdata: function reconnectionCardUpdata() {
        this._initCardValue.sort(function(a, b) {
          return ddzLogic.getSortNum(b) - ddzLogic.getSortNum(a);
        });
        var children = this.myCardNode.children;
        var len = children.length;
        for (var i = 0; i < len; i++) this.cardsPool.put(children[0]);
        var layout = this.myCardNode.getComponent(cc.Layout);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        layout.spacingX = -150;
        layout.updateLayout();
        for (var _i = 0; _i < this._initCardValue.length; _i++) {
          var cardNode = null;
          cardNode = this.creatorCard();
          cardNode.x = 300;
          cardNode.y = 0;
          this.myCardNode.addChild(cardNode);
          var cardCpm = cardNode.getComponent("ddzCard");
          cardCpm.setCardvaule(this._initCardValue[_i]);
        }
      },
      addCardUpdata: function addCardUpdata(cards) {
        for (var i = 0; i < cards.length; i++) this._initCardValue.push(cards[i]);
        this._initCardValue.sort(function(a, b) {
          return ddzLogic.getSortNum(b) - ddzLogic.getSortNum(a);
        });
        cc.log("this._initCardValue : " + this._initCardValue);
        var children = this.myCardNode.children;
        var len = children.length;
        for (var _i2 = 0; _i2 < len; _i2++) this.cardsPool.put(children[0]);
        var layout = this.myCardNode.getComponent(cc.Layout);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        layout.spacingX = -150;
        layout.updateLayout();
        for (var _i3 = 0; _i3 < this._initCardValue.length; _i3++) {
          var cardNode = null;
          cardNode = this.creatorCard();
          cardNode.x = 300;
          cardNode.y = 0;
          this.myCardNode.addChild(cardNode);
          var cardCpm = cardNode.getComponent("ddzCard");
          cardCpm.isLandCard(true);
          cardCpm.setCardvaule(this._initCardValue[_i3]);
        }
      },
      updateCards: function updateCards(cardValues, isLand) {
        if (!cardValues) {
          cc.log("\u66f4\u65b0\u624b\u724c\u65f6 \u724c\u503c\u4e3a\u7a7a");
          return;
        }
        var layout = this.myCardNode.getComponent(cc.Layout);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        layout.spacingX = -150;
        layout.updateLayout();
        var children = this.myCardNode.children;
        for (var i = 0; i < cardValues.length; i++) for (var j = 0; j < children.length; j++) {
          var card = children[j].getComponent("ddzCard");
          card.isLandCard(isLand);
          card.getCardVaule() == cardValues[i] && this.cardsPool.put(children[j]);
        }
      },
      onTouchMyCardNode: function onTouchMyCardNode() {
        this.myCardNode.on("touchstart", this.touchStart, this);
        this.myCardNode.on("touchmove", this.touchMove, this);
        this.myCardNode.on("touchend", this.touchEnd, this);
        this.myCardNode.on("touchcancel", this.touchCancel, this);
      },
      touchStart: function touchStart(e) {
        var pos = e.getStartLocation();
        this.startLocation = this.myCardNode.convertToNodeSpaceAR(pos);
        this.selectCardPoint(this.startLocation);
      },
      touchMove: function touchMove(e) {
        var pos = e.getLocation();
        this.moveLocation = this.myCardNode.convertToNodeSpaceAR(pos);
        this.selectCardLine(this.startLocation, this.moveLocation);
        cc.log("myCardNode touchMove");
      },
      touchEnd: function touchEnd(e) {
        this.touchEndCardStatus();
      },
      touchCancel: function touchCancel(e) {
        this.touchEndCardStatus();
      },
      selectCardPoint: function selectCardPoint(pos) {
        var children = this.myCardNode.children;
        for (var i = children.length - 1; i >= 0; i--) {
          var type = children[i].getComponent("ddzCard").checkPoint(pos);
          if (type) {
            children[i].getComponent("ddzCard").cardDisBright(true);
            return;
          }
        }
      },
      selectCardLine: function selectCardLine(beignPos, movePos) {
        var children = this.myCardNode.children;
        for (var i = 0; i < children.length; i++) {
          var type = null;
          type = children[i + 1] ? children[i].getComponent("ddzCard").checkLine(beignPos, movePos, children[i + 1]) : children[i].getComponent("ddzCard").checkLine(beignPos, movePos);
          children[i].getComponent("ddzCard").cardDisBright(type);
        }
      },
      touchEndCardStatus: function touchEndCardStatus() {
        var children = this.myCardNode.children;
        var cardArr = [];
        for (var i = 0; i < children.length; i++) {
          var cardCmp = children[i].getComponent("ddzCard");
          cardCmp.cardMaskSp.active && cardArr.push(cardCmp._cardValue);
        }
        var scorll = ddzLogic.getIsScorll(cardArr);
        if (scorll && scorll.length > 0) for (var _i4 = 0; _i4 < children.length; _i4++) {
          var cardCmp = children[_i4].getComponent("ddzCard");
          if (cardCmp.cardMaskSp.active) for (var j = 0; j < scorll[0].length; j++) if (scorll[0][j]) if (cardCmp._cardValue == scorll[0][j]) {
            cardCmp.cardDisBright(false);
            cardCmp.cardSelect();
          } else cardCmp.cardDisBright(false);
        } else for (var _i5 = 0; _i5 < children.length; _i5++) {
          var cardCmp = children[_i5].getComponent("ddzCard");
          if (cardCmp.cardMaskSp.active) {
            cardCmp.cardDisBright(false);
            cardCmp.cardSelect();
          }
        }
      },
      start: function start() {},
      creatorCard: function creatorCard() {
        var cardNode = null;
        cardNode = this.cardsPool.size() > 0 ? this.cardsPool.get() : cc.instantiate(this.cardPf);
        cardNode.scale = 1;
        var cardCmp = cardNode.getComponent("ddzCard");
        cardCmp.upDownCard(false);
        cardCmp.isLandCard(false);
        return cardNode;
      },
      clearCardLayer: function clearCardLayer() {
        var children = this.landCardsNode.children;
        for (var i = 0; i < children.length; i++) this.cardsPool.put(children[i]);
      },
      showTipsCards: function showTipsCards(cardValues) {
        var children = this.myCardNode.children;
        for (var k = 0; k < children.length; k++) {
          var card = children[k].getComponent("ddzCard");
          card._isUpCard = false;
          card.refreshCard();
        }
        for (var i = 0; i < cardValues.length; i++) for (var j = 0; j < children.length; j++) {
          var card = children[j].getComponent("ddzCard");
          var vaule = card.getCardVaule();
          if (vaule == cardValues[i]) {
            card._isUpCard = true;
            card.refreshCard();
          }
        }
      },
      cleanOutCardNode: function cleanOutCardNode(node) {
        var children = node.children;
        var len = children.length;
        for (var i = 0; i < len; i++) this.cardsPool.put(children[0]);
      },
      cleanAllOutCardNode: function cleanAllOutCardNode() {
        this.cleanOutCardNode(this.myCardNode);
        this.cleanOutCardNode(this.leftOutCardNode);
        this.cleanOutCardNode(this.rightOutCardNode);
        this.cleanOutCardNode(this.myOutCardNode);
        this.cleanOutCardNode(this.landCardsNode);
        this.hidePlayNotingSp();
      },
      isVisiPlayNotingSp: function isVisiPlayNotingSp(index, yes) {
        this.playNotingArr[index].node.active = yes;
      },
      hidePlayNotingSp: function hidePlayNotingSp() {
        for (var i = 0; i < this.playNotingArr.length; i++) this.playNotingArr[i].node.active = false;
      },
      creatorOutCard: function creatorOutCard(cards, node, settlementFlag) {
        if (!cards) return;
        this.lastOutCardArr.splice(0, this.lastOutCardArr.length);
        for (var i = 0; i < cards.length; i++) {
          var cardNode = null;
          cardNode = this.creatorCard();
          var cardCmp = cardNode.getComponent("ddzCard");
          cardCmp.setCardvaule(cards[i]);
          cardCmp.cardDisBright(false);
          this.lastOutCardArr.push(cards[i]);
          cardNode.y = 0;
          cardNode.scale = .52;
          node.addChild(cardNode);
        }
        "myOutCard" == node.name && (node.y = settlementFlag ? -200 : 0);
        "leftOutCard" == node.name ? node.getComponent(cc.Widget).left = 300 : "rightOutCard" == node.name && (node.getComponent(cc.Widget).right = 400);
      },
      findCardTip: function findCardTip() {
        var children = this.myCardNode.children;
        var myCards = [];
        for (var i = 0; i < children.length; i++) {
          var card = children[i].getComponent("ddzCard");
          myCards.push(card.getCardVaule());
        }
        cc.log("myCard : " + myCards);
        var cardList = ddzLogic.getTipsCardsList(this.lastOutCardArr, myCards);
        if (!cardList || 0 == cardList.length) {
          cc.ak.ui.toast(lan.ddz.game.noCards);
          var req = new proto.cmd_game_ddz.OutCardDataReq();
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_OUT_CARD_REQ, req);
          return;
        }
        var cards = cardList[this.tipCardsIndex];
        if (void 0 == cards) {
          this.tipCardsIndex = 0;
          var cards = cardList[this.tipCardsIndex];
          if (void 0 == cards) {
            cc.ak.ui.toast(lan.ddz.game.noCards);
            var _req = new proto.cmd_game_ddz.OutCardDataReq();
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_OUT_CARD_REQ, _req);
            return;
          }
        }
        for (var _i6 = 0; _i6 < children.length; _i6++) {
          var card = children[_i6].getComponent("ddzCard");
          card.upDownCard(false);
        }
        for (var j = 0; j < cards.length; j++) for (var _i7 = 0; _i7 < children.length; _i7++) {
          var card = children[_i7].getComponent("ddzCard");
          cards[j] == card.getCardVaule() && card.upDownCard(true);
        }
        this.tipCardsIndex++;
        this.tipsCardsIndex >= cardList.length - 1 && (this.tipsCardsIndex = 0);
      },
      readyoutCards: function readyoutCards() {
        this.outCardValueArr.splice(0, this.outCardValueArr.length);
        var children = this.myCardNode.children;
        for (var i = 0; i < children.length; i++) {
          var card = children[i].getComponent("ddzCard");
          card._isUpCard && this.outCardValueArr.push(card.getCardVaule());
        }
        return this.outCardValueArr;
      },
      onEnable: function onEnable() {
        var _this2 = this;
        cc.ak.event.on(bundle.ddz.key.event.OUT_CARD_TIPS, function() {
          _this2.findCardTip();
        }, this);
      },
      onDestroy: function onDestroy() {
        this.cardsPool.clear();
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {
    ddzLogic: "ddzLogic"
  } ],
  ddzCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57d06I38htBaon9HxYAQBxE", "ddzCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sp_cardLand: cc.Sprite,
        cardVaule: cc.Label,
        labCardVauleType: {
          default: [],
          type: cc.LabelAtlas
        },
        type: cc.Label,
        smallType: cc.Label,
        joker: cc.Sprite,
        jokerSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        jokerRotation: cc.Sprite,
        jokerCat: cc.Sprite,
        jokerCatSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        cardLand: cc.Sprite,
        cardBack: cc.Sprite,
        _highFlag: false,
        cardMaskSp: cc.Node,
        _cardValue: -1,
        _isUpCard: false
      },
      onLoad: function onLoad() {},
      isLandCard: function isLandCard(yse) {
        this.cardLand.node.active = yse;
      },
      setBg: function setBg(type) {
        this.cardBack.node.active = 1 == type;
      },
      setCardvaule: function setCardvaule(cardValue) {
        var artTxtSimp = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@" ];
        var value = 15 & cardValue;
        var type = (240 & cardValue) >> 4;
        this._cardValue = cardValue;
        this.joker.node.active = false;
        this.jokerCat.node.active = false;
        this.jokerRotation.node.active = false;
        this.cardVaule.node.active = true;
        this.type.node.active = true;
        this.smallType.node.active = true;
        if (78 == cardValue) {
          this.cardVaule.node.active = false;
          this.type.node.active = false;
          this.smallType.node.active = false;
          this.joker.node.active = true;
          this.jokerCat.node.active = true;
          this.jokerRotation.node.active = true;
          this.joker.spriteFrame = this.jokerSpf[0];
          this.jokerCat.spriteFrame = this.jokerCatSpf[0];
          this.jokerRotation.spriteFrame = this.jokerSpf[0];
          return;
        }
        if (79 == cardValue) {
          this.cardVaule.node.active = false;
          this.type.node.active = false;
          this.smallType.node.active = false;
          this.joker.node.active = true;
          this.jokerCat.node.active = true;
          this.jokerRotation.node.active = true;
          this.joker.spriteFrame = this.jokerSpf[1];
          this.jokerCat.spriteFrame = this.jokerCatSpf[1];
          this.jokerRotation.spriteFrame = this.jokerSpf[1];
          return;
        }
        this.cardVaule.font = this.labCardVauleType[type % 2];
        this.cardVaule.string = artTxtSimp[value];
        this.type.string = artTxtSimp[type + 1];
        this.smallType.string = artTxtSimp[type + 1];
      },
      getCardVaule: function getCardVaule() {
        return this._cardValue;
      },
      cardDisBright: function cardDisBright(type) {
        this.cardMaskSp.active = type;
      },
      refreshCard: function refreshCard() {
        this._isUpCard ? this.node.y = this.node.y + 30 : this.node.y = 0;
      },
      checkPoint: function checkPoint(pos) {
        var box = this.node.getBoundingBox();
        return box.contains(pos);
      },
      checkLine: function checkLine(touchBegan, touchMoved, nextX) {
        var p1 = touchBegan.x < touchMoved.x ? touchBegan : touchMoved;
        var width = Math.abs(touchBegan.x - touchMoved.x);
        var height = Math.abs(touchBegan.y - touchMoved.y) > 20 ? Math.abs(touchBegan.y - touchMoved.y) : 20;
        var rect = cc.rect(p1.x, p1.y, width, height);
        var cardRect = this.node.getBoundingBox();
        nextX && (cardRect.width = Math.abs(nextX.x - this.node.x));
        return cardRect.intersects(rect);
      },
      cardSelect: function cardSelect() {
        this.upDownCard(!this._isUpCard);
      },
      upDownCard: function upDownCard(bool) {
        this._isUpCard = !!bool;
        this.refreshCard();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzCradOutLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d07bdyb6WZNHpDM9AWSfkOt", "ddzCradOutLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzDouble: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8940trFBdMbaauHwNLwoTX", "ddzDouble");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tipSp: cc.Sprite,
        spf: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      init: function init(index) {
        this.tipSp.spriteFrame = this.spf[1 == index ? index : 0];
        var beiLv = index;
        0 == index && (beiLv = 2);
        this.callBack(beiLv);
      },
      start: function start() {},
      callBack: function callBack(beiLv) {
        this.node.on("click", function() {
          var req = new proto.cmd_game_ddz.JiaBeiReq();
          req.Beilv = beiLv;
          cc.log("\u662f\u5426\u52a0\u500d : " + beiLv);
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_JIABEI_REQ, req);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  ddzHeadLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2111Jb8WpPeZ4WFpRutGih", "ddzHeadLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        leftPlayer: cc.Node,
        rightPlayer: cc.Node,
        mine: cc.Node,
        _myChairId: -1,
        leftPokerBg: cc.Sprite,
        rightPokerBg: cc.Sprite,
        leftClock: cc.Node,
        rightClock: cc.Node,
        myClock: cc.Node,
        leftScore: cc.Sprite,
        rightScore: cc.Sprite,
        myScore: cc.Sprite,
        scoreSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        doubleSpf: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {
        this.initProtr();
        this.userInfos = [];
        this.headNodeArr = [];
        this.headNodeArr.push(this.leftPlayer);
        this.headNodeArr.push(this.rightPlayer);
        this.headNodeArr.push(this.mine);
        this.rightCardNum = 0;
        this.leftCardNum = 0;
      },
      initProtr: function initProtr() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USERINFO_PUSH, function(data) {
          return _this.headShow(data);
        }, this);
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          if (_this.mine) {
            var coins = data.Coins;
            var sum = 0;
            for (var i = 0; i < coins.length; i++) coins[i].CoinID == proto.cmd_sys.COIN_ID.COIN_ID_A ? 1 == coins[i].AddFlag && (sum = coins[i].Amount + _this.mine.getComponent("ddzHead").coin) : coins[i].CoinID == proto.cmd_sys.COIN_ID.COIN_ID_B && 1 == coins[i].AddFlag && (sum = coins[i].Amount + _this.mine.getComponent("ddzHead").coin);
            _this.mine.getComponent("ddzHead").setLabCoin(sum);
          }
        });
      },
      headShow: function headShow(data) {
        var userInfo = new proto.cmd_game_ddz.UserInfo();
        cc.ak.util.tbfUtil.unPackData(userInfo, data);
        if (userInfo.ChairID < 0 || userInfo.ChairID > 2) throw new Error(" \u6597\u5730\u4e3b\u6905\u5b50\u4fe1\u606f\u4e0d\u5408\u6cd5 : " + userInfo.ChairID);
        if (userInfo.Uid == cc.ak.mc.userMgr.uid) {
          this._myChairId = userInfo.ChairID;
          cc.log("this._myChairId : " + this._myChairId);
          if (proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL == userInfo.Status) {
            cc.ak.ui.loadLobbyScence();
            return;
          }
        }
        var newAdd = true;
        for (var i = 0; i < this.userInfos.length; i++) {
          var oldUser = this.userInfos[i];
          if (oldUser.ChairID == userInfo.ChairID) {
            if (proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL == userInfo.Status) {
              for (var j = 0; j < this.headNodeArr.length; j++) {
                var headCop = this.headNodeArr[j].getComponent("ddzHead");
                if (headCop.getChairID() == userInfo.ChairID) {
                  this.headNodeArr[j].active = false;
                  headCop.setChairID(-1);
                }
              }
              this.userInfos.splice(i, 1);
            } else this.userInfos[i] = userInfo;
            newAdd = false;
            break;
          }
        }
        if (userInfo.Status == proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL) return;
        newAdd && this.userInfos.push(userInfo);
        var index = this.getIndexByChairId(userInfo.ChairID);
        switch (index) {
         case 0:
          this.mine.active = true;
          this.mine.getComponent("ddzHead").setUserInfo(userInfo);
          break;

         case 1:
          this.rightPlayer.active = true;
          this.rightPlayer.getComponent("ddzHead").setUserInfo(userInfo);
          break;

         case 2:
          this.leftPlayer.active = true;
          this.leftPlayer.getComponent("ddzHead").setUserInfo(userInfo);
        }
      },
      getIndexByChairId: function getIndexByChairId(chairID) {
        return (chairID - this._myChairId - 0 + 3) % 3;
      },
      changeOtherPokerNum: function changeOtherPokerNum(chariID, num) {
        var index = this.getIndexByChairId(chariID);
        if (1 == index) {
          this.rightPokerBg.node.active = true;
          this.rightPokerBg.getChildByName("lab").getComponent(cc.Label).string = "" + num;
        } else if (2 == index) {
          this.leftPokerBg.node.active = true;
          this.leftPokerBg.getChildByName("lab").getComponent(cc.Label).string = "" + num;
        }
      },
      clearHeadLayer: function clearHeadLayer() {
        this.myScore.node.active = false;
        this.leftScore.node.active = false;
        this.rightScore.node.active = false;
        this.myClock.active = false;
        this.myClock.getComponent("time").setCallBack(null);
        this.leftClock.active = false;
        this.rightClock.active = false;
        this.leftPokerBg.node.active = false;
        this.rightPokerBg.node.active = false;
        this.leftPlayer.getComponent("ddzHead").isLandAnim(false);
        this.mine.getComponent("ddzHead").isLandAnim(false);
        this.rightPlayer.getComponent("ddzHead").isLandAnim(false);
        this.leftPlayer.getComponent("ddzHead").isVisiHosting(false);
        this.mine.getComponent("ddzHead").isVisiHosting(false);
        this.rightPlayer.getComponent("ddzHead").isVisiHosting(false);
      },
      initCardNumByIndex: function initCardNumByIndex(index, num) {
        if (1 == index) {
          this.rightPokerBg.node.active = true;
          var rightLab = this.rightPokerBg.node.getChildByName("lab");
          rightLab.getComponent(cc.Label).string = "" + num;
          this.rightCardNum = num;
        } else if (2 == index) {
          this.leftPokerBg.node.active = true;
          var leftLab = this.leftPokerBg.node.getChildByName("lab");
          leftLab.getComponent(cc.Label).string = "" + num;
          this.leftCardNum = num;
        }
      },
      cardNumUpdata: function cardNumUpdata(index, num) {
        if (1 == index) {
          this.rightPokerBg.node.active = true;
          var rightLab = this.rightPokerBg.node.getChildByName("lab");
          this.rightCardNum -= num;
          rightLab.getComponent(cc.Label).string = "" + this.rightCardNum;
        } else if (2 == index) {
          this.leftPokerBg.node.active = true;
          var leftLab = this.leftPokerBg.node.getChildByName("lab");
          this.leftCardNum -= num;
          leftLab.getComponent(cc.Label).string = "" + this.leftCardNum;
        }
      },
      landScort: function landScort(index, num) {
        switch (index) {
         case 0:
          this.myScore.node.active = true;
          this.myScore.spriteFrame = this.scoreSpf[num];
          break;

         case 1:
          this.rightScore.node.active = true;
          this.rightScore.spriteFrame = this.scoreSpf[num];
          break;

         case 2:
          this.leftScore.node.active = true;
          this.leftScore.spriteFrame = this.scoreSpf[num];
          break;

         default:
          cc.log("landScort  index is  error");
        }
      },
      showIsDouble: function showIsDouble(index, num) {
        switch (index) {
         case 0:
          this.myScore.node.active = true;
          this.myScore.spriteFrame = this.doubleSpf[num];
          break;

         case 1:
          this.rightScore.node.active = true;
          this.rightScore.spriteFrame = this.doubleSpf[num];
          break;

         case 2:
          this.leftScore.node.active = true;
          this.leftScore.spriteFrame = this.doubleSpf[num];
          break;

         default:
          cc.log("doubleSp  index is  error");
        }
      },
      cleanScort: function cleanScort() {
        this.myScore.node.active = false;
        this.leftScore.node.active = false;
        this.rightScore.node.active = false;
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  ddzHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71590P74NxBbKgtEzv1flNH", "ddzHead");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labCoin: cc.Label,
        coin: 0,
        labName: cc.Label,
        _chairID: -1,
        landFlag: cc.Sprite,
        hostFlag: cc.Sprite,
        headNode: cc.Node
      },
      setLabCoin: function setLabCoin(num) {
        this.labCoin.string = "" + Math.floor(num / 10) / 100;
        this.coin = num;
      },
      setUserInfo: function setUserInfo(userInfo) {
        this._chairID = userInfo.ChairID;
        var coin = userInfo.AccountA + userInfo.AccountB;
        var sum = coin;
        var name = cc.ak.util.utils.FilterFormString(userInfo.NickName + "");
        name = cc.ak.util.utils.nameInterception(userInfo.NickName);
        this.labName.string = name;
        this.setLabCoin(sum);
        this.coin = sum;
        this.headNode.getComponent("headAnthologyItem").setAvatar(userInfo.HeadImgId);
      },
      setChairID: function setChairID(chairID) {
        this._chairID = chairID;
      },
      getChairID: function getChairID() {
        return this._chairID;
      },
      isLandAnim: function isLandAnim(yse) {
        this.landFlag.node.active = yse;
        this.landFlag.node.runAction(cc.sequence(cc.scaleTo(.2, 1.5, 1.5), cc.scaleTo(.2, 1, 1)));
      },
      isVisiHosting: function isVisiHosting(yes) {
        this.hostFlag.node.active = yes;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b09dxbv4RJXI7LN9pf2qIp", "ddzInit");
    "use strict";
    var DdzInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "ddz"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("ddz module init!");
        bundle.ddz = {};
        bundle.ddz.key = {};
        bundle.ddz.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initDdzData: function initDdzData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.ddz.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.ddz.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.ddz.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.ddz.key.event = {
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
          ENTER_AGAIN_SCENE: "ENTER_AGAIN_SCENE",
          OUT_CARD_TIPS: "OUT_CARD_TIPS"
        };
      },
      initCache: function initCache() {},
      initGlobalEventHandle: function initGlobalEventHandle() {
        cc.log("\u8fdb\u5165ddzGame");
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + DdzInit.id, function(data) {
          data.RuleData && bundle.ddz.data.set(bundle.ddz.key.data.ENTER_ROOM_SUCC, data);
          cc.ak.util.utils.loadGameSceneBegin();
          cc.ak.ui.loadScenceWithPreload("ddzGame");
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + DdzInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== DdzInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = DdzInit;
    cc._RF.pop();
  }, {} ],
  ddzLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f5875I0I5Cq6nSaIXQwNpd", "ddzLayer");
    "use strict";
    var ddzLogic = require("ddzLogic");
    cc.Class({
      extends: cc.Component,
      properties: {
        tipLayer: cc.Node,
        headLayer: cc.Node,
        cardLayer: cc.Node,
        otherLayer: cc.Node,
        settlemenLayer: cc.Node,
        cardPf: cc.Prefab,
        settlementTime: -1,
        audioBg: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeSingleMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeDoubleMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeTripleMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeQuadraMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeScrollMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeDoubleScrollMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeRocketMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeNothingMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeCallCaveatMan: {
          default: [],
          type: cc.AudioClip
        },
        audioDoubleMan: {
          default: [],
          type: cc.AudioClip
        },
        audioRobMan: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeSingleWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeDoubleWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeTripleWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeQuadraWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeScrollWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeDoubleScrollWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeRocketWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeNothingWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioCardTypeCallCaveatWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioDoubleWoman: {
          default: [],
          type: cc.AudioClip
        },
        audioRobWoman: {
          default: [],
          type: cc.AudioClip
        },
        animArr: {
          default: [],
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        cc.ak.util.audioMgr.playBGM(this.audioBg[0]);
        this.audioManArr = [];
        this.audioManArr.push(this.audioCardTypeRocketMan);
        this.audioManArr.push(this.audioCardTypeQuadraMan);
        this.audioManArr.push(this.audioCardTypeTripleMan);
        this.audioManArr.push(this.audioCardTypeDoubleScrollMan);
        this.audioManArr.push(this.audioCardTypeScrollMan);
        this.audioManArr.push(this.audioCardTypeDoubleMan);
        this.audioManArr.push(this.audioCardTypeSingleMan);
        this.audioManArr.push(this.audioCardTypeNothingMan);
        this.audioManArr.push(this.audioCardTypeCallCaveatMan);
        this.audioManArr.push(this.audioDoubleMan);
        this.audioManArr.push(this.audioRobMan);
        this.audioWomanArr = [];
        this.audioWomanArr.push(this.audioCardTypeRocketWoman);
        this.audioWomanArr.push(this.audioCardTypeQuadraWoman);
        this.audioWomanArr.push(this.audioCardTypeTripleWoman);
        this.audioWomanArr.push(this.audioCardTypeDoubleScrollWoman);
        this.audioWomanArr.push(this.audioCardTypeScrollWoman);
        this.audioWomanArr.push(this.audioCardTypeDoubleWoman);
        this.audioWomanArr.push(this.audioCardTypeSingleWoman);
        this.audioWomanArr.push(this.audioCardTypeNothingWoman);
        this.audioWomanArr.push(this.audioCardTypeCallCaveatWoman);
        this.audioWomanArr.push(this.audioDoubleWoman);
        this.audioWomanArr.push(this.audioRobWoman);
        this.initProto();
        this.settlemenLayer.getComponent("ddzSettlemetLayer").init();
        setTimeout(function() {}, 3e3);
      },
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_SEND_CARDS, function(data) {
          return _this.sendCards(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_ROB_DIZHU_RSP, function(data) {
          return _this.grabLand(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_SEND_DIPAI, function(data) {
          return _this.landCard(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_HAND_CARD, function(data) {
          return _this.testUpDateHandCard(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_OUT_CARD_RESP, function(data) {
          return _this.outCard(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_TIP_RESP, function(data) {
          return _this.outCardTips(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_PLAY_GAME_END, function(data) {
          return _this.settment(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_STATE, function(data) {
          return _this.gameReconnection(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_ROB_DIZHU_SCENE, function(data) {
          return _this.grabReconnection(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_TRUST_RSP, function(data) {
          return _this.isHosting(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_CARDS_LEFT, function(data) {
          return _this.leftCard(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_JIABEI_SCENE, function(data) {
          return _this.doubleReconnection(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_ddz.SUB_CMD_GAME.SUB_JIABEI_RSP, function(data) {
          return _this.double(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_MATCH_SUCC, function(dv) {
          var data = new proto.cmd_base_info.EnterRoomSucc();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          bundle.ddz.data.set(bundle.ddz.key.data.ENTER_ROOM_SUCC, data);
        }, this);
      },
      sendReadyAction: function sendReadyAction() {
        var req = new proto.cmd_room.RoomChairAction();
        req.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_READY;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, req);
      },
      sendCards: function sendCards(data) {
        this.tipLayer.active = false;
        var sendData = new proto.cmd_game_ddz.SendCardData();
        cc.ak.util.tbfUtil.unPackData(sendData, data);
        var cards = sendData.Cards;
        var card = sendData.card;
        var chairID = sendData.HanderChairId;
        var time = sendData.TimerLen;
        var headLayerCpm = this.headLayer.getComponent("ddzHeadLayer");
        headLayerCpm.clearHeadLayer();
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        cardLayer.clearCardLayer();
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        cardLayer.cleanAllOutCardNode();
        otherLayer.btnScoreLayout.node.active = false;
        otherLayer.btnOpratingLayout.node.active = false;
        otherLayer.btnDoubleLayout.node.active = false;
        cardLayer.hidePlayNotingSp();
        otherLayer.isVisiCancelHost(false);
        cardLayer.myCardNodeMask.active = false;
        otherLayer.isCanCallBack = false;
        this.grabLandCard = cardLayer.creatorCard();
        this.grabLandCard.x = 0;
        this.grabLandCard.y = 200;
        this.node.addChild(this.grabLandCard);
        this.grabLandCard.getComponent("ddzCard").setCardvaule(card);
        this.grabLandCard.getComponent("ddzCard").setBg(1);
        this.grabLandCard.active = false;
        cardLayer.creatorMyCard(cards);
        cardLayer.sendCardAnim(chairID, time, this.sendCardAnimCallBack.bind(this));
        headLayerCpm.initCardNumByIndex(1, 17);
        headLayerCpm.initCardNumByIndex(2, 17);
        var other = this.otherLayer.getComponent("ddzOtherLayer");
        var rememberCard = other.rememBerCard.getComponent("ddzRememberCard");
        cc.log("\u53d1\u724c");
        rememberCard.upDataDifen(this.obsDiFen());
      },
      sendCardAnimCallBack: function sendCardAnimCallBack(chairID, time) {
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var index = headLayer.getIndexByChairId(chairID);
        var pos = null;
        var clock = null;
        switch (index) {
         case 0:
          pos = headLayer.mine.getPosition();
          clock = headLayer.myClock;
          break;

         case 1:
          pos = headLayer.rightPlayer.getPosition();
          clock = headLayer.rightClock;
          break;

         case 2:
          pos = headLayer.leftPlayer.getPosition();
          clock = headLayer.leftClock;
          break;

         default:
          throw new Error("\u53d1\u724c\u52a8\u753bchairID\u6709\u8bef");
        }
        clock.active = true;
        clock.getComponent("time").setTime(time);
        if (0 == index) {
          clock.getComponent("time").setCallBack(this.timeOutBackCall.bind(this));
          this.otherLayer.getComponent("ddzOtherLayer").showBtnScoreLayout(1);
        }
      },
      sendCardEndNotiy: function sendCardEndNotiy() {},
      clockGrabLand: function clockGrabLand() {
        var beilv = 0;
        var req = new proto.cmd_game_ddz.RobDizhuInfoReq();
        req.Beilv = beilv;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_ROB_DIZHU_REQ, req);
        this.otherLayer.getComponent("ddzOtherLayer").btnScoreLayout.node.active = false;
      },
      grabLand: function grabLand(data) {
        var robDizhuData = new proto.cmd_game_ddz.RobDizhuInfoRsp();
        cc.ak.util.tbfUtil.unPackData(robDizhuData, data);
        var beiLv = robDizhuData.Beilv;
        var chairID = robDizhuData.ChairId;
        var nextChairID = robDizhuData.NextChairId;
        var timeLen = robDizhuData.TimerLen;
        var minBeilv = robDizhuData.MinBeilv;
        var dizhuBeiLv = robDizhuData.DiZhuBeilv;
        cc.log("minBeiLv : " + minBeilv + ", diFen : " + beiLv);
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        this.tipLayer.active = false;
        var index = headLayer.getIndexByChairId(chairID);
        switch (index) {
         case 0:
          headLayer.myScore.node.active = true;
          headLayer.myScore.spriteFrame = headLayer.scoreSpf[beiLv];
          this.otherLayer.getComponent("ddzOtherLayer").btnScoreLayout.node.active = false;
          headLayer.myClock.active = false;
          headLayer.myClock.getComponent("time").cleanTimeAudio();
          break;

         case 1:
          headLayer.rightScore.node.active = true;
          headLayer.rightScore.spriteFrame = headLayer.scoreSpf[beiLv];
          headLayer.rightClock.active = false;
          headLayer.rightClock.getComponent("time").cleanTimeAudio();
          break;

         case 2:
          headLayer.leftScore.node.active = true;
          headLayer.leftScore.spriteFrame = headLayer.scoreSpf[beiLv];
          headLayer.leftClock.active = false;
          headLayer.leftClock.getComponent("time").cleanTimeAudio();
        }
        headLayer.landScort(index, beiLv);
        var soundArr = this.playManOrWomanSound();
        cc.ak.util.audioMgr.playSFX(soundArr[10][beiLv]);
        if (-1 != nextChairID) {
          var nextIndex = headLayer.getIndexByChairId(nextChairID);
          var btnLayout = this.otherLayer.getComponent("ddzOtherLayer");
          switch (nextIndex) {
           case 0:
            headLayer.myClock.active = true;
            btnLayout.showBtnScoreLayout(minBeilv);
            headLayer.myClock.getComponent("time").setTime(timeLen);
            headLayer.myClock.getComponent("time").setCallBack(function() {
              this.otherLayer.getComponent("ddzOtherLayer").btnScoreLayout.node.active = false;
            }.bind(this));
            break;

           case 1:
            headLayer.rightClock.active = true;
            headLayer.rightClock.getComponent("time").setTime(timeLen);
            break;

           case 2:
            headLayer.leftClock.active = true;
            headLayer.leftClock.getComponent("time").setTime(timeLen);
          }
        } else {
          var rememberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
          rememberCard.upDataBeishu(dizhuBeiLv);
        }
      },
      landCard: function landCard(data) {
        var diPaiData = new proto.cmd_game_ddz.DiPaiInfo();
        cc.ak.util.tbfUtil.unPackData(diPaiData, data);
        var cards = diPaiData.cards;
        var bankerChairID = diPaiData.BankerId;
        var time = diPaiData.TimerLen;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var index = headLayer.getIndexByChairId(bankerChairID);
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var cardArr = [];
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        headLayer.cleanScort();
        this.otherLayer.getComponent("ddzOtherLayer").btnScoreLayout.node.active = false;
        otherLayer.btnOpenCard.interactable = true;
        headLayer.myScore.node.active = false;
        headLayer.leftScore.node.active = false;
        headLayer.rightScore.node.active = false;
        for (var i = 0; i < cards.length; i++) {
          var cardNode = cardLayer.creatorCard();
          cardNode.scale = .7;
          cardLayer.landCardsNode.addChild(cardNode);
          var cardCmp = cardNode.getComponent("ddzCard");
          cardCmp.setCardvaule(cards[i]);
          cardCmp.setBg(1);
          cardArr.push(cardNode);
        }
        var _loop = function _loop(j) {
          var cardNode = cardArr[j];
          var cardCmp = cardNode.getComponent("ddzCard");
          cardNode.runAction(cc.sequence(cc.scaleTo(.2, .001, 1), cc.scaleTo(.2, 1, 1), cc.callFunc(function() {
            cardCmp.setBg(0);
            if (j == cardArr.length - 1) {
              switch (index) {
               case 0:
                headLayer.mine.getComponent("ddzHead").isLandAnim(true);
                cardLayer.addCardUpdata(cards);
                headLayer.rightClock.active = true;
                headLayer.leftClock.active = true;
                headLayer.rightClock.getComponent("time").setTime(time);
                headLayer.leftClock.getComponent("time").setTime(time);
                break;

               case 1:
                headLayer.rightPlayer.getComponent("ddzHead").isLandAnim(true);
                headLayer.initCardNumByIndex(1, 20);
                headLayer.myClock.active = true;
                headLayer.leftClock.active = true;
                headLayer.myClock.getComponent("time").setTime(time);
                headLayer.leftClock.getComponent("time").setTime(time);
                break;

               case 2:
                headLayer.leftPlayer.getComponent("ddzHead").isLandAnim(true);
                headLayer.initCardNumByIndex(2, 20);
                headLayer.myClock.active = true;
                headLayer.rightClock.active = true;
                headLayer.myClock.getComponent("time").setTime(time);
                headLayer.rightClock.getComponent("time").setTime(time);
              }
              0 != index && (otherLayer.btnDoubleLayout.node.active = true);
            }
          })));
        };
        for (var j = 0; j < cardArr.length; j++) _loop(j);
      },
      testUpDateHandCard: function testUpDateHandCard(data) {
        var userHand = new proto.cmd_game_ddz.UserHandCard();
        cc.ak.util.tbfUtil.unPackData(userHand, data);
      },
      upDateHandCard: function upDateHandCard(cards, isLand) {
        if (!cards) {
          cc.log("\u66f4\u65b0\u624b\u724c\u65f6\u6536\u5230cards \u4e3anull");
          return;
        }
        this.cardLayer.getComponent("ddzCardLayer").updateCards(cards, isLand);
      },
      outCard: function outCard(data) {
        var outCardData = new proto.cmd_game_ddz.OutCardData();
        cc.ak.util.tbfUtil.unPackData(outCardData, data);
        var result = outCardData.result;
        var chairID = outCardData.ChairId;
        var cards = outCardData.Cards;
        var nextOutCardChairID = outCardData.NextChairId;
        var timerLen = outCardData.TimerLen;
        var type = outCardData.Type;
        var outCardType = outCardData.OutCardType;
        var beiLv = outCardData.BeiLv;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var index = headLayer.getIndexByChairId(chairID);
        null != cards && headLayer.cardNumUpdata(index, cards.length);
        switch (result) {
         case proto.cmd_game_ddz.OUT_CARD_RESULT.OUT_CARD_SUCCESS:
         case proto.cmd_game_ddz.OUT_CARD_RESULT.OUT_CARD_TIMEOUT:
          switch (index) {
           case 0:
            cardLayer.cleanOutCardNode(cardLayer.myOutCardNode);
            cardLayer.isVisiPlayNotingSp(index, false);
            cardLayer.creatorOutCard(cards, cardLayer.myOutCardNode);
            otherLayer.btnOpratingLayout.node.active = false;
            headLayer.myClock.active = false;
            headLayer.myClock.getComponent("time").setCallBack(null);
            headLayer.myClock.getComponent("time").cleanTimeAudio();
            var head = headLayer.mine.getComponent("ddzHead");
            var isLand = head.landFlag.node.active;
            this.upDateHandCard(cards, isLand);
            cardLayer.tipCardsIndex = 0;
            break;

           case 1:
            cardLayer.cleanOutCardNode(cardLayer.rightOutCardNode);
            cardLayer.isVisiPlayNotingSp(index, false);
            cardLayer.creatorOutCard(cards, cardLayer.rightOutCardNode);
            headLayer.rightClock.active = false;
            headLayer.rightClock.getComponent("time").cleanTimeAudio();
            break;

           case 2:
            cardLayer.cleanOutCardNode(cardLayer.leftOutCardNode);
            cardLayer.isVisiPlayNotingSp(index, false);
            cardLayer.creatorOutCard(cards, cardLayer.leftOutCardNode);
            headLayer.leftClock.active = false;
            headLayer.leftClock.getComponent("time").cleanTimeAudio();
          }
          if (cards) {
            var rememberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
            var beiLvNum = Number(rememberCard.labBeishu.string) * beiLv;
            rememberCard.upDataBeishu(beiLvNum);
          } else cardLayer.isVisiPlayNotingSp(index, true);
          break;

         case proto.cmd_game_ddz.OUT_CARD_RESULT.OUT_CARD_ERROR:
          if (headLayer._myChairId == chairID) {
            cc.ak.ui.toast(lan.ddz.game.outCardError);
            return;
          }
        }
        var soundArr = this.playManOrWomanSound();
        if (chairID == headLayer._myChairId) {
          var len = cardLayer.myCardNode.children.length;
          1 !== len && 2 !== len || cc.ak.util.audioMgr.playSFX(soundArr[8][len - 1]);
        }
        switch (type) {
         case proto.cmd_game_ddz.DDZ_CARD_TYPE.ROCKET:
          cc.ak.util.audioMgr.playSFX(soundArr[0][0]);
          this.playSkeletonOrAnim(this.animArr[5], true);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.BOMB:
          if (4 == cards.length) {
            cc.ak.util.audioMgr.playSFX(soundArr[1][0]);
            this.playSkeletonOrAnim(this.animArr[6], true);
          } else 6 == cards.length ? cc.ak.util.audioMgr.playSFX(soundArr[1][1]) : 8 == cards.length && cc.ak.util.audioMgr.playSFX(soundArr[1][2]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.THREE_STRAIGHT:
          cc.ak.util.audioMgr.playSFX(soundArr[2][15]);
          this.playSkeletonOrAnim(this.animArr[2]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.TWO_STRAIGHT:
          cc.ak.util.audioMgr.playSFX(soundArr[3][0]);
          this.playSkeletonOrAnim(this.animArr[3]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.STRAIGHT:
          cc.ak.util.audioMgr.playSFX(soundArr[4][0]);
          this.playSkeletonOrAnim(this.animArr[4]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.THREE:
          if (4 == cards.length) cc.ak.util.audioMgr.playSFX(soundArr[2][13]); else if (5 == cards.length) cc.ak.util.audioMgr.playSFX(soundArr[2][14]); else if (3 == cards.length) {
            var value = ddzLogic.getCardVaule(cards[0]);
            cc.ak.util.audioMgr.playSFX(soundArr[2][value - 1]);
          }
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.ONE_PAIR:
          var value = ddzLogic.getCardVaule(cards[0]);
          cc.ak.util.audioMgr.playSFX(soundArr[5][value - 1]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.SINGLE:
          var value = ddzLogic.getCardVaule(cards[0]);
          cc.ak.util.audioMgr.playSFX(soundArr[6][value - 1]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.NOTOUT:
          cc.ak.util.audioMgr.playSFX(soundArr[7][0]);
          break;

         case proto.cmd_game_ddz.DDZ_CARD_TYPE.NOBIGER:
          cc.ak.util.audioMgr.playSFX(soundArr[7][1]);
          break;

         default:
          cc.log("\u6253\u724c\u8fd4\u56de\u724c\u7c7b\u578b\u4e0d\u5bf9");
        }
        if (-1 == nextOutCardChairID) {
          headLayer.clearHeadLayer();
          otherLayer.cleanOtherLayer();
          return;
        }
        var nextChairID = headLayer.getIndexByChairId(nextOutCardChairID);
        switch (nextChairID) {
         case 0:
          1 == outCardType ? this.otherLayer.getComponent("ddzOtherLayer").shieldOpratingBtn() : 0 == outCardType ? this.otherLayer.getComponent("ddzOtherLayer").showBtnOperatingLayut() : 2 == outCardType && this.otherLayer.getComponent("ddzOtherLayer").shieldPlayTipsBtn();
          cardLayer.cleanOutCardNode(cardLayer.myOutCardNode);
          headLayer.myClock.active = true;
          headLayer.myClock.getComponent("time").setTime(timerLen);
          break;

         case 1:
          headLayer.rightClock.active = true;
          headLayer.rightClock.getComponent("time").setTime(timerLen);
          cardLayer.cleanOutCardNode(cardLayer.rightOutCardNode);
          break;

         case 2:
          headLayer.leftClock.active = true;
          headLayer.leftClock.getComponent("time").setTime(timerLen);
          cardLayer.cleanOutCardNode(cardLayer.leftOutCardNode);
        }
        cc.log("outCard : " + outCardType);
        if (1 == outCardType) {
          cardLayer.cleanOutCardNode(cardLayer.myOutCardNode);
          cardLayer.cleanOutCardNode(cardLayer.rightOutCardNode);
          cardLayer.cleanOutCardNode(cardLayer.leftOutCardNode);
          cardLayer.isVisiPlayNotingSp(0, false);
          cardLayer.isVisiPlayNotingSp(1, false);
          cardLayer.isVisiPlayNotingSp(2, false);
        }
      },
      outCardTips: function outCardTips(data) {
        var targCard = new proto.cmd_game_ddz.TargetCards();
        cc.ak.util.tbfUtil.unPackData(targCard, data);
        var cardTips = targCard.Cards;
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        cardLayer.showTipsCards(cardTips);
      },
      settment: function settment(data) {
        var _this2 = this;
        var endData = new proto.cmd_game_ddz.PlayGameEnd();
        cc.ak.util.tbfUtil.unPackData(endData, data);
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        var allPlayerData = endData.AllPlayerData;
        var bankerChairID = endData.Banker;
        var spingType = endData.SpingType;
        cardLayer.cleanOutCardNode(cardLayer.landCardsNode);
        for (var i = 0; i < allPlayerData.length; i++) {
          var data = allPlayerData[i];
          var chairID = data.ChairID;
          var cards = data.cards.Cards;
          var index = headLayer.getIndexByChairId(chairID);
          switch (index) {
           case 0:
            if (cards) {
              cardLayer.cleanOutCardNode(cardLayer.myCardNode);
              cardLayer.cleanOutCardNode(cardLayer.myOutCardNode);
              cardLayer.creatorOutCard(cards, cardLayer.myOutCardNode, true);
            }
            var userInfo = allPlayerData[i].UserInf;
            var num = userInfo.AccountA + userInfo.AccountB;
            headLayer.mine.getComponent("ddzHead").setLabCoin(num);
            break;

           case 1:
            if (cards) {
              cardLayer.cleanOutCardNode(cardLayer.rightOutCardNode);
              cardLayer.creatorOutCard(cards, cardLayer.rightOutCardNode, true);
            }
            break;

           case 2:
            if (cards) {
              cardLayer.cleanOutCardNode(cardLayer.leftOutCardNode);
              cardLayer.creatorOutCard(cards, cardLayer.leftOutCardNode, true);
            }
          }
        }
        if (0 != spingType) {
          var animNode = 1 == spingType ? this.animArr[1] : this.animArr[0];
          var anim = cc.instantiate(animNode);
          this.node.addChild(anim);
          var spine = anim.getChildByName("skeleton");
          var ske = spine.getComponent(sp.Skeleton);
          ske.setCompleteListener(function(trackEntry) {
            ske.destroy();
            clearInterval(_this2.settlementTime);
            _this2.settlementTime = setTimeout(function() {
              _this2.settlemenLayer.getComponent("ddzSettlemetLayer").setData(bankerChairID, allPlayerData);
            }, 3500);
          });
          ske.clearTracks();
          ske.setAnimation(0, "animation", false);
        } else {
          clearInterval(this.settlementTime);
          this.settlementTime = setTimeout(function() {
            _this2.settlemenLayer.getComponent("ddzSettlemetLayer").setData(bankerChairID, allPlayerData);
          }, 3500);
        }
      },
      gameReconnection: function gameReconnection(data) {
        this.tipLayer.active = false;
        var stateData = new proto.cmd_game_ddz.StateData();
        cc.ak.util.tbfUtil.unPackData(stateData, data);
        var lastChairID = stateData.LastOutUser;
        var lastCards = stateData.LastOutCard;
        var timer = stateData.LeaveTime;
        var canOutCard = stateData.CanOutCard;
        var userCardsNum = stateData.UserLeftCardsNum;
        var myCards = stateData.Cards;
        var banker = stateData.Banker;
        var hander = stateData.Hander;
        var beiLv = stateData.BeiLv;
        var diFen = stateData.RobDizhuMult;
        var hostArr = stateData.TuoGuanChair;
        var diPai = stateData.DiPai;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        cardLayer.cleanAllOutCardNode();
        otherLayer.btnScoreLayout.node.active = false;
        otherLayer.btnOpratingLayout.node.active = false;
        otherLayer.btnDoubleLayout.node.active = false;
        headLayer.clearHeadLayer();
        otherLayer.isCanCallBack = false;
        var remeberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
        remeberCard.upDataBeishu(beiLv);
        cc.log("\u6e38\u620f\u65ad\u7ebf\u91cd\u8fde");
        remeberCard.upDataDifen(this.obsDiFen());
        otherLayer.btnOpenCard.interactable = true;
        for (var i = 0; i < diPai.length; i++) {
          var cardNode = cardLayer.creatorCard();
          cardNode.scale = .7;
          cardLayer.landCardsNode.addChild(cardNode);
          var cardCmp = cardNode.getComponent("ddzCard");
          cardCmp.setCardvaule(diPai[i]);
          cardCmp.setBg(0);
        }
        for (var _i = 0; _i < userCardsNum.length; _i++) {
          var index = headLayer.getIndexByChairId(userCardsNum[_i].ChairId);
          var num = userCardsNum[_i].Number;
          headLayer.initCardNumByIndex(index, num);
        }
        if (hostArr) for (var _i2 = 0; _i2 < hostArr.length; _i2++) {
          var head = null;
          var index = headLayer.getIndexByChairId(hostArr[_i2]);
          switch (index) {
           case 0:
            head = headLayer.mine.getComponent("ddzHead");
            otherLayer.isVisiCancelHost(true);
            cardLayer.myCardNodeMask.active = true;
            break;

           case 1:
            head = headLayer.rightPlayer.getComponent("ddzHead");
            break;

           case 2:
            head = headLayer.leftPlayer.getComponent("ddzHead");
            break;

           default:
            cc.log("\u6258\u7ba1\u5e7f\u64ad\u8fd4\u56dechair Error");
          }
          head && head.isVisiHosting(true);
        }
        cardLayer.creatorMyCard(myCards);
        cardLayer.reconnectionCardUpdata();
        var bankerIndex = headLayer.getIndexByChairId(banker);
        switch (bankerIndex) {
         case 0:
          headLayer.mine.getComponent("ddzHead").isLandAnim(true);
          break;

         case 1:
          headLayer.rightPlayer.getComponent("ddzHead").isLandAnim(true);
          break;

         case 2:
          headLayer.leftPlayer.getComponent("ddzHead").isLandAnim(true);
        }
        if (lastChairID == headLayer._myChairId && headLayer._myChairId == hander || 255 == lastChairID && headLayer._myChairId == hander) {
          otherLayer.shieldOpratingBtn();
          var clock = headLayer.myClock;
          clock.active = true;
          clock.getComponent("time").setTime(timer);
          return;
        }
        var lastIndex = headLayer.getIndexByChairId(lastChairID);
        var outCardNode = null;
        switch (lastIndex) {
         case 0:
          outCardNode = cardLayer.myOutCardNode;
          break;

         case 1:
          outCardNode = cardLayer.rightOutCardNode;
          break;

         case 2:
          outCardNode = cardLayer.leftOutCardNode;
          break;

         default:
          cc.log("\u65ad\u7ebf\u91cd\u8fdelastIndex\u6709\u8bef");
        }
        if (null != outCardNode) {
          lastCards || cardLayer.isVisiPlayNotingSp(lastIndex);
          cardLayer.creatorOutCard(lastCards, outCardNode);
        }
        var handerIndex = headLayer.getIndexByChairId(hander);
        var clockNode = null;
        switch (handerIndex) {
         case 0:
          0 == canOutCard ? otherLayer.shieldPlayTipsBtn() : otherLayer.showBtnOperatingLayut();
          clockNode = headLayer.myClock;
          break;

         case 1:
          clockNode = headLayer.rightClock;
          break;

         case 2:
          clockNode = headLayer.leftClock;
        }
        clockNode.active = true;
        clockNode.getComponent("time").setTime(timer);
      },
      grabReconnection: function grabReconnection(data) {
        this.tipLayer.active = false;
        var robScene = new proto.cmd_game_ddz.RobDizhuSceneInfo();
        cc.ak.util.tbfUtil.unPackData(robScene, data);
        var curChairID = robScene.Hander;
        var myCards = robScene.Cards;
        var timer = robScene.TimerLen;
        var robInfoArr = robScene.RobedInfo;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        cardLayer.cleanAllOutCardNode();
        otherLayer.btnScoreLayout.node.active = false;
        otherLayer.btnOpratingLayout.node.active = false;
        otherLayer.btnDoubleLayout.node.active = false;
        headLayer.clearHeadLayer();
        otherLayer.isCanCallBack = false;
        cardLayer.creatorMyCard(myCards);
        cardLayer.reconnectionCardUpdata();
        headLayer.initCardNumByIndex(1, 17);
        headLayer.initCardNumByIndex(2, 17);
        var other = this.otherLayer.getComponent("ddzOtherLayer");
        var rememberCard = other.rememBerCard.getComponent("ddzRememberCard");
        rememberCard.upDataDifen(this.obsDiFen());
        if (null != robInfoArr) for (var i = 0; i < robInfoArr.length; i++) {
          var chairID = robInfoArr[i].ChairId;
          var index = headLayer.getIndexByChairId(chairID);
          var beiLv = robInfoArr[i].Beilv;
          headLayer.landScort(index, beiLv);
        }
        var index = headLayer.getIndexByChairId(curChairID);
        var clock = null;
        switch (index) {
         case 0:
          clock = headLayer.myClock;
          this.otherLayer.getComponent("ddzOtherLayer").btnScoreLayout.node.active = true;
          break;

         case 1:
          clock = headLayer.rightClock;
          break;

         case 2:
          clock = headLayer.leftClock;
          break;

         default:
          cc.log("\u62a2\u5730\u4e3b\u573a\u666f\u4e2d \u670d\u52a1\u5668\u8fd4\u56de\u6905\u5b50\u53f7\u9519\u8bef");
        }
        if (null != clock) {
          clock.active = true;
          clock.getComponent("time").setTime(timer);
        }
      },
      doubleReconnection: function doubleReconnection(data) {
        this.tipLayer.active = false;
        var jiaBeiScene = new proto.cmd_game_ddz.JiaBeiSceneInfo();
        cc.ak.util.tbfUtil.unPackData(jiaBeiScene, data);
        var timeLen = jiaBeiScene.TimerLen;
        var diPai = jiaBeiScene.DiPai;
        var hander = jiaBeiScene.Hander;
        var cards = jiaBeiScene.Cards;
        var bankerId = jiaBeiScene.BankerId;
        var jiaBeiInfo = jiaBeiScene.JiaBeiedInfo;
        var beiLv = jiaBeiScene.BeiLv;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        cardLayer.cleanAllOutCardNode();
        otherLayer.btnScoreLayout.node.active = false;
        otherLayer.btnOpratingLayout.node.active = false;
        otherLayer.btnDoubleLayout.node.active = false;
        headLayer.clearHeadLayer();
        otherLayer.btnOpenCard.interactable = true;
        otherLayer.isCanCallBack = true;
        otherLayer.rememBerCard.getComponent("ddzRememberCard").upDataBeishu(beiLv);
        cardLayer.creatorMyCard(cards);
        cardLayer.reconnectionCardUpdata();
        for (var i = 0; i < diPai.length; i++) {
          var cardNode = cardLayer.creatorCard();
          cardNode.scale = .7;
          cardLayer.landCardsNode.addChild(cardNode);
          var cardCmp = cardNode.getComponent("ddzCard");
          cardCmp.setCardvaule(diPai[i]);
          cardCmp.setBg(0);
        }
        var bankerIndex = headLayer.getIndexByChairId(bankerId);
        if (0 != bankerIndex) {
          headLayer.initCardNumByIndex(bankerIndex, 20);
          headLayer.initCardNumByIndex(1 == bankerIndex ? 2 : 1, 17);
        }
        headLayer.myClock.active = false;
        headLayer.rightClock.active = false;
        headLayer.leftClock.active = false;
        headLayer.myClock.getComponent("time").cleanTimeAudio();
        headLayer.rightClock.getComponent("time").cleanTimeAudio();
        headLayer.leftClock.getComponent("time").cleanTimeAudio();
        var remeberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
        remeberCard.upDataBeishu(beiLv);
        for (var _i3 = 0; _i3 < hander.length; _i3++) {
          var handerChair = hander[_i3];
          var handIndex = headLayer.getIndexByChairId(handerChair);
          switch (handIndex) {
           case 0:
            otherLayer.btnDoubleLayout.node.active = true;
            headLayer.myClock.active = true;
            headLayer.myClock.getComponent("time").setTime(timeLen);
            break;

           case 1:
            headLayer.rightClock.active = true;
            break;

           case 2:
            headLayer.leftClock.active = true;
          }
        }
        if (jiaBeiInfo) for (var _i4 = 0; _i4 < jiaBeiInfo.length; _i4++) {
          var beiLv = jiaBeiInfo[_i4].Beilv;
          var chairID = jiaBeiInfo[_i4].ChairId;
          var index = headLayer.getIndexByChairId(chairID);
          headLayer.showIsDouble(index, 1 == beiLv ? 1 : 0);
        }
      },
      double: function double(data) {
        var jiaBeiInfo = new proto.cmd_game_ddz.JiaBeiInfoRsp();
        cc.ak.util.tbfUtil.unPackData(jiaBeiInfo, data);
        var beiLv = jiaBeiInfo.Beilv;
        var chairId = jiaBeiInfo.ChairId;
        var gameStart = jiaBeiInfo.GameStartFlag;
        var bankerId = jiaBeiInfo.BankerId;
        var timeLen = jiaBeiInfo.TimerLen;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        var doubleIndex = headLayer.getIndexByChairId(chairId);
        headLayer.showIsDouble(doubleIndex, 1 == beiLv ? 1 : 0);
        var soundArr = this.playManOrWomanSound();
        cc.ak.util.audioMgr.playSFX(soundArr[9][1 == beiLv ? 1 : 0]);
        if (1 === gameStart) {
          var bankerIndex = headLayer.getIndexByChairId(bankerId);
          0 == bankerIndex && otherLayer.shieldOpratingBtn();
          var index = headLayer.getIndexByChairId(chairId);
          if (0 == index) {
            var remeberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
            var beiLvNum = Number(remeberCard.labBeishu.string) * beiLv;
            remeberCard.upDataBeishu(beiLvNum);
          }
          setTimeout(function() {
            headLayer.cleanScort();
          }, 1e3);
          headLayer.myClock.active = false;
          headLayer.rightClock.active = false;
          headLayer.leftClock.active = false;
          otherLayer.btnDoubleLayout.node.active = false;
          headLayer.myClock.getComponent("time").cleanTimeAudio();
          headLayer.rightClock.getComponent("time").cleanTimeAudio();
          headLayer.leftClock.getComponent("time").cleanTimeAudio();
          var clock = null;
          switch (bankerIndex) {
           case 0:
            clock = headLayer.myClock;
            break;

           case 1:
            clock = headLayer.rightClock;
            break;

           case 2:
            clock = headLayer.leftClock;
            break;

           default:
            cc.log("jiabei chair Error");
          }
          clock.active = true;
          clock.getComponent("time").setTime(timeLen);
        } else {
          var jiaBeiIndex = headLayer.getIndexByChairId(chairId);
          switch (jiaBeiIndex) {
           case 0:
            headLayer.myClock.active = false;
            otherLayer.btnDoubleLayout.node.active = false;
            headLayer.myClock.getComponent("time").cleanTimeAudio();
            var remeberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
            var beiLvNum = Number(remeberCard.labBeishu.string) * beiLv;
            remeberCard.upDataBeishu(beiLvNum);
            break;

           case 1:
            headLayer.rightClock.active = false;
            headLayer.rightClock.getComponent("time").cleanTimeAudio();
            break;

           case 2:
            headLayer.leftClock.active = false;
            headLayer.leftClock.getComponent("time").cleanTimeAudio();
          }
        }
      },
      isHosting: function isHosting(data) {
        var hosting = new proto.cmd_game_ddz.TrustRsp();
        cc.ak.util.tbfUtil.unPackData(hosting, data);
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var chairID = hosting.ChairId;
        var status = hosting.Status;
        var index = headLayer.getIndexByChairId(chairID);
        var head = null;
        cc.log("is Hosting status :" + status);
        switch (index) {
         case 0:
          head = headLayer.mine.getComponent("ddzHead");
          otherLayer.isVisiCancelHost(0 != status);
          cardLayer.myCardNodeMask.active = 0 != status;
          break;

         case 1:
          head = headLayer.rightPlayer.getComponent("ddzHead");
          break;

         case 2:
          head = headLayer.leftPlayer.getComponent("ddzHead");
          break;

         default:
          cc.log("\u6258\u7ba1\u5e7f\u64ad\u8fd4\u56dechair Error");
        }
        head && head.isVisiHosting(0 != status);
      },
      timeOutBackCall: function timeOutBackCall() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_TIMEOUT_TIP);
      },
      onEnable: function onEnable() {
        var _this3 = this;
        var headLayer = this.headLayer.getComponent("ddzHeadLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        cc.ak.event.on(bundle.ddz.key.event.ENTER_AGAIN_SCENE, function() {
          _this3.tipLayer && (_this3.tipLayer.active = false);
          if (headLayer.leftPlayer) {
            headLayer.leftPlayer.active = false;
            headLayer.rightPlayer.active = false;
            headLayer.mine.active = false;
          }
        });
        var settlement = this.settlemenLayer.getComponent("ddzSettlemetLayer");
        settlement.btnContinu.node.on("continu", function() {
          otherLayer.isCanCallBack = true;
          _this3.tipLayer.active = true;
          _this3.tipLayer.getComponent("ddzTipLayer").reStart();
          headLayer.leftPlayer.active = false;
          headLayer.rightPlayer.active = false;
          headLayer.clearHeadLayer();
          otherLayer.isVisiCancelHost(false);
          cardLayer.myCardNodeMask.active = false;
          otherLayer.btnOpenCard.interactable = false;
          otherLayer.isOpenBerCard = true;
          otherLayer.rememBerCard.y = 670;
          cardLayer.cleanAllOutCardNode();
          var remeberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
          remeberCard.cleanPanel();
        });
      },
      cleanTable: function cleanTable() {
        var headLayer = this.headLayer.getComponent("ddzHardLayer");
        var cardLayer = this.cardLayer.getComponent("ddzCardLayer");
        cardLayer.cleanAllOutCardNode();
        headLayer.clearHeadLayer();
      },
      leftCard: function leftCard(data) {
        var leftCards = new proto.cmd_game_ddz.UserCardsLeftInfo();
        cc.ak.util.tbfUtil.unPackData(leftCards, data);
        var otherLayer = this.otherLayer.getComponent("ddzOtherLayer");
        var remeberCard = otherLayer.rememBerCard.getComponent("ddzRememberCard");
        remeberCard.upDataRemainCard(leftCards.LeftCardsInfo);
      },
      start: function start() {
        cc.ak.util.utils.loadGameSceneFinish();
      },
      playSkeletonOrAnim: function playSkeletonOrAnim(nodeIndex, vibrateFlag) {
        var anim = cc.instantiate(nodeIndex);
        this.node.addChild(anim);
        var spine = anim.getChildByName("skeleton");
        if (spine) {
          var ske = spine.getComponent(sp.Skeleton);
          ske.setCompleteListener(function(trackEntry) {
            ske.destroy();
            vibrateFlag;
          });
          ske.clearTracks();
          ske.setAnimation(0, "animation", false);
        } else {
          var fjAnim = anim.getComponent(cc.Animation);
          fjAnim.on("finished", function() {
            fjAnim.destroy();
          });
          fjAnim.play();
        }
      },
      obsDiFen: function obsDiFen() {
        var data = bundle.ddz.data.get(bundle.ddz.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_ddz.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        cc.log("tableRule.DiFen : " + tableRule.DiFen);
        return Math.floor(tableRule.DiFen / 10) / 100;
      },
      playManOrWomanSound: function playManOrWomanSound() {
        if (1 == cc.ak.mc.userMgr.sex) return this.audioManArr;
        return this.audioWomanArr;
      },
      onDestroy: function onDestroy() {
        clearInterval(this.settlementTime);
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {
    ddzLogic: "ddzLogic"
  } ],
  ddzLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42cd2zJU29JFJJeDA/kk5Ib", "ddzLogic");
    "use strict";
    var ddzLogic = {};
    ddzLogic.getCardVaule = function(v) {
      return 15 & v;
    };
    ddzLogic.getSortNum = function(value) {
      var v = 15 & value;
      if (79 == value || 78 == value) return v + 2;
      if (1 == v || 2 == v) return v + 13;
      return v;
    };
    ddzLogic.baseSort = function(a, b) {
      var av = ddzLogic.getSortNum(a);
      var bv = ddzLogic.getSortNum(b);
      return av - bv || (240 & a) - (240 & b);
    };
    ddzLogic.isOneCard = function(cardList) {
      if (1 === cardList.length) return true;
      return false;
    };
    ddzLogic.isDouble = function(cardList) {
      if (2 === cardList.length && void 0 !== ddzLogic.getCardVaule(cardList[0]) && ddzLogic.getCardVaule(cardList[0]) === ddzLogic.getCardVaule(cardList[1])) return true;
      return false;
    };
    ddzLogic.isThree = function(cardList) {
      if (3 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getCardVaule(cardList[i])) ? map[ddzLogic.getCardVaule(cardList[i])]++ : map[ddzLogic.getCardVaule(cardList[i])] = 1;
        if (3 === map[ddzLogic.getCardVaule(cardList[0])]) return true;
      }
      return false;
    };
    ddzLogic.isRocket = function(cardList) {
      if (2 !== cardList.length) return false;
      if (void 0 !== ddzLogic.getCardVaule(cardList[0]) && void 0 !== ddzLogic.getCardVaule(cardList[1])) {
        if (78 == ddzLogic.getCardVaule(cardList[0]) && 79 == ddzLogic.getCardVaule(cardList[1])) return true;
        if (78 == ddzLogic.getCardVaule(cardList[1]) && 79 == ddzLogic.getCardVaule(cardList[0])) return true;
        return false;
      }
    };
    ddzLogic.isFourBobm = function(cardList) {
      if (4 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getCardVaule(cardList[i])) ? map[ddzLogic.getCardVaule(cardList[i])]++ : map[ddzLogic.getCardVaule(cardList[i])] = 1;
        if (4 === map[ddzLogic.getCardVaule(cardList[0])]) return true;
      }
      return false;
    };
    ddzLogic.isBobm = function(cardList) {
      if (ddzLogic.isRocket(cardList)) return true;
      if (ddzLogic.isFourBobm(cardList)) return true;
      return false;
    };
    ddzLogic.isThreeWithOne = function(cardList) {
      if (4 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) {
          var key = -1;
          key = void 0 === ddzLogic.getCardVaule(cardList[i]) ? ddzLogic.getCardVaule(cardList[0]) : ddzLogic.getCardVaule(cardList[i]);
          console.log("key = " + key);
          map.hasOwnProperty(key) ? map[key]++ : map[key] = 1;
        }
        var count = 0;
        var maxNum = -1;
        for (var _i in map) {
          count++;
          maxNum < map[_i] && (maxNum = map[_i]);
        }
        if (2 === count && 3 === maxNum) return true;
      }
      return false;
    };
    ddzLogic.isThreeWithTow = function(cardList) {
      if (5 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) {
          var key = -1;
          key = void 0 === ddzLogic.getCardVaule(cardList[i]) ? ddzLogic.getCardVaule(cardList[0]) : ddzLogic.getCardVaule(cardList[i]);
          map.hasOwnProperty(key) ? map[key]++ : map[key] = 1;
        }
        var count = 0;
        var maxNum = -1;
        for (var _i2 in map) {
          count++;
          maxNum < map[_i2] && (maxNum = map[_i2]);
        }
        if (2 === count && 3 === maxNum) return true;
      }
      return false;
    };
    ddzLogic.isPlane = function(cardList) {
      console.log("card list length = " + cardList.length);
      if (6 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(cardList[i])) ? map[ddzLogic.getSortNum(cardList[i])]++ : map[ddzLogic.getSortNum(cardList[i])] = 1;
        var keys = Object.keys(map);
        console.log("map =" + JSON.stringify(map));
        if (2 !== keys.length) return false;
        for (var _i3 in map) if (3 !== map[_i3]) return false;
        if (15 == Number(keys[0]) || 15 == Number(keys[1])) return false;
        if (1 === Math.abs(Number(keys[0]) - Number(keys[1]))) return true;
      }
      return false;
    };
    ddzLogic.isPlaneWithOne = function(cardList) {
      if (8 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) {
          var key = -1;
          key = ddzLogic.getSortNum(cardList[i]);
          map.hasOwnProperty(key) ? map[key]++ : map[key] = 1;
        }
        console.log("map = " + JSON.stringify(map));
        var keys = Object.keys(map);
        if (4 !== keys.length) {
          console.log("key \u7684\u957f\u5ea6\u4e0d\u4e3a4");
          return false;
        }
        var oneCount = 0;
        var threeList = [];
        for (var _i4 in map) {
          3 === map[_i4] && threeList.push(_i4);
          1 === map[_i4] && oneCount++;
        }
        console.log("one count = " + oneCount);
        console.log("three list = " + JSON.stringify(threeList));
        if (2 !== threeList.length || 2 !== oneCount) return false;
        if (15 == Number(keys[0]) || 15 == Number(keys[1])) return false;
        if (1 === Math.abs(Number(threeList[0]) - Number(threeList[1]))) return true;
      }
      console.log("length not 8");
      return false;
    };
    ddzLogic.isPlaneWithTwo = function(cardList) {
      if (10 === cardList.length) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) {
          var key = -1;
          key = ddzLogic.getSortNum(cardList[i]);
          map.hasOwnProperty(key) ? map[key]++ : map[key] = 1;
        }
        var keys = Object.keys(map);
        if (4 !== keys.length) return false;
        var twoCount = 0;
        var threeList = [];
        for (var _i5 in map) {
          3 === map[_i5] && threeList.push(_i5);
          2 === map[_i5] && twoCount++;
        }
        if (2 !== threeList.length || 2 !== twoCount) return false;
        if (15 == Number(keys[0]) || 15 == Number(keys[1])) return false;
        if (1 === Math.abs(Number(threeList[0]) - Number(threeList[1]))) return true;
      }
      return false;
    };
    ddzLogic.isLongPlane = function(cardList) {
      if (cardList.length % 3 == 0) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(cardList[i])) ? map[ddzLogic.getSortNum(cardList[i])]++ : map[ddzLogic.getSortNum(cardList[i])] = 1;
        var keys = Object.keys(map);
        var threeNum = ddzLogic.getThreeForNum(cardList);
        if (keys.length === cardList.length / 3) {
          for (var _i6 in map) if (3 !== map[_i6]) return false;
          for (var _i7 = 0; _i7 < keys.length; _i7++) {
            if (15 == Number(keys[_i7])) return false;
            for (var j = 0; j < threeNum - 1; j++) if (1 !== Math.abs(Number(keys[j]) - Number(keys[j + 1]))) return false;
          }
          return true;
        }
        return false;
      }
      return false;
    };
    ddzLogic.isLongPlaneWithOne = function(cardList) {
      var threeNum = ddzLogic.getThreeForNum(cardList);
      if (cardList.length % threeNum == 0) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) {
          var key = -1;
          key = ddzLogic.getSortNum(cardList[i]);
          map.hasOwnProperty(key) ? map[key]++ : map[key] = 1;
        }
        console.log("map = " + JSON.stringify(map));
        var oneCount = 0;
        var threeList = [];
        for (var _i8 in map) {
          3 === map[_i8] && threeList.push(_i8);
          1 === map[_i8] && oneCount++;
        }
        console.log("is longPlane one count = " + oneCount);
        if (oneCount !== threeNum) return false;
        return true;
      }
      return false;
    };
    ddzLogic.isLongPlaneWithTwo = function(cardList) {
      var threeNum = ddzLogic.getThreeForNum(cardList);
      if (cardList.length % 5 == 0) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) {
          var key = -1;
          key = ddzLogic.getSortNum(cardList[i]);
          map.hasOwnProperty(key) ? map[key]++ : map[key] = 1;
        }
        console.log("map = " + JSON.stringify(map));
        var twoCount = 0;
        var threeList = [];
        for (var _i9 in map) {
          3 === map[_i9] && threeList.push(_i9);
          2 === map[_i9] && twoCount++;
        }
        console.log("is longPlane two count = " + twoCount);
        if (threeList.length < 3) return false;
        if (twoCount !== threeNum) return false;
        return true;
      }
      return false;
    };
    ddzLogic.isScroll = function(cardList) {
      if (cardList.length >= 5) {
        var cards = [];
        for (var i = 0; i < cardList.length; i++) cards.push(ddzLogic.getSortNum(cardList[i]));
        cards.sort(function(a, b) {
          return b - a;
        });
        for (var _i10 = 0; _i10 < cards.length - 1; _i10++) {
          if (15 === cards[_i10]) return false;
          if (1 !== Math.abs(cards[_i10] - cards[_i10 + 1])) return false;
        }
        return true;
      }
      return false;
    };
    ddzLogic.isDoubleScroll = function(cardList) {
      if (cardList.length >= 6) {
        var map = {};
        for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(cardList[i])) ? map[ddzLogic.getSortNum(cardList[i])]++ : map[ddzLogic.getSortNum(cardList[i])] = 1;
        for (var _i11 in map) if (2 !== map[_i11]) return false;
        var keys = Object.keys(map);
        keys.sort(function(a, b) {
          return Number(a) - Number(b);
        });
        for (var _i12 = 0; _i12 < keys.length - 1; _i12++) {
          if (15 == keys[_i12]) return false;
          if (1 !== Math.abs(Number(keys[_i12]) - Number(keys[_i12 + 1]))) return false;
        }
        return true;
      }
      return false;
    };
    ddzLogic.isFourWithOther = function(cardList) {
      if (6 == cardList) {
        if (ddzLogic.isSame(cardList, 0, 4) || ddzLogic.isSame(2, 6)) return true;
        return false;
      }
      if (8 == cardList) {
        if (ddzLogic.isSame(cardList, 0, 4) || ddzLogic.isSame(2, 6) || ddzLogic.isSame(4, 8)) return true;
        return false;
      }
    };
    ddzLogic.isSame = function(cardList, s, e) {
      for (var i = s, first = cardList[i]; i < e; i++) if (first !== cardList[i]) return false;
      return true;
    };
    ddzLogic.cardType = {
      none: {
        name: "none",
        value: 0
      },
      one: {
        name: "isOne",
        value: 1
      },
      double: {
        name: "isDouble",
        value: 1
      },
      three: {
        name: "isThree",
        value: 1
      },
      bobm: {
        name: "isBobm",
        value: 2
      },
      threeWithOne: {
        name: "isThreeWithOne",
        value: 1
      },
      threeWithTwo: {
        name: "isThreeWithTow",
        value: 1
      },
      plane: {
        name: "isPlane",
        value: 1
      },
      planeWithOne: {
        name: "isPlaneWithOne",
        value: 1
      },
      planeWithTwo: {
        name: "isPlaneWithTwo",
        value: 1
      },
      longPlane: {
        name: "isLongPlane",
        value: 1
      },
      longPlaneWithOne: {
        name: "isLongPlaneWithOne",
        value: 1
      },
      longPlaneWithTwo: {
        name: "isLongPlaneWithTwo",
        value: 1
      },
      scroll: {
        name: "isScroll",
        value: 1
      },
      doubleScroll: {
        name: "isDoubleScroll",
        value: 1
      },
      fourWithOther: {
        name: "isfourWithOther",
        value: 1
      }
    };
    ddzLogic.getCardType = function(cardList) {
      if (ddzLogic.isOneCard(cardList)) return ddzLogic.cardType.one;
      if (ddzLogic.isDouble(cardList)) return ddzLogic.cardType.double;
      if (ddzLogic.isThree(cardList)) return ddzLogic.cardType.three;
      if (ddzLogic.isThreeWithOne(cardList)) return ddzLogic.cardType.threeWithOne;
      if (ddzLogic.isThreeWithTow(cardList)) return ddzLogic.cardType.threeWithTwo;
      if (ddzLogic.isPlane(cardList)) return ddzLogic.cardType.plane;
      if (ddzLogic.isPlaneWithOne(cardList)) return ddzLogic.cardType.planeWithOne;
      if (ddzLogic.isPlaneWithTwo(cardList)) return ddzLogic.cardType.planeWithTwo;
      if (ddzLogic.isLongPlane(cardList)) return ddzLogic.cardType.longPlane;
      if (ddzLogic.isLongPlaneWithOne(cardList)) return ddzLogic.cardType.longPlaneWithOne;
      if (ddzLogic.isLongPlaneWithTwo(cardList)) return ddzLogic.cardType.longPlaneWithTwo;
      if (ddzLogic.isScroll(cardList)) return ddzLogic.cardType.scroll;
      if (ddzLogic.isDoubleScroll(cardList)) return ddzLogic.cardType.doubleScroll;
      if (ddzLogic.isBobm(cardList)) return ddzLogic.cardType.bobm;
      if (ddzLogic.isFourWithOther(cardList)) return ddzLogic.cardType.fourWithOther;
      return ddzLogic.cardType.none;
    };
    ddzLogic.compareOne = function(a, b) {
      if (14 == ddzLogic.getCardVaule(a[0]) && 15 == ddzLogic.getCardVaule(a[0]) || 14 == ddzLogic.getCardVaule(b[0]) && 15 == ddzLogic.getCardVaule(b[0])) return ddzLogic.getCardVaule(a[0]) - ddzLogic.getCardVaule(b[0]);
      var valueA = ddzLogic.getSortNum(a[0]);
      var valueB = ddzLogic.getSortNum(b[0]);
      console.log("value a= " + valueA);
      console.log("value b = " + valueB);
      if (valueA > valueB) return true;
      return false;
    };
    ddzLogic.compareBobm = function(a, b) {
      if (4 === a.length && 4 === b.length) return ddzLogic.compareOne(a, b);
      if (a.length < b.length) return true;
      return false;
    };
    ddzLogic.compareThreeWithOne = function(a, b) {
      var listA = [];
      var listB = [];
      var mapA = {};
      for (var i = 0; i < a.length; i++) mapA.hasOwnProperty(ddzLogic.getSortNum(a[i])) ? listA.push(a[i]) : mapA[ddzLogic.getSortNum(a[i])] = 1;
      mapA = {};
      for (var _i13 = 0; _i13 < b.length; _i13++) mapA.hasOwnProperty(ddzLogic.getSortNum(b[_i13])) ? listB.push(b[_i13]) : mapA[ddzLogic.getSortNum(b[_i13])] = 1;
      return ddzLogic.compareOne(listA, listB);
    };
    ddzLogic.compareThreeWithTwo = function(a, b) {
      var mapA = {};
      var mapB = {};
      for (var i = 0; i < a.length; i++) mapA.hasOwnProperty(ddzLogic.getSortNum(a[i])) ? mapA[ddzLogic.getSortNum(a[i])].push(a[i]) : mapA[ddzLogic.getSortNum(a[i])] = [ a[i] ];
      for (var _i14 = 0; _i14 < b.length; _i14++) mapB.hasOwnProperty(ddzLogic.getSortNum(b[_i14])) ? mapB[ddzLogic.getSortNum(b[_i14])].push(b[_i14]) : mapB[ddzLogic.getSortNum(b[_i14])] = [ b[_i14] ];
      var listA = [];
      for (var _i15 in mapA) 3 === mapA[_i15].length && (listA = mapA[_i15]);
      var listB = [];
      for (var _i16 in mapB) 3 === mapB[_i16].length && (listB = mapB[_i16]);
      return ddzLogic.compareOne(listA, listB);
    };
    ddzLogic.comparePlane = function(a, b) {
      var mapA = {};
      for (var i = 0; i < a.length; i++) mapA.hasOwnProperty(ddzLogic.getSortNum(a[i])) ? mapA[ddzLogic.getSortNum(a[i])].push(a[i]) : mapA[ddzLogic.getSortNum(a[i])] = [ a[i] ];
      var listA = [];
      var maxNum = 10;
      for (var _i17 in mapA) if (Number(_i17) < maxNum) {
        maxNum = Number(_i17);
        listA = mapA[_i17];
      }
      var mapB = {};
      for (var _i18 = 0; _i18 < b.length; _i18++) mapB.hasOwnProperty(ddzLogic.getSortNum(b[_i18])) ? mapB[ddzLogic.getSortNum(b[_i18])].push(b[_i18]) : mapB[ddzLogic.getSortNum(b[_i18])] = [ b[_i18] ];
      maxNum = 10;
      var listB = [];
      for (var _i19 in mapB) if (Number(_i19) < maxNum) {
        maxNum = Number(_i19);
        listB = mapB[_i19];
      }
      return ddzLogic.compareOne(listA, listB);
    };
    ddzLogic.comparePlaneWithOne = function(a, b) {
      var mapA = {};
      var listA = [];
      for (var i = 0; i < a.length; i++) mapA.hasOwnProperty(ddzLogic.getSortNum(a[i])) ? listA.push(a[i]) : mapA[ddzLogic.getSortNum(a[i])] = [ a[i] ];
      var mapB = {};
      var listB = [];
      for (var _i20 = 0; _i20 < b.length; _i20++) mapB.hasOwnProperty(ddzLogic.getSortNum(b[_i20])) ? listB.push(b[_i20]) : mapB[ddzLogic.getSortNum(b[_i20])] = [ b[_i20] ];
      return ddzLogic.comparePlane(listA, listB);
    };
    ddzLogic.comparePlaneWithTwo = function(a, b) {
      var mapA = {};
      for (var i = 0; i < a.length; i++) mapA.hasOwnProperty(ddzLogic.getSortNum(a[i])) ? mapA[ddzLogic.getSortNum(a[i])].push(a[i]) : mapA[ddzLogic.getSortNum(a[i])] = [ a[i] ];
      var mapB = {};
      for (var _i21 = 0; _i21 < b.length; _i21++) mapB.hasOwnProperty(ddzLogic.getSortNum(b[_i21])) ? mapB[ddzLogic.getSortNum(b[_i21])].push(b[_i21]) : mapB[ddzLogic.getSortNum(b[_i21])] = [ b[_i21] ];
      console.log("map a" + JSON.stringify(mapA));
      console.log("map b" + JSON.stringify(mapB));
      var listA = [];
      for (var _i22 in mapA) if (3 === mapA[_i22].length) for (var j = 0; j < mapA[_i22].length; j++) listA.push(mapA[_i22][j]);
      console.log("list a = " + JSON.stringify(listA));
      var listB = [];
      for (var _i23 in mapB) if (3 === mapB[_i23].length) for (var _j = 0; _j < mapB[_i23].length; _j++) listB.push(mapB[_i23][_j]);
      console.log("list b = " + JSON.stringify(listB));
      return ddzLogic.comparePlane(listA, listB);
    };
    ddzLogic.compareScroll = function(a, b) {
      console.log("a length = " + a.length);
      console.log("b length =" + b.length);
      if (a.length !== b.length) return cc.log("\u4e0d\u5408\u9002\u7684\u724c\u5f62");
      var minNumA = 1e3;
      for (var i = 0; i < a.length; i++) ddzLogic.getSortNum(a[i]) < minNumA && (minNumA = ddzLogic.getSortNum(a[i]));
      var minNumB = 1e3;
      for (var _i24 = 0; _i24 < b.length; _i24++) ddzLogic.getSortNum(b[_i24]) < minNumB && (minNumB = ddzLogic.getSortNum(b[_i24]));
      console.log("min a = " + minNumA);
      console.log("min b = " + minNumB);
      if (minNumA <= minNumB) return false;
      return true;
    };
    ddzLogic.compareDoubleScroll = function(a, b) {
      var mapA = {};
      var listA = [];
      if (a.length === b.length) {
        for (var i = 0; i < a.length; i++) if (mapA.hasOwnProperty(ddzLogic.getSortNum(a[i]))) ; else {
          mapA[ddzLogic.getSortNum(a[i])] = true;
          listA.push(a[i]);
        }
        var mapB = {};
        var listB = [];
        for (var _i25 = 0; _i25 < b.length; _i25++) if (mapB.hasOwnProperty(ddzLogic.getSortNum(b[_i25]))) ; else {
          mapB[ddzLogic.getSortNum(b[_i25])] = true;
          listB.push(b[_i25]);
        }
        console.log("list a = " + JSON.stringify(listA));
        console.log("list b = " + JSON.stringify(listB));
        return ddzLogic.compareScroll(listA, listB);
      }
      cc.log("\u724c\u957f\u5ea6\u4e0d\u7b49");
      return;
    };
    ddzLogic.compare = function(a, b) {
      var cardsValueA = ddzLogic.getCardType(a);
      var cardsValueB = ddzLogic.getCardType(b);
      if (0 == cardsValueA.value || 0 == cardsValueB.value) {
        cc.log("\u4e0d\u5408\u9002\u724c\u578b");
        return;
      }
      if (cardsValueA.value > cardsValueB.value) return true;
      if (cardsValueA.value === cardsValueB.value) {
        if (cardsValueA.name === cardsValueB.name) {
          var str = "compare" + cardsValueA.name;
          console.log("str = " + str);
          var method = ddzLogic[str];
          var result = method(a, b);
          if (true === result) return true;
          cc.log("\u4e0d\u5408\u9002\u724c\u578b");
          return;
        }
        cc.log("\u4e0d\u5408\u9002\u724c\u578b");
        return;
      }
      cc.log("\u4f60\u7684\u724c\u592a\u5c0f\u4e86");
      return;
    };
    ddzLogic.getThreeForNum = function(cardList) {
      var map = {};
      for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(cardList[i])) ? map[ddzLogic.getSortNum(cardList[i])]++ : map[ddzLogic.getSortNum(cardList[i])] = 1;
      var keys = Object.keys(map);
      var num = 0;
      cc.log("getThreeNum Map: " + JSON.stringify(map));
      for (var _i26 = 0; _i26 < keys.length - 1; _i26++) if (1 === Math.abs(Number(keys[_i26]) - Number(keys[_i26 + 1]))) for (_i26 in map) 3 === map[_i26] && num++;
      cc.log("getThreeNum : " + num);
      return num;
    };
    ddzLogic.getCardListWithStart = function(start, cards) {
      console.log("start = " + start);
      console.log("cards = " + JSON.stringify(cards));
      cards.sort(function(a, b) {
        return a - b;
      });
      console.log("cards sort after:" + JSON.stringify(cards));
      var list = [];
      for (var i = 0; i < cards.length; i++) {
        var key = -1;
        key = ddzLogic.getSortNum(cards[i]);
        key > start && list.push(cards[i]);
      }
      console.log("list.push after = " + JSON.stringify(list));
      var map = {};
      for (var _i27 = 0; _i27 < list.length; _i27++) {
        var _key = -1;
        _key = ddzLogic.getSortNum(list[_i27]);
        map.hasOwnProperty(_key) || (map[_key] = [ list[_i27] ]);
      }
      cc.log(" \u5355\u724c = " + JSON.stringify(map));
      return map;
    };
    ddzLogic.getKingBoom = function(cardList) {
      var list = [];
      for (var i = 0; i < cardList.length; i++) {
        var card = cardList[i];
        79 != card && 78 != card || list.push(card);
      }
      if (2 === list.length) {
        cc.log(" \u738b\u70b8 = " + JSON.stringify(list));
        return list;
      }
      return false;
    };
    ddzLogic.getRepeatCardsList = function(num, cardsB) {
      var map = {};
      for (var i = 0; i < cardsB.length; i++) {
        var key = -1;
        key = ddzLogic.getSortNum(cardsB[i]);
        map.hasOwnProperty(key) ? map[key].push(cardsB[i]) : map[key] = [ cardsB[i] ];
      }
      var list = [];
      for (var _i28 in map) if (map[_i28].length >= num) {
        var l = [];
        for (var j = 0; j < num; j++) l.push(map[_i28][j]);
        list.push(l);
      }
      console.log("list = " + JSON.stringify(list));
      return list;
    };
    ddzLogic.getFourBoom = function(cardList) {
      var list = ddzLogic.getRepeatCardsList(4, cardList);
      cc.log("get four boom  = " + JSON.stringify(list));
      if (0 === list.length) return false;
      return list;
    };
    ddzLogic.tipsisOne = function(cardsA, cardsB) {
      var map = ddzLogic.getCardListWithStart(ddzLogic.getSortNum(cardsA[0]), cardsB);
      var list = [];
      for (var i in map) list.push(map[i]);
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && list.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i29 = 0; _i29 < fourBoomList.length; _i29++) list.push(fourBoomList[_i29]);
      console.log("tips one list = " + JSON.stringify(list));
      return list;
    };
    ddzLogic.tipsisDouble = function(cardsA, cardsB) {
      var list = ddzLogic.getRepeatCardsList(2, cardsB);
      var cardsList = [];
      for (var i = 0; i < list.length; i++) ddzLogic.getSortNum(list[i][0]) > ddzLogic.getSortNum(cardsA[0]) && cardsList.push(list[i]);
      console.log("tips double cards list = " + JSON.stringify(cardsList));
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardsList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i30 = 0; _i30 < fourBoomList.length; _i30++) cardsList.push(fourBoomList[_i30]);
      return cardsList;
    };
    ddzLogic.tipsisThree = function(cardsA, cardsB) {
      var list = ddzLogic.getRepeatCardsList(3, cardsB);
      console.log("list = " + JSON.stringify(list));
      var cardsList = [];
      for (var i = 0; i < list.length; i++) ddzLogic.getSortNum(list[i][0]) > ddzLogic.getSortNum(cardsA[0]) && cardsList.push(list[i]);
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardsList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i31 = 0; _i31 < fourBoomList.length; _i31++) cardsList.push(fourBoomList[_i31]);
      console.log("tips three cards list = " + JSON.stringify(cardsList));
      return cardsList;
    };
    ddzLogic.tipsisBobm = function(cardsA, cardsB) {
      var cardsList = [];
      if (2 === cardsA.length) return cardsList;
      var list = ddzLogic.getRepeatCardsList(4, cardsB);
      for (var i = 0; i < list.length; i++) ddzLogic.getSortNum(list[i][0]) > ddzLogic.getSortNum(cardsA[0]) && cardsList.push(list[i]);
      var result = ddzLogic.getKingBoom(cardsB);
      false !== result && cardsList.push(result);
      return cardsList;
    };
    ddzLogic.tipsnone = function(cardsA, cardsB) {
      var cardsList = [];
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardsList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var i = 0; i < fourBoomList.length; i++) cardsList.push(fourBoomList[i]);
    };
    ddzLogic.getRepeatValue = function(num, cardList) {
      var map = {};
      for (var i = 0; i < cardList.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(cardList[i])) ? map[ddzLogic.getSortNum(cardList[i])].push(cardList[i]) : map[ddzLogic.getSortNum(cardList[i])] = [ cardList[i] ];
      for (var _i32 in map) if (map[_i32].length === num) return Number(_i32);
    };
    ddzLogic.getThreeWithNumCardsList = function(num, cardsA, cardsB) {
      var valueA = ddzLogic.getRepeatValue(3, cardsA);
      console.log("value a = " + valueA);
      var list = ddzLogic.getRepeatCardsList(3, cardsB);
      var cardList = [];
      for (var i = 0; i < list.length; i++) ddzLogic.getSortNum(list[i][0]) > valueA && cardList.push(list[i]);
      var oneList = ddzLogic.getRepeatCardsList(num, cardsB);
      for (var _i33 = 0; _i33 < cardList.length; _i33++) {
        var l = cardList[_i33];
        if (void 0 !== oneList) for (var j = 0; j < oneList.length; j++) if (-1 == l.indexOf(oneList[j][0])) {
          l.push(oneList[j][0]);
          l.push(oneList[j][1]);
          break;
        }
      }
      for (var _i34 = 0; _i34 < cardList.length; _i34++) 5 != cardList[_i34].length && cardList.splice(_i34, 1);
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i35 = 0; _i35 < fourBoomList.length; _i35++) cardList.push(fourBoomList[_i35]);
      return cardList;
    };
    ddzLogic.tipsisThreeWithOne = function(cardsA, cardsB) {
      return ddzLogic.getThreeWithNumCardsList(1, cardsA, cardsB);
    };
    ddzLogic.tipsisThreeWithTow = function(cardsA, cardsB) {
      console.log("\u4e09\u5e26\u4e8c\u7684\u63d0\u793a");
      return ddzLogic.getThreeWithNumCardsList(2, cardsA, cardsB);
    };
    ddzLogic.getPlaneMinValue = function(cardsA) {
      var map = {};
      for (var i = 0; i < cardsA.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(cardsA[i])) ? map[ddzLogic.getSortNum(cardsA[i])].push(cardsA[i]) : map[ddzLogic.getSortNum(cardsA[i])] = [ cardsA[i] ];
      var minNum = 100;
      for (var _i36 in map) Number(_i36) < minNum && (minNum = Number(_i36));
      return minNum;
    };
    ddzLogic.getLongPlaneWithStart = function(threeNum, num, cardsB) {
      var list = ddzLogic.getRepeatCardsList(3, cardsB);
      var map = {};
      for (var i = 0; i < list.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(list[i][0])) || (map[ddzLogic.getSortNum(list[i][0])] = list[i]);
      var keys = Object.keys(map);
      keys.sort(function(a, b) {
        return Number(a) - Number(b);
      });
      var hasLongPlaneFlag = true;
      var tempCardsList = [];
      var cardsList = [];
      var newCardList = [];
      for (var _i37 = 0; _i37 < keys.length - (threeNum - 1); _i37++) {
        for (var j = 0; j < threeNum - 1; j++) 1 !== Math.abs(Number(keys[j]) - Number(keys[j + 1])) && (hasLongPlaneFlag = false);
        if (hasLongPlaneFlag) {
          var l = [];
          for (var _j2 = 0; _j2 < map[keys[_i37]].length; _j2++) for (var t = 0; t < threeNum; t++) l.push(map[keys[_i37 + t]][_j2]);
          tempCardsList.push(l);
          for (var p = 0; p < tempCardsList.length; p++) {
            var valueB = ddzLogic.getPlaneMinValue(tempCardsList[p]);
            valueB > num && cardsList.push(tempCardsList[p]);
          }
          for (var _i38 = 0; _i38 < cardsList.length - 1; _i38++) cardsList[_i38].sort().toString() === cardsList[_i38 + 1].sort().toString() && cardsList[_i38].splice();
        }
      }
      cc.log("getLongPlanStar : " + JSON.stringify(cardsList));
      return cardsList;
    };
    ddzLogic.getPlaneWithStart = function(num, cardsB) {
      var list = ddzLogic.getRepeatCardsList(3, cardsB);
      var map = {};
      for (var i = 0; i < list.length; i++) map.hasOwnProperty(ddzLogic.getSortNum(list[i][0])) || (map[ddzLogic.getSortNum(list[i][0])] = list[i]);
      var keys = Object.keys(map);
      keys.sort(function(a, b) {
        return Number(a) - Number(b);
      });
      var tempCardsList = [];
      for (var _i39 = 0; _i39 < keys.length - 1; _i39++) if (1 === Math.abs(Number(keys[_i39]) - Number(keys[_i39 + 1]))) {
        var l = [];
        for (var j = 0; j < map[keys[_i39]].length; j++) {
          l.push(map[keys[_i39]][j]);
          l.push(map[keys[_i39 + 1]][j]);
        }
        tempCardsList.push(l);
      }
      var cardsList = [];
      for (var _i40 = 0; _i40 < tempCardsList.length; _i40++) {
        var valueB = ddzLogic.getPlaneMinValue(tempCardsList[_i40]);
        14 != valueB && 15 != valueB && valueB > num && cardsList.push(tempCardsList[_i40]);
      }
      return cardsList;
    };
    ddzLogic.tipsisPlane = function(cardsA, cardsB) {
      console.log("\u63d0\u793a\u98de\u673a");
      var valueA = ddzLogic.getPlaneMinValue(cardsA);
      var cardsList = ddzLogic.getPlaneWithStart(valueA, cardsB);
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardsList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var i = 0; i < fourBoomList.length; i++) cardsList.push(fourBoomList[i]);
      return cardsList;
    };
    ddzLogic.tipsisPlaneWithOne = function(cardsA, cardsB) {
      var valueA = ddzLogic.getPlaneMinValue(cardsA);
      console.log("value a = " + valueA);
      var cardsList = ddzLogic.getPlaneWithStart(valueA, cardsB);
      console.log("cards list = " + JSON.stringify(cardsList));
      var oneCard = ddzLogic.getRepeatCardsList(1, cardsB);
      var twoCard = ddzLogic.getRepeatCardsList(2, cardsB);
      console.log("one card = " + JSON.stringify(oneCard));
      oneCard.sort(function(a, b) {
        return ddzLogic.getSortNum(a[0]) - ddzLogic.getSortNum(b[0]);
      });
      var newCardslist = [];
      for (var i = 0; i < cardsList.length; i++) {
        var sortOneCard = [];
        for (var j = 0; j < oneCard.length; j++) -1 == cardsList[i].indexOf(oneCard[j][0]) && sortOneCard.push(oneCard[j][0]);
        if (sortOneCard.length >= 2) for (var t = 0; t < sortOneCard.length - 1; t++) {
          cardsList[i].push(sortOneCard[t]);
          cardsList[i].push(sortOneCard[t + 1]);
          var arr = cardsList[i].concat();
          newCardslist.push(arr);
          cardsList[i].splice(cardsList[i].length - 2, cardsList[i].length);
        }
      }
      for (var _i41 = 0; _i41 < cardsList.length; _i41++) {
        var sortTwoCard = [];
        var cards = cardsList[_i41];
        for (var _j3 = 0; _j3 < twoCard.length; _j3++) ddzLogic.isContained(cards, twoCard[_j3]) || sortTwoCard.push(twoCard[_j3]);
        if (sortTwoCard.length >= 1) for (var _t = 0; _t < sortTwoCard.length - 1; _t++) {
          cardsList[_i41].push(sortTwoCard[_t][0]);
          cardsList[_i41].push(sortTwoCard[_t][1]);
          var _arr = cardsList[_i41].concat();
          newCardslist.push(_arr);
          cardsList[_i41].splice(cardsList[_i41].length - 2, cardsList[_i41].length);
        }
      }
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && newCardslist.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i42 = 0; _i42 < fourBoomList.length; _i42++) newCardslist.push(fourBoomList[_i42]);
      return newCardslist;
    };
    ddzLogic.tipsisPlaneWithTwo = function(cardsA, cardsB) {
      var valueA = ddzLogic.getPlaneMinValue(cardsA);
      console.log("value a = " + valueA);
      var cardsList = ddzLogic.getPlaneWithStart(valueA, cardsB);
      console.log("cards list = " + JSON.stringify(cardsList));
      var twoCard = ddzLogic.getRepeatCardsList(2, cardsB);
      console.log("one card = " + JSON.stringify(twoCard));
      twoCard.sort(function(a, b) {
        return ddzLogic.getSortNum(a[0]) - ddzLogic.getSortNum(b[0]);
      });
      var newCardslist = [];
      for (var i = 0; i < cardsList.length; i++) {
        var sortTwoCard = [];
        var cards = cardsList[i];
        for (var j = 0; j < twoCard.length; j++) ddzLogic.isContained(cards, twoCard[j]) || sortTwoCard.push(twoCard[j]);
        if (sortTwoCard.length >= 2) for (var t = 0; t < sortTwoCard.length - 1; t++) {
          for (var e = 0; e < 2; e++) {
            cardsList[i].push(sortTwoCard[t][e]);
            cardsList[i].push(sortTwoCard[t + 1][e]);
          }
          var arr = cardsList[i].concat();
          newCardslist.push(arr);
          cardsList[i].splice(cardsList[i].length - 4, cardsList[i].length);
        }
      }
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && newCardslist.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i43 = 0; _i43 < fourBoomList.length; _i43++) newCardslist.push(fourBoomList[_i43]);
      return newCardslist;
    };
    ddzLogic.isContained = function(aa, bb) {
      if (!(aa instanceof Array) || !(bb instanceof Array) || aa.length < bb.length) return false;
      var aaStr = aa.toString();
      for (var i = 0; i < bb.length; i++) if (aaStr.indexOf(bb[i]) < 0) return false;
      return true;
    };
    ddzLogic.tipsisLongPlane = function(cardsA, cardsB) {
      var threeNum = ddzLogic.getThreeForNum(cardsA);
      var valueA = ddzLogic.getPlaneMinValue(cardsA);
      var cardsList = ddzLogic.getLongPlaneWithStart(threeNum, valueA, cardsB);
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardsList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var i = 0; i < fourBoomList.length; i++) cardsList.push(fourBoomList[i]);
      return cardsList;
    }, ddzLogic.tipsisLongPlaneWithOne = function(cardsA, cardsB) {
      var threeNum = ddzLogic.getThreeForNum(cardsA);
      var valueA = ddzLogic.getPlaneMinValue(cardsA);
      var cardsList = ddzLogic.getLongPlaneWithStart(threeNum, valueA, cardsB);
      var oneCard = ddzLogic.getRepeatCardsList(1, cardsB);
      oneCard.sort(function(a, b) {
        return ddzLogic.getSortNum(a[0]) - ddzLogic.getSortNum(b[0]);
      });
      var newCardslist = [];
      for (var i = 0; i < cardsList.length; i++) {
        var sortOneCard = [];
        for (var j = 0; j < oneCard.length; j++) -1 == cardsList[i].indexOf(oneCard[j][0]) && sortOneCard.push(oneCard[j][0]);
        if (sortOneCard.length >= threeNum) for (var t = 0; t < sortOneCard.length - threeNum; t++) {
          for (var e = 0; e < threeNum; e++) cardsList[i].push(sortOneCard[e]);
          var arr = cardsList[i].concat();
          newCardslist.push(arr);
          cardsList[i].splice(cardsList[i].length - threeNum, cardsList[i].length);
        }
      }
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && newCardslist.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i44 = 0; _i44 < fourBoomList.length; _i44++) newCardslist.push(fourBoomList[_i44]);
      return newCardslist;
    };
    ddzLogic.tipsisLongPlaneWithTwo = function(cardsA, cardsB) {
      var threeNum = ddzLogic.getThreeForNum(cardsA);
      var valueA = ddzLogic.getPlaneMinValue(cardsA);
      var cardsList = ddzLogic.getLongPlaneWithStart(threeNum, valueA, cardsB);
      cc.log("islongPlaneTwo cardlist: " + JSON.stringify(cardsList));
      var twoCard = ddzLogic.getRepeatCardsList(2, cardsB);
      twoCard.sort(function(a, b) {
        return ddzLogic.getSortNum(a[0]) - ddzLogic.getSortNum(b[0]);
      });
      var newCardslist = [];
      for (var i = 0; i < cardsList.length; i++) {
        var sortTwoCard = [];
        var cards = cardsList[i];
        for (var j = 0; j < twoCard.length; j++) ddzLogic.isContained(cards, twoCard[j]) || sortTwoCard.push(twoCard[j]);
        cc.log("islongPlaneTwo sort: " + JSON.stringify(sortTwoCard));
        if (sortTwoCard.length >= threeNum) for (var t = 0; t < sortTwoCard.length - threeNum + 1; t++) {
          for (var a = 0; a < threeNum; a++) {
            cardsList[i].push(sortTwoCard[a + t][0]);
            cardsList[i].push(sortTwoCard[a + t][1]);
          }
          cc.log("islongPlaneTwo cards:" + JSON.stringify(cardsList[i]));
          var arr = cardsList[i].concat();
          newCardslist.push(arr);
          cc.log("islongPlaneTwo newCards:" + JSON.stringify(newCardslist));
          cardsList[i].splice(cardsList[i].length - 2 * threeNum, cardsList[i].length);
        }
      }
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && newCardslist.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i45 = 0; _i45 < fourBoomList.length; _i45++) newCardslist.push(fourBoomList[_i45]);
      return newCardslist;
    };
    ddzLogic.getScrollMinNum = function(cardList) {
      var minNum = 100;
      for (var i = 0; i < cardList.length; i++) ddzLogic.getSortNum(cardList[i]) < minNum && (minNum = ddzLogic.getSortNum(cardList[i]));
      return minNum;
    };
    ddzLogic.getScrollCardsList = function(length, cards) {
      var cardList = [];
      var map = {};
      for (var i = 0; i < cards.length; i++) if (!map.hasOwnProperty(ddzLogic.getSortNum(cards[i]))) {
        cardList.push(cards[i]);
        map[ddzLogic.getSortNum(cards[i])] = true;
      }
      cardList.sort(function(a, b) {
        return ddzLogic.getSortNum(a) - ddzLogic.getSortNum(b);
      });
      cc.log("cardList : " + JSON.stringify(cardList));
      var cardsList = [];
      for (var _i46 = 0; _i46 < cardList.length - (length - 1); _i46++) {
        var list = [];
        for (var j = _i46; j < _i46 + length; j++) list.push(cardList[j]);
        cardsList.push(list);
      }
      console.log("cars list =  " + JSON.stringify(cardsList));
      var endList = [];
      for (var _i47 = 0; _i47 < cardsList.length; _i47++) {
        var flag = true;
        for (var _j4 = 0; _j4 < cardsList[_i47].length - 1; _j4++) {
          15 != ddzLogic.getSortNum(cardsList[_i47][_j4]) && 15 != ddzLogic.getSortNum(cardsList[_i47][_j4 + 1]) || (flag = false);
          1 !== Math.abs(ddzLogic.getSortNum(cardsList[_i47][_j4]) - ddzLogic.getSortNum(cardsList[_i47][_j4 + 1])) && (flag = false);
        }
        true === flag && endList.push(cardsList[_i47]);
      }
      console.log("end list =  " + JSON.stringify(endList));
      return endList;
    };
    ddzLogic.tipsisScroll = function(cardsA, cardsB) {
      var valueA = ddzLogic.getScrollMinNum(cardsA);
      console.log("tips scroll minNum cardA = " + valueA);
      var list = ddzLogic.getScrollCardsList(cardsA.length, cardsB);
      console.log("tips scroll list = " + JSON.stringify(list));
      var cardsList = [];
      for (var i = 0; i < list.length; i++) {
        var valueB = ddzLogic.getScrollMinNum(list[i]);
        valueB > valueA && cardsList.push(list[i]);
      }
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && cardsList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i48 = 0; _i48 < fourBoomList.length; _i48++) cardsList.push(fourBoomList[_i48]);
      return cardsList;
    };
    ddzLogic.getDoubleScorllMinValue = function(cardList) {
      cardList.sort(function(a, b) {
        return a - b;
      });
      return ddzLogic.getSortNum(cardList[0]);
    };
    ddzLogic.tipsisDoubleScroll = function(cardsA, cardsB) {
      console.log("cards a = " + JSON.stringify(cardsA));
      var valueA = ddzLogic.getDoubleScorllMinValue(cardsA);
      console.log("tips double scroll = " + valueA);
      var map = {};
      for (var i = 0; i < cardsB.length; i++) {
        var key = -1;
        key = ddzLogic.getSortNum(cardsB[i]);
        map.hasOwnProperty(key) ? map[key].push(cardsB[i]) : map[key] = [ cardsB[i] ];
      }
      console.log("map  = " + JSON.stringify(map));
      var list = [];
      for (var _i49 in map) if (map[_i49].length >= 2) {
        var l = [];
        for (var j = 0; j < 2; j++) l.push(map[_i49][j]);
        list.push(l);
      }
      list.sort(function(a, b) {
        return ddzLogic.getSortNum(a) - ddzLogic.getSortNum(b);
      });
      console.log("list = " + JSON.stringify(list));
      var groupList = [];
      var length = Math.round(.5 * cardsA.length);
      console.log("length  = " + length);
      for (var _i50 = 0; _i50 < list.length - length + 1; _i50++) {
        var _l = [];
        for (var _j5 = _i50; _j5 < _i50 + length; _j5++) _l.push(list[_j5]);
        groupList.push(_l);
      }
      console.log("group list = " + JSON.stringify(groupList));
      var doubleScrollList = [];
      for (var _i51 = 0; _i51 < groupList.length; _i51++) {
        var group = groupList[_i51];
        console.log("group = " + JSON.stringify(group));
        var flag = true;
        for (var _j6 = 0; _j6 < group.length - 1; _j6++) {
          var cards = group[_j6];
          console.log("cards = " + JSON.stringify(cards));
          15 != ddzLogic.getSortNum(group[_j6][0]) && 15 != ddzLogic.getSortNum(group[_j6 + 1][0]) || (flag = false);
          1 !== Math.abs(ddzLogic.getSortNum(group[_j6][0]) - ddzLogic.getSortNum(group[_j6 + 1][0])) && (flag = false);
        }
        console.log("flag  = " + flag);
        if (true === flag) {
          var endList = [];
          for (var _j7 = 0; _j7 < group.length; _j7++) {
            endList.push(group[_j7][0]);
            endList.push(group[_j7][1]);
          }
          var valueB = ddzLogic.getDoubleScorllMinValue(endList);
          valueB > valueA && doubleScrollList.push(endList);
        }
      }
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && doubleScrollList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var _i52 = 0; _i52 < fourBoomList.length; _i52++) doubleScrollList.push(fourBoomList[_i52]);
      return doubleScrollList;
    };
    ddzLogic.tipsisFourWithOther = function(cardsA, cardsB) {
      var bobmList = [];
      var kingBoom = ddzLogic.getKingBoom(cardsB);
      false !== kingBoom && bobmList.push(kingBoom);
      var fourBoomList = ddzLogic.getFourBoom(cardsB);
      if (false !== fourBoomList) for (var i = 0; i < fourBoomList.length; i++) bobmList.push(fourBoomList[i]);
    };
    ddzLogic.getTipsCardsList = function(cardsA, cardsB) {
      if (void 0 === cardsA) {
        var list = [];
        var map = ddzLogic.getCardListWithStart(0, cardsB);
        for (var i in map) list.push(map[i]);
        return list;
      }
      var cardsValue = ddzLogic.getCardType(cardsA);
      var name = cardsValue.name;
      var str = "tips" + name;
      var method = ddzLogic[str];
      return method(cardsA, cardsB);
    };
    ddzLogic.getIsScorll = function(cardsA) {
      var cardsList = [];
      var endList = null;
      if (void 0 != cardsA) {
        for (var i = cardsA.length; i >= 5; i--) {
          endList = ddzLogic.getScrollCardsList(i, cardsA);
          if (endList.length > 0) break;
        }
        endList && cc.log("isScorll : " + JSON.stringify(endList));
      }
      return endList;
    };
    module.exports = ddzLogic;
    cc._RF.pop();
  }, {} ],
  ddzOperating: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a88dW3T4xMeKfasEHVtwbn", "ddzOperating");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnSp: cc.Sprite,
        bgSp: {
          default: [],
          type: cc.SpriteFrame
        },
        operatingSp: {
          default: [],
          type: cc.SpriteFrame
        },
        _index: -1
      },
      init: function init(index, bgIndex) {
        this.btnSp.spriteFrame = this.operatingSp[index];
        this.node.getComponent(cc.Sprite).spriteFrame = this.bgSp[bgIndex];
        this._index = index;
        this.callBack();
      },
      callBack: function callBack() {
        var _this = this;
        this.node.on("click", function() {
          _this.node.emit("operating");
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzOtherLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ff7e0gVsRP9r4XUy0xPp8p", "ddzOtherLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnScoreLayout: cc.Layout,
        btnOpratingLayout: cc.Layout,
        btnDoubleLayout: cc.Layout,
        btnOne: cc.Button,
        btnTow: cc.Button,
        btnThree: cc.Button,
        btnNo: cc.Button,
        btnCallBack: cc.Button,
        btnSetting: cc.Button,
        btnCancelHost: cc.Button,
        btnPay: cc.Button,
        btnOpenCard: cc.Button,
        settingPf: cc.Prefab,
        shopPf: cc.Prefab,
        headLayer: cc.Node,
        cardLayer: cc.Node,
        btnPlayNothing: cc.Button,
        btnCardTip: cc.Button,
        btnPlayCard: cc.Button,
        btnCanNot: cc.Button,
        btnIsDouble: cc.Button,
        btnNoDouble: cc.Button,
        rememBerCard: cc.Node,
        isCanCallBack: true,
        isOpenBerCard: true
      },
      onLoad: function onLoad() {
        var _this = this;
        this.callBtn = [];
        this.callBtn.push(this.btnOne);
        this.callBtn.push(this.btnTow);
        this.callBtn.push(this.btnThree);
        this.callBtn.push(this.btnNo);
        for (var i = 0; i < this.callBtn.length; i++) 3 == i ? this.callBtn[i].getComponent("ddzCallBtn").init(0, 1) : this.callBtn[i].getComponent("ddzCallBtn").init(i + 1, 0);
        this.myClock = this.headLayer.getChildByName("myclock");
        this.btnCallBack.node.on("click", function() {
          if (_this.isCanCallBack) {
            var req = new proto.cmd_room.RoomChairAction();
            req.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, req);
          } else cc.ak.ui.toast(lan.ddz.game.starGame);
        });
        this.btnSetting.node.on("click", function() {
          var setting = cc.instantiate(_this.settingPf);
          _this.node.addChild(setting);
        });
        this.btnPay.node.on("click", function() {
          var shop = cc.instantiate(_this.shopPf);
          shop.y = 0;
          shop.x = 0;
          _this.node.addChild(shop);
          var payData = cc.ak.cache.shopData.getPayData();
          payData && shop.getComponent("shop").setPayWay(payData.pay_types, payData.tips);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHOP, function(data) {
            cc.log("\u5546\u57ce:" + JSON.stringify(data));
            if (0 == data.status) {
              shop.getComponent("shop").setPayWay(data.pay_types, data.tips);
              cc.ak.cache.shopData.parse(data);
            }
          });
        });
        this.opreatingBtn = [];
        this.opreatingBtn.push(this.btnPlayNothing);
        this.opreatingBtn.push(this.btnCardTip);
        this.opreatingBtn.push(this.btnPlayCard);
        this.opreatingBtn.push(this.btnCanNot);
        for (var j = 0; j < this.opreatingBtn.length; j++) 0 == j ? this.opreatingBtn[j].getComponent("ddzOperating").init(j, 1) : 3 != j ? this.opreatingBtn[j].getComponent("ddzOperating").init(j, 0) : 3 == j && this.opreatingBtn[j].getComponent("ddzOperating").init(j, 1);
        this.btnCancelHost.node.on("click", function() {
          var req = new proto.cmd_game_ddz.TrustReq();
          req.Status = 0;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_TRUST_REQ, req);
        });
        this.btnDoubleArr = [];
        this.btnDoubleArr.push(this.btnIsDouble);
        this.btnDoubleArr.push(this.btnNoDouble);
        for (var _i = 0; _i < 2; _i++) {
          var btn = this.btnDoubleArr[_i].node.getComponent("ddzDouble");
          btn.init(_i);
        }
        var landCardsNode = this.cardLayer.getComponent("ddzCardLayer").landCardsNode;
        this.btnOpenCard.interactable = false;
        this.btnOpenCard.node.on("click", function() {
          var x = _this.rememBerCard.x;
          var y = _this.rememBerCard.y;
          if (_this.isOpenBerCard) {
            _this.rememBerCard.runAction(cc.moveTo(.2, x, y - 200));
            _this.isOpenBerCard = false;
            landCardsNode.active = false;
          } else {
            _this.rememBerCard.runAction(cc.moveTo(.2, x, y + 200));
            _this.isOpenBerCard = true;
            landCardsNode.active = true;
          }
        });
      },
      showBtnScoreLayout: function showBtnScoreLayout(num) {
        this.btnScoreLayout.node.active = true;
        for (var i = 0; i < this.callBtn.length; i++) this.callBtn[i].node.active = true;
        switch (num) {
         case 1:
          break;

         case 2:
          this.btnOne.node.active = false;
          break;

         case 3:
          this.btnOne.node.active = false;
          this.btnTow.node.active = false;
        }
      },
      showBtnOperatingLayut: function showBtnOperatingLayut() {
        this.btnOpratingLayout.node.active = true;
        this.btnPlayNothing.node.active = true;
        this.btnCardTip.node.active = true;
        this.btnPlayCard.node.active = true;
        this.btnCanNot.node.active = false;
      },
      shieldOpratingBtn: function shieldOpratingBtn() {
        this.btnOpratingLayout.node.active = true;
        this.btnPlayNothing.node.active = false;
        this.btnCardTip.node.active = false;
        this.btnPlayCard.node.active = true;
        this.btnCanNot.node.active = false;
      },
      shieldPlayTipsBtn: function shieldPlayTipsBtn() {
        this.btnOpratingLayout.node.active = true;
        this.btnPlayNothing.node.active = false;
        this.btnCardTip.node.active = false;
        this.btnPlayCard.node.active = false;
        this.btnCanNot.node.active = true;
      },
      cleanOtherLayer: function cleanOtherLayer() {
        this.btnScoreLayout.node.active = false;
        this.btnOpratingLayout.node.active = false;
      },
      isVisiCancelHost: function isVisiCancelHost(yes) {
        this.btnCancelHost.node.active = yes;
      },
      start: function start() {},
      onEnable: function onEnable() {
        var _this2 = this;
        var _loop = function _loop(j) {
          _this2.opreatingBtn[j].node.on("operating", function() {
            var operating = _this2.opreatingBtn[j].getComponent("ddzOperating");
            switch (operating._index) {
             case 0:
              var req = new proto.cmd_game_ddz.OutCardDataReq();
              cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_OUT_CARD_REQ, req);
              var children = _this2.cardLayer.getComponent("ddzCardLayer").myCardNode.children;
              for (var i = 0; i < children.length; i++) {
                children[i].y = 0;
                children[i].getComponent("ddzCard")._isUpCard = false;
              }
              break;

             case 1:
              cc.ak.event.emit(bundle.ddz.key.event.OUT_CARD_TIPS);
              break;

             case 2:
              var cardArr = _this2.cardLayer.getComponent("ddzCardLayer").readyoutCards();
              if (cardArr.length > 0) {
                var outCardReq = new proto.cmd_game_ddz.OutCardDataReq();
                outCardReq.Cards = cardArr;
                cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_OUT_CARD_REQ, outCardReq);
                _this2.cardLayer.getComponent("ddzCardLayer").outCardValueArr.splice(0, cardArr.length);
              } else cc.ak.ui.toast(lan.ddz.game.outCard);
              break;

             case 3:
              var req1 = new proto.cmd_game_ddz.OutCardDataReq();
              cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_ddz.SUB_CMD_GAME.SUB_USER_OUT_CARD_REQ, req1);
              var children = _this2.cardLayer.getComponent("ddzCardLayer").myCardNode.children;
              for (var _i2 = 0; _i2 < children.length; _i2++) {
                children[_i2].y = 0;
                children[_i2].getComponent("ddzCard")._isUpCard = false;
              }
            }
          });
        };
        for (var j = 0; j < this.opreatingBtn.length; j++) _loop(j);
      }
    });
    cc._RF.pop();
  }, {} ],
  ddzRememberCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9959uVe6BLHJUSWjS3O1Pd", "ddzRememberCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labDifen: cc.Label,
        labBeishu: cc.Label,
        labCard: {
          default: [],
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.labDifen.string = "0";
        this.labBeishu.string = "1";
        for (var i = 0; i < this.labCard.length; i++) {
          var labCard = this.labCard[i];
          labCard.string = "0";
        }
      },
      upDataDifen: function upDataDifen(num) {
        this.labDifen.string = "" + parseInt(num);
      },
      upDataBeishu: function upDataBeishu(num) {
        this.labBeishu.string = "" + parseInt(num);
      },
      upDataRemainCard: function upDataRemainCard(cards) {
        for (var i = 0; i < cards.length; i++) {
          var num = cards[i].LeftNumber;
          this.labCard[i].string = "" + num;
        }
      },
      cleanPanel: function cleanPanel() {
        this.labDifen.string = "0";
        this.labBeishu.string = "1";
        for (var i = 0; i < this.labCard.length; i++) this.labCard[i].string = "0";
      },
      obsDiFen: function obsDiFen() {
        var data = bundle.ddz.data.get(bundle.ddz.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_ddz.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        cc.log("tableRule.DiFen : " + tableRule.DiFen);
        return (tableRule.DiFen / 1e3).toFixed(2);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzSettlemetItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52591cyRfpPoaKYmjmDw62a", "ddzSettlemetItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        itemBg: cc.Sprite,
        itemBgSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        landSp: cc.Sprite,
        labName: cc.Label,
        labDiFen: cc.Label,
        labBeishu: cc.Label,
        labCoin: cc.Label,
        labTax: cc.Label
      },
      setSettlementData: function setSettlementData(data) {
        data.isMyInfo && (this.itemBg.spriteFrame = this.itemBgSpf[data.isWin]);
        this.landSp.node.active = 0 != data.isLand;
        this.labTax.node.active = false;
        this.isMyInfo(data.isMyInfo);
        var name = cc.ak.util.utils.FilterFormString(data.name + "");
        name = cc.ak.util.utils.nameInterception(data.name);
        this.labName.string = name;
        this.labDiFen.string = data.diFen;
        1 == data.isLand ? this.labBeishu.string = "-" : this.labBeishu.string = data.beishu;
        this.labCoin.string = data.coin;
        if (0 != data.tax) {
          this.labTax.node.active = true;
          this.labTax.string = "-" + data.tax;
        }
        this.labTax.node.active = false;
      },
      isMyInfo: function isMyInfo(bool) {
        if (!bool) return;
        this.labName.node.color = cc.color(252, 251, 107);
        this.labDiFen.node.color = cc.color(252, 251, 107);
        this.labBeishu.node.color = cc.color(252, 251, 107);
        this.labCoin.node.color = cc.color(252, 251, 107);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzSettlemetLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "103c1bZfEZLpoX1zCSn6TZ2", "ddzSettlemetLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnCallBack: cc.Button,
        btnContinu: cc.Button,
        titleSp: cc.Sprite,
        titleSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        settlementBg: cc.Sprite,
        settlementBgSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        titleName: cc.Label,
        titleDifen: cc.Label,
        titleBeishu: cc.Label,
        titleCoin: cc.Label,
        playInfo1: cc.Node,
        playInfo2: cc.Node,
        playInfo3: cc.Node
      },
      onLoad: function onLoad() {},
      init: function init() {
        var _this = this;
        this.node.on("click", function() {});
        this.btnCallBack.node.on("click", function() {
          var req = new proto.cmd_room.RoomChairAction();
          req.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, req);
        });
        this.btnContinu.node.on("click", function() {
          _this.node.active = false;
          var req = new proto.cmd_room.RoomChairAction();
          req.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_SIT_DOWN;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, req);
          _this.btnContinu.node.emit("continu");
        });
        this.playInfoArr = [];
        this.playInfoArr.push(this.playInfo1);
        this.playInfoArr.push(this.playInfo2);
        this.playInfoArr.push(this.playInfo3);
      },
      changLabColor: function changLabColor(isWin) {
        var winColor = cc.color(255, 223, 133);
        var failColor = cc.color(136, 176, 250);
        if (1 == isWin) {
          this.titleName.color = winColor;
          this.titleDifen.color = winColor;
          this.titleBeishu.color = winColor;
          this.titleCoin.color = winColor;
        } else {
          this.titleName.color = failColor;
          this.titleDifen.color = failColor;
          this.titleBeishu.color = failColor;
          this.titleCoin.color = failColor;
        }
        this.settlementBg.spriteFrame = this.settlementBgSpf[isWin];
        this.titleSp.spriteFrame = this.titleSpf[isWin];
      },
      setData: function setData(bankerChairID, settlmentdata) {
        this.node.active = true;
        for (var i = 0; i < settlmentdata.length; i++) {
          var item = this.playInfoArr[i];
          item.active = true;
          var userInfo = settlmentdata[i].UserInf;
          var data = {};
          var isLand = 0;
          bankerChairID == userInfo.ChairID && (isLand = 1);
          var isWin = 0;
          settlmentdata[i].Score > 0 && (isWin = 1);
          data.isWin = isWin;
          data.isLand = isLand;
          data.name = userInfo.NickName;
          data.diFen = this.obsDiFen();
          data.beishu = settlmentdata[i].BeiLv;
          data.coin = (settlmentdata[i].Score / 1e3).toFixed(2);
          data.tax = Math.floor(100 * settlmentdata[i].tax) / 1e3 / 100;
          cc.log("settlement Score :" + settlmentdata[i].Score);
          cc.log("settlement tax :" + settlmentdata[i].tax);
          if (userInfo.Uid == cc.ak.mc.userMgr.uid) {
            data.isMyInfo = 1;
            this.changLabColor(isWin);
          } else data.isMyInfo = 0;
          item.getComponent("ddzSettlemetItem").setSettlementData(data);
        }
      },
      obsDiFen: function obsDiFen() {
        var data = bundle.ddz.data.get(bundle.ddz.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_ddz.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        cc.log("tableRule.DiFen : " + tableRule.DiFen);
        return (tableRule.DiFen / 1e3).toFixed(2);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ddzTipLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c6cajJDPpAIYXrMWtXCNzu", "ddzTipLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labTips: cc.Label,
        anim: cc.Prefab
      },
      onLoad: function onLoad() {
        var anim = cc.instantiate(this.anim);
        this.node.addChild(anim);
        anim.getComponent(cc.Animation).play();
        this.timeFlag = -1;
        this.time = 0;
        this.timeFlag = setInterval(this.setLab.bind(this), 1e3);
      },
      setLab: function setLab() {
        this.labTips.string = this.time;
        this.time++;
      },
      reStart: function reStart() {
        clearInterval(this.timeFlag);
        this.time = 0;
        this.labTips.string = this.time;
        this.timeFlag = setInterval(this.setLab.bind(this), 1e3);
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        clearInterval(this.timeFlag);
      }
    });
    cc._RF.pop();
  }, {} ],
  ddz_zh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "003d1TR4ChIYK72+/ZSJx0h", "ddz_zh");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.loc || (window.i18n.languages.loc = {});
    window.i18n.languages.loc.ddz = {
      game: {
        outCardError: "\u51fa\u724c\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",
        outCard: "\u8bf7\u9009\u62e9\u8981\u51fa\u7684\u724c",
        noCards: "\u6ca1\u6709\u5927\u8fc7\u4e0a\u5bb6\u7684\u724c\u578b",
        starGame: "\u5df2\u7ecf\u5f00\u59cb\u6e38\u620f\uff0c\u4e0d\u80fd\u9000\u51fa\u6e38\u620f"
      }
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "ddzInit", "ddzCard", "ddzCardLayer", "ddzCradOutLayer", "ddzLogic", "ddzLayer", "ddz_zh", "ddzHead", "ddzHeadLayer", "ddzCallBtn", "ddzDouble", "ddzOperating", "ddzOtherLayer", "ddzRememberCard", "cmd_game_ddz", "ddzSettlemetItem", "ddzSettlemetLayer", "ddzTipLayer" ]);