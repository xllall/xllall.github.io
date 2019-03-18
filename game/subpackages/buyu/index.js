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
  BuyuBgLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ad64oBNrFKw5ClKyfyX3Xg", "BuyuBgLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        curbg: {
          default: null,
          type: cc.Node
        },
        nextbg: {
          default: null,
          type: cc.Node
        },
        mask: {
          default: null,
          type: cc.Node
        },
        bgSpriteFrame: [ cc.SpriteFrame ],
        seaWave: {
          default: null,
          type: cc.Node
        },
        tSeaWaveFrame: null,
        nTime: 0
      },
      onLoad: function onLoad() {
        this.tSeaWaveFrame = [];
        var children = this.seaWave.children;
        for (var i = 0; i < children.length; i++) {
          this.tSeaWaveFrame[i] = children[i];
          this.tSeaWaveFrame[i].active = false;
        }
        this.mask.x = 1250;
        var wp = this.node.convertToWorldSpaceAR(this.curbg.position);
        var pos = this.mask.convertToNodeSpaceAR(wp);
        this.nextbg.position = pos;
        this.seaWave.x = 2e3;
      },
      start: function start() {},
      update: function update(dt) {
        this.nTime += dt;
        var nFrame = Math.floor(this.nTime / .15) % this.tSeaWaveFrame.length;
        for (var i = 0; i < this.tSeaWaveFrame.length; i++) this.tSeaWaveFrame[i].active = nFrame == i;
      },
      changeSceneWithAnimation: function changeSceneWithAnimation(nIndex) {
        var sp1 = this.curbg.getComponent(cc.Sprite);
        var sp2 = this.nextbg.getComponent(cc.Sprite);
        sp1.spriteFrame = sp2.spriteFrame;
        sp2.spriteFrame = this.bgSpriteFrame[nIndex];
        this.node.getComponent(cc.Animation).play();
      },
      onSceneInfo: function onSceneInfo(data) {
        this.curbg.getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[data.nSceneID];
        this.nextbg.getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[data.nSceneID];
        cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playBgMusic(data.nSceneID);
      },
      onChangeScene: function onChangeScene(data) {
        this.changeSceneWithAnimation(data.nSceneID);
        cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playBgMusic(data.nSceneID);
        cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playEffect("seawave");
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuBulletLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bdd6ZoAvdERppWjeY3HfbL", "BuyuBulletLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        BuyuCannonLayer: {
          default: null,
          type: cc.Node
        },
        BuyuBullet: {
          default: null,
          type: cc.Prefab
        },
        tBulletFrame: [ cc.SpriteFrame ],
        tBulletCount: [ 0, 0, 0, 0 ],
        nSelfChairID: 0,
        nIncreseBulletID: 0
      },
      onLoad: function onLoad() {
        this.tBulletCount = [ 0, 0, 0, 0 ];
        this.nIncreseBulletID = 100;
      },
      start: function start() {},
      update: function update(dt) {},
      getPlayerBulletCount: function getPlayerBulletCount(nChairID) {
        return this.tBulletCount[nChairID];
      },
      bulletDestroy: function bulletDestroy(nChairID) {
        this.tBulletCount[nChairID]--;
      },
      fire: function fire(nChairID, nRate, nRad, nFishID) {
        var bulletFrame = this.tBulletFrame[0];
        nRate > 4 && (bulletFrame = this.tBulletFrame[1]);
        nRate > 7 && (bulletFrame = this.tBulletFrame[2]);
        var nRotation = -nRad / Math.PI * 180 + 90;
        nRotation < 0 && (nRotation += 360);
        nRotation >= 360 && (nRotation -= 360);
        var p = this.BuyuCannonLayer.getChildByName("BuyuCannon" + nChairID).getPosition();
        p.x = p.x + 160 * Math.cos(nRad);
        p.y = p.y + 160 * Math.sin(nRad);
        var bullet = cc.instantiate(this.BuyuBullet);
        bullet.getComponent("BuyuBullet").initBullet(nChairID, p, nRotation, bulletFrame, nRate, nFishID);
        bullet.parent = this.node;
        this.tBulletCount[nChairID]++;
        if (nChairID == this.nSelfChairID) {
          bullet.getComponent("BuyuBullet").setBulletID(++this.nIncreseBulletID);
          return this.nIncreseBulletID;
        }
        return 0;
      },
      unlockFish: function unlockFish(nChairID) {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var BuyuBulletScript = children[i].getComponent("BuyuBullet");
          BuyuBulletScript.nChairID == nChairID && (BuyuBulletScript.nFishID = -1);
        }
      },
      onUserInfo: function onUserInfo(data) {
        if (data.isSelf) {
          var nRotation = data.nChairID > 1 ? 180 : 0;
          this.node.setRotation(nRotation);
          this.nSelfChairID = data.nChairID;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuBullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7cd0fB89alGFJWKHDGRDkpF", "BuyuBullet");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nChairID: 0,
        nBulletID: 0,
        nFishID: -1,
        nRate: 0,
        nMoveSpeed: 0,
        isEnabled: true,
        nTop: 0,
        nBot: 0,
        nLeft: 0,
        nRight: 0
      },
      onLoad: function onLoad() {
        this.nMoveSpeed = 1500;
        var vSize = cc.view.getVisibleSize();
        this.nTop = vSize.height / 2;
        this.nBot = -vSize.height / 2;
        this.nLeft = -vSize.width / 2;
        this.nRight = vSize.width / 2;
      },
      onDestroy: function onDestroy() {
        this.node.parent.getComponent("BuyuBulletLayer").bulletDestroy(this.nChairID);
      },
      start: function start() {},
      update: function update(dt) {
        var nDis = this.nMoveSpeed * dt;
        this.bulletMove(this.node, nDis);
      },
      initBullet: function initBullet(nChairID, pos, nRotation, spriteFrame, nRate, nFishID) {
        this.nChairID = nChairID;
        this.nFishID = nFishID;
        this.node.position = pos;
        this.node.setRotation(nRotation);
        this.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        this.nRate = nRate;
        var boxSize = cc.size(40, 60);
        this.node.setContentSize(55, 103);
        if (nRate > 4) {
          boxSize = cc.size(40, 100);
          this.node.setContentSize(60, 125);
        } else nRate > 7;
        boxSize = cc.size(40, 120);
        this.node.setContentSize(61, 161);
        this.getComponent(cc.BoxCollider).size = boxSize;
      },
      setBulletID: function setBulletID(nBulletID) {
        this.nBulletID = nBulletID;
      },
      getBulletID: function getBulletID() {
        return this.nBulletID;
      },
      getBulletRate: function getBulletRate() {
        return this.nRate;
      },
      disableBullet: function disableBullet() {
        this.isEnabled = false;
      },
      isBulletEnabled: function isBulletEnabled() {
        return this.isEnabled;
      },
      get2PointDistance: function get2PointDistance(p0, p1) {
        var dis = Math.sqrt((p0.x - p1.x) * (p0.x - p1.x) + (p0.y - p1.y) * (p0.y - p1.y));
        return dis;
      },
      bulletMove: function bulletMove(bullet, nDis) {
        var nRotation = bullet.getRotation();
        var nRad = -(nRotation - 90) / 180 * Math.PI;
        nRad < 0 && (nRad += 2 * Math.PI);
        var p = cc.v2(Math.cos(nRad) * nDis + bullet.x, Math.sin(nRad) * nDis + bullet.y);
        if (p.x >= this.nLeft && p.x <= this.nRight && p.y >= this.nBot && p.y <= this.nTop) {
          bullet.position = p;
          return;
        }
        var nAngle = nRad / Math.PI * 180;
        var curp = bullet.position;
        var a = Math.tan(nRad);
        var b = curp.y - a * curp.x;
        if (0 == nAngle) {
          nDis = p.x - this.nRight;
          bullet.x = this.nRight;
          bullet.setRotation(270);
        } else if (180 == nAngle) {
          nDis = this.nLeft - p.x;
          bullet.x = this.nLeft;
          bullet.setRotation(90);
        } else if (90 == nAngle) {
          nDis = p.y - this.nTop;
          bullet.y = this.nTop;
          bullet.setRotation(180);
        } else if (270 == nAngle) {
          nDis = this.nBot - p.y;
          bullet.y = this.nBot;
          bullet.setRotation(0);
        } else if (nAngle > 0 && nAngle < 90) {
          p.y = this.nTop;
          p.x = (p.y - b) / a;
          if (p.x < this.nRight) bullet.setRotation(nAngle + 90); else if (p.x > this.nRight) {
            p.x = this.nRight;
            p.y = a * p.x + b;
            bullet.setRotation(nAngle - 90);
          } else bullet.rotation += 180;
          var p0 = bullet.position;
          bullet.setPosition(p);
          this.bulletMove(bullet, nDis - this.get2PointDistance(p, p0));
        } else if (nAngle > 90 && nAngle < 180) {
          p.y = this.nTop;
          p.x = (p.y - b) / a;
          if (p.x > this.nLeft) bullet.setRotation(nAngle + 90); else if (p.x < this.nLeft) {
            p.x = this.nLeft;
            p.y = a * p.x + b;
            bullet.setRotation(nAngle - 90);
          } else bullet.rotation -= 180;
          var p0 = bullet.position;
          bullet.setPosition(p);
          this.bulletMove(bullet, nDis - this.get2PointDistance(p, p0));
        } else if (nAngle > 180 && nAngle < 270) {
          p.y = this.nBot;
          p.x = (p.y - b) / a;
          if (p.x > this.nLeft) bullet.setRotation(nAngle + 90); else if (p.x < this.nLeft) {
            p.x = this.nLeft;
            p.y = a * p.x + b;
            bullet.setRotation(nAngle - 90);
          } else bullet.rotation += 180;
          var p0 = bullet.position;
          bullet.setPosition(p);
          this.bulletMove(bullet, nDis - this.get2PointDistance(p, p0));
        } else if (nAngle > 270 && nAngle < 360) {
          p.y = this.nBot;
          p.x = (p.y - b) / a;
          if (p.x < this.nRight) bullet.setRotation(nAngle + 90); else if (p.x > this.nRight) {
            p.x = this.nRight;
            p.y = a * p.x + b;
            bullet.setRotation(nAngle - 90);
          } else bullet.rotation -= 180;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuCannonLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19183tv9CdP0ZSk7/W4raLG", "BuyuCannonLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nSelfChairID: 0,
        nSelfBulletRate: 1,
        isTouchDown: false,
        nCooldownTime: 0,
        curTouchPos: null,
        tCannonScript: [],
        BuyuMgrScript: null,
        BuyuFishLayerScript: null,
        BuyuLockLayer: null,
        BuyuBulletLayerScript: null,
        BuyuOtherLayerScript: null,
        additionBtn: {
          default: null,
          type: cc.Node
        },
        subtractionBtn: {
          default: null,
          type: cc.Node
        },
        autoBtn: {
          default: null,
          type: cc.Node
        },
        lockBtn: {
          default: null,
          type: cc.Node
        },
        tLockFishID: [],
        isAutoFire: false
      },
      onLoad: function onLoad() {
        this.isTouchDown = false;
        this.nCooldownTime = 0;
        this.curTouchPos = cc.v2(0, 0);
        this.tLockFishID = [ -1, -1, -1, -1 ];
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this);
        for (var i = 0; i < 4; i++) {
          var cannon = this.node.getChildByName("BuyuCannon" + i);
          this.tCannonScript[i] = cannon.getComponent("BuyuCannon");
        }
        this.tCannonScript[2].reverseCannon();
        this.tCannonScript[3].reverseCannon();
        this.BuyuMgrScript = this.node.parent.getChildByName("BuyuMgr").getComponent("BuyuMgr");
        this.BuyuFishLayerScript = this.node.parent.getChildByName("BuyuFishLayer").getComponent("BuyuFishLayer");
        this.BuyuLockLayer = this.node.parent.getChildByName("BuyuLockLayer").getComponent("BuyuLockLayer");
        this.BuyuBulletLayerScript = this.node.parent.getChildByName("BuyuBulletLayer").getComponent("BuyuBulletLayer");
        this.BuyuOtherLayerScript = this.node.parent.getChildByName("BuyuOtherLayer").getComponent("BuyuOtherLayer");
        this.additionBtn.on("click", this.onAddtion, this);
        this.subtractionBtn.on("click", this.onSubtraction, this);
        this.autoBtn.on("click", this.onAutoFire, this);
        this.lockBtn.on("click", this.onLock, this);
      },
      start: function start() {
        this.setSelfCannon(0);
      },
      update: function update(dt) {
        this.updateLockFish();
        this.nCooldownTime -= dt;
        do {
          if (!this.isTouchDown && !this.isAutoFire) break;
          if (this.nCooldownTime > 0) break;
          if (!this.BuyuMgrScript.isEnoughMoneyToFire()) {
            this.isTouchDown = false;
            this.isAutoFire && this.onAutoFire();
            this.BuyuOtherLayerScript.onRechargeBtn();
            cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff01");
            break;
          }
          if (this.BuyuBulletLayerScript.getPlayerBulletCount(this.nSelfChairID) >= 6) break;
          this.nCooldownTime = .17;
          var nRad = this.tCannonScript[this.nSelfChairID].getCannonRadian();
          this.tCannonScript[this.nSelfChairID].fire();
          var nBulletID = this.BuyuBulletLayerScript.fire(this.nSelfChairID, this.nSelfBulletRate, nRad, this.tLockFishID[this.nSelfChairID]);
          this.BuyuMgrScript.sendShoot(nBulletID, nRad);
          cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playEffect("fire");
        } while (false);
      },
      onTouchBegan: function onTouchBegan(event) {
        this.isTouchDown = true;
        var pos = this.node.convertToNodeSpaceAR(event.touch.getLocation());
        if (this.nSelfChairID < 2 && pos.y < -480) return;
        if (this.nSelfChairID > 1 && pos.y > 480) return;
        var pos0 = this.tCannonScript[this.nSelfChairID].node.position;
        var nRad = Math.atan2(pos.y - pos0.y, pos.x - pos0.x);
        this.tCannonScript[this.nSelfChairID].cannonRotate(nRad);
      },
      onTouchMoved: function onTouchMoved(event) {
        var pos = this.node.convertToNodeSpaceAR(event.touch.getLocation());
        if (this.nSelfChairID < 2 && pos.y < -480) return;
        if (this.nSelfChairID > 1 && pos.y > 480) return;
        var pos0 = this.tCannonScript[this.nSelfChairID].node.position;
        var nRad = Math.atan2(pos.y - pos0.y, pos.x - pos0.x);
        this.tCannonScript[this.nSelfChairID].cannonRotate(nRad);
      },
      onTouchEnded: function onTouchEnded(event) {
        this.isTouchDown = false;
      },
      onAddtion: function onAddtion() {
        this.BuyuMgrScript.rsendSetBulletType(true);
      },
      onSubtraction: function onSubtraction() {
        this.BuyuMgrScript.rsendSetBulletType(false);
      },
      onAutoFire: function onAutoFire() {
        var sp = this.autoBtn.getChildByName("sp");
        sp.active = !sp.active;
        this.isAutoFire = sp.active;
      },
      onLock: function onLock() {
        var fish = this.BuyuFishLayerScript.getLockableFish();
        if (null == fish) return;
        var nFishID = fish.getComponent("BuyuFish").getFishID();
        this.BuyuMgrScript.sendLockFish(nFishID);
      },
      cancelLockFish: function cancelLockFish(nChairID) {
        this.tLockFishID[nChairID] = -1;
        this.BuyuLockLayer.unlockFish(nChairID);
        this.BuyuBulletLayerScript.unlockFish(nChairID);
      },
      updateLockFish: function updateLockFish() {
        for (var i = 0; i < 4; i++) {
          if (this.tLockFishID[i] < 0) continue;
          var fish = this.BuyuFishLayerScript.findFish(this.tLockFishID[i]);
          if (null == fish || false == fish.getComponent("BuyuFish").isFishNormal()) {
            this.cancelLockFish(i);
            continue;
          }
          var vSize = cc.view.getVisibleSize();
          var pos = fish.position;
          if (pos.x < -vSize.width / 2) {
            this.cancelLockFish(i);
            continue;
          }
          if (pos.x > vSize.width / 2) {
            this.cancelLockFish(i);
            continue;
          }
          if (pos.y > 540) {
            this.cancelLockFish(i);
            continue;
          }
          if (pos.y < -540) {
            this.cancelLockFish(i);
            continue;
          }
          if (i < 2 && pos.y < -480) {
            this.cancelLockFish(i);
            continue;
          }
          if (i > 1 && pos.y > 480) {
            this.cancelLockFish(i);
            continue;
          }
          var pos0 = this.tCannonScript[i].node.position;
          var wp = fish.parent.convertToWorldSpaceAR(pos);
          var pos1 = this.node.convertToNodeSpaceAR(wp);
          var nRad = Math.atan2(pos1.y - pos0.y, pos1.x - pos0.x);
          this.tCannonScript[i].cannonRotate(nRad);
        }
      },
      fire: function fire(nChairID, nRad, nBulletRate) {
        if (this.BuyuBulletLayerScript.getPlayerBulletCount(nChairID) < 6) {
          this.tCannonScript[nChairID].cannonRotate(nRad);
          this.tCannonScript[nChairID].fire();
          this.BuyuBulletLayerScript.fire(nChairID, nBulletRate, nRad, this.tLockFishID[nChairID]);
        }
      },
      setSelfCannon: function setSelfCannon(nSelfChairID) {
        this.nSelfChairID = nSelfChairID;
        var pos = cc.find("BuyuCannon" + nSelfChairID, this.node).position;
        if (nSelfChairID < 2) {
          this.node.setRotation(0);
          this.BuyuLockLayer.node.setRotation(0);
          pos.y += 50;
          pos.x += 160;
          this.additionBtn.position = pos;
          pos.x -= 320;
          this.subtractionBtn.position = pos;
          this.autoBtn.parent.setRotation(0);
          this.autoBtn.parent.position = cc.v2(0, -450);
        } else {
          this.node.setRotation(180);
          this.BuyuLockLayer.node.setRotation(180);
          pos.y -= 50;
          pos.x += 160;
          this.subtractionBtn.position = pos;
          pos.x -= 320;
          this.additionBtn.position = pos;
          this.additionBtn.setRotation(180);
          this.subtractionBtn.setRotation(180);
          this.autoBtn.parent.setRotation(180);
          this.autoBtn.parent.position = cc.v2(0, 450);
        }
      },
      setCannonRate: function setCannonRate(nChairID, nBulletRate, nBulletPrice) {
        this.tCannonScript[nChairID].setCannonType(nBulletRate, nBulletPrice);
      },
      onUserInfo: function onUserInfo(data) {
        if (data.isSelf) {
          for (var i = 0; i < 4; i++) this.tCannonScript[i].node.active = false;
          this.setSelfCannon(data.nChairID);
        }
        this.tCannonScript[data.nChairID].node.active = true;
      },
      onBulletInfo: function onBulletInfo(data) {
        data.nChairID == this.nSelfChairID && (this.nSelfBulletRate = data.nBulletRate);
        this.setCannonRate(data.nChairID, data.nBulletRate, data.nBulletPrice);
      },
      onSceneInfo: function onSceneInfo(data) {
        for (var i = 0; i < data.tRate.length; i++) {
          i == this.nSelfChairID && (this.nSelfBulletRate = data.tRate[i]);
          this.setCannonRate(i, data.tRate[i], data.tRate[i] * data.nBasePrice);
        }
      },
      onFire: function onFire(data) {
        if (data.isSelf) return;
        this.fire(data.nChairID, data.nRad, data.nBulletRate);
      },
      onLockFish: function onLockFish(data) {
        if (data.nFishID >= 0) {
          this.tLockFishID[data.nChairID] = data.nFishID;
          this.BuyuLockLayer.lockFish(data.nChairID, data.nFishID);
        } else this.unlockFish(data.nChairID);
      },
      onLeave: function onLeave(data) {
        this.setCannonRate(data.nChairID, 1, 0);
        this.tCannonScript[data.nChairID].node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuCannon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97305oLYYhJ95VOLgpXjVVu", "BuyuCannon");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cannonRoot: {
          default: null,
          type: cc.Node
        },
        tMouth: null,
        tCannon: null,
        curMouth: null,
        nCurType: 0,
        tFlameSprite: {
          default: [],
          type: cc.SpriteFrame
        },
        priceScript: null
      },
      onLoad: function onLoad() {
        this.tMouth = {};
        this.tCannon = {};
        for (var i = 0; i < 3; i++) {
          this.tMouth[i] = cc.find("mouth" + (i + 1), this.cannonRoot);
          this.tCannon[i] = cc.find("cannon" + (i + 1), this.cannonRoot);
        }
        this.curMouth = this.tMouth[0];
        this.nCurType = 0;
        this.priceScript = this.cannonRoot.getChildByName("priceLabel").getComponent("BuyuNumber");
      },
      start: function start() {
        this.priceScript.setType(3);
        this.priceScript.setNumber(0);
      },
      reverseCannon: function reverseCannon() {
        this.node.getChildByName("bgSprite").setRotation(180);
        this.cannonRoot.setRotation(180);
      },
      cannonRotate: function cannonRotate(nRad) {
        var nRotation = -nRad / Math.PI * 180 + 90;
        this.cannonRoot.setRotation(nRotation);
      },
      getCannonRadian: function getCannonRadian() {
        var nRotation = this.cannonRoot.getRotation();
        return (90 - nRotation) * Math.PI / 180;
      },
      fire: function fire() {
        var tPos0 = [ cc.v2(0, 123), cc.v2(0, 110), cc.v2(0, 91) ];
        var p0 = tPos0[this.nCurType];
        var p1 = cc.v2(0, p0.y - 15);
        var seq = cc.sequence(cc.moveTo(.08, p1), cc.moveTo(.08, p0));
        this.curMouth.setPosition(p0);
        this.curMouth.stopAllActions();
        this.curMouth.runAction(seq);
        var flame = new cc.Node();
        flame.parent = this.node;
        var tPos = [ cc.v2(0, 80), cc.v2(0, 100), cc.v2(0, 130) ];
        var lp = tPos[this.nCurType];
        var wp = this.curMouth.convertToWorldSpaceAR(lp);
        flame.position = this.node.convertToNodeSpaceAR(wp);
        var sp = flame.addComponent(cc.Sprite);
        sp.spriteFrame = this.tFlameSprite[this.nCurType];
        var seq = cc.sequence(cc.fadeOut(.16), cc.removeSelf());
        flame.runAction(seq);
      },
      setCannonType: function setCannonType(nBulletRate, nBulletPrice) {
        var nIndex = 0;
        nBulletRate > 4 && (nIndex = 1);
        nBulletRate > 7 && (nIndex = 2);
        this.nCurType = nIndex;
        for (var i = 0; i < 3; i++) {
          this.tMouth[i].active = i == nIndex;
          this.tCannon[i].active = i == nIndex;
          i == nIndex && (this.curMouth = this.tMouth[i]);
        }
        this.priceScript.setNumber(nBulletPrice / 1e3);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuCoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90efcw6gdNHG421ljLkCNL3", "BuyuCoin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tFrames: null,
        nTime: 0,
        nFrameTime: 0
      },
      onLoad: function onLoad() {
        this.nFrameTime = .05;
        this.tFrames = [];
        for (var i = 1; i <= 12; i++) this.tFrames[i - 1] = this.node.getChildByName("frame" + i);
      },
      start: function start() {},
      update: function update(dt) {
        this.nTime += dt;
        var nFrame = Math.floor(this.nTime / this.nFrameTime) % this.tFrames.length;
        for (var i = 0; i < this.tFrames.length; i++) this.tFrames[i].active = nFrame == i;
      },
      runFlyAction: function runFlyAction(posDst) {
        this.nTime = 5 * Math.random();
        var pos = this.node.position;
        var nDis = Math.sqrt((pos.x - posDst.x) * (pos.x - posDst.x) + (pos.y - posDst.y) * (pos.y - posDst.y));
        var dt = cc.delayTime(.2 * Math.random());
        var mb1 = cc.moveBy(.2, cc.v2(0, 150));
        var mb2 = cc.moveBy(.2, cc.v2(0, 150 * Math.random() - 300));
        var mt1 = cc.moveTo(nDis / 1e3, posDst);
        var rmSelf = cc.removeSelf();
        var seq = cc.sequence(dt, mb1, mb2, mt1, rmSelf);
        this.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuEffectLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10e93YWPOpEK5fZOPrM0jQc", "BuyuEffectLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nSelfChairID: 0,
        netRoot: {
          default: null,
          type: cc.Node
        },
        netSpriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        coinRoot: {
          default: null,
          type: cc.Node
        },
        BuyuGoldCoinPrefab: {
          default: null,
          type: cc.Prefab
        },
        BuyuSilverCoinPrefab: {
          default: null,
          type: cc.Prefab
        },
        tUserInfoPos: null,
        tFishCoinCount: null,
        tPrizePos: null,
        BigPrize1: {
          default: null,
          type: cc.Prefab
        },
        BigPrize2: {
          default: null,
          type: cc.Prefab
        },
        BuyuNumber: {
          default: null,
          type: cc.Prefab
        },
        lightningPrefab: {
          default: null,
          type: cc.Prefab
        },
        wavePrefab: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        var vSize = cc.view.getVisibleSize();
        this.tUserInfoPos = [];
        this.tUserInfoPos[0] = cc.v2(-vSize.width / 2 + 50, -vSize.height / 2 + 50);
        this.tUserInfoPos[1] = cc.v2(vSize.width / 2 - 50, -vSize.height / 2 + 50);
        this.tUserInfoPos[2] = cc.v2(vSize.width / 2 - 50, vSize.height / 2 - 50);
        this.tUserInfoPos[3] = cc.v2(-vSize.width / 2 + 50, vSize.height / 2 - 50);
        this.tFishCoinCount = [ 2, 2, 3, 4, 5, 6, 7, 8, 10, 10, 10, 10, 10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ];
      },
      start: function start() {},
      setUserInfoPos: function setUserInfoPos(tWpos) {
        for (var i = 0; i < 4; i++) this.tUserInfoPos[i] = this.coinRoot.convertToNodeSpaceAR(tWpos[i]);
      },
      setSelfChairID: function setSelfChairID(nChairID) {
        this.nSelfChairID = nChairID;
        this.tPrizePos = [ cc.v2(-400, -200), cc.v2(400, -200), cc.v2(400, 200), cc.v2(-400, 200) ];
        if (nChairID > 1) for (var i = 0; i < 4; i++) {
          this.tPrizePos[i].x *= -1;
          this.tPrizePos[i].y *= -1;
        }
      },
      creatNet: function creatNet(pos, nBulletRate) {
        var nNetCount = 1;
        pos = this.netRoot.convertToNodeSpaceAR(pos);
        var tNetPos = [];
        1 == nNetCount && (tNetPos = [ cc.v2(pos.x, pos.y) ]);
        2 == nNetCount && (tNetPos = [ cc.v2(pos.x - 50, pos.y), cc.v2(pos.x + 50, pos.y) ]);
        3 == nNetCount && (tNetPos = [ cc.v2(pos.x, pos.y + 50), cc.v2(pos.x - 43.3, pos.y - 25), cc.v2(pos.x + 43.3, pos.y - 25) ]);
        4 == nNetCount && (tNetPos = [ cc.v2(pos.x - 50, pos.y + 50), cc.v2(pos.x + 50, pos.y + 50), cc.v2(pos.x - 50, pos.y - 50), cc.v2(pos.x + 50, pos.y - 50) ]);
        for (var i = 0; i < nNetCount; i++) {
          var net = new cc.Node();
          net.parent = this.netRoot;
          net.position = tNetPos[i];
          var sp = net.addComponent(cc.Sprite);
          sp.spriteFrame = this.netSpriteFrame;
          var st1 = cc.scaleTo(.3, 1.5, 1.5);
          var st2 = cc.scaleTo(.2, 1, 1);
          var rmSelf = cc.removeSelf();
          var seq = cc.sequence(st1, st2, rmSelf);
          net.runAction(seq);
        }
      },
      createCoin: function createCoin(wpos, nFishType, nChairID, nWinMoney, isSelf) {
        var coin = null;
        var pos = this.coinRoot.convertToNodeSpaceAR(wpos);
        for (var i = 0; i < this.tFishCoinCount[nFishType]; i++) {
          nFishType < 15 && (coin = cc.instantiate(this.BuyuSilverCoinPrefab));
          nFishType >= 15 && (coin = cc.instantiate(this.BuyuGoldCoinPrefab));
          var randX = 200 * Math.random() - 100;
          coin.position = cc.v2(pos.x + randX, pos.y);
          coin.parent = this.coinRoot;
          coin.getComponent("BuyuCoin").runFlyAction(this.tUserInfoPos[nChairID]);
        }
        var labelNode = cc.instantiate(this.BuyuNumber);
        labelNode.parent = this.coinRoot;
        labelNode.position = pos;
        labelNode.getComponent("BuyuNumber").setType(isSelf ? 1 : 2);
        labelNode.getComponent("BuyuNumber").setNumber(nWinMoney / 1e3);
        labelNode.runAction(cc.sequence(cc.delayTime(2), cc.removeSelf()));
        nFishType >= 15 && cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playGoldCoin();
        nFishType < 15 && cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playSilverCoin();
        this.createBigPrize(nFishType, nChairID, nWinMoney);
      },
      removeBigPrize: function removeBigPrize(nChairID) {
        var strName = "bigPrize" + nChairID;
        var children = this.coinRoot.children;
        for (var i = 0; i < children.length; i++) if (children[i].name = strName) return children[i].destroy();
      },
      createBigPrize: function createBigPrize(nFishType, nChairID, nWinMoney) {
        if (nFishType < 15) return;
        if (nFishType > 28) return;
        if (22 == nFishType) return;
        this.removeBigPrize(nChairID);
        var tType1 = [ 15, 16, 17, 26, 27, 28 ];
        for (var i = 0; i < tType1.length; i++) if (nFishType == tType1[i]) {
          var bigPrize = cc.instantiate(this.BigPrize1);
          bigPrize.name = "bigPrize" + nChairID;
          this.coinRoot.addChild(bigPrize, 1);
          bigPrize.position = this.tPrizePos[nChairID];
          nChairID > 1 && bigPrize.setRotation(180);
          bigPrize.runAction(cc.sequence(cc.delayTime(3), cc.removeSelf()));
          cc.find("bg", bigPrize).runAction(cc.rotateBy(3, 2e3));
          cc.find("moneyLabel", bigPrize).getComponent("BuyuNumber").setNumber(nWinMoney / 1e3);
          return;
        }
        var tType2 = [ 18, 19, 20, 21, 23, 24, 25 ];
        for (var i = 0; i < tType2.length; i++) if (nFishType == tType2[i]) {
          var bigPrize = cc.instantiate(this.BigPrize2);
          bigPrize.name = "bigPrize" + nChairID;
          bigPrize.parent = this.coinRoot;
          bigPrize.position = this.tPrizePos[nChairID];
          nChairID > 1 && bigPrize.setRotation(180);
          bigPrize.runAction(cc.sequence(cc.delayTime(3), cc.removeSelf()));
          cc.find("bg", bigPrize).runAction(cc.rotateBy(3, 2e3));
          cc.find("moneyLabel", bigPrize).getComponent("BuyuNumber").setNumber(nWinMoney / 1e3);
          return;
        }
        cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playEffect("bigprize");
      },
      createLightning: function createLightning(wpos) {
        var pos = this.node.convertToNodeSpaceAR(wpos);
        var lightning = cc.instantiate(this.lightningPrefab);
        lightning.position = pos;
        lightning.parent = this.node;
        var seq = cc.sequence(cc.delayTime(0), cc.callFunc(function() {
          lightning.position = pos;
        }), cc.delayTime(1), cc.removeSelf());
        lightning.runAction(seq);
        var wave = cc.instantiate(this.wavePrefab);
        wave.position = pos;
        wave.parent = this.node;
        var seq = cc.sequence(cc.delayTime(0), cc.callFunc(function() {
          wave.position = pos;
        }), cc.delayTime(1), cc.removeSelf());
        wave.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuFishLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80f65jXaTxLC7tUVpPmH8nC", "BuyuFishLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        BuyuFishEffectScript: null,
        FishPrefab: [ cc.Prefab ],
        tAnimationTime: null,
        isReverse: false
      },
      onLoad: function onLoad() {
        this.BuyuFishEffectScript = cc.find("BuyuEffectLayer", this.node.parent).getComponent("BuyuEffectLayer");
        this.tAnimationTime = {};
        for (var i = 0; i < 40; i++) this.tAnimationTime[i] = 1.2;
        this.tAnimationTime[18] = .8;
        this.tAnimationTime[19] = .8;
        this.tAnimationTime[23] = .5;
        this.tAnimationTime[25] = 2;
      },
      start: function start() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
      },
      onDestroy: function onDestroy() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = false;
      },
      update: function update(dt) {},
      createFish: function createFish(nFishType, nFishID) {
        var fish = cc.instantiate(this.FishPrefab[nFishType]);
        fish.parent = this.node;
        var fishScript = fish.getComponent("BuyuFish");
        fishScript.initFish(this.tAnimationTime[nFishType], nFishID, nFishType);
        fishScript.setFishNormal();
        return fish;
      },
      getLockableFish: function getLockableFish() {
        var vSize = cc.view.getVisibleSize();
        var nLeft = -vSize.width / 2;
        var nRight = vSize.width / 2;
        var nTop = vSize.height / 2;
        var nBot = -vSize.height / 2;
        var tLockableFish = [];
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var pos = children[i].position;
          if (children[i].getComponent("BuyuFish").getFishType() < 15) continue;
          if (children[i].getComponent("BuyuFish").getFishType() > 28) continue;
          pos.x > nLeft && pos.x < nRight && pos.y > nBot && pos.y < nTop && tLockableFish.push(children[i]);
        }
        if (0 == tLockableFish.length) return null;
        var nIndex = Math.floor(Math.random() * tLockableFish.length);
        return tLockableFish[nIndex];
      },
      findFish: function findFish(nFishID) {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) if (children[i].getComponent("BuyuFish").getFishID() == nFishID) return children[i];
        return null;
      },
      getSurroundFish: function getSurroundFish(fish) {
        var vSize = cc.view.getVisibleSize();
        var nFishType = fish.getComponent("BuyuFish").getFishType();
        var p0 = fish.position;
        var tFishID = [];
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          if (22 == children[i].getComponent("BuyuFish").getFishType()) continue;
          if (23 == children[i].getComponent("BuyuFish").getFishType()) continue;
          if (24 == children[i].getComponent("BuyuFish").getFishType()) continue;
          var p1 = children[i].position;
          if (p1.x < -vSize.width / 5) continue;
          if (p1.x > vSize.width / 5) continue;
          if (p1.y < -vSize.height / 5) continue;
          if (p1.y > vSize.height / 5) continue;
          tFishID.push(children[i].getComponent("BuyuFish").getFishID());
        }
        return tFishID;
      },
      getSimilarFish: function getSimilarFish(nFishType) {
        var vSize = cc.view.getVisibleSize();
        var tFishID = [];
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          if (children[i].getComponent("BuyuFish").getFishType() != nFishType) continue;
          var pos = children[i].position;
          if (pos.x < -vSize.width / 2) continue;
          if (pos.x > vSize.width / 2) continue;
          if (pos.y < -vSize.height / 2) continue;
          if (pos.y > vSize.height / 2) continue;
          tFishID.push(children[i].getComponent("BuyuFish").getFishID());
        }
        return tFishID;
      },
      stopScreen: function stopScreen() {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var spt = children[i].getComponent("BuyuFish");
          Math.abs(spt.tRouteParam.nSpeed) > 1 && (spt.tRouteParam.nSpeed /= 1e5);
        }
        var seq = cc.sequence(cc.delayTime(7), cc.callFunc(this.recoverSpeed, this));
        this.node.stopAllActions();
        this.node.runAction(seq);
      },
      recoverSpeed: function recoverSpeed() {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var spt = children[i].getComponent("BuyuFish");
          Math.abs(spt.tRouteParam.nSpeed) < 1 && (spt.tRouteParam.nSpeed *= 1e5);
        }
      },
      createShoal1: function createShoal1(nStartFishID) {
        if ("number" == typeof nStartFishID) {
          this.tShoalParam = {};
          this.tShoalParam.nStep = 0;
          this.tShoalParam.nStartFishID = nStartFishID;
          this.tShoalParam.nIndex = nStartFishID;
        }
        var tRad = [ 0, .25 * Math.PI, .5 * Math.PI, .75 * Math.PI, Math.PI, 1.25 * Math.PI, 1.5 * Math.PI, 1.75 * Math.PI, .125 * Math.PI, .375 * Math.PI, .625 * Math.PI, .875 * Math.PI, 1.125 * Math.PI, 1.375 * Math.PI, 1.625 * Math.PI, 1.875 * Math.PI ];
        var nCount = 8;
        this.tShoalParam.nStep < 12 && (nCount = 16);
        var nFishType = this.tShoalParam.nStep - 4;
        this.tShoalParam.nStep < 8 && (nFishType = Math.floor(this.tShoalParam.nStep / 2));
        for (var i = 0; i < nCount; i++) {
          var fish = this.createFish(nFishType, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setRouteStraightLine(cc.v2(0, 0), tRad[i]);
        }
        this.tShoalParam.nStep++;
        if (this.tShoalParam.nStep >= 21) return;
        var nDelay = 3;
        this.tShoalParam.nStep < 8 && (nDelay = 1.5);
        var seq = cc.sequence(cc.delayTime(nDelay), cc.callFunc(this.createShoal1, this));
        this.node.runAction(seq);
      },
      createShoal2: function createShoal2(nStartFishID) {
        if ("number" == typeof nStartFishID) {
          this.tShoalParam = {};
          this.tShoalParam.nStep = 0;
          this.tShoalParam.nStartFishID = nStartFishID;
          this.tShoalParam.nIndex = nStartFishID;
          for (var i = 0; i < 76; i++) {
            var fish = this.createFish(0, this.tShoalParam.nIndex++);
            fish.position = cc.v2(25 * i - 936, 600);
            fish.setRotation(90);
            fish.runAction(cc.moveTo(2, cc.v2(25 * i - 936, 350)));
            var fish = this.createFish(0, this.tShoalParam.nIndex++);
            fish.position = cc.v2(25 * i - 936, -600);
            fish.setRotation(270);
            fish.runAction(cc.moveTo(2, cc.v2(25 * i - 936, -350)));
          }
        }
        var tFishType = [ 15, 15, 16, 16, 17, 18, 19, 20, 21, 25, 0, -1 ];
        var nFishType = tFishType[this.tShoalParam.nStep];
        if (nFishType > 0) {
          var fish = this.createFish(nFishType, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setRouteStraightLine(cc.v2(-1300, 160), 0);
          var fish = this.createFish(nFishType, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setRouteStraightLine(cc.v2(1300, -160), Math.PI);
        } else if (nFishType < 0) {
          var children = this.node.children;
          for (var i = 0; i < children.length; i++) {
            if (0 != children[i].getComponent("BuyuFish").getFishType()) continue;
            90 == children[i].getRotation() && children[i].runAction(cc.repeatForever(cc.moveBy(1, cc.v2(0, -100))));
            270 == children[i].getRotation() && children[i].runAction(cc.repeatForever(cc.moveBy(1, cc.v2(0, 100))));
          }
          return;
        }
        var seq = cc.sequence(cc.delayTime(4), cc.callFunc(this.createShoal2, this));
        this.node.runAction(seq);
        this.tShoalParam.nStep++;
      },
      createShoal3: function createShoal3(nStartFishID) {
        if ("number" != typeof nStartFishID) {
          var tIndex = [ 138, 74, 26, 2, 0 ];
          var nStart = this.tShoalParam.nStartFishID + tIndex[this.tShoalParam.nStep];
          var tCount = [ 80, 64, 48, 24, 2 ];
          var nEnd = nStart + tCount[this.tShoalParam.nStep];
          for (var i = nStart; i < nEnd; i++) {
            var fish = this.findFish(i);
            if (null == fish) continue;
            var spt = fish.getComponent("BuyuFish");
            spt.tRouteParam.nSpeed *= spt.tRouteParam.nSpeed < 0 ? -1 : 1;
            2 == tCount[this.tShoalParam.nStep] && (spt.tRouteParam.nSpeed *= 100);
            spt.tRouteParam.isClockwise && spt.setRouteStraightLine(fish.position, spt.tRouteParam.nRad - Math.PI / 2);
            spt.tRouteParam.isClockwise || spt.setRouteStraightLine(fish.position, spt.tRouteParam.nRad + Math.PI / 2);
          }
          if (this.tShoalParam.nStep >= tIndex.length - 1) return;
          var seq = cc.sequence(cc.delayTime(3), cc.callFunc(this.createShoal3, this));
          this.node.runAction(seq);
          this.tShoalParam.nStep++;
          return;
        }
        this.tShoalParam = {};
        this.tShoalParam.nStep = 0;
        this.tShoalParam.nStartFishID = nStartFishID;
        this.tShoalParam.nIndex = nStartFishID;
        var fish = this.createFish(21, this.tShoalParam.nIndex++);
        fish.getComponent("BuyuFish").setCircleLine(cc.v2(-400, 0), 1, 0, false);
        fish.getComponent("BuyuFish").tRouteParam.nSpeed /= 100;
        var fish = this.createFish(20, this.tShoalParam.nIndex++);
        fish.getComponent("BuyuFish").setCircleLine(cc.v2(400, 0), 1, 0, true);
        fish.getComponent("BuyuFish").tRouteParam.nSpeed /= 100;
        for (var i = 0; i < 12; i++) {
          var fish = this.createFish(7, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(-400, 0), 210, 30 * i, true);
          var fish = this.createFish(7, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(400, 0), 210, 30 * i, false);
        }
        for (var i = 0; i < 24; i++) {
          var fish = this.createFish(6, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(-400, 0), 280, 15 * i, false);
          var fish = this.createFish(6, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(400, 0), 280, 15 * i, true);
        }
        for (var i = 0; i < 32; i++) {
          var fish = this.createFish(4, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(-400, 0), 350, 11.25 * i, true);
          var fish = this.createFish(4, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(400, 0), 350, 11.25 * i, false);
        }
        for (var i = 0; i < 40; i++) {
          var fish = this.createFish(1, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(-400, 0), 400, 9 * i, false);
          var fish = this.createFish(1, this.tShoalParam.nIndex++);
          fish.getComponent("BuyuFish").setCircleLine(cc.v2(400, 0), 400, 9 * i, true);
        }
        var seq = cc.sequence(cc.delayTime(40), cc.callFunc(this.createShoal3, this));
        this.node.runAction(seq);
      },
      onUserInfo: function onUserInfo(data) {
        if (data.isSelf) {
          var nRotation = data.nChairID > 1 ? 180 : 0;
          this.node.setRotation(nRotation);
          this.isReverse = data.nChairID > 1;
          this.node.removeAllChildren();
          this.node.stopAllActions();
        }
      },
      onRateChange: function onRateChange(data) {
        var fish = this.findFish(data.nFishID);
        fish.getChildByName("rateLabel").getComponent("BuyuNumber").setNumber(data.nRate);
      },
      onChangeScene: function onChangeScene(data) {
        this.recoverSpeed();
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) children[i].getComponent("BuyuFish").tRouteParam.nSpeed *= 20;
      },
      onNormalFish: function onNormalFish(data) {
        cc.log("create fish type:" + data.nFishType);
        for (var i = 0; i < data.tOffsetPonts.offsetX.length; i++) {
          var x = data.tOffsetPonts.offsetX[i];
          var y = data.tOffsetPonts.offsetY[i];
          var fish = this.createFish(data.nFishType, data.nFishStartID + i);
          if (1 == data.nFunType) {
            var pos = cc.v2(data.nStartX + x, data.nStartY + y);
            var nRad = pos.x < 0 ? Math.atan2(data.a, 1) : Math.atan2(-data.a, -1);
            fish.getComponent("BuyuFish").setRouteStraightLine(pos, nRad);
          } else 2 == data.nFunType ? fish.getComponent("BuyuFish").setExponentialLine(cc.v2(data.nStartX + x, data.nStartY + y), data.a, data.b + y, data.c, data.d) : 3 == data.nFunType && fish.getComponent("BuyuFish").setArctanLine(cc.v2(data.nStartX + x, data.nStartY + y), data.a, data.b + y, data.c, data.d);
        }
      },
      onShoal: function onShoal(data) {
        0 == data.nShoalID && this.createShoal1(data.nStartFishID);
        1 == data.nShoalID && this.createShoal2(data.nStartFishID);
        2 == data.nShoalID && this.createShoal3(data.nStartFishID);
      },
      onCaptureFish: function onCaptureFish(data) {
        var fish = this.findFish(data.nFishID);
        if (null == fish) return;
        fish.getComponent("BuyuFish").setFishDead();
        var wpos = this.node.convertToWorldSpaceAR(fish.getPosition());
        var nFishType = fish.getComponent("BuyuFish").getFishType();
        (nFishType < 23 || nFishType > 24) && cc.find("BuyuEffectLayer", this.node.parent).getComponent("BuyuEffectLayer").createCoin(wpos, nFishType, data.nChairID, data.nWinMoney, data.isSelf);
        22 == nFishType && this.stopScreen();
        cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playFishDead(nFishType);
      },
      onCaptureBomb: function onCaptureBomb(data) {
        var _this = this;
        var bomb = this.findFish(data.nFishID);
        bomb.getComponent("BuyuFish").setFishDead();
        if (23 == bomb.getComponent("BuyuFish").getFishType()) {
          var wpos = this.node.convertToWorldSpaceAR(bomb.getPosition());
          this.BuyuFishEffectScript.createLightning(wpos);
        }
        if (data.nFishScore > 0) {
          var wpos = this.node.convertToWorldSpaceAR(bomb.getPosition());
          var nFishType = bomb.getComponent("BuyuFish").getFishType();
          this.BuyuFishEffectScript.createCoin(wpos, nFishType, data.nChairID, data.nFishScore, data.isSelf);
          cc.find("BuyuSoundMgr", this.node.parent).getComponent("BuyuSoundMgr").playFishDead(nFishType);
        }
        var _loop = function _loop(i) {
          var fish = _this.findFish(data.tFishID[i]);
          if (null == fish) return "continue";
          fish.getComponent("BuyuFish").setFishNone();
          seq = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
            fish.getComponent("BuyuFish").setFishDead();
            var wpos = _this.node.convertToWorldSpaceAR(fish.getPosition());
            var nFishType = fish.getComponent("BuyuFish").getFishType();
            if (0 == data.tScore[i]) return;
            _this.BuyuFishEffectScript.createCoin(wpos, nFishType, data.nChairID, data.tScore[i], data.isSelf);
            cc.find("BuyuSoundMgr", _this.node.parent).getComponent("BuyuSoundMgr").playFishDead(nFishType);
          }.bind(_this)));
          fish.runAction(seq);
        };
        for (var i = 0; i < data.tFishID.length; i++) {
          var seq;
          var _ret = _loop(i);
          if ("continue" === _ret) continue;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b37fbm18TRGjJdBt5UXXp3q", "BuyuFish");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        deadRoot: {
          default: null,
          type: cc.Node
        },
        normalRoot: {
          default: null,
          type: cc.Node
        },
        tDeadFrame: [],
        tNormalFrame: [],
        nFishType: 0,
        nFishID: 0,
        nState: 0,
        nTime: 0,
        nFrameTime: 0,
        nBeatTime: 0,
        tRouteParam: null
      },
      onLoad: function onLoad() {
        this.deadRoot = cc.find("deadRoot", this.node);
        this.normalRoot = cc.find("normalRoot", this.node);
        this.nFishType = 0;
        this.nFishID = 0;
        this.nState = 0;
        this.nTime = 0;
        this.nFrameTime = .05;
        this.tRouteParam = {};
        this.tRouteParam.nID = 0;
        this.tRouteParam.nSpeed = 100;
        this.tDeadFrame = [];
        this.tNormalFrame = [];
        var dChildren = this.deadRoot.children;
        for (var i = 0; i < dChildren.length; i++) {
          this.tDeadFrame[i] = dChildren[i];
          this.tDeadFrame[i].active = false;
        }
        var nChildren = this.normalRoot.children;
        for (var i = 0; i < nChildren.length; i++) {
          this.tNormalFrame[i] = nChildren[i];
          this.tNormalFrame[i].active = false;
        }
      },
      start: function start() {},
      update: function update(dt) {
        this.nTime += dt;
        if (1 == this.nState || 0 == this.nState) {
          var nFrame = Math.floor(this.nTime / this.nFrameTime) % this.tNormalFrame.length;
          for (var i = 0; i < this.tNormalFrame.length; i++) this.tNormalFrame[i].active = nFrame == i;
          1 == this.nState && this.fishMove(dt);
          if (this.nBeatTime > 0) {
            this.nBeatTime -= dt;
            this.nBeatTime <= 0 && this.recoverNormal();
          }
        } else if (2 == this.nState) {
          var nFrame = Math.floor(this.nTime / this.nFrameTime) % this.tDeadFrame.length;
          if (this.nTime / this.nFrameTime > this.tDeadFrame.length) {
            this.cleanFish();
            return;
          }
          var nFrame = Math.floor(this.nTime / this.nFrameTime) % this.tDeadFrame.length;
          for (var i = 0; i < this.tDeadFrame.length; i++) this.tDeadFrame[i].active = nFrame == i;
        }
        (this.node.x < -2e3 || this.node.x > 2e3 || this.node.y < -1e3 || this.node.y > 1e3) && this.node.destroy();
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        var isBulletEnabled = other.node.getComponent("BuyuBullet").isBulletEnabled();
        3;
        var nBindFishID = other.node.getComponent("BuyuBullet").nFishID;
        if (1 == this.nState && isBulletEnabled && (nBindFishID < 0 || nBindFishID == this.nFishID)) {
          var nBulletRate = other.node.getComponent("BuyuBullet").getBulletRate();
          other.node.getComponent("BuyuBullet").disableBullet();
          other.node.destroy();
          self.node.getComponent("BuyuFish").setBeat();
          var wp = other.node.parent.convertToWorldSpaceAR(other.node.position);
          self.node.parent.parent.getChildByName("BuyuEffectLayer").getComponent("BuyuEffectLayer").creatNet(wp, nBulletRate);
          var nBulletID = other.node.getComponent("BuyuBullet").getBulletID();
          if (nBulletID > 0) {
            if (23 == this.nFishType || 24 == this.nFishType) {
              var tFishID = cc.find("BuyuFishLayer", self.node.parent.parent).getComponent("BuyuFishLayer").getSurroundFish(self.node);
              cc.find("BuyuMgr", self.node.parent.parent).getComponent("BuyuMgr").sendHitBomb(this.nFishID, nBulletID, tFishID);
            } else if (this.nFishType >= 28 && this.nFishType <= 36) {
              var tFishID = cc.find("BuyuFishLayer", self.node.parent.parent).getComponent("BuyuFishLayer").getSimilarFish(this.nFishType - 29);
              cc.find("BuyuMgr", self.node.parent.parent).getComponent("BuyuMgr").sendHitBomb(this.nFishID, nBulletID, tFishID);
            } else cc.find("BuyuMgr", self.node.parent.parent).getComponent("BuyuMgr").sendHitFish(this.nFishID, nBulletID);
            cc.find("BuyuSoundMgr", this.node.parent.parent).getComponent("BuyuSoundMgr").playEffect("net");
          }
        }
      },
      initFish: function initFish(nTime, nFishID, nFishType) {
        this.nFishID = nFishID;
        this.nFrameTime = nTime / this.tNormalFrame.length;
        this.setFishType(nFishType);
        nFishType < 5 && (this.tRouteParam.nSpeed *= 1.5);
        nFishType >= 5 && nFishType < 9 && (this.tRouteParam.nSpeed *= 1.2);
        nFishType >= 26 && nFishType <= 28 && this.addBgRotation(this.node);
        if (nFishType > 28) {
          this.node.setScale(1.5, 1.5);
          this.setFishRed(this.node);
        }
        25 == nFishType && cc.find("BuyuMgr", this.node.parent.parent).getComponent("BuyuMgr").sendGetFishRate(this.nFishID);
      },
      addBgRotation: function addBgRotation(rootNode) {
        if (rootNode.name.indexOf("rotatesp") > -1) {
          var rpf = cc.repeatForever(cc.rotateBy(1, 100));
          rootNode.runAction(rpf);
        }
        var children = rootNode.children;
        for (var i = 0; i < children.length; i++) this.addBgRotation(children[i]);
      },
      setFishType: function setFishType(nFishType) {
        this.nFishType = nFishType;
      },
      getFishType: function getFishType() {
        return this.nFishType;
      },
      getFishID: function getFishID() {
        return this.nFishID;
      },
      cleanFish: function cleanFish() {
        this.nState = -1;
        var nFrame = this.tDeadFrame.length - 1;
        for (var i = 0; i < this.tDeadFrame.length; i++) this.tDeadFrame[i].active = nFrame == i;
        var seq = cc.sequence(cc.fadeOut(.3), cc.removeSelf());
        this.node.runAction(seq);
      },
      setFishNone: function setFishNone() {
        this.nState = 0;
      },
      setFishNormal: function setFishNormal() {
        this.nState = 1;
        this.nTime = 0;
        for (var i = 0; i < this.tDeadFrame.length; i++) this.tDeadFrame[i].active = false;
        for (var i = 0; i < this.tNormalFrame.length; i++) this.tNormalFrame[i].active = false;
        this.tNormalFrame[0].active = true;
      },
      setFishDead: function setFishDead() {
        this.nState = 2;
        this.nTime = 0;
        for (var i = 0; i < this.tDeadFrame.length; i++) this.tDeadFrame[i].active = false;
        for (var i = 0; i < this.tNormalFrame.length; i++) this.tNormalFrame[i].active = false;
        this.tDeadFrame[0].active = true;
        this.nFrameTime = .8 / this.tDeadFrame.length;
        var fishs = cc.find("fishs", this.node);
        if (null != fishs) {
          var children = fishs.children;
          for (var i = 0; i < children.length; i++) children[i].getComponent("BuyuFish").setFishDead();
        }
      },
      isFishNormal: function isFishNormal() {
        return 1 == this.nState;
      },
      setBeat: function setBeat() {
        if (this.nFishType > 28) return;
        if (this.nBeatTime > 0) return;
        this.nBeatTime = .2;
        this.setFishRed(this.node);
      },
      setFishRed: function setFishRed(rootNode) {
        rootNode.color = cc.color(220, 120, 120);
        var children = rootNode.children;
        for (var i = 0; i < children.length; i++) this.setFishRed(children[i]);
      },
      recoverNormal: function recoverNormal(rootNode) {
        null == rootNode && (rootNode = this.node);
        rootNode.color = cc.color(255, 255, 255);
        var children = rootNode.children;
        for (var i = 0; i < children.length; i++) this.recoverNormal(children[i]);
      },
      setRouteNone: function setRouteNone(pos) {
        this.position = pos;
        this.tRouteParam = {};
        this.tRouteParam.nID = 0;
      },
      setRouteStraightLine: function setRouteStraightLine(pos, nRad) {
        var nAngle = nRad / Math.PI * 180;
        this.node.position = pos;
        this.node.setRotation(-nAngle);
        this.tRouteParam.nID = 1;
        this.tRouteParam.nRad = nRad;
      },
      setExponentialLine: function setExponentialLine(pos, a, b, c, d) {
        this.node.position = pos;
        this.tRouteParam.nID = 2;
        this.tRouteParam.a = a;
        this.tRouteParam.b = b;
        this.tRouteParam.c = c;
        this.tRouteParam.d = d;
        this.tRouteParam.nSpeed *= pos.x < 0 ? 1 : -1;
      },
      setArctanLine: function setArctanLine(pos, a, b, c, d, nSpeed) {
        this.node.position = pos;
        this.tRouteParam.nID = 3;
        this.tRouteParam.a = a;
        this.tRouteParam.b = b;
        this.tRouteParam.c = c;
        this.tRouteParam.d = d;
        this.tRouteParam.nSpeed *= pos.x < 0 ? 1 : -1;
      },
      setCircleLine: function setCircleLine(pos0, nRadian, nAngle, isClockwise) {
        this.tRouteParam.nID = 4;
        this.tRouteParam.nRadian = nRadian;
        this.tRouteParam.nRad = nAngle / 180 * Math.PI;
        this.tRouteParam.pos0 = pos0;
        this.tRouteParam.isClockwise = isClockwise;
        this.tRouteParam.nSpeed *= isClockwise ? -1 : 1;
        this.fishMove(0);
      },
      fishMove: function fishMove(dt) {
        if (0 == this.tRouteParam.nID) return;
        var nDis = this.tRouteParam.nSpeed * dt;
        if (1 == this.tRouteParam.nID) {
          this.node.x += Math.cos(this.tRouteParam.nRad) * nDis;
          this.node.y += Math.sin(this.tRouteParam.nRad) * nDis;
        } else if (2 == this.tRouteParam.nID) {
          var p0 = this.node.position;
          var p1 = cc.v2(0, 0);
          p1.x = this.node.x + this.tRouteParam.nSpeed * dt;
          p1.y = this.tRouteParam.c * Math.pow(this.tRouteParam.a, p1.x + this.tRouteParam.d) + this.tRouteParam.b;
          var nRad = Math.atan2(p1.y - p0.y, p1.x - p0.x);
          var nRotation = nRad / Math.PI * 180;
          this.node.position = p1;
          this.node.setRotation(-nRotation);
        } else if (3 == this.tRouteParam.nID) {
          var p0 = this.node.position;
          var p1 = cc.v2(0, 0);
          p1.x = this.node.x + this.tRouteParam.nSpeed * dt;
          p1.y = this.tRouteParam.a * Math.atan(this.tRouteParam.c * (p1.x + this.tRouteParam.d)) + this.tRouteParam.b;
          var nRad = Math.atan2(p1.y - p0.y, p1.x - p0.x);
          var nRotation = nRad / Math.PI * 180;
          this.node.position = p1;
          this.node.setRotation(-nRotation);
        } else if (4 == this.tRouteParam.nID) {
          var nRad = nDis / this.tRouteParam.nRadian + this.tRouteParam.nRad;
          this.node.x = Math.cos(nRad) * this.tRouteParam.nRadian + this.tRouteParam.pos0.x;
          this.node.y = Math.sin(nRad) * this.tRouteParam.nRadian + this.tRouteParam.pos0.y;
          this.tRouteParam.isClockwise && this.node.setRotation(-(nRad - Math.PI / 2) / Math.PI * 180);
          this.tRouteParam.isClockwise || this.node.setRotation(-(nRad + Math.PI / 2) / Math.PI * 180);
          this.tRouteParam.nRad = nRad;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuHelpPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "941f6iJdQxB9JoE7794boqL", "BuyuHelpPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.initFishMap();
      },
      start: function start() {
        cc.find("bgSprite/closeBtn", this.node).on("click", this.onCloseBtn, this);
      },
      onCloseBtn: function onCloseBtn() {
        this.node.active = false;
      },
      initFishMap: function initFishMap() {
        var data = [ [ 2, 2, 1, 1.2 ], [ 4, 3, 1, 1.2 ], [ 8, 5, 1, 1.2 ], [ 12, 8, .8, 1.2 ], [ 16, 15, .3, 1.2 ], [ 18, 30, .45, .8 ], [ 23, 0, .8, .5 ], [ 24, 0, 1, 1.2 ], [ 27, 40, .8, 1.2 ] ];
        var BuyuFishLayerScript = cc.find("BuyuFishLayer", this.node.parent.parent).getComponent("BuyuFishLayer");
        var fishPrefab = BuyuFishLayerScript.FishPrefab;
        var item = cc.find("bgSprite/mask/content/item", this.node);
        for (var i = 0; i < data.length; i++) {
          var newItem = cc.instantiate(item);
          newItem.parent = item.parent;
          newItem.position = cc.v2(i % 5 * 280 - 550, -120 - 230 * Math.floor(i / 5));
          var label = newItem.getChildByName("rateLabel").getComponent(cc.Label);
          label.string = "\xd7" + data[i][1].toString();
          var fish = cc.instantiate(fishPrefab[data[i][0]]);
          fish.parent = newItem;
          fish.setScale(data[i][2]);
          fish.getComponent("BuyuFish").initFish(data[i][3], 0, data[i][0]);
          fish.removeComponent(cc.CircleCollider);
          fish.removeComponent(cc.BoxCollider);
          fish.removeComponent(cc.PolygonCollider);
        }
        item.destroy();
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuLockLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ea60RcphxKkY2pPBXhsK77", "BuyuLockLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tLines: [ cc.Node ],
        tLockFishID: [],
        BuyuFishLayerScript: null
      },
      onLoad: function onLoad() {
        this.tLockFishID = [ -1, -1, -1, -1 ];
        for (var i = 0; i < 4; i++) this.tLines[i].active = false;
        this.BuyuFishLayerScript = cc.find("BuyuFishLayer", this.node.parent).getComponent("BuyuFishLayer");
      },
      start: function start() {},
      update: function update(dt) {
        for (var i = 0; i < 4; i++) {
          if (this.tLockFishID[i] < 0) continue;
          var fish = this.BuyuFishLayerScript.findFish(this.tLockFishID[i]);
          if (null != fish) {
            var wp = fish.parent.convertToWorldSpaceAR(fish.position);
            var pos = this.node.convertToNodeSpaceAR(wp);
            var p0 = this.tLines[i].position;
            var nRad = Math.atan2(pos.y - p0.y, pos.x - p0.x);
            var nRotation = -nRad / Math.PI * 180 + 90;
            this.tLines[i].active = true;
            this.tLines[i].setRotation(nRotation);
            var nDis = Math.sqrt((pos.x - p0.x) * (pos.x - p0.x) + (pos.y - p0.y) * (pos.y - p0.y));
            this.tLines[i].height = nDis;
            this.tLines[i].getChildByName("target").y = nDis;
          } else {
            this.tLockFishID[i] = -1;
            this.tLines[i].active = false;
          }
        }
      },
      lockFish: function lockFish(nChairID, nFishID) {
        this.tLockFishID[nChairID] = nFishID;
      },
      unlockFish: function unlockFish(nChairID) {
        this.tLockFishID[nChairID] = -1;
        this.tLines[nChairID].active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4577c3HdSlJ2ZVAHRJJV9Gg", "BuyuMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        BuyuBgLayerScript: null,
        BuyuFishLayerScript: null,
        BuyuBulletLayerScript: null,
        BuyuCannonLayerScript: null,
        BuyuUserInfoLayerScript: null,
        BuyuOtherLayerScript: null,
        nUserID: 0,
        tUserInfo: null,
        tChair: null
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
          this.tUserInfo.nBulletRate = 0;
          this.tUserInfo.nBulletPrice = 0;
          this.tUserInfo.nBasePrice = 0;
        }
        this.tChair = {};
        this.nUserID = cc.ak.mc.userMgr.uid;
        this.BuyuBgLayerScript = this.node.parent.getChildByName("BuyuBgLayer").getComponent("BuyuBgLayer");
        this.BuyuFishLayerScript = this.node.parent.getChildByName("BuyuFishLayer").getComponent("BuyuFishLayer");
        this.BuyuBulletLayerScript = this.node.parent.getChildByName("BuyuBulletLayer").getComponent("BuyuBulletLayer");
        this.BuyuCannonLayerScript = this.node.parent.getChildByName("BuyuCannonLayer").getComponent("BuyuCannonLayer");
        this.BuyuUserInfoLayerScript = this.node.parent.getChildByName("BuyuUserInfoLayer").getComponent("BuyuUserInfoLayer");
        this.BuyuOtherLayerScript = this.node.parent.getChildByName("BuyuOtherLayer").getComponent("BuyuOtherLayer");
        this.registerMsg("SUB_S_USERINFO_PUSH", "S_UserInfo", "onUserInfo");
        this.registerMsg("SUB_S_UPDATE_BOSS_SCORE", "S_UpdateBossScore", "onRateChange");
        this.registerMsg("SUB_S_SET_BULLET_KIND", "S_SetBulletKind", "onBulletInfo");
        this.registerMsg("SUB_S_CHANGE_SCENE", "S_ChangeScene", "onChangeScene");
        this.registerMsg("SUB_S_GAME_SCENE", "S_GameScene", "onSceneInfo");
        this.registerMsg("SUB_S_FISH_TRACE", "S_FishTrace", "onNormalFish");
        this.registerMsg("SUB_S_REGULAR_FISH_INFO", "S_RegularFishInfo", "onShoal");
        this.registerMsg("SUB_S_USER_SHOOT", "S_UserShoot", "onFire");
        this.registerMsg("SUB_S_CAPTURE_FISH", "S_CaptureFish", "onCaptureFish");
        this.registerMsg("SUB_S_CAPTURE_BOMB_FISH", "S_CaptureBombFish", "onCaptureBomb");
        this.registerMsg("SUB_S_LOCK_FISH", "S_LockFish", "onLockFish");
        this.registerMsg("SUB_S_LEAVE_GAME_RESULT", "S_LeaveGameResult", "onLeave");
        this.sendMsg("SUB_C_ENTER_FINISH");
      },
      start: function start() {
        cc.ak.util.utils && cc.ak.util.utils.loadGameSceneFinish();
      },
      registerMsg: function registerMsg(strSubID, tabName, fnName) {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_buyu.SUB_CMD_GAME[strSubID], function(data) {
          cc.log("buyu " + fnName);
          var info = new proto.cmd_game_buyu[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          var data = _this[fnName](info);
          null != _this.BuyuBgLayerScript[fnName] && _this.BuyuBgLayerScript[fnName](data);
          null != _this.BuyuFishLayerScript[fnName] && _this.BuyuFishLayerScript[fnName](data);
          null != _this.BuyuBulletLayerScript[fnName] && _this.BuyuBulletLayerScript[fnName](data);
          null != _this.BuyuCannonLayerScript[fnName] && _this.BuyuCannonLayerScript[fnName](data);
          null != _this.BuyuUserInfoLayerScript[fnName] && _this.BuyuUserInfoLayerScript[fnName](data);
          null != _this.BuyuOtherLayerScript[fnName] && _this.BuyuOtherLayerScript[fnName](data);
        }, this);
      },
      isEnoughMoneyToFire: function isEnoughMoneyToFire() {
        var nPrice = this.tUserInfo.nBasePrice * this.tUserInfo.nBulletRate;
        return this.tUserInfo.nMoney >= nPrice;
      },
      onUserInfo: function onUserInfo(info) {
        this.tChair[info.ChairID] = info.Uid;
        if (info.Uid == this.nUserID) {
          this.tUserInfo = {};
          this.tUserInfo.nChairID = info.ChairID;
          this.tUserInfo.strNickname = info.NickName;
          this.tUserInfo.nMoney = info.AccountA + info.AccountB;
          this.tUserInfo.nBulletRate = 0;
          this.tUserInfo.nBulletPrice = 0;
          this.tUserInfo.nBasePrice = 0;
        }
        var data = {};
        data.isSelf = info.Uid == this.nUserID;
        data.nChairID = info.ChairID;
        data.strNickname = info.NickName;
        data.nMoney = info.AccountA + info.AccountB;
        return data;
      },
      onRateChange: function onRateChange(info) {
        var data = {};
        data.nFishID = info.fishId;
        data.nRate = info.nBossScore;
        return data;
      },
      onBulletInfo: function onBulletInfo(info) {
        if (info.chairId == this.tUserInfo.nChairID) {
          this.tUserInfo.nBulletRate = info.bulletKind;
          this.tUserInfo.nBulletPrice = info.costScore;
        }
        var data = {};
        data.nChairID = info.chairId;
        data.nBulletRate = info.bulletKind;
        data.nBulletPrice = info.costScore;
        return data;
      },
      onChangeScene: function onChangeScene(info) {
        var data = {};
        data.nSceneID = info.sceneKind;
        return data;
      },
      onSceneInfo: function onSceneInfo(info) {
        this.tUserInfo.nBasePrice = info.cellScore;
        this.tUserInfo.nBulletRate = info.userBulletKind[this.tUserInfo.nChairID];
        this.tUserInfo.nBulletPrice = this.tUserInfo.nBasePrice * this.tUserInfo.nBulletRate;
        this.tUserInfo.nMoney = info.userScores[this.tUserInfo.nChairID];
        var data = {};
        data.nSceneID = info.sceneKind;
        data.nBasePrice = info.cellScore;
        data.tRate = info.userBulletKind;
        data.tMoney = info.userScores;
        data.isWaiting = info.bWaiting;
        return data;
      },
      onNormalFish: function onNormalFish(info) {
        var data = {};
        data.nStartX = info.initX;
        data.nStartY = info.initY;
        data.nFishType = info.fishKind;
        data.nFishStartID = info.fishId;
        data.nFunType = info.funType;
        data.a = info.a;
        data.b = info.b;
        data.c = info.c;
        data.d = info.d;
        data.tOffsetPonts = info.offsetArray;
        return data;
      },
      onShoal: function onShoal(info) {
        var data = {};
        data.nShoalID = info.regularId;
        data.nStartFishID = info.beginfishId;
        return data;
      },
      onFire: function onFire(info) {
        var isSelf = info.chairId == this.tUserInfo.nChairID;
        isSelf && (this.tUserInfo.nMoney = info.currentScore);
        var data = {};
        data.isSelf = isSelf;
        data.nChairID = info.chairId;
        data.nRad = info.fRadian;
        data.nBulletRate = info.bulletKind;
        data.nMoney = info.currentScore;
        return data;
      },
      onCaptureFish: function onCaptureFish(info) {
        info.chairId == this.tUserInfo.nChairID && (this.tUserInfo.nMoney = info.userScore);
        var data = {};
        data.isSelf = info.chairId == this.tUserInfo.nChairID;
        data.nChairID = info.chairId;
        data.nFishID = info.fishId;
        data.nWinMoney = info.fishScore;
        data.nMoney = info.userScore;
        return data;
      },
      onCaptureBomb: function onCaptureBomb(info) {
        var data = {};
        data.isSelf = info.chairId == this.tUserInfo.nChairID;
        data.nChairID = info.chairId;
        data.nFishID = info.fishId;
        data.nFishScore = info.fishScore;
        data.nMoney = info.userScore;
        data.tFishID = info.attachInfo.fishId;
        data.tScore = info.attachInfo.score;
        return data;
      },
      onLockFish: function onLockFish(info) {
        var data = {};
        data.nChairID = info.chairId;
        data.nFishID = info.fishId;
        return data;
      },
      onLeave: function onLeave(info) {
        info.userId == cc.ak.mc.userMgr.uid && cc.ak.ui.loadLobbyScence();
        for (var i = 0; i < 4; i++) if (this.tChair[i] == info.userId) {
          var data = {};
          data.nChairID = i;
          return data;
        }
      },
      sendMsg: function sendMsg(strMsgID, data) {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_buyu.SUB_CMD_GAME[strMsgID], data);
        return true;
      },
      sendExitGame: function sendExitGame() {
        this.sendMsg("SUB_C_LEAVE_GAME_SCENE");
      },
      rsendSetBulletType: function rsendSetBulletType(isAdd) {
        if (isAdd && this.tUserInfo.nBulletRate >= 10) return;
        if (!isAdd && this.tUserInfo.nBulletRate <= 1) return;
        isAdd ? this.tUserInfo.nBulletRate++ : this.tUserInfo.nBulletRate--;
        var data = new proto.cmd_game_buyu.C_SetBulletKind();
        data.BulletKind = this.tUserInfo.nBulletRate;
        this.sendMsg("SUB_C_SET_BULLET_KIND", data);
      },
      sendShoot: function sendShoot(nBulletID, nRad) {
        var nPrice = this.tUserInfo.nBasePrice * this.tUserInfo.nBulletRate;
        this.tUserInfo.nMoney -= nPrice;
        var data = new proto.cmd_game_buyu.C_UserShoot();
        data.bulletId = nBulletID;
        data.fRadian = nRad;
        return this.sendMsg("SUB_C_USER_SHOOT", data);
      },
      sendHitFish: function sendHitFish(nFishID, nBulletID) {
        var data = new proto.cmd_game_buyu.C_HitFish();
        data.fishId = nFishID;
        data.bulletId = nBulletID;
        return this.sendMsg("SUB_C_HIT_FISH", data);
      },
      sendLockFish: function sendLockFish(nFishID) {
        var data = new proto.cmd_game_buyu.C_LockFish();
        data.fishId = nFishID;
        this.sendMsg("SUB_C_LOCK_FISH", data);
      },
      sendHitBomb: function sendHitBomb(nFishID, nBulletID, tFishID) {
        var str = "";
        for (var i = 0; i < tFishID.length; i++) str += "" == str ? tFishID[i].toString() : "," + tFishID[i].toString();
        var data = new proto.cmd_game_buyu.C_HitBombFish();
        data.fishId = nFishID;
        data.bulletId = nBulletID;
        data.fishIdBytes = str;
        this.sendMsg("SUB_C_HIT_BOMB_FISH", data);
      },
      sendGetFishRate: function sendGetFishRate(nFishID) {
        var data = new proto.cmd_game_buyu.C_FishScore();
        data.fishId = nFishID;
        this.sendMsg("SUB_C_FISH_SCORE", data);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuNumber: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19b91SOL9xLxYEg2fKNmc00", "BuyuNumber");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nType: 1,
        nAlign: 1,
        number1: null,
        number2: null,
        dot: null
      },
      onLoad: function onLoad() {
        this.setType(1);
      },
      start: function start() {},
      setType: function setType(nType) {
        this.nType = nType;
        for (var i = 1; i < 5; i++) cc.find("type" + i, this.node).active = i == nType;
        this.number1 = cc.find("type" + nType + "/number1", this.node);
        this.number2 = cc.find("type" + nType + "/number2", this.node);
        this.dot = cc.find("type" + nType + "/dot", this.node);
      },
      setAlign: function setAlign(nAlign) {
        if (nAlign < 0 || nAlign > 2) return;
        this.nAlign = nAlign;
      },
      setNumber: function setNumber(nNumber) {
        if (nNumber > Math.floor(nNumber)) {
          this.dot.active = true;
          this.number2.active = true;
          this.number1.anchorX = 1;
          var str = nNumber.toString();
          var arr = str.split(".");
          this.number1.getComponent(cc.Label).string = arr[0];
          this.number2.getComponent(cc.Label).string = arr[1];
          var seq = cc.sequence(cc.delayTime(0), cc.callFunc(function() {
            this.resetPosition();
          }.bind(this)));
          this.node.runAction(seq);
        } else {
          this.dot.active = false;
          this.number2.active = false;
          this.number1.x = 0;
          this.number1.getComponent(cc.Label).string = nNumber.toString();
          0 == this.nAlign && (this.number1.anchorX = 0);
          1 == this.nAlign && (this.number1.anchorX = .5);
          2 == this.nAlign && (this.number1.anchorX = 1);
        }
      },
      resetPosition: function resetPosition() {
        var tSpace = [ 12, 12, 2, 2 ];
        var nHalf = (this.number1.width + this.number2.width + 2 * tSpace[this.nType - 1]) / 2;
        if (0 == this.nAlign) {
          this.number1.x = this.number1.width;
          this.dot.x = this.number1.x + tSpace[this.nType - 1];
          this.number2.x = this.number1.x + 2 * tSpace[this.nType - 1];
        } else if (1 == this.nAlign) {
          this.number1.x = this.number1.width - nHalf;
          this.dot.x = this.number1.x + tSpace[this.nType - 1];
          this.number2.x = this.number1.x + 2 * tSpace[this.nType - 1];
        } else 2 == this.nAlign;
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuOtherLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c6828wfHNLS4cZcA9aXI7P", "BuyuOtherLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        BuyuMgrScript: null,
        shopPrefab: cc.Prefab,
        helpBtn: {
          default: null,
          type: cc.Node
        },
        settingBtn: {
          default: null,
          type: cc.Node
        },
        exitBtn: {
          default: null,
          type: cc.Node
        },
        rechargeBtn: {
          default: null,
          type: cc.Node
        },
        arrowBtn: {
          default: null,
          type: cc.Node
        },
        waiting: {
          default: null,
          type: cc.Node
        },
        shoal: {
          default: null,
          type: cc.Node
        },
        kick: {
          default: null,
          type: cc.Node
        },
        kickTime: {
          default: null,
          type: cc.Label
        },
        nFireTime: 0
      },
      onLoad: function onLoad() {
        this.BuyuMgrScript = this.node.parent.getChildByName("BuyuMgr").getComponent("BuyuMgr");
        this.helpBtn.on("click", this.onHelpBtn, this);
        this.settingBtn.on("click", this.onSettingBtn, this);
        this.exitBtn.on("click", this.onExitBtn, this);
        this.rechargeBtn.on("click", this.onRechargeBtn, this);
        this.arrowBtn.on("click", this.onArrowBtn, this);
        var seq = cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(0, 680)));
        this.arrowBtn.parent.runAction(seq);
      },
      start: function start() {},
      update: function update(dt) {
        this.nFireTime += dt;
        this.nFireTime > 76 && (this.nFireTime = 76);
        this.kick.active = this.nFireTime > 60;
        if (this.nFireTime > 60) {
          var nTime = 76 - this.nFireTime;
          this.kickTime.string = Math.floor(nTime).toString();
          if (nTime <= 0) {
            this.BuyuMgrScript.sendExitGame();
            this.nFireTime = -1e4;
          }
        }
      },
      onHelpBtn: function onHelpBtn() {
        cc.find("BuyuHelpPanel", this.node).active = true;
      },
      onSettingBtn: function onSettingBtn() {
        cc.find("BuyuSettingPanel", this.node).active = true;
      },
      onExitBtn: function onExitBtn() {
        cc.find("BuyuMgr", this.node.parent).getComponent("BuyuMgr").sendExitGame();
      },
      onRechargeBtn: function onRechargeBtn() {
        var shop = cc.instantiate(this.shopPrefab);
        shop.parent = this.node.parent;
      },
      onArrowBtn: function onArrowBtn() {
        var parent = this.arrowBtn.parent;
        if (540 == parent.y) {
          parent.y = 680;
          this.arrowBtn.setScale(1, 1);
        } else {
          parent.y = 540;
          this.arrowBtn.setScale(1, -1);
        }
      },
      onSceneInfo: function onSceneInfo(data) {
        this.waiting.active = data.isWaiting;
      },
      onNormalFish: function onNormalFish(data) {
        this.waiting.active = false;
      },
      onFire: function onFire(data) {
        data.isSelf && (this.nFireTime = 0);
      },
      onChangeScene: function onChangeScene(data) {
        this.shoal.x = 0;
        var seq = cc.sequence(cc.delayTime(2.5), cc.moveTo(8, cc.v2(-3e3, 0)));
        this.shoal.stopAllActions();
        this.shoal.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuSettingPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff68c0L2BpDEbUb4A64EYaK", "BuyuSettingPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        musicProgress: {
          default: null,
          type: cc.ProgressBar
        },
        effectProgress: {
          default: null,
          type: cc.ProgressBar
        },
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
        var vSize = cc.view.getVisibleSize();
        this.node.setContentSize(vSize);
        cc.find("bgSprite/closeBtn", this.node).on("click", this.onCloseBtn, this);
        cc.find("bgSprite/musicSlider", this.node).on("slide", this.onMusicSlide, this);
        cc.find("bgSprite/effectSlider", this.node).on("slide", this.onEffectSlide, this);
        if (null == cc.ak || null == cc.ak.util.audioMgr) {
          this.musicProgress.progress = 1;
          this.effectProgress.progress = 1;
          this.musicSlider.progress = 1;
          this.effectSlider.progress = 1;
        } else {
          this.musicProgress.progress = cc.ak.util.audioMgr.getBGMVolume();
          this.effectProgress.progress = cc.ak.util.audioMgr.getSFXVolume();
          this.musicSlider.progress = cc.ak.util.audioMgr.getBGMVolume();
          this.effectSlider.progress = cc.ak.util.audioMgr.getSFXVolume();
        }
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        this.node.active = false;
      },
      onMusicSlide: function onMusicSlide(event) {
        this.musicProgress.progress = event.progress;
        cc.ak.util.audioMgr.setBGMVolume(event.progress);
      },
      onEffectSlide: function onEffectSlide(event) {
        this.effectProgress.progress = event.progress;
        cc.ak.util.audioMgr.setSFXVolume(event.progress);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuSoundMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12894B9wydPl7vsb252Lzc0", "BuyuSoundMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgm: {
          default: [],
          type: cc.AudioClip
        },
        nCurBgm: 0,
        goldcoin: {
          default: null,
          type: cc.AudioClip
        },
        nGoldID: 0,
        silvercoin: {
          default: null,
          type: cc.AudioClip
        },
        nSilverID: 0,
        fish8: {
          default: [],
          type: cc.AudioClip
        },
        fish12: {
          default: [],
          type: cc.AudioClip
        },
        fish13: {
          default: [],
          type: cc.AudioClip
        },
        fish14: {
          default: [],
          type: cc.AudioClip
        },
        fish15: {
          default: [],
          type: cc.AudioClip
        },
        fish16: {
          default: [],
          type: cc.AudioClip
        },
        fish17: {
          default: [],
          type: cc.AudioClip
        },
        fish26: {
          default: [],
          type: cc.AudioClip
        },
        fish27: {
          default: [],
          type: cc.AudioClip
        },
        fish28: {
          default: [],
          type: cc.AudioClip
        },
        fire: {
          default: null,
          type: cc.AudioClip
        },
        seawave: {
          default: null,
          type: cc.AudioClip
        },
        net: {
          default: null,
          type: cc.AudioClip
        },
        getscore: {
          default: null,
          type: cc.AudioClip
        },
        bigprize: {
          default: null,
          type: cc.AudioClip
        }
      },
      start: function start() {},
      playEffect: function playEffect(strName) {
        this.current = cc.audioEngine.play(this[strName], false, 1);
      },
      playBgMusic: function playBgMusic(nID) {
        cc.ak.util.audioMgr.playBGM(this.bgm[nID]);
      },
      playFishDead: function playFishDead(nFishType) {
        nFishType < 15 && this.playEffect("getscore");
        var arr = this["fish" + nFishType];
        if (null == arr) return;
        var nIndex = Math.floor(Math.random() * arr.length);
        cc.audioEngine.play(arr[nIndex], false, 1);
      },
      playGoldCoin: function playGoldCoin() {
        cc.audioEngine.stop(this.nGoldID);
        this.nGoldID = cc.audioEngine.play(this.goldcoin, false, 1);
      },
      playSilverCoin: function playSilverCoin() {
        cc.audioEngine.stop(this.nSilverID);
        this.nSilverID = cc.audioEngine.play(this.silvercoin, false, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  BuyuUserInfoLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "240594tAjhKA62r3jt4AtLr", "BuyuUserInfoLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        user: [ cc.Node ]
      },
      onLoad: function onLoad() {},
      start: function start() {
        for (var i = 0; i < 4; i++) {
          this.user[i].active = false;
          this.user[i].getChildByName("moneyLabel").getComponent("BuyuNumber").setType(4);
          this.user[i].getChildByName("moneyLabel").getComponent("BuyuNumber").setAlign(0);
        }
      },
      setMoney: function setMoney(nChairID, nMoney) {
        nMoney = Math.floor(nMoney / 10);
        nMoney /= 100;
        this.user[nChairID].getChildByName("moneyLabel").getComponent("BuyuNumber").setNumber(nMoney);
      },
      onUserInfo: function onUserInfo(data) {
        this.setMoney(data.nChairID, data.nMoney);
        this.user[data.nChairID].getChildByName("nicknameLabel").getComponent(cc.Label).string = data.strNickname.toString();
        this.user[data.nChairID].active = true;
        if (data.isSelf) {
          var nRotation = data.nChairID > 1 ? 180 : 0;
          this.node.setRotation(nRotation);
          var tWpos = [];
          for (var i = 0; i < 4; i++) {
            this.user[i].setRotation(nRotation);
            tWpos[i] = this.node.convertToWorldSpaceAR(this.user[i].position);
          }
          cc.find("BuyuEffectLayer", this.node.parent).getComponent("BuyuEffectLayer").setUserInfoPos(tWpos);
          cc.find("BuyuEffectLayer", this.node.parent).getComponent("BuyuEffectLayer").setSelfChairID(data.nChairID);
        }
      },
      onSceneInfo: function onSceneInfo(data) {
        for (var i = 0; i < 4; i++) this.setMoney(i, data.tMoney[i]);
      },
      onFire: function onFire(data) {
        this.setMoney(data.nChairID, data.nMoney);
      },
      onCaptureFish: function onCaptureFish(data) {
        this.setMoney(data.nChairID, data.nMoney);
      },
      onCaptureBomb: function onCaptureBomb(data) {
        this.setMoney(data.nChairID, data.nMoney);
      },
      onLeave: function onLeave(data) {
        this.user[data.nChairID].active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  buyuInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5787cWt1JVEeITPyX+Oy2NC", "buyuInit");
    "use strict";
    var BuyuInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "buyu"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("buyu module init!");
        bundle.buyu = {};
        bundle.buyu.key = {};
        bundle.buyu.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initBuyuData: function initBuyuData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.buyu.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.buyu.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.buyu.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.buyu.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + BuyuInit.id, function(data) {
          bundle.buyu.data.set(bundle.buyu.key.data.ENTER_ROOM_SUCC, data);
          if ("buyuGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("buyuGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + BuyuInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== BuyuInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = BuyuInit;
    cc._RF.pop();
  }, {} ],
  cmd_game_buyu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8425TO16tGf669wSBpcynR", "cmd_game_buyu");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_buyu = {};
    proto.cmd_game_buyu.__cfg = {};
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
      cfg.S_UpdateBossScore = {
        1: {
          na: "fishId",
          ty: "int"
        },
        2: {
          na: "nBossScore",
          ty: "int"
        }
      };
      cfg.S_SetBulletKind = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "bulletKind",
          ty: "int"
        },
        3: {
          na: "costScore",
          ty: "int"
        }
      };
      cfg.S_ChangeScene = {
        1: {
          na: "sceneKind",
          ty: "int"
        }
      };
      cfg.S_GameScene = {
        1: {
          na: "sceneKind",
          ty: "int"
        },
        2: {
          na: "cellScore",
          ty: "int"
        },
        3: {
          na: "bWaiting",
          ty: "int"
        },
        4: {
          na: "userBulletKind",
          ty: "int",
          ar: 1
        },
        5: {
          na: "userScores",
          ty: "int",
          ar: 1
        }
      };
      cfg.Offset = {
        1: {
          na: "offsetX",
          ty: "int",
          ar: 1
        },
        2: {
          na: "offsetY",
          ty: "int",
          ar: 1
        }
      };
      cfg.AttachInfo = {
        1: {
          na: "fishId",
          ty: "int",
          ar: 1
        },
        2: {
          na: "score",
          ty: "int",
          ar: 1
        }
      };
      cfg.S_FishTrace = {
        1: {
          na: "initX",
          ty: "int"
        },
        2: {
          na: "initY",
          ty: "int"
        },
        3: {
          na: "fishKind",
          ty: "int"
        },
        4: {
          na: "fishId",
          ty: "int"
        },
        5: {
          na: "funType",
          ty: "int"
        },
        6: {
          na: "a",
          ty: "float"
        },
        7: {
          na: "b",
          ty: "float"
        },
        8: {
          na: "c",
          ty: "float"
        },
        9: {
          na: "d",
          ty: "float"
        },
        10: {
          na: "offsetArray",
          ty: "Offset"
        }
      };
      cfg.S_RegularFishInfo = {
        1: {
          na: "regularId",
          ty: "int"
        },
        2: {
          na: "beginfishId",
          ty: "int"
        }
      };
      cfg.S_UserShoot = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "fRadian",
          ty: "float"
        },
        3: {
          na: "bulletKind",
          ty: "int"
        },
        4: {
          na: "currentScore",
          ty: "int"
        }
      };
      cfg.S_CaptureFish = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "fishId",
          ty: "int"
        },
        3: {
          na: "fishScore",
          ty: "int"
        },
        4: {
          na: "userScore",
          ty: "int"
        }
      };
      cfg.S_CaptureBombFish = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "fishId",
          ty: "int"
        },
        3: {
          na: "fishScore",
          ty: "int"
        },
        4: {
          na: "userScore",
          ty: "int"
        },
        5: {
          na: "attachInfo",
          ty: "AttachInfo"
        }
      };
      cfg.S_LockFish = {
        1: {
          na: "chairId",
          ty: "int"
        },
        2: {
          na: "fishId",
          ty: "int"
        }
      };
      cfg.S_LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.C_SetBulletKind = {
        1: {
          na: "BulletKind",
          ty: "int"
        }
      };
      cfg.C_UserShoot = {
        1: {
          na: "bulletId",
          ty: "int"
        },
        2: {
          na: "fRadian",
          ty: "float"
        }
      };
      cfg.C_HitFish = {
        1: {
          na: "fishId",
          ty: "int"
        },
        2: {
          na: "bulletId",
          ty: "int"
        }
      };
      cfg.C_HitBombFish = {
        1: {
          na: "fishId",
          ty: "int"
        },
        2: {
          na: "bulletId",
          ty: "int"
        },
        3: {
          na: "fishIdBytes",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.C_FishScore = {
        1: {
          na: "fishId",
          ty: "int"
        }
      };
      cfg.C_LockFish = {
        1: {
          na: "fishId",
          ty: "int"
        }
      };
    })(proto.cmd_game_buyu.__cfg);
    proto.cmd_game_buyu.S_UserInfo = function() {
      this.__className = "proto.cmd_game_buyu.S_UserInfo";
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
    proto.cmd_game_buyu.S_UpdateBossScore = function() {
      this.__className = "proto.cmd_game_buyu.S_UpdateBossScore";
      this.fishId = 0;
      this.nBossScore = 0;
    };
    proto.cmd_game_buyu.S_SetBulletKind = function() {
      this.__className = "proto.cmd_game_buyu.S_SetBulletKind";
      this.chairId = 0;
      this.bulletKind = 0;
      this.costScore = 0;
    };
    proto.cmd_game_buyu.S_ChangeScene = function() {
      this.__className = "proto.cmd_game_buyu.S_ChangeScene";
      this.sceneKind = 0;
    };
    proto.cmd_game_buyu.S_GameScene = function() {
      this.__className = "proto.cmd_game_buyu.S_GameScene";
      this.sceneKind = 0;
      this.cellScore = 0;
      this.bWaiting = 0;
      this.userBulletKind = null;
      this.userScores = null;
    };
    proto.cmd_game_buyu.Offset = function() {
      this.__className = "proto.cmd_game_buyu.Offset";
      this.offsetX = null;
      this.offsetY = null;
    };
    proto.cmd_game_buyu.AttachInfo = function() {
      this.__className = "proto.cmd_game_buyu.AttachInfo";
      this.fishId = null;
      this.score = null;
    };
    proto.cmd_game_buyu.S_FishTrace = function() {
      this.__className = "proto.cmd_game_buyu.S_FishTrace";
      this.initX = 0;
      this.initY = 0;
      this.fishKind = 0;
      this.fishId = 0;
      this.funType = 0;
      this.a = null;
      this.b = null;
      this.c = null;
      this.d = null;
      this.offsetArray = null;
    };
    proto.cmd_game_buyu.S_RegularFishInfo = function() {
      this.__className = "proto.cmd_game_buyu.S_RegularFishInfo";
      this.regularId = 0;
      this.beginfishId = 0;
    };
    proto.cmd_game_buyu.S_UserShoot = function() {
      this.__className = "proto.cmd_game_buyu.S_UserShoot";
      this.chairId = 0;
      this.fRadian = null;
      this.bulletKind = 0;
      this.currentScore = 0;
    };
    proto.cmd_game_buyu.S_CaptureFish = function() {
      this.__className = "proto.cmd_game_buyu.S_CaptureFish";
      this.chairId = 0;
      this.fishId = 0;
      this.fishScore = 0;
      this.userScore = 0;
    };
    proto.cmd_game_buyu.S_CaptureBombFish = function() {
      this.__className = "proto.cmd_game_buyu.S_CaptureBombFish";
      this.chairId = 0;
      this.fishId = 0;
      this.fishScore = 0;
      this.userScore = 0;
      this.attachInfo = null;
    };
    proto.cmd_game_buyu.S_LockFish = function() {
      this.__className = "proto.cmd_game_buyu.S_LockFish";
      this.chairId = 0;
      this.fishId = 0;
    };
    proto.cmd_game_buyu.S_LeaveGameResult = function() {
      this.__className = "proto.cmd_game_buyu.S_LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_buyu.C_SetBulletKind = function() {
      this.__className = "proto.cmd_game_buyu.C_SetBulletKind";
      this.BulletKind = 0;
    };
    proto.cmd_game_buyu.C_UserShoot = function() {
      this.__className = "proto.cmd_game_buyu.C_UserShoot";
      this.bulletId = 0;
      this.fRadian = null;
    };
    proto.cmd_game_buyu.C_HitFish = function() {
      this.__className = "proto.cmd_game_buyu.C_HitFish";
      this.fishId = 0;
      this.bulletId = 0;
    };
    proto.cmd_game_buyu.C_HitBombFish = function() {
      this.__className = "proto.cmd_game_buyu.C_HitBombFish";
      this.fishId = 0;
      this.bulletId = 0;
      this.fishIdBytes = "";
    };
    proto.cmd_game_buyu.C_FishScore = function() {
      this.__className = "proto.cmd_game_buyu.C_FishScore";
      this.fishId = 0;
    };
    proto.cmd_game_buyu.C_LockFish = function() {
      this.__className = "proto.cmd_game_buyu.C_LockFish";
      this.fishId = 0;
    };
    proto.cmd_game_buyu.SUB_CMD_GAME = {
      SUB_S_USERINFO_PUSH: 4,
      SUB_S_UPDATE_BOSS_SCORE: 6,
      SUB_S_SET_BULLET_KIND: 7,
      SUB_S_CHANGE_SCENE: 8,
      SUB_S_GAME_SCENE: 9,
      SUB_S_FISH_TRACE: 10,
      SUB_S_REGULAR_FISH_INFO: 11,
      SUB_S_USER_SHOOT: 12,
      SUB_S_CAPTURE_FISH: 13,
      SUB_S_CAPTURE_BOMB_FISH: 14,
      SUB_S_LOCK_FISH: 15,
      SUB_S_LEAVE_GAME_RESULT: 16,
      SUB_C_ENTER_FINISH: 35,
      SUB_C_LEAVE_GAME_SCENE: 36,
      SUB_C_SET_BULLET_KIND: 37,
      SUB_C_USER_SHOOT: 38,
      SUB_C_HIT_FISH: 39,
      SUB_C_HIT_BOMB_FISH: 40,
      SUB_C_FISH_SCORE: 41,
      SUB_C_LOCK_FISH: 42
    };
    proto.cmd_game_buyu.CONNECT_TYPE = {
      TYPE_RECONNECT: 0,
      TYPE_WATCHER: 1
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "buyuInit", "BuyuBgLayer", "BuyuBullet", "BuyuBulletLayer", "BuyuCannon", "BuyuCannonLayer", "BuyuCoin", "BuyuEffectLayer", "BuyuFish", "BuyuFishLayer", "BuyuHelpPanel", "BuyuLockLayer", "BuyuMgr", "BuyuNumber", "BuyuOtherLayer", "BuyuSettingPanel", "BuyuSoundMgr", "BuyuUserInfoLayer", "cmd_game_buyu" ]);