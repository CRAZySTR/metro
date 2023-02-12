"use strict"; // Created by "WixCore.Net" on 12.02.2023.

import UIMenu from '../modules/menu';
import methods from '../modules/methods';
import user from '../user';

mp.events.add('wixcore::security_key::features::metro:teleport:for:client', () => {
    if (methods.isBlackout()) {
        mp.game.ui.notifications.show(`~r~В городе отсутствует свет`);
        return;
    }

    UIMenu.Menu.Create(`Метрополитен`, `~b~Спавн поездов пока в разработке ..`, 'metroTeleport', false, false);
    UIMenu.Menu.AddMenuItem("Международный аэропорт №1", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket1' });
    UIMenu.Menu.AddMenuItem("Международный аэропорт №2", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket2' });
    UIMenu.Menu.AddMenuItem("Puerto Del Sol", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket3' });
    UIMenu.Menu.AddMenuItem("Strawberry", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket4' });
    UIMenu.Menu.AddMenuItem("Рокфорд-Хиллз №1", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket5' });
    UIMenu.Menu.AddMenuItem("Рокфорд-Хиллз №2", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket6' });
    UIMenu.Menu.AddMenuItem("Дель Пьеро", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket7' });
    UIMenu.Menu.AddMenuItem("Сан-Андреас-авеню", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket8' });
    UIMenu.Menu.AddMenuItem("Pillbox South", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket9' });
    UIMenu.Menu.AddMenuItem("Davis", "Стоимость проезда в метрополитене: $100", { doName: 'priceTicket10' });
    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: 'closeMenu' });
    UIMenu.Menu.Draw();
    UIMenu.Menu.OnSelect.Add(async (item) => {
        UIMenu.Menu.HideMenu();
        var priceTicket = 100;
        if (item.doName == 'priceTicket1') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-1083.1515, -2721.0405, -7.530131);
            return;
        } else if (item.doName == 'priceTicket2') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-880.7977, -2311.3948, -11.852799);
            return;
        } else if (item.doName == 'priceTicket3') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-533.6171, -1267.0789, 26.78159);
            return;
        } else if (item.doName == 'priceTicket4') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(228.90434, -1204.3397, 38.782658);
            return;
        } else if (item.doName == 'priceTicket5') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-298.34442, -332.07004, 9.943094);
            return;
        } else if (item.doName == 'priceTicket6') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-815.8392, -134.33536, 19.8303);
            return;
        } else if (item.doName == 'priceTicket7') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-1355.7189, -465.03162, 14.925318);
            return;
        } else if (item.doName == 'priceTicket8') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-502.79358, -676.7152, 11.688962);
            return;
        } else if (item.doName == 'priceTicket9') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-207.57571, -1017.8509, 30.018295);
            return;
        } else if (item.doName == 'priceTicket10') {
            user.teleport(102.25202, -1714.7284, 29.992487);
            return;
        }
    });
});