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
  LhjBoxLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3274VJ1qlJd4DuDFAIYerK", "LhjBoxLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        LhjMgrScript: null,
        LhjGameLayerScript: null,
        leftTimeLabel: {
          default: null,
          type: cc.Label
        },
        prizeLabel: {
          default: null,
          type: cc.Label
        },
        nLeftCount: 0,
        nScore: 0
      },
      onLoad: function onLoad() {
        this.LhjMgrScript = cc.find("LhjMgr", this.node.parent).getComponent("LhjMgr");
        this.LhjGameLayerScript = cc.find("LhjGameLayer", this.node.parent).getComponent("LhjGameLayer");
        for (var i = 0; i < 9; i++) {
          var box = cc.find("boxRoot/" + i, this.node);
          box.on("click", this.onBox, this);
        }
      },
      start: function start() {},
      onClose: function onClose() {
        this.node.y = 2500;
        if (this.LhjGameLayerScript.freeStart()) return;
        if (this.LhjGameLayerScript.autoStart()) return;
        this.LhjGameLayerScript.setBtnState(true);
      },
      onBox: function onBox(event) {
        var btn = event.node;
        if (false == btn.getChildByName("sp").active) {
          var nID = parseInt(btn.name);
          this.LhjMgrScript.sendOpenBox(nID);
          this.setBoxEnabled(false);
        }
      },
      open: function open(nCount) {
        this.nLeftCount = nCount;
        this.nScore = 0;
        this.node.y = 0;
        this.init();
      },
      init: function init() {
        this.leftTimeLabel.string = this.nLeftCount.toString();
        this.prizeLabel.string = 0;
        for (var i = 0; i < 9; i++) {
          var box = cc.find("boxRoot/" + i, this.node);
          box.getChildByName("sp").active = false;
        }
        this.setBoxEnabled(true);
      },
      setScore: function setScore(nScore) {
        nScore = Math.floor(nScore / 10);
        this.prizeLabel.string = (nScore / 100).toString();
      },
      setBoxEnabled: function setBoxEnabled(isEnabled) {
        for (var i = 0; i < 9; i++) {
          var box = cc.find("boxRoot/" + i, this.node);
          box.getComponent(cc.Button).interactable = isEnabled;
        }
      },
      onBoxResult: function onBoxResult(data) {
        var _this = this;
        var box = cc.find("boxRoot/" + data.nBoxID, this.node);
        box.getChildByName("sp").active = true;
        this.nScore += data.nBoxScore;
        this.setScore(this.nScore);
        this.nLeftCount = data.nLeftCount;
        this.leftTimeLabel.string = data.nLeftCount.toString();
        this.setBoxEnabled(true);
        if (null != data.tBoxScore) {
          if (data.nLeftCount > 0) {
            var seq = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
              _this.init();
            }.bind(this)));
            this.node.runAction(seq);
          } else {
            var seq = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
              _this.onClose();
            }.bind(this)));
            this.node.runAction(seq);
          }
          this.setBoxEnabled(false);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LhjGameLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "960d39ZFpFHDoaQktiEY0O+", "LhjGameLayer");
    "use strict";
    var _constants = require("constants");
    cc.Class({
      extends: cc.Component,
      properties: {
        LhjMgrScript: null,
        LhjBoxLayerScript: null,
        LhjPokerLayerScript: null,
        shopPrefab: cc.Prefab,
        tPictures: null,
        itemPrefab: [ cc.Prefab ],
        LhjSettingPanel: {
          default: null,
          type: cc.Node
        },
        LhjHelpPannel: {
          default: null,
          type: cc.Node
        },
        moneyLabel: {
          default: null,
          type: cc.Label
        },
        freeTime: {
          default: null,
          type: cc.Label
        },
        centerMask: {
          default: null,
          type: cc.Node
        },
        lines: {
          default: null,
          type: cc.Node
        },
        startBtn: {
          default: null,
          type: cc.Node
        },
        autoBtn: {
          default: null,
          type: cc.Node
        },
        doubleBtn: {
          default: null,
          type: cc.Node
        },
        nSpeed: 0,
        nPicHeight: 0,
        tParam: null,
        lineCount: {
          default: null,
          type: cc.Label
        },
        chipCount: {
          default: null,
          type: cc.Label
        },
        totalBet: {
          default: null,
          type: cc.Label
        },
        winCount: {
          default: null,
          type: cc.Label
        },
        tBlink: null
      },
      onLoad: function onLoad() {
        this.nPicHeight = 200;
        this.tPictures = [];
        for (var i = 0; i < 5; i++) this.tPictures[i] = [];
        this.randPicture(3);
        this.LhjMgrScript = cc.find("LhjMgr", this.node.parent).getComponent("LhjMgr");
        this.LhjBoxLayerScript = cc.find("LhjBoxLayer", this.node.parent).getComponent("LhjBoxLayer");
        this.LhjPokerLayerScript = cc.find("LhjPokerLayer", this.node.parent).getComponent("LhjPokerLayer");
        this.startBtn.on("click", this.onStartBtn, this);
        this.autoBtn.on("click", this.onAutoBtn, this);
        this.doubleBtn.on("click", this.onDoubleBtn, this);
        cc.find("buttons/backBtn", this.node).on("click", this.onBackBtn, this);
        cc.find("buttons/settingBtn", this.node).on("click", this.onSettingBtn, this);
        cc.find("buttons/helpBtn", this.node).on("click", this.onHelpBtn, this);
        cc.find("buttons/rechargeBtn", this.node).on("click", this.onRechargeBtn, this);
        cc.find("info/linebg/minusLineBtn", this.node).on("click", this.onMinusLine, this);
        cc.find("info/linebg/addLineBtn", this.node).on("click", this.onAddLine, this);
        cc.find("info/chipbg/minusScoreBtn", this.node).on("click", this.onMinusScore, this);
        cc.find("info/chipbg/addScoreBtn", this.node).on("click", this.onAddScore, this);
        cc.find("info/totalbg/maxBetBtn", this.node).on("click", this.onMaxBet, this);
        this.cleanBlink();
        this.setFreeTime(0);
        this.setPrizeDoubleState(false);
      },
      start: function start() {},
      update: function update(dt) {},
      onBackBtn: function onBackBtn() {
        this.LhjMgrScript.sendExitGame();
      },
      onSettingBtn: function onSettingBtn() {
        this.LhjSettingPanel.active = true;
      },
      onHelpBtn: function onHelpBtn() {
        this.LhjHelpPannel.active = true;
      },
      onAddLine: function onAddLine() {
        this.LhjMgrScript.sendChangeLine(1);
      },
      onMinusLine: function onMinusLine() {
        this.LhjMgrScript.sendChangeLine(-1);
      },
      onAddScore: function onAddScore() {
        this.LhjMgrScript.sendChangeRate(1);
      },
      onMinusScore: function onMinusScore() {
        this.LhjMgrScript.sendChangeRate(-1);
      },
      onMaxBet: function onMaxBet() {
        this.LhjMgrScript.sendMaxBet();
      },
      onRechargeBtn: function onRechargeBtn() {
        var shop = cc.instantiate(this.shopPrefab);
        shop.parent = this.node.parent;
      },
      onStartBtn: function onStartBtn() {
        if (this.LhjMgrScript.isEnoughMoney()) {
          this.starGame();
          var nTotal = this.LhjMgrScript.tUserInfo.nLineCount * this.LhjMgrScript.tUserInfo.nBase * this.LhjMgrScript.tUserInfo.nRate;
          var nMoney = this.LhjMgrScript.tUserInfo.nMoney - nTotal;
          this.setMoney(nMoney, this.moneyLabel);
          return true;
        }
        cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff01");
        return false;
      },
      freeStart: function freeStart() {
        if (this.tBlink.nLeftFreeTimes > 0) {
          this.setFreeTime(this.tBlink.nLeftFreeTimes - 1);
          this.starGame();
          return true;
        }
        return false;
      },
      starGame: function starGame() {
        this.setBtnState(false);
        this.setPrizeDoubleState(false);
        this.cleanBlink();
        this.startScroll();
        this.setMoney(0, this.winCount);
        this.LhjMgrScript.sendStartGame();
      },
      autoStart: function autoStart() {
        if (cc.find("sp", this.autoBtn).active) return this.onStartBtn();
        return false;
      },
      onAutoBtn: function onAutoBtn() {
        var sp = cc.find("sp", this.autoBtn);
        sp.active = !sp.active;
      },
      onDoubleBtn: function onDoubleBtn() {
        this.setPrizeDoubleState(false);
        this.cleanBlink();
        this.LhjPokerLayerScript.open(this.tBlink.nWinMoney);
      },
      setBtnState: function setBtnState(isEnabled) {
        var tBtns = [];
        tBtns[0] = this.startBtn;
        tBtns[1] = cc.find("info/linebg/minusLineBtn", this.node);
        tBtns[2] = cc.find("info/linebg/addLineBtn", this.node);
        tBtns[3] = cc.find("info/chipbg/minusScoreBtn", this.node);
        tBtns[4] = cc.find("info/chipbg/addScoreBtn", this.node);
        tBtns[5] = cc.find("info/totalbg/maxBetBtn", this.node);
        for (var i = 0; i < tBtns.length; i++) {
          tBtns[i].getComponent(cc.Button).interactable = isEnabled;
          tBtns[i].color = isEnabled ? cc.color(255, 255, 255) : cc.color(150, 150, 150);
        }
        cc.find("bgSprite/bgState2", this.node).active = !isEnabled;
      },
      setPrizeDoubleState: function setPrizeDoubleState(isEnabled) {
        this.doubleBtn.active = false;
      },
      performWithDelay: function performWithDelay(node, callback, nDelay) {
        var seq = cc.sequence(cc.delayTime(nDelay), cc.callFunc(callback.bind(this)));
        node.runAction(seq);
      },
      startScroll: function startScroll() {
        this.randPicture(5);
        for (var i = 0; i < 5; i++) {
          var col = cc.find("col" + i, this.centerMask);
          var children = col.children;
          for (var j = 0; j < children.length; j++) {
            children[j].getComponent("LhjItem").setScrollItem();
            children[j].stopAllActions();
          }
        }
      },
      stopScroll: function stopScroll(tResult) {
        if (null != tResult) {
          this.tParam = {};
          this.tParam.nStep = 0;
          this.tParam.tResult = tResult;
        }
        if (this.tParam.nStep < 5) {
          var t0 = this.tPictures[this.tParam.nStep];
          var t1 = this.tParam.tResult[this.tParam.nStep];
          var nStartY = t0[t0.length - 1].y + this.nPicHeight;
          for (var i = 0; i < t1.length; i++) {
            var item = cc.instantiate(this.itemPrefab[t1[i]]);
            item.getComponent("LhjItem").setResultItem(i);
            item.getComponent("LhjItem").setCol(this.tParam.nStep);
            item.position = t0[0].position;
            item.y = nStartY + i * this.nPicHeight;
            t0.push(item);
            var parent = cc.find("col" + this.tParam.nStep, this.centerMask);
            item.parent = parent;
          }
          this.performWithDelay(this.centerMask, function() {
            this.stopScroll();
          }, .5);
          this.tParam.nStep++;
        }
      },
      blinkItem: function blinkItem(nIndex) {
        var nColID = nIndex % 5;
        var nRowID = 2 - Math.floor(nIndex / 5);
        var children = cc.find("col" + nColID, this.centerMask).children;
        for (var i = 0; i < children.length; i++) if ("result" == children[i].name && children[i].getComponent("LhjItem").nResultIndex == nRowID) {
          children[i].stopAllActions();
          var seq = cc.sequence(cc.fadeOut(.17), cc.fadeIn(.17));
          children[i].runAction(cc.repeat(seq, 4));
          break;
        }
      },
      blinkLine: function blinkLine(nIndex) {
        var line = cc.find("lines/" + nIndex, this.node);
        line.stopAllActions();
        var lineSeq = cc.sequence(cc.fadeIn(.17), cc.fadeOut(.17));
        line.runAction(cc.repeat(lineSeq, 4));
      },
      blinkResult: function blinkResult(isStart) {
        if (isStart) {
          this.tBlink.nCurLine = -1;
          this.performWithDelay(this.lines, function() {
            this.blinkResult();
          }, 3);
          return;
        }
        this.setMoney(this.tBlink.nWinMoney, this.winCount);
        this.setMoney(this.tBlink.nMoney, this.moneyLabel);
        this.tBlink.hasNormal && this.setPrizeDoubleState(true);
        while (true) {
          this.tBlink.nCurLine++;
          if (this.tBlink.nCurLine > 8) {
            if (this.tBlink.hasScatter) return this.blinkScatter();
            if (this.tBlink.hasBonus) return this.blinkBounus(true);
            if (this.tBlink.nLeftFreeTimes > 0) return this.freeStart();
            if (this.autoStart()) return;
            this.setBtnState(true);
            if (!this.tBlink.hasNormal) return;
            this.tBlink.nCurLine = 0;
          }
          if (this.tBlink.tNormalID[this.tBlink.nCurLine].length > 0) break;
        }
        this.blinkLine(this.tBlink.nCurLine);
        var t = this.tBlink.tNormalID[this.tBlink.nCurLine];
        for (var i = 0; i < t.length; i++) this.blinkItem(t[i]);
        this.performWithDelay(this.lines, function() {
          this.blinkResult();
        }, 1.5);
      },
      blinkBounus: function blinkBounus(isStart) {
        isStart && (this.tBlink.nCurLine = -1);
        while (true) {
          this.tBlink.nCurLine++;
          if (this.tBlink.nCurLine > 8) {
            this.LhjBoxLayerScript.open(this.tBlink.nBoxCount);
            return;
          }
          if (this.tBlink.tBonusID[this.tBlink.nCurLine].length > 0) break;
        }
        this.blinkLine(this.tBlink.nCurLine);
        var t = this.tBlink.tBonusID[this.tBlink.nCurLine];
        for (var i = 0; i < t.length; i++) this.blinkItem(t[i]);
        this.performWithDelay(this.lines, function() {
          this.blinkBounus();
        }, 1.5);
      },
      blinkScatter: function blinkScatter() {
        var tScatterID = this.tBlink.tScatterID;
        for (var i = 0; i < tScatterID.length; i++) this.blinkItem(tScatterID[i]);
        this.performWithDelay(this.lines, function() {
          this.setFreeTime(this.tBlink.nLeftFreeTimes);
          this.tBlink.hasBonus ? this.blinkBounus() : this.freeStart();
        }, 1.5);
      },
      setFreeTime: function setFreeTime(nTimes) {
        if (nTimes <= 0) {
          this.freeTime.node.active = false;
          return;
        }
        this.freeTime.node.active = true;
        this.freeTime.string = "\u514d\u8d39\u6b21\u6570\uff1a" + nTimes;
      },
      cleanBlink: function cleanBlink() {
        for (var i = 0; i < 5; i++) {
          var children = cc.find("col" + i, this.centerMask).children;
          for (var j = 0; j < children.length; j++) {
            children[j].opacity = 255;
            children[j].stopAllActions();
          }
        }
        this.lines.stopAllActions();
        for (var i = 0; i < 9; i++) {
          var line = cc.find("lines/" + i, this.node);
          line.opacity = 0;
          line.stopAllActions();
        }
      },
      randPicture: function randPicture(nCount) {
        for (var i = 0; i < 5; i++) {
          var parent = cc.find("col" + i, this.centerMask);
          var nColLength = this.tPictures[i].length;
          if (nColLength > 10) return;
          for (var j = 0; j < nCount; j++) {
            var nType = Math.floor(12 * Math.random());
            var item = cc.instantiate(this.itemPrefab[nType]);
            item.getComponent("LhjItem").setNormalItem();
            item.getComponent("LhjItem").setCol(i);
            item.y = -this.nPicHeight + (j + nColLength) * this.nPicHeight;
            item.parent = parent;
            this.tPictures[i].push(item);
          }
        }
      },
      onDestroyItem: function onDestroyItem(nCol) {
        var arr = this.tPictures[nCol];
        arr.shift();
        for (var i = 0; i < arr.length; i++) if (arr[i].getComponent("LhjItem").isResultItem()) return;
        var lastItem = arr[arr.length - 1];
        var nType = Math.floor(12 * Math.random());
        var item = cc.instantiate(this.itemPrefab[nType]);
        item.getComponent("LhjItem").setScrollItem();
        item.getComponent("LhjItem").setCol(nCol);
        item.y = lastItem.y + this.nPicHeight;
        var parent = cc.find("col" + nCol, this.centerMask);
        item.parent = parent;
        arr.push(item);
      },
      setMoney: function setMoney(nMoney, label) {
        nMoney = Math.floor(nMoney / 10);
        label.string = (nMoney / 100).toString();
      },
      displayLines: function displayLines(nCount) {
        for (var i = 0; i < 9; i++) cc.find("lines/" + i, this.node).opacity = i < nCount ? 255 : 0;
      },
      onUserInfo: function onUserInfo(data) {
        this.setMoney(data.nMoney, this.moneyLabel);
      },
      onReconnect: function onReconnect(data) {
        this.lineCount.string = data.nLineCount.toString();
        this.setMoney(data.nChipCount, this.chipCount);
        this.setMoney(data.nTotalBet, this.totalBet);
        this.setBtnState(true);
        cc.find("sp", this.autoBtn).active = false;
      },
      onLineCount: function onLineCount(data) {
        this.cleanBlink();
        this.lineCount.string = data.nLineCount.toString();
        this.setMoney(data.nTotalBet, this.totalBet);
        this.displayLines(data.nLineCount);
      },
      onRateChange: function onRateChange(data) {
        this.setMoney(data.nChipCount, this.chipCount);
        this.setMoney(data.nTotalBet, this.totalBet);
      },
      onResult: function onResult(data) {
        this.tBlink = {};
        this.tBlink.tNormalID = data.tNormalID;
        this.tBlink.hasNormal = data.nWinMoney > 0;
        this.tBlink.tScatterID = data.tScatterID;
        this.tBlink.hasScatter = data.nAddFreeTimes > 0;
        this.tBlink.nLeftFreeTimes = data.nLeftFreeTimes;
        this.tBlink.nBoxCount = data.nBoxCount;
        this.tBlink.tBonusID = data.tBonusID;
        this.tBlink.nWinMoney = data.nWinMoney;
        this.tBlink.nMoney = data.nMoney;
        this.tBlink.hasBonus = data.nBoxCount > 0;
        this.centerMask.stopAllActions();
        this.stopScroll(data.tResult);
        this.blinkResult(true);
      },
      onDoubleResult: function onDoubleResult(data) {
        this.setMoney(data.nMoney, this.moneyLabel);
      },
      onBoxResult: function onBoxResult(data) {
        this.setMoney(data.nMoney, this.moneyLabel);
      }
    });
    cc._RF.pop();
  }, {
    constants: 1
  } ],
  LhjHelpPannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29a07WjY31CWpchDBYvguba", "LhjHelpPannel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.find("closeBtn", this.node).on("click", this.onCloseBtn, this);
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  LhjItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed756DfVfBE/a99e/yTqKIO", "LhjItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nResultIndex: 0,
        nSpeed: 0,
        nPicHeight: 0,
        nCol: 0,
        isTouchBot: false,
        nType: 0
      },
      onLoad: function onLoad() {
        this.nSpeed = 5e3;
        this.nPicHeight = 200;
      },
      start: function start() {},
      update: function update(dt) {
        var nDis = dt * this.nSpeed;
        if ("scroll" == this.node.name) {
          this.node.y -= nDis;
          if (this.node.y < 5 * -this.nPicHeight) {
            this.node.destroy();
            this.node.parent.parent.parent.getComponent("LhjGameLayer").onDestroyItem(this.nCol);
          }
        } else if ("result" == this.node.name && !this.isTouchBot) {
          this.node.y -= nDis;
          var ty = [ -this.nPicHeight - 50, -50, this.nPicHeight - 50 ];
          var tPos = [ cc.v2(0, -this.nPicHeight), cc.v2(0, 0), cc.v2(0, this.nPicHeight) ];
          if (this.node.y <= ty[this.nResultIndex]) {
            this.isTouchBot = true;
            this.node.runAction(cc.moveTo(.2, tPos[this.nResultIndex]));
          }
        }
      },
      setCol: function setCol(nCol) {
        this.nCol = nCol;
      },
      setNormalItem: function setNormalItem() {
        this.node.name = "normal";
      },
      setScrollItem: function setScrollItem() {
        this.node.name = "scroll";
      },
      setResultItem: function setResultItem(nIndex) {
        this.nResultIndex = nIndex;
        this.node.name = "result";
        this.isTouchBot = false;
      },
      isResultItem: function isResultItem() {
        return "result" == this.node.name;
      }
    });
    cc._RF.pop();
  }, {} ],
  LhjMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6925fYl8vpFMraS1D/oeYWl", "LhjMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        LhjGameLayerScript: null,
        LhjPokerLayerScript: null,
        LhjBoxLayerScript: null,
        nUserID: 0,
        tUserInfo: null,
        bgm: {
          default: null,
          type: cc.AudioClip
        }
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
          cc.ak.util.audioMgr = {};
          cc.ak.util.audioMgr.playBGM = function() {};
          this.tUserInfo = {};
          this.tUserInfo.nChairID = 0;
          this.tUserInfo.strNickname = "";
          this.tUserInfo.nMoney = 0;
          this.nUserID = cc.ak.mc.userMgr.uid;
        }
        this.LhjGameLayerScript = this.node.parent.getChildByName("LhjGameLayer").getComponent("LhjGameLayer");
        this.LhjPokerLayerScript = this.node.parent.getChildByName("LhjPokerLayer").getComponent("LhjPokerLayer");
        this.LhjBoxLayerScript = this.node.parent.getChildByName("LhjBoxLayer").getComponent("LhjBoxLayer");
        this.registerMsg("SUB_S_USERINFO_PUSH", "S_UserInfo", "onUserInfo");
        this.registerMsg("SUB_S_GAME_SCENE", "S_GameScene", "onReconnect");
        this.registerMsg("SUB_S_LINE_COUNT", "S_LineCount", "onLineCount");
        this.registerMsg("SUB_S_CHIP_KIND", "S_ChipKind", "onRateChange");
        this.registerMsg("SUB_S_START_RESULT", "S_StartResult", "onResult");
        this.registerMsg("SUB_S_REWARD_DOUBLE", "S_RewardDouble", "onDoubleResult");
        this.registerMsg("SUB_S_OPEN_BOX", "S_OpenBox", "onBoxResult");
        this.registerMsg("SUB_S_LEAVE_GAME_RESULT", "S_LeaveGameResult", "onLeave");
        this.sendMsg("SUB_C_ENTER_FINISH");
        cc.ak.util.audioMgr.playBGM(this.bgm);
      },
      onDestroy: function onDestroy() {
        cc.audioEngine.stopAll();
      },
      start: function start() {},
      registerMsg: function registerMsg(strSubID, tabName, fnName) {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_lhj.SUB_CMD_GAME[strSubID], function(data) {
          cc.log("lhj " + fnName);
          var info = new proto.cmd_game_lhj[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          var data = _this[fnName](info);
          null != _this.LhjGameLayerScript[fnName] && _this.LhjGameLayerScript[fnName](data);
          null != _this.LhjPokerLayerScript[fnName] && _this.LhjPokerLayerScript[fnName](data);
          null != _this.LhjBoxLayerScript[fnName] && _this.LhjBoxLayerScript[fnName](data);
        }, this);
      },
      isEnoughMoney: function isEnoughMoney() {
        var nMoney = this.tUserInfo.nLineCount * this.tUserInfo.nBase * this.tUserInfo.nRate;
        return nMoney <= this.tUserInfo.nMoney;
      },
      onUserInfo: function onUserInfo(info) {
        this.tUserInfo = {};
        this.tUserInfo.nChairID = info.ChairID;
        this.tUserInfo.nMoney = info.AccountA + info.AccountB;
        this.tUserInfo.nLineCount = 1;
        this.tUserInfo.nBase = 0;
        this.tUserInfo.nRate = 1;
        this.tUserInfo.nChipCount = 0;
        var data = {};
        data.isSelf = info.Uid == this.nUserID;
        data.nChairID = info.ChairID;
        data.strNickname = info.NickName;
        data.nMoney = info.AccountA + info.AccountB;
        return data;
      },
      onReconnect: function onReconnect(info) {
        this.tUserInfo.nLineCount = info.lineCount;
        this.tUserInfo.nBase = info.cellScore;
        this.tUserInfo.nRate = info.chipKind;
        var data = {};
        data.nLineCount = info.lineCount;
        data.nRate = info.chipKind;
        data.nChipCount = info.cellScore * info.chipKind;
        data.nTotalBet = info.lineCount * info.cellScore * info.chipKind;
        return data;
      },
      onLineCount: function onLineCount(info) {
        this.tUserInfo.nLineCount = info.lineCount;
        var data = {};
        data.nLineCount = info.lineCount;
        data.nTotalBet = this.tUserInfo.nLineCount * this.tUserInfo.nBase * this.tUserInfo.nRate;
        return data;
      },
      onRateChange: function onRateChange(info) {
        this.tUserInfo.nRate = info.chipKind;
        this.tUserInfo.nChipCount = this.tUserInfo.nRate * this.tUserInfo.nBase;
        var data = {};
        data.nChipCount = this.tUserInfo.nChipCount;
        data.nTotalBet = this.tUserInfo.nLineCount * this.tUserInfo.nBase * this.tUserInfo.nRate;
        return data;
      },
      onResult: function onResult(info) {
        this.tUserInfo.nMoney = info.userScore;
        var data = {};
        data.tResult = [ [], [], [], [], [] ];
        data.tScatterID = [];
        for (var i = 0; i < 15; i++) {
          data.tResult[i % 5].unshift(info.baseFruits[i]);
          10 == info.baseFruits[i] && data.tScatterID.push(i);
        }
        data.nMoney = info.userScore;
        data.nWinMoney = info.baseReward;
        data.nAddFreeTimes = info.addFreeTimes;
        data.nLeftFreeTimes = info.leftFreeTimes;
        data.nBoxCount = info.leftBoxTimes;
        var tRectID = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 0, 6, 12, 8, 4 ], [ 10, 6, 2, 8, 14 ], [ 5, 1, 2, 3, 9 ], [ 5, 11, 12, 13, 9 ], [ 0, 1, 7, 13, 14 ], [ 10, 11, 7, 3, 4 ] ];
        data.tBonusID = [];
        for (var i = 0; i < 9; i++) {
          data.tBonusID[i] = [];
          for (var j = 0; j < info.lineBoxs[i]; j++) data.tBonusID[i].push(tRectID[i][j]);
        }
        data.tNormalID = [];
        for (var i = 0; i < 9; i++) {
          data.tNormalID[i] = [];
          for (var j = 0; j < info.lineFruits[i]; j++) data.tNormalID[i].push(tRectID[i][j]);
          info.lineFruits[i] > 0 && cc.log("\u666e\u901a\u7ebf\uff1a" + (i + 1) + "  \u6570\u91cf\uff1a" + info.lineFruits[i]);
        }
        data.nAddFreeTimes > 0 && cc.log("\u4e2d\u4e86\u56db\u53f6\u8349");
        data.nBoxCount > 0 && cc.log("\u4e2d\u4e86\u5f00\u7bb1\u5b50");
        return data;
      },
      onDoubleResult: function onDoubleResult(info) {
        this.tUserInfo.nMoney = info.userScore;
        var data = {};
        data.nBaseScore = info.baseReward;
        data.nLeftTime = info.leftDoubleTimes;
        data.nMoney = info.userScore;
        data.nColor = info.resultColor;
        return data;
      },
      onBoxResult: function onBoxResult(info) {
        var data = {};
        data.nBoxID = info.boxId;
        data.nBoxScore = info.boxScore;
        data.tBoxScore = info.boxScores;
        data.nLeftCount = info.leftBoxTimes;
        data.nMoney = info.userScore;
        return data;
      },
      onLeave: function onLeave(info) {
        info.userId == cc.ak.mc.userMgr.uid && cc.ak.ui.loadLobbyScence();
      },
      sendMsg: function sendMsg(strMsgID, data) {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_lhj.SUB_CMD_GAME[strMsgID], data);
        return true;
      },
      sendExitGame: function sendExitGame() {
        this.sendMsg("SUB_C_LEAVE_GAME_SCENE");
      },
      sendChangeLine: function sendChangeLine(nCount) {
        nCount += this.tUserInfo.nLineCount;
        if (nCount < 1 || nCount > 9) return;
        var data = new proto.cmd_game_lhj.C_LineCount();
        data.lineCount = nCount;
        this.sendMsg("SUB_C_LINE_COUNT", data);
      },
      sendChangeRate: function sendChangeRate(nRate) {
        nRate += this.tUserInfo.nRate;
        if (nRate < 1 || nRate > 10) return;
        var data = new proto.cmd_game_lhj.C_ChipKind();
        data.chipKind = nRate;
        this.sendMsg("SUB_C_CHIP_KIND", data);
      },
      sendMaxBet: function sendMaxBet() {
        var data = new proto.cmd_game_lhj.C_LineCount();
        data.lineCount = 9;
        this.sendMsg("SUB_C_LINE_COUNT", data);
        var data = new proto.cmd_game_lhj.C_ChipKind();
        data.chipKind = 10;
        this.sendMsg("SUB_C_CHIP_KIND", data);
      },
      sendStartGame: function sendStartGame() {
        this.sendMsg("SUB_C_BEGIN_GAME");
      },
      sendDoublePrize: function sendDoublePrize(nType) {
        var data = new proto.cmd_game_lhj.C_RewardDouble();
        data.choiceType = nType;
        this.sendMsg("SUB_C_REWARD_DOUBLE", data);
      },
      sendOpenBox: function sendOpenBox(nID) {
        var data = new proto.cmd_game_lhj.C_OpenBox();
        data.boxId = nID;
        this.sendMsg("SUB_C_OPNE_BOX", data);
      }
    });
    cc._RF.pop();
  }, {} ],
  LhjPokerLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc46dP1NMtBs4NLPNVDRJNi", "LhjPokerLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        pokerSprite: {
          default: [],
          type: cc.SpriteFrame
        },
        LhjMgrScipt: null,
        LhjGameLayerScript: null,
        dbMoney: {
          default: null,
          type: cc.Label
        },
        ftMoney: {
          default: null,
          type: cc.Label
        },
        nBaseScore: 0,
        tPoker: null
      },
      onLoad: function onLoad() {
        this.LhjMgrScipt = cc.find("LhjMgr", this.node.parent).getComponent("LhjMgr");
        this.LhjGameLayerScript = cc.find("LhjGameLayer", this.node.parent).getComponent("LhjGameLayer");
        cc.find("buttons/closeBtn", this.node).on("click", this.onCloseBtn, this);
        cc.find("buttons/redBtn", this.node).on("click", this.onRedBtn, this);
        cc.find("buttons/blackBtn", this.node).on("click", this.onBlackBtn, this);
        cc.find("buttons/heartBtn", this.node).on("click", this.onHeartBtn, this);
        cc.find("buttons/diamondBtn", this.node).on("click", this.onDiamondBtn, this);
        cc.find("buttons/spadeBtn", this.node).on("click", this.onSpadeBtn, this);
        cc.find("buttons/clubBtn", this.node).on("click", this.onClubBtn, this);
        this.tPoker = [];
      },
      start: function start() {},
      onRedBtn: function onRedBtn() {
        this.LhjMgrScipt.sendDoublePrize(4);
      },
      onBlackBtn: function onBlackBtn() {
        this.LhjMgrScipt.sendDoublePrize(5);
      },
      onHeartBtn: function onHeartBtn() {
        this.LhjMgrScipt.sendDoublePrize(0);
      },
      onDiamondBtn: function onDiamondBtn() {
        this.LhjMgrScipt.sendDoublePrize(1);
      },
      onSpadeBtn: function onSpadeBtn() {
        this.LhjMgrScipt.sendDoublePrize(2);
      },
      onClubBtn: function onClubBtn() {
        this.LhjMgrScipt.sendDoublePrize(3);
      },
      onCloseBtn: function onCloseBtn() {
        this.node.y = 2500;
        if (this.LhjGameLayerScript.freeStart()) return;
        if (this.LhjGameLayerScript.autoStart()) return;
        this.LhjGameLayerScript.setBtnState(true);
      },
      open: function open(nBaseScore) {
        this.nBaseScore = nBaseScore;
        this.node.y = 0;
        this.init();
      },
      init: function init() {
        this.setMoney(this.dbMoney, 2 * this.nBaseScore);
        this.setMoney(this.ftMoney, 4 * this.nBaseScore);
        var nCount = this.tPoker.length - 4;
        for (var i = 0; i < nCount; i++) this.tPoker.shift().destroy();
        for (var i = 0; i < this.tPoker.length; i++) this.tPoker[i].x = 600 - 65 * i;
      },
      setMoney: function setMoney(label, nMoney) {
        nMoney = Math.floor(nMoney / 10);
        label.string = (nMoney / 100).toString();
      },
      showResult: function showResult(nColor) {
        var pokerBack = cc.find("pokerRoot/pokerBack", this.node);
        var poker = cc.instantiate(pokerBack);
        poker.getComponent(cc.Sprite).spriteFrame = this.pokerSprite[nColor];
        poker.parent = pokerBack.parent;
        var mb = cc.moveTo(1, cc.v2(600 - 65 * this.tPoker.length, pokerBack.y));
        poker.runAction(mb);
        this.tPoker.push(poker);
      },
      onDoubleResult: function onDoubleResult(data) {
        this.nBaseScore = data.nBaseScore;
        this.setMoney(this.dbMoney, 2 * this.nBaseScore);
        this.setMoney(this.ftMoney, 4 * this.nBaseScore);
        this.showResult(data.nColor);
      }
    });
    cc._RF.pop();
  }, {} ],
  LhjSettingPannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a045TMfjNE9YqprtYaD8eI", "LhjSettingPannel");
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
        if (null == cc.ak.util.audioMgr.getBGMVolume) {
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
        slider.node.getChildByName("progress").width = 734 * nProgress;
      }
    });
    cc._RF.pop();
  }, {} ],
  cmd_game_lhj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f90emzEPNNzbvWl3cxx2Fw", "cmd_game_lhj");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_lhj = {};
    proto.cmd_game_lhj.__cfg = {};
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
          na: "lineCount",
          ty: "int"
        },
        3: {
          na: "chipKind",
          ty: "int"
        }
      };
      cfg.S_LineCount = {
        1: {
          na: "lineCount",
          ty: "int"
        }
      };
      cfg.S_ChipKind = {
        1: {
          na: "chipKind",
          ty: "int"
        }
      };
      cfg.S_StartResult = {
        1: {
          na: "baseFruits",
          ty: "int",
          ar: 1
        },
        2: {
          na: "lineFruits",
          ty: "int",
          ar: 1
        },
        3: {
          na: "baseReward",
          ty: "int"
        },
        4: {
          na: "addFreeTimes",
          ty: "int"
        },
        5: {
          na: "leftFreeTimes",
          ty: "int"
        },
        6: {
          na: "lineBoxs",
          ty: "int",
          ar: 1
        },
        7: {
          na: "leftBoxTimes",
          ty: "int"
        },
        8: {
          na: "userScore",
          ty: "int"
        }
      };
      cfg.S_RewardDouble = {
        1: {
          na: "baseReward",
          ty: "int"
        },
        2: {
          na: "leftDoubleTimes",
          ty: "int"
        },
        3: {
          na: "resultColor",
          ty: "int"
        },
        4: {
          na: "userScore",
          ty: "int"
        }
      };
      cfg.S_OpenBox = {
        1: {
          na: "boxId",
          ty: "int"
        },
        2: {
          na: "boxScore",
          ty: "int"
        },
        3: {
          na: "leftBoxTimes",
          ty: "int"
        },
        4: {
          na: "boxScores",
          ty: "int",
          ar: 1
        },
        5: {
          na: "userScore",
          ty: "int"
        }
      };
      cfg.S_LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.C_LineCount = {
        1: {
          na: "lineCount",
          ty: "int"
        }
      };
      cfg.C_ChipKind = {
        1: {
          na: "chipKind",
          ty: "int"
        }
      };
      cfg.C_RewardDouble = {
        1: {
          na: "choiceType",
          ty: "int"
        }
      };
      cfg.C_OpenBox = {
        1: {
          na: "boxId",
          ty: "int"
        }
      };
    })(proto.cmd_game_lhj.__cfg);
    proto.cmd_game_lhj.S_UserInfo = function() {
      this.__className = "proto.cmd_game_lhj.S_UserInfo";
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
    proto.cmd_game_lhj.S_GameScene = function() {
      this.__className = "proto.cmd_game_lhj.S_GameScene";
      this.cellScore = 0;
      this.lineCount = 0;
      this.chipKind = 0;
    };
    proto.cmd_game_lhj.S_LineCount = function() {
      this.__className = "proto.cmd_game_lhj.S_LineCount";
      this.lineCount = 0;
    };
    proto.cmd_game_lhj.S_ChipKind = function() {
      this.__className = "proto.cmd_game_lhj.S_ChipKind";
      this.chipKind = 0;
    };
    proto.cmd_game_lhj.S_StartResult = function() {
      this.__className = "proto.cmd_game_lhj.S_StartResult";
      this.baseFruits = null;
      this.lineFruits = null;
      this.baseReward = 0;
      this.addFreeTimes = 0;
      this.leftFreeTimes = 0;
      this.lineBoxs = null;
      this.leftBoxTimes = 0;
      this.userScore = 0;
    };
    proto.cmd_game_lhj.S_RewardDouble = function() {
      this.__className = "proto.cmd_game_lhj.S_RewardDouble";
      this.baseReward = 0;
      this.leftDoubleTimes = 0;
      this.resultColor = 0;
      this.userScore = 0;
    };
    proto.cmd_game_lhj.S_OpenBox = function() {
      this.__className = "proto.cmd_game_lhj.S_OpenBox";
      this.boxId = 0;
      this.boxScore = 0;
      this.leftBoxTimes = 0;
      this.boxScores = null;
      this.userScore = 0;
    };
    proto.cmd_game_lhj.S_LeaveGameResult = function() {
      this.__className = "proto.cmd_game_lhj.S_LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_lhj.C_LineCount = function() {
      this.__className = "proto.cmd_game_lhj.C_LineCount";
      this.lineCount = 0;
    };
    proto.cmd_game_lhj.C_ChipKind = function() {
      this.__className = "proto.cmd_game_lhj.C_ChipKind";
      this.chipKind = 0;
    };
    proto.cmd_game_lhj.C_RewardDouble = function() {
      this.__className = "proto.cmd_game_lhj.C_RewardDouble";
      this.choiceType = 0;
    };
    proto.cmd_game_lhj.C_OpenBox = function() {
      this.__className = "proto.cmd_game_lhj.C_OpenBox";
      this.boxId = 0;
    };
    proto.cmd_game_lhj.SUB_CMD_GAME = {
      SUB_S_USERINFO_PUSH: 4,
      SUB_S_GAME_SCENE: 6,
      SUB_S_LINE_COUNT: 7,
      SUB_S_CHIP_KIND: 8,
      SUB_S_START_RESULT: 9,
      SUB_S_REWARD_DOUBLE: 10,
      SUB_S_OPEN_BOX: 11,
      SUB_S_LEAVE_GAME_RESULT: 12,
      SUB_C_ENTER_FINISH: 35,
      SUB_C_LEAVE_GAME_SCENE: 36,
      SUB_C_LINE_COUNT: 37,
      SUB_C_CHIP_KIND: 38,
      SUB_C_BEGIN_GAME: 39,
      SUB_C_REWARD_DOUBLE: 40,
      SUB_C_OPNE_BOX: 41
    };
    cc._RF.pop();
  }, {} ],
  lhjInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1df553euyJF6ZqLDSd7VG7P", "lhjInit");
    "use strict";
    var LhjInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "lhj"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("lhj module init!");
        bundle.lhj = {};
        bundle.lhj.key = {};
        bundle.lhj.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initLhjData: function initLhjData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.lhj.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.lhj.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.lhj.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.lhj.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + LhjInit.id, function(data) {
          bundle.lhj.data.set(bundle.lhj.key.data.ENTER_ROOM_SUCC, data);
          "lhjGame" != cc.director.getScene().name && cc.ak.ui.loadScenceWithPreload("lhjGame");
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + LhjInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== LhjInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = LhjInit;
    cc._RF.pop();
  }, {} ]
}, {}, [ "lhjInit", "LhjBoxLayer", "LhjGameLayer", "LhjHelpPannel", "LhjItem", "LhjMgr", "LhjPokerLayer", "LhjSettingPannel", "cmd_game_lhj" ]);