"use strict"; // Created by "WixCore.Net" on 12.02.2023.

let methods = require('../modules/methods');
let user = require('../user');

module.exports = async () => {
    var point = {
        one: [
            new mp.Vector3(-1083.1515, -2721.0405, -8.530131),      // 0
            new mp.Vector3(-880.7977, -2311.3948, -12.852799),      // 1
            new mp.Vector3(-533.6171, -1267.0789, 25.78159),        // 2
            new mp.Vector3(228.90434, -1204.3397, 37.782658),       // 3
            new mp.Vector3(-298.34442, -332.07004, 8.943094),       // 4
            new mp.Vector3(-815.8392, -134.33536, 18.8303),         // 5
            new mp.Vector3(-1355.7189, -465.03162, 13.925318),      // 6
            new mp.Vector3(-502.79358, -676.7152, 10.688962),       // 7
            new mp.Vector3(-207.57571, -1017.8509, 29.018295),      // 8
            new mp.Vector3(102.25202, -1714.7284, 28.992487),       // 9
        ]
    }

    function blips() {
        point.one.forEach(arg => {
            methods.createBlip(arg, 36, 0, 0.7, 'Метрополитен');
        });
    }

    function checkpoints() {
        point.one.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 0.5, -1, [139, 195, 74, 100]);
        });
    }

    function colshapes(player) {
        point.one.forEach(arg => {
            if (methods.distanceToPos(arg, player.position) < 1.4) {
                player.call('wixcore::security_key::features::metro:teleport:for:client');
                return;
            }
        })
    }

    function push() {
        try {
            blips();
            checkpoints();
        } catch (e) {
            methods.debug('[ERROR] :: [WixCore.Feature.Metro]', e);
        }
    }

    mp.events.addRemoteCounted("onKeyPress:E", (player) => {
        if (!user.isLogin(player)) {
            return;
        }
        colshapes(player);
    });

    push();
};