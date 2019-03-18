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
  1: [ function(require, module, exports) {
    module.exports = {
      O_RDONLY: 0,
      O_WRONLY: 1,
      O_RDWR: 2,
      S_IFMT: 61440,
      S_IFREG: 32768,
      S_IFDIR: 16384,
      S_IFCHR: 8192,
      S_IFBLK: 24576,
      S_IFIFO: 4096,
      S_IFLNK: 40960,
      S_IFSOCK: 49152,
      O_CREAT: 512,
      O_EXCL: 2048,
      O_NOCTTY: 131072,
      O_TRUNC: 1024,
      O_APPEND: 8,
      O_DIRECTORY: 1048576,
      O_NOFOLLOW: 256,
      O_SYNC: 128,
      O_SYMLINK: 2097152,
      O_NONBLOCK: 4,
      S_IRWXU: 448,
      S_IRUSR: 256,
      S_IWUSR: 128,
      S_IXUSR: 64,
      S_IRWXG: 56,
      S_IRGRP: 32,
      S_IWGRP: 16,
      S_IXGRP: 8,
      S_IRWXO: 7,
      S_IROTH: 4,
      S_IWOTH: 2,
      S_IXOTH: 1,
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 48,
      EADDRNOTAVAIL: 49,
      EAFNOSUPPORT: 47,
      EAGAIN: 35,
      EALREADY: 37,
      EBADF: 9,
      EBADMSG: 94,
      EBUSY: 16,
      ECANCELED: 89,
      ECHILD: 10,
      ECONNABORTED: 53,
      ECONNREFUSED: 61,
      ECONNRESET: 54,
      EDEADLK: 11,
      EDESTADDRREQ: 39,
      EDOM: 33,
      EDQUOT: 69,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 65,
      EIDRM: 90,
      EILSEQ: 92,
      EINPROGRESS: 36,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 56,
      EISDIR: 21,
      ELOOP: 62,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 40,
      EMULTIHOP: 95,
      ENAMETOOLONG: 63,
      ENETDOWN: 50,
      ENETRESET: 52,
      ENETUNREACH: 51,
      ENFILE: 23,
      ENOBUFS: 55,
      ENODATA: 96,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 77,
      ENOLINK: 97,
      ENOMEM: 12,
      ENOMSG: 91,
      ENOPROTOOPT: 42,
      ENOSPC: 28,
      ENOSR: 98,
      ENOSTR: 99,
      ENOSYS: 78,
      ENOTCONN: 57,
      ENOTDIR: 20,
      ENOTEMPTY: 66,
      ENOTSOCK: 38,
      ENOTSUP: 45,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 102,
      EOVERFLOW: 84,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 100,
      EPROTONOSUPPORT: 43,
      EPROTOTYPE: 41,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ESTALE: 70,
      ETIME: 101,
      ETIMEDOUT: 60,
      ETXTBSY: 26,
      EWOULDBLOCK: 35,
      EXDEV: 18,
      SIGHUP: 1,
      SIGINT: 2,
      SIGQUIT: 3,
      SIGILL: 4,
      SIGTRAP: 5,
      SIGABRT: 6,
      SIGIOT: 6,
      SIGBUS: 10,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGUSR1: 30,
      SIGSEGV: 11,
      SIGUSR2: 31,
      SIGPIPE: 13,
      SIGALRM: 14,
      SIGTERM: 15,
      SIGCHLD: 20,
      SIGCONT: 19,
      SIGSTOP: 17,
      SIGTSTP: 18,
      SIGTTIN: 21,
      SIGTTOU: 22,
      SIGURG: 16,
      SIGXCPU: 24,
      SIGXFSZ: 25,
      SIGVTALRM: 26,
      SIGPROF: 27,
      SIGWINCH: 28,
      SIGIO: 23,
      SIGSYS: 12,
      SSL_OP_ALL: 2147486719,
      SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
      SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
      SSL_OP_CISCO_ANYCONNECT: 32768,
      SSL_OP_COOKIE_EXCHANGE: 8192,
      SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
      SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
      SSL_OP_EPHEMERAL_RSA: 0,
      SSL_OP_LEGACY_SERVER_CONNECT: 4,
      SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 32,
      SSL_OP_MICROSOFT_SESS_ID_BUG: 1,
      SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
      SSL_OP_NETSCAPE_CA_DN_BUG: 536870912,
      SSL_OP_NETSCAPE_CHALLENGE_BUG: 2,
      SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 1073741824,
      SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 8,
      SSL_OP_NO_COMPRESSION: 131072,
      SSL_OP_NO_QUERY_MTU: 4096,
      SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
      SSL_OP_NO_SSLv2: 16777216,
      SSL_OP_NO_SSLv3: 33554432,
      SSL_OP_NO_TICKET: 16384,
      SSL_OP_NO_TLSv1: 67108864,
      SSL_OP_NO_TLSv1_1: 268435456,
      SSL_OP_NO_TLSv1_2: 134217728,
      SSL_OP_PKCS1_CHECK_1: 0,
      SSL_OP_PKCS1_CHECK_2: 0,
      SSL_OP_SINGLE_DH_USE: 1048576,
      SSL_OP_SINGLE_ECDH_USE: 524288,
      SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 128,
      SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
      SSL_OP_TLS_BLOCK_PADDING_BUG: 512,
      SSL_OP_TLS_D5_BUG: 256,
      SSL_OP_TLS_ROLLBACK_BUG: 8388608,
      ENGINE_METHOD_DSA: 2,
      ENGINE_METHOD_DH: 4,
      ENGINE_METHOD_RAND: 8,
      ENGINE_METHOD_ECDH: 16,
      ENGINE_METHOD_ECDSA: 32,
      ENGINE_METHOD_CIPHERS: 64,
      ENGINE_METHOD_DIGESTS: 128,
      ENGINE_METHOD_STORE: 256,
      ENGINE_METHOD_PKEY_METHS: 512,
      ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
      ENGINE_METHOD_ALL: 65535,
      ENGINE_METHOD_NONE: 0,
      DH_CHECK_P_NOT_SAFE_PRIME: 2,
      DH_CHECK_P_NOT_PRIME: 1,
      DH_UNABLE_TO_CHECK_GENERATOR: 4,
      DH_NOT_SUITABLE_GENERATOR: 8,
      NPN_ENABLED: 1,
      RSA_PKCS1_PADDING: 1,
      RSA_SSLV23_PADDING: 2,
      RSA_NO_PADDING: 3,
      RSA_PKCS1_OAEP_PADDING: 4,
      RSA_X931_PADDING: 5,
      RSA_PKCS1_PSS_PADDING: 6,
      POINT_CONVERSION_COMPRESSED: 2,
      POINT_CONVERSION_UNCOMPRESSED: 4,
      POINT_CONVERSION_HYBRID: 6,
      F_OK: 0,
      R_OK: 4,
      W_OK: 2,
      X_OK: 1,
      UV_UDP_REUSEADDR: 4
    };
  }, {} ],
  DhsGameLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "584e2DLAPdPeolkAWUdyeOw", "DhsGameLayer");
    "use strict";
    var _constants = require("constants");
    cc.Class({
      extends: cc.Component,
      properties: {
        DhsMgrScript: null,
        tDiceSprite: {
          default: [],
          type: cc.SpriteFrame
        },
        tDiceSprite2: {
          default: [],
          type: cc.SpriteFrame
        },
        diceRoot0: {
          default: null,
          type: cc.Node
        },
        diceRoot1: {
          default: null,
          type: cc.Node
        },
        scoreLabel: {
          default: null,
          type: cc.Label
        },
        zhaiSprite: {
          default: null,
          type: cc.Node
        },
        pozhaiSprite: {
          default: null,
          type: cc.Node
        },
        matchLabel: {
          default: null,
          type: cc.Node
        },
        call0: {
          default: null,
          type: cc.Node
        },
        call1: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.DhsMgrScript = cc.find("DhsMgr", this.node.parent).getComponent("DhsMgr");
        this.hideAllInfo();
      },
      start: function start() {},
      setScore: function setScore(nScore) {
        this.scoreLabel.node.active = nScore > 0;
        this.scoreLabel.string = nScore.toString() + "\u5206";
      },
      setCallDice: function setCallDice(root, nCount, nPoint) {
        var label = root.getChildByName("label");
        label.getComponent(cc.Label).string = nCount.toString() + "\u4e2a";
        var sprite = root.getChildByName("sprite");
        sprite.getComponent(cc.Sprite).spriteFrame = this.tDiceSprite2[nPoint - 1];
      },
      setDiceInfo: function setDiceInfo(root, tDice) {
        root.active = true;
        for (var i = 0; i < 5; i++) {
          var dice = cc.find("dice" + i, root);
          dice.getComponent(cc.Sprite).spriteFrame = this.tDiceSprite[tDice[i] - 1];
          dice.position = cc.v2(0, 0);
          dice.runAction(cc.moveTo(.5, 150 * i - 300, 0).easing(cc.easeBounceIn()));
        }
      },
      hideAllInfo: function hideAllInfo() {
        this.setScore(0);
        this.zhaiSprite.active = false;
        this.pozhaiSprite.active = false;
        this.diceRoot0.active = false;
        this.diceRoot1.active = false;
        this.call0.active = false;
        this.call1.active = false;
      },
      onReconnect: function onReconnect(data) {
        0 == data.nGameState || 1 == data.nGameState || 2 == data.nGameState;
      },
      onStart: function onStart(data) {
        this.matchLabel.active = false;
      },
      onCallScore: function onCallScore(data) {
        this.setScore(data.nScore);
        this.setDiceInfo(this.diceRoot0, data.tDice);
      },
      onCallDice: function onCallDice(data) {
        this.call0.active = data.isSelfCall;
        this.call1.active = !data.isSelfCall;
        this.setCallDice(data.isSelfCall ? this.call0 : this.call1, data.nCount, data.nPoint);
        if (this.zhaiSprite.active) {
          if (!data.isCut) {
            this.zhaiSprite.active = false;
            this.pozhaiSprite.active = true;
          }
        } else this.zhaiSprite.active = data.isCut;
      },
      onResult: function onResult(data) {
        this.call0.active = false;
        this.call1.active = false;
        this.setDiceInfo(this.diceRoot1, data.tDice);
      }
    });
    cc._RF.pop();
  }, {
    constants: 1
  } ],
  DhsMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5df3eo1goRKQJrP04Gmst0Q", "DhsMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        DhsGameLayerScript: null,
        DhsOperLayerScript: null,
        DhsUserLayerScript: null,
        nUserID: 0,
        tUserInfo: null
      },
      onLoad: function onLoad() {
        if (null == cc.ak) {
          cc.ak = {};
          cc.ak.mc = {};
          cc.ak.mc.userMgr = {};
          cc.ak.event = {};
          cc.ak.event.on = function() {};
          cc.ak.util = {};
          cc.ak.util.socketMgr = {};
          cc.ak.util.socketMgr.send = function() {};
          this.tUserInfo = {};
          this.tUserInfo.nChairID = 0;
          this.tUserInfo.strNickname = "";
          this.tUserInfo.nMoney = 0;
        }
        this.nUserID = cc.ak.mc.userMgr.uid;
        this.DhsGameLayerScript = this.node.parent.getChildByName("DhsGameLayer").getComponent("DhsGameLayer");
        this.DhsOperLayerScript = this.node.parent.getChildByName("DhsOperLayer").getComponent("DhsOperLayer");
        this.DhsUserLayerScript = this.node.parent.getChildByName("DhsUserLayer").getComponent("DhsUserLayer");
        this.registerMsg("SUB_S_USERINFO_PUSH", "S_UserInfo", "onUserInfo");
        this.registerMsg("SUB_S_GAME_SCENE", "S_GameScene", "onReconnect");
        this.registerMsg("SUB_S_GAMESTART", "S_GameStart", "onStart");
        this.registerMsg("SUB_S_CALL_SCORE", "S_CallScore", "onCallScore");
        this.registerMsg("SUB_S_CALL_DICE", "S_CallDice", "onCallDice");
        this.registerMsg("SUB_S_OPEN_STATE", "S_OpenState", "onOpenState");
        this.registerMsg("SUB_S_OPEN_RESULT", "S_OpenResult", "onResult");
        this.registerMsg("SUB_S_LEAVE_GAME_RESULT", "S_LeaveGameResult", "onLeave");
        this.sendMsg("SUB_C_ENTER_FINISH");
      },
      start: function start() {},
      registerMsg: function registerMsg(strSubID, tabName, fnName) {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_dhs.SUB_CMD_GAME[strSubID], function(data) {
          cc.log("dhs " + fnName);
          var info = new proto.cmd_game_dhs[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          cc.log(info);
          var data = _this[fnName](info);
          null != _this.DhsGameLayerScript[fnName] && _this.DhsGameLayerScript[fnName](data);
          null != _this.DhsOperLayerScript[fnName] && _this.DhsOperLayerScript[fnName](data);
          null != _this.DhsUserLayerScript[fnName] && _this.DhsUserLayerScript[fnName](data);
        }, this);
      },
      onUserInfo: function onUserInfo(info) {
        if (this.nUserID == info.Uid) {
          0 == info.Status && cc.ak.ui.loadLobbyScence();
          this.tUserInfo = {};
          this.tUserInfo.nChairID = info.ChairID;
          this.tUserInfo.strNickname = info.NickName;
          this.tUserInfo.nMoney = info.AccountA + info.AccountB;
          this.tUserInfo.nBase = 0;
          this.tUserInfo.isSelfBanker = false;
        }
        var data = {};
        data.isSelf = info.Uid == this.nUserID;
        data.nChairID = info.ChairID;
        data.strNickname = info.NickName;
        data.nMoney = info.AccountA + info.AccountB;
        data.nHeadID = info.HeadImgId;
        return data;
      },
      onReconnect: function onReconnect(info) {
        this.tUserInfo.nBase = info.callScore;
        var data = {};
        data.nGameState = info.gameStage;
        data.isSelfBanker = info.bankerUser == this.tUserInfo.nChairID;
        data.isSelfOper = info.currentUser == this.tUserInfo.nChairID;
        data.nScore = info.callScore;
        data.isCut = info.cutFlag;
        data.nDiceCount = info.diceNum;
        data.nDicePoint = info.dicePoint;
        data.tDicePoint = info.selfDiceArray;
        return data;
      },
      onStart: function onStart(info) {
        this.tUserInfo.isSelfBanker = info.bankerUser == this.tUserInfo.nChairID;
        var data = {};
        data.isSelfBanker = info.bankerUser == this.tUserInfo.nChairID;
        return data;
      },
      onCallScore: function onCallScore(info) {
        var data = {};
        data.nScore = info.scoreValue;
        data.tDice = info.diceArray;
        data.isSelfBanker = this.tUserInfo.isSelfBanker;
        return data;
      },
      onCallDice: function onCallDice(info) {
        var data = {};
        data.isSelfCall = this.tUserInfo.nChairID == info.diceUser;
        data.nCount = info.diceNum;
        data.nPoint = info.dicePoint;
        data.isCut = 1 == info.cutFlag;
        data.canChangeCut = info.canChangecut;
        return data;
      },
      onOpenState: function onOpenState(info) {
        var data = {};
        data.isSelf = info.currentUser != this.tUserInfo.nChairID;
        data.nFlag = info.openFlag;
        data.nState = info.openState;
        return data;
      },
      onResult: function onResult(info) {
        this.tUserInfo.nMoney = info.userScores[this.tUserInfo.nChairID];
        var data = {};
        data.isSelf = info.openUser == this.tUserInfo.nChairID;
        data.tDice = info.diceArray;
        data.isSelfWin = info.winUser == this.tUserInfo.nChairID;
        data.nWinMoney = info.winScore;
        data.nSelfMoney = this.tUserInfo.nMoney;
        data.nOtherMoney = info.userScores[(this.tUserInfo.nChairID + 1) % 2];
        data.nFlag = info.openFlag;
        data.tDice = [];
        var nStart = 0 == this.tUserInfo.nChairID ? 5 : 0;
        for (var i = 0; i < 5; i++) data.tDice.push(info.diceArray[nStart + i]);
        return data;
      },
      onLeave: function onLeave(info) {
        info.userId == cc.ak.mc.userMgr.uid && cc.ak.ui.loadLobbyScence();
      },
      sendMsg: function sendMsg(strMsgID, data) {
        cc.log(data);
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_dhs.SUB_CMD_GAME[strMsgID], data);
        return true;
      },
      sendReady: function sendReady() {
        this.sendMsg("SUB_C_READY");
      },
      sendCallScore: function sendCallScore(nScore) {
        var data = new proto.cmd_game_dhs.C_CallScore();
        data.scoreValue = nScore;
        this.sendMsg("SUB_C_CALL_SCORE", data);
      },
      sendCallDice: function sendCallDice(nCount, nPoint, isCut) {
        var data = new proto.cmd_game_dhs.C_CallDice();
        data.diceNum = nCount;
        data.dicePoint = nPoint;
        data.cutFlag = isCut ? 1 : 0;
        this.sendMsg("SUB_C_CALL_DICE", data);
      },
      requestResult: function requestResult(nFlag) {
        var data = new proto.cmd_game_dhs.C_OpenResult();
        data.openFlag = nFlag;
        this.sendMsg("SUB_C_OPEN_RESULT", data);
      },
      sendExitGame: function sendExitGame() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendChangeDesk: function sendChangeDesk() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_SIT_DOWN;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      }
    });
    cc._RF.pop();
  }, {} ],
  DhsOperLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32e9a6CxsxGP7O/gnjLWe/2", "DhsOperLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        DhsMgrScript: null,
        DhsGameLayerScirpt: null,
        DhsUserLayerScript: null,
        shopPrefab: cc.Prefab,
        diceButtonRoot: {
          default: null,
          type: cc.Node
        },
        diceCountRoot: {
          default: null,
          type: cc.Node
        },
        scoreRoot: {
          default: null,
          type: cc.Node
        },
        openRoot: {
          default: null,
          type: cc.Node
        },
        zhaiRoot: {
          default: null,
          type: cc.Node
        },
        readyBtn: {
          default: null,
          type: cc.Node
        },
        tOper: null
      },
      onLoad: function onLoad() {
        this.DhsMgrScript = cc.find("DhsMgr", this.node.parent).getComponent("DhsMgr");
        this.DhsGameLayerScirpt = cc.find("DhsGameLayer", this.node.parent).getComponent("DhsGameLayer");
        this.DhsUserLayerScript = cc.find("DhsUserLayer", this.node.parent).getComponent("DhsUserLayer");
        this.openRoot.y = 0;
        this.scoreRoot.y = 0;
        this.zhaiRoot.y = 0;
        this.zhaiRoot.getChildByName("z").active = false;
        this.zhaiRoot.getChildByName("p").active = false;
        this.tOper = {};
        this.tOper.nSelPoint = 0;
        this.tOper.nSelCount = 0;
        this.tOper.nLastCount = 0;
        this.tOper.nLastPoint = 0;
        this.tOper.isCut = false;
        this.tOper.canChangeCut = false;
        cc.find("backBtn", this.node).on("click", this.onBackBtn, this);
        cc.find("listBtn", this.node).on("click", this.onListBtn, this);
        cc.find("rechargeBtn", this.node).on("click", this.onRechargeBtn, this);
        cc.find("listBtn/menu/settingBtn", this.node).on("click", this.onSettingBtn, this);
        cc.find("listBtn/menu/ruleBtn", this.node).on("click", this.onRuleBtn, this);
        cc.find("DhsRulePanel/closeBtn", this.node).on("click", this.onRuleClose, this);
        cc.find("z/zhaiBtn", this.zhaiRoot).on("click", this.onZhaiBtn, this);
        cc.find("z/buzhaiBtn", this.zhaiRoot).on("click", this.onZhaiBtn, this);
        cc.find("p/pozhaiBtn", this.zhaiRoot).on("click", this.onZhaiBtn, this);
        cc.find("p/bupozhaiBtn", this.zhaiRoot).on("click", this.onZhaiBtn, this);
        this.readyBtn.on("click", this.onReadyBtn, this);
        this.readyBtn.active = false;
        for (var i = 0; i < 6; i++) {
          var btn = this.openRoot.getChildByName(i.toString());
          btn.on("click", this.onOpenBtn, this);
        }
        var children = this.scoreRoot.children;
        for (var i = 0; i < children.length; i++) children[i].on("click", this.onCallScoreBtn, this);
        for (var i = 0; i < 6; i++) cc.find(i.toString(), this.diceButtonRoot).on("click", this.onDiceBtn, this);
        for (var i = 2; i < 11; i++) {
          var countBtn = this.diceCountRoot.getChildByName(i.toString());
          countBtn.on("click", this.onCountBtn, this);
        }
        this.hideAllOperation();
      },
      start: function start() {},
      onBackBtn: function onBackBtn() {
        this.DhsMgrScript.sendExitGame();
      },
      onRechargeBtn: function onRechargeBtn() {
        var shop = cc.instantiate(this.shopPrefab);
        shop.parent = this.node.parent;
      },
      onListBtn: function onListBtn(event) {
        var menu = event.node.getChildByName("menu");
        menu.active = !menu.active;
      },
      onSettingBtn: function onSettingBtn() {
        this.node.getChildByName("DhsSettingPanel").active = true;
        cc.find("listBtn/menu", this.node).active = false;
      },
      onRuleBtn: function onRuleBtn() {
        this.node.getChildByName("DhsRulePanel").active = true;
        cc.find("listBtn/menu", this.node).active = false;
      },
      onRuleClose: function onRuleClose(event) {
        event.node.parent.active = false;
      },
      onReadyBtn: function onReadyBtn() {
        this.hideAllOperation();
        this.DhsGameLayerScirpt.hideAllInfo();
        this.DhsGameLayerScirpt.matchLabel.active = true;
        this.DhsUserLayerScript.hideBankerTag();
        this.DhsMgrScript.sendChangeDesk();
      },
      onZhaiBtn: function onZhaiBtn(event) {
        var strName = event.node.name;
        var isCut = false;
        "zhaiBtn" == strName && (isCut = true);
        "buzhaiBtn" == strName && (isCut = false);
        "pozhaiBtn" == strName && (isCut = false);
        "bupozhaiBtn" == strName && (isCut = true);
        this.zhaiRoot.getChildByName("z").active = false;
        this.zhaiRoot.getChildByName("p").active = false;
        this.DhsMgrScript.sendCallDice(this.tOper.nSelCount, this.tOper.nSelPoint, isCut);
      },
      onOpenBtn: function onOpenBtn(event) {
        var nFlag = parseInt(event.node.name);
        this.DhsMgrScript.requestResult(nFlag);
        this.openRoot.active = false;
      },
      onCallScoreBtn: function onCallScoreBtn(event) {
        var nScore = parseInt(event.node.name);
        this.DhsMgrScript.sendCallScore(nScore);
      },
      onDiceBtn: function onDiceBtn(event) {
        this.diceCountRoot.active = true;
        var nIndex = parseInt(event.node.name);
        this.tOper.nSelPoint = nIndex + 1;
        this.diceCountRoot.x = 100 * nIndex - 640;
        for (var i = 2; i < 11; i++) {
          var btn = this.diceCountRoot.getChildByName(i.toString());
          btn.active = i >= this.tOper.nLastCount;
        }
        if (0 == this.tOper.nLastCount) this.diceCountRoot.getChildByName("3").active = false; else {
          1 == this.tOper.nLastPoint && (this.diceCountRoot.getChildByName(this.tOper.nLastCount.toString()).active = false);
          this.tOper.nSelPoint <= this.tOper.nLastPoint && (this.diceCountRoot.getChildByName(this.tOper.nLastCount.toString()).active = false);
        }
      },
      onCountBtn: function onCountBtn(event) {
        var nCount = parseInt(event.node.name);
        this.tOper.nSelCount = nCount;
        this.diceCountRoot.active = false;
        this.diceButtonRoot.active = false;
        this.openRoot.active = false;
        if (0 == this.tOper.nLastCount) {
          if (2 == nCount || 4 == nCount && 1 == this.tOper.nSelPoint) return this.DhsMgrScript.sendCallDice(nCount, this.tOper.nSelPoint, true);
          this.zhaiRoot.getChildByName("z").active = true;
          this.zhaiRoot.getChildByName("p").active = false;
        } else {
          if (!this.tOper.canChangeCut) return this.DhsMgrScript.sendCallDice(nCount, this.tOper.nSelPoint, this.tOper.isCut);
          if (this.tOper.isCut) {
            if (nCount != 2 * this.tOper.nLastCount) return this.DhsMgrScript.sendCallDice(nCount, this.tOper.nSelPoint, this.tOper.isCut);
            this.zhaiRoot.getChildByName("z").active = false;
            this.zhaiRoot.getChildByName("p").active = true;
          } else {
            this.zhaiRoot.getChildByName("z").active = true;
            this.zhaiRoot.getChildByName("p").active = false;
          }
        }
      },
      hideAllOperation: function hideAllOperation() {
        this.diceButtonRoot.active = false;
        this.diceCountRoot.active = false;
        this.scoreRoot.active = false;
        this.openRoot.active = false;
        this.readyBtn.active = false;
      },
      showDiceButton: function showDiceButton() {
        this.diceButtonRoot.active = true;
        this.diceCountRoot.active = false;
        0 != this.tOper.nLastCount && this.showOpenButton([ 0, 1, 5 ]);
      },
      showOpenButton: function showOpenButton(tID) {
        this.openRoot.active = true;
        for (var i = 0; i < 6; i++) this.openRoot.getChildByName(i.toString()).active = false;
        var nStartX = 150 * -(tID.length - 1);
        for (var i = 0; i < tID.length; i++) {
          var btn = this.openRoot.getChildByName(tID[i].toString());
          btn.x = nStartX + 300 * i;
          btn.active = true;
        }
      },
      onReconnect: function onReconnect(data) {
        0 == data.nGameState || 1 == data.nGameState || 2 == data.nGameState;
      },
      onStart: function onStart(data) {
        this.scoreRoot.active = data.isSelfBanker;
      },
      onCallScore: function onCallScore(data) {
        this.tOper.isCut = false;
        this.tOper.canChangeCut = true;
        this.scoreRoot.active = false;
        if (data.isSelfBanker) {
          this.tOper.nLastCount = 0;
          this.tOper.nLastPoint = 0;
          this.showDiceButton();
        }
      },
      onCallDice: function onCallDice(data) {
        this.zhaiRoot.getChildByName("z").active = false;
        this.zhaiRoot.getChildByName("p").active = false;
        this.tOper.isCut = data.isCut;
        this.tOper.canChangeCut = data.canChangeCut;
        this.tOper.nLastCount = data.nCount;
        this.tOper.nLastPoint = data.nPoint;
        if (data.isSelfCall) this.diceButtonRoot.active = false; else {
          this.showDiceButton();
          this.showOpenButton([ 0, 1 ]);
        }
      },
      onOpenState: function onOpenState(data) {
        this.diceButtonRoot.active = false;
        if (data.isSelf) this.openRoot.active = false; else {
          1 == data.nFlag && this.showOpenButton([ 2, 3, 5 ]);
          2 == data.nFlag && this.showOpenButton([ 3, 4, 5 ]);
        }
      },
      onResult: function onResult(data) {
        this.readyBtn.active = true;
        this.diceButtonRoot.active = false;
        this.openRoot.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  DhsSettingPannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e6f8yTRwpPibi4Mb/1uUPF", "DhsSettingPannel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        musicSlider: {
          default: null,
          type: cc.Slider
        },
        effectSlider: {
          default: null,
          type: cc.Slider
        }
      },
      onLoad: function onLoad() {
        cc.find("bgSprite/closeBtn", this.node).on("click", this.onCloseBtn, this);
        cc.find("bgSprite/musicSlider", this.node).on("slide", this.onMusicSlide, this);
        cc.find("bgSprite/effectSlider", this.node).on("slide", this.onEffectSlide, this);
        if (null == cc.ak || null == cc.ak.util.audioMgr) {
          this.setProgress(this.musicSlider, 1);
          this.setProgress(this.effectSlider, 1);
          this.musicSlider.progress = 1;
          this.effectSlider.progress = 1;
        } else {
          this.setProgress(this.musicSlider, cc.ak.util.audioMgr.getBGMVolume());
          this.setProgress(this.effectSlider, cc.ak.util.audioMgr.getSFXVolume());
          this.musicSlider.progress = cc.ak.util.audioMgr.getBGMVolume();
          this.effectSlider.progress = cc.ak.util.audioMgr.getSFXVolume();
        }
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        this.node.active = false;
      },
      onMusicSlide: function onMusicSlide(event) {
        this.setProgress(this.musicSlider, event.progress);
        cc.ak.util.audioMgr.setBGMVolume(event.progress);
      },
      onEffectSlide: function onEffectSlide(event) {
        this.setProgress(this.effectSlider, event.progress);
        cc.ak.util.audioMgr.setSFXVolume(event.progress);
      },
      setProgress: function setProgress(slider, nProgress) {
        slider.node.getChildByName("progress").width = 800 * nProgress;
      }
    });
    cc._RF.pop();
  }, {} ],
  DhsUserLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac93cieJ+NGWKPyll2mCaZ+", "DhsUserLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        user0: {
          default: null,
          type: cc.Node
        },
        user1: {
          default: null,
          type: cc.Node
        },
        nTimeLeft0: 0,
        nTimeLeft1: 0
      },
      onLoad: function onLoad() {
        this.user1.active = false;
        this.hideBankerTag();
        null != cc.ak && null != cc.ak.mc && null != cc.ak.mc.userMgr && this.setUserInfo(this.user0, cc.ak.mc.userMgr.nick, cc.ak.mc.userMgr.coin_bean, cc.ak.mc.userMgr.headID);
      },
      start: function start() {},
      update: function update(dt) {
        this.nTimeLeft0 -= dt;
        this.nTimeLeft1 -= dt;
        this.countDown(this.user0, this.nTimeLeft0);
        this.countDown(this.user1, this.nTimeLeft1);
      },
      setUserInfo: function setUserInfo(root, strNickname, nMoney, nHeadID) {
        var label = cc.find("nicknameLabel", root).getComponent(cc.Label);
        label.string = strNickname;
        var avatarScript = cc.find("avatar", root).getComponent("headAnthologyItem");
        avatarScript.setAvatar(nHeadID);
        this.setMoney(root, nMoney);
      },
      setMoney: function setMoney(root, nMoney) {
        var label = cc.find("moneyLabel", root).getComponent(cc.Label);
        nMoney = Math.floor(nMoney / 10);
        label.string = (nMoney / 100).toString();
      },
      setBankerTag: function setBankerTag(root, isBanker) {
        root.getChildByName("bankerTag").active = isBanker;
      },
      hideBankerTag: function hideBankerTag() {
        this.setBankerTag(this.user0, false);
        this.setBankerTag(this.user1, false);
      },
      countDown: function countDown(root, nTime) {
        nTime < 0 && (nTime = 0);
        var progress = cc.find("progress", root).getComponent(cc.ProgressBar);
        progress.progress = nTime / 10;
      },
      startTimer: function startTimer(isSelf) {
        if (isSelf) {
          this.nTimeLeft0 = 10;
          this.nTimeLeft1 = 0;
        } else {
          this.nTimeLeft0 = 0;
          this.nTimeLeft1 = 10;
        }
      },
      resultAnimation: function resultAnimation(root, nMoney) {
        nMoney = Math.floor(nMoney / 10);
        var node = new cc.Node();
        node.parent = root;
        node.runAction(cc.sequence(cc.moveBy(2, cc.v2(0, 100)), cc.removeSelf()));
        var label = node.addComponent(cc.Label);
        label.string = (nMoney / 100).toString();
      },
      onUserInfo: function onUserInfo(data) {
        if (data.isSelf) {
          this.user0.active = true;
          this.setUserInfo(this.user0, data.strNickname, data.nMoney, data.nHeadID);
        } else {
          this.user1.active = true;
          this.setUserInfo(this.user1, data.strNickname, data.nMoney, data.nHeadID);
        }
      },
      onReconnect: function onReconnect(data) {
        if (0 == data.nGameState) ; else {
          this.setBankerTag(this.user0, data.isSelfBanker);
          this.setBankerTag(this.user1, !data.isSelfBanker);
        }
      },
      onReady: function onReady(data) {},
      onStart: function onStart(data) {
        this.startTimer(data.isSelfBanker);
        this.setBankerTag(this.user0, data.isSelfBanker);
        this.setBankerTag(this.user1, !data.isSelfBanker);
      },
      onCallDice: function onCallDice(data) {
        this.startTimer(!data.isSelfCall);
      },
      onResult: function onResult(data) {
        this.nTimeLeft0 = 0;
        this.nTimeLeft1 = 0;
        this.setMoney(this.user0, data.nSelfMoney);
        this.setMoney(this.user1, data.nOtherMoney);
        if (data.isSelfWin) {
          this.resultAnimation(this.user0, data.nWinMoney);
          this.resultAnimation(this.user1, -data.nWinMoney);
        } else {
          this.resultAnimation(this.user0, -data.nWinMoney);
          this.resultAnimation(this.user1, data.nWinMoney);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  cmd_game_dhs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ec017yJV5DXLjPqO5cq6Sk", "cmd_game_dhs");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_dhs = {};
    proto.cmd_game_dhs.__cfg = {};
    (function(cfg) {
      cfg.S_UserInfo = {
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
      cfg.S_GameScene = {
        1: {
          na: "cellScore",
          ty: "int"
        },
        2: {
          na: "gameStage",
          ty: "int"
        },
        3: {
          na: "bankerUser",
          ty: "int"
        },
        4: {
          na: "currentUser",
          ty: "int"
        },
        5: {
          na: "callScore",
          ty: "int"
        },
        6: {
          na: "cutFlag",
          ty: "int"
        },
        7: {
          na: "canChangecut",
          ty: "int"
        },
        8: {
          na: "diceNum",
          ty: "int"
        },
        9: {
          na: "dicePoint",
          ty: "int"
        },
        10: {
          na: "selfDiceArray",
          ty: "int",
          ar: 1
        }
      };
      cfg.S_GameStart = {
        1: {
          na: "bankerUser",
          ty: "int"
        }
      };
      cfg.S_CallScore = {
        1: {
          na: "scoreValue",
          ty: "int"
        },
        2: {
          na: "diceArray",
          ty: "int",
          ar: 1
        }
      };
      cfg.S_CallDice = {
        1: {
          na: "diceUser",
          ty: "int"
        },
        2: {
          na: "diceNum",
          ty: "int"
        },
        3: {
          na: "dicePoint",
          ty: "int"
        },
        4: {
          na: "cutFlag",
          ty: "int"
        },
        5: {
          na: "canChangecut",
          ty: "int"
        }
      };
      cfg.S_OpenState = {
        1: {
          na: "openFlag",
          ty: "int"
        },
        2: {
          na: "openState",
          ty: "int"
        },
        3: {
          na: "currentUser",
          ty: "int"
        }
      };
      cfg.S_OpenResult = {
        1: {
          na: "openUser",
          ty: "int"
        },
        2: {
          na: "diceArray",
          ty: "int",
          ar: 1
        },
        3: {
          na: "winUser",
          ty: "int"
        },
        4: {
          na: "winScore",
          ty: "int"
        },
        5: {
          na: "openFlag",
          ty: "int"
        },
        6: {
          na: "userScores",
          ty: "int",
          ar: 1
        }
      };
      cfg.S_LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.C_CallScore = {
        1: {
          na: "scoreValue",
          ty: "int"
        }
      };
      cfg.C_CallDice = {
        1: {
          na: "diceNum",
          ty: "int"
        },
        2: {
          na: "dicePoint",
          ty: "int"
        },
        3: {
          na: "cutFlag",
          ty: "int"
        }
      };
      cfg.C_OpenResult = {
        1: {
          na: "openFlag",
          ty: "int"
        }
      };
    })(proto.cmd_game_dhs.__cfg);
    proto.cmd_game_dhs.S_UserInfo = function() {
      this.__className = "proto.cmd_game_dhs.S_UserInfo";
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
    proto.cmd_game_dhs.S_GameScene = function() {
      this.__className = "proto.cmd_game_dhs.S_GameScene";
      this.cellScore = 0;
      this.gameStage = 0;
      this.bankerUser = 0;
      this.currentUser = 0;
      this.callScore = 0;
      this.cutFlag = 0;
      this.canChangecut = 0;
      this.diceNum = 0;
      this.dicePoint = 0;
      this.selfDiceArray = null;
    };
    proto.cmd_game_dhs.S_GameStart = function() {
      this.__className = "proto.cmd_game_dhs.S_GameStart";
      this.bankerUser = 0;
    };
    proto.cmd_game_dhs.S_CallScore = function() {
      this.__className = "proto.cmd_game_dhs.S_CallScore";
      this.scoreValue = 0;
      this.diceArray = null;
    };
    proto.cmd_game_dhs.S_CallDice = function() {
      this.__className = "proto.cmd_game_dhs.S_CallDice";
      this.diceUser = 0;
      this.diceNum = 0;
      this.dicePoint = 0;
      this.cutFlag = 0;
      this.canChangecut = 0;
    };
    proto.cmd_game_dhs.S_OpenState = function() {
      this.__className = "proto.cmd_game_dhs.S_OpenState";
      this.openFlag = 0;
      this.openState = 0;
      this.currentUser = 0;
    };
    proto.cmd_game_dhs.S_OpenResult = function() {
      this.__className = "proto.cmd_game_dhs.S_OpenResult";
      this.openUser = 0;
      this.diceArray = null;
      this.winUser = 0;
      this.winScore = 0;
      this.openFlag = 0;
      this.userScores = null;
    };
    proto.cmd_game_dhs.S_LeaveGameResult = function() {
      this.__className = "proto.cmd_game_dhs.S_LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_dhs.C_CallScore = function() {
      this.__className = "proto.cmd_game_dhs.C_CallScore";
      this.scoreValue = 0;
    };
    proto.cmd_game_dhs.C_CallDice = function() {
      this.__className = "proto.cmd_game_dhs.C_CallDice";
      this.diceNum = 0;
      this.dicePoint = 0;
      this.cutFlag = 0;
    };
    proto.cmd_game_dhs.C_OpenResult = function() {
      this.__className = "proto.cmd_game_dhs.C_OpenResult";
      this.openFlag = 0;
    };
    proto.cmd_game_dhs.SUB_CMD_GAME = {
      SUB_S_USERINFO_PUSH: 4,
      SUB_S_GAME_SCENE: 6,
      SUB_S_GAMESTART: 7,
      SUB_S_CALL_SCORE: 8,
      SUB_S_CALL_DICE: 9,
      SUB_S_OPEN_STATE: 10,
      SUB_S_OPEN_RESULT: 11,
      SUB_S_LEAVE_GAME_RESULT: 12,
      SUB_C_ENTER_FINISH: 35,
      SUB_C_CALL_SCORE: 36,
      SUB_C_CALL_DICE: 37,
      SUB_C_OPEN_RESULT: 38,
      SUB_C_LEAVE_GAME_SCENE: 39
    };
    cc._RF.pop();
  }, {} ],
  dhsInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4562cFxV8pLmaDYjV/dK2WB", "dhsInit");
    "use strict";
    var DhsInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "dhs"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("dhs module init!");
        bundle.dhs = {};
        bundle.dhs.key = {};
        bundle.dhs.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initDhsData: function initDhsData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.dhs.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.dhs.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.dhs.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.dhs.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + DhsInit.id, function(data) {
          bundle.dhs.data.set(bundle.dhs.key.data.ENTER_ROOM_SUCC, data);
          "dhsGame" != cc.director.getScene().name && cc.ak.ui.loadScenceWithPreload("dhsGame");
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + DhsInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== DhsInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = DhsInit;
    cc._RF.pop();
  }, {} ]
}, {}, [ "dhsInit", "DhsGameLayer", "DhsMgr", "DhsOperLayer", "DhsSettingPannel", "DhsUserLayer", "cmd_game_dhs" ]);