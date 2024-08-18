export default function PricesTable() {
  return (
    <table className="gradient mx-auto my-5 rounded-3xl text-center">
      <thead>
        <tr>
          <th colSpan={4} className="rounded-t-3xl bg-primary-main">
            Тарифы на услуги инструктора в сезоне{" "}
            <span className="whitespace-nowrap">2023/2024 гг.</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>Продолжи&shy;тельность занятия</td>
          <td colSpan={3}>Стоимость за 1 человека в руб.</td>
        </tr>
        <tr>
          <td>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">Низкий сезон</span>
              <span>до 15.12.23</span>
              <span>после 01.04.24</span>
            </div>
          </td>
          <td>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">Средний сезон</span>
              <span>16.12.23 - 29.12.23</span>
              <span>09.01.24 - 09.02.24</span>
              <span>16.03.24 - 31.03.24</span>
            </div>
          </td>
          <td>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold">Высокий сезон</span>
              <span>30.12.23 - 08.01.24</span>
              <span>10.02.24 - 15.03.24</span>
            </div>
          </td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            Индивидуальные занятия
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 час</td>
          <td>3500</td>
          <td>4000</td>
          <td>4500</td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>4500</td>
          <td>5000</td>
          <td>5500</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>5500</td>
          <td>6000</td>
          <td>6500</td>
        </tr>
        <tr>
          <td colSpan={4} className="font-semibold">
            Абонемент индивидуальный
          </td>
        </tr>
        <tr>
          <td>3 занятия (по 2 ч.)</td>
          <td>15500</td>
          <td>17000</td>
          <td>18500</td>
        </tr>
        <tr>
          <td>5 занятий (по 2 ч.)</td>
          <td>25000</td>
          <td>27000</td>
          <td>29000</td>
        </tr>
        <tr>
          <td>10 занятий (по 2 ч.)</td>
          <td>46000</td>
          <td>51000</td>
          <td>55000</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            Групповые занятия
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="font-semibold">
            2 человека
          </td>
        </tr>
        <tr>
          <td>1 час</td>
          <td>2400</td>
          <td>2800</td>
          <td>3100</td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>3100</td>
          <td>3500</td>
          <td>3800</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>3800</td>
          <td>4200</td>
          <td>4500</td>
        </tr>
        <tr>
          <td colSpan={4}>
            <div className="flex flex-col">
              <span className="font-semibold">Абонемент</span>
              <span className="italic">(группа 2 чел.)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>3 занятия (по 2 ч.)</td>
          <td>10800</td>
          <td>12000</td>
          <td>12800</td>
        </tr>
        <tr>
          <td>5 занятий (по 2 ч.)</td>
          <td>17100</td>
          <td>18900</td>
          <td>20200</td>
        </tr>
        <tr>
          <td>10 занятий (по 2 ч.)</td>
          <td>32300</td>
          <td>35700</td>
          <td>38200</td>
        </tr>
        <tr>
          <td colSpan={4} className="font-semibold">
            Группа 3-5 чел.
          </td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>2300</td>
          <td>2600</td>
          <td>2800</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>2800</td>
          <td>3100</td>
          <td>3300</td>
        </tr>
        <tr>
          <td colSpan={4}>
            <div className="flex flex-col">
              <span className="font-semibold">Абонемент</span>
              <span className="italic">(группа 3-5 чел.)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>3 занятия (по 2 ч.)</td>
          <td>7900</td>
          <td>8800</td>
          <td>9400</td>
        </tr>
        <tr>
          <td>5 занятий (по 2 ч.)</td>
          <td>12600</td>
          <td>13900</td>
          <td>14800</td>
        </tr>
        <tr>
          <td>10 занятий (по 2 ч.)</td>
          <td>23800</td>
          <td>26300</td>
          <td>28000</td>
        </tr>
        <tr>
          <td colSpan={4}>
            <div className="flex flex-col">
              <span className="font-semibold">Группа 6-12 чел.</span>
              <span className="italic">(2 инструктора)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>3800</td>
          <td>4200</td>
          <td>4500</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>
                Неподготовленный склон, бугры,{" "}
                <span className="whitespace-nowrap">разбитый склон</span>
              </span>
              <span className="font-normal italic">
                обучение инструктором повышенной категории
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="font-semibold">
            Индивидуальные занятия
          </td>
        </tr>
        <tr>
          <td>1 час</td>
          <td>4000</td>
          <td>4500</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>5000</td>
          <td>5500</td>
          <td>6000</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>6000</td>
          <td>6500</td>
          <td>7000</td>
        </tr>
        <tr>
          <td colSpan={4} className="font-semibold">
            Группа 2-5 чел.
          </td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>3500</td>
          <td>3800</td>
          <td>4200</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>4200</td>
          <td>4500</td>
          <td>4900</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>Фристайл</span>
              <span className="font-normal italic">
                обучение инструктором специальной квалификации
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="font-semibold">
            Индивидуальные занятия
          </td>
        </tr>
        <tr>
          <td>1 час</td>
          <td>4000</td>
          <td>4500</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>5000</td>
          <td>5500</td>
          <td>6000</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>6000</td>
          <td>6500</td>
          <td>7000</td>
        </tr>
        <tr>
          <td colSpan={4} className="font-semibold">
            Группа 2-5 чел.
          </td>
        </tr>
        <tr>
          <td>1,5 часа</td>
          <td>3500</td>
          <td>3800</td>
          <td>4200</td>
        </tr>
        <tr>
          <td>2 часа</td>
          <td>4200</td>
          <td>4500</td>
          <td>4900</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>Курс Спец-карвинг по методике UPS</span>
              <span className="font-normal italic">
                инвентарь входит в стоимость
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="font-semibold">
            Индивидуальные занятия
          </td>
        </tr>
        <tr>
          <td>Абонемент 2 часа</td>
          <td>7700</td>
          <td>8800</td>
          <td>11000</td>
        </tr>
        <tr>
          <td>Абонемент 4 часа</td>
          <td>15400</td>
          <td>17600</td>
          <td>22000</td>
        </tr>
        <tr>
          <td>Абонемент 6 часов</td>
          <td>19800</td>
          <td>24200</td>
          <td>29700</td>
        </tr>
        <tr>
          <td>Абонемент 10 часов</td>
          <td>29700</td>
          <td>33000</td>
          <td>39600</td>
        </tr>
        <tr>
          <td>Абонемент 12 часов</td>
          <td>33000</td>
          <td>37400</td>
          <td>46200</td>
        </tr>
        <tr>
          <td>Абонемент 16 часов</td>
          <td>38500</td>
          <td>44000</td>
          <td>55000</td>
        </tr>
        <tr>
          <td colSpan={4} className="font-semibold">
            Группа 2-5 чел.
          </td>
        </tr>
        <tr>
          <td>Абонемент 4 часа</td>
          <td>11000</td>
          <td>13200</td>
          <td>17600</td>
        </tr>
        <tr>
          <td>Абонемент 6 часов</td>
          <td>14600</td>
          <td>17600</td>
          <td>22000</td>
        </tr>
        <tr>
          <td>Абонемент 10 часов</td>
          <td>22000</td>
          <td>26400</td>
          <td>33000</td>
        </tr>
        <tr>
          <td>Абонемент 12 часов</td>
          <td>23800</td>
          <td>29700</td>
          <td>37400</td>
        </tr>
        <tr>
          <td>Абонемент 16 часов</td>
          <td>29700</td>
          <td>35200</td>
          <td>41800</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>&quot;CAMP&quot; (Курсовые занятия)</span>
              <span className="font-normal italic">Группа 5-10 чел.</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3 дня</td>
          <td>15000</td>
          <td>17000</td>
          <td>20000</td>
        </tr>
        <tr>
          <td>5 дней</td>
          <td>25000</td>
          <td>27000</td>
          <td>30000</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>VIP (День на склоне)</span>
              <span className="font-normal italic">
                Сопровождение и обучение инструктором повышенной категории
              </span>
              <span className="font-normal">
                с 9:00 до 15:00 или с 10:00 до 16:00
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 чел.</td>
          <td>15500</td>
          <td>17000</td>
          <td>18500</td>
        </tr>
        <tr>
          <td>2 чел.</td>
          <td>10800</td>
          <td>11900</td>
          <td>12800</td>
        </tr>
        <tr>
          <td>3 чел.</td>
          <td>7900</td>
          <td>8800</td>
          <td>9400</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>&quot;Корпоратив&quot;</span>
              <span className="font-normal italic">
                Организация и обслуживание спортивно-развлекательных мероприятий
              </span>
              <span className="font-normal italic">(от 10-ти чел.)</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6 часов</td>
          <td>От 140000</td>
          <td>От 160000</td>
          <td>От 170000</td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th colSpan={4} className="bg-primary-main">
            <div className="flex flex-col">
              <span>&quot;Теория&quot;</span>
              <span className="font-normal italic">
                Проведение теоретических занятий
              </span>
              <span className="font-normal italic">
                (от 5-ти чел., 45 мин.)
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 занятие</td>
          <td>800</td>
          <td>1000</td>
          <td>1300</td>
        </tr>
        <tr>
          <td>2 занятия</td>
          <td>1500</td>
          <td>1900</td>
          <td>2400</td>
        </tr>
        <tr>
          <td>3 занятия</td>
          <td>2000</td>
          <td>2700</td>
          <td>3500</td>
        </tr>
      </tbody>
    </table>
  );
}
