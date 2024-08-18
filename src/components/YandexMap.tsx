"use client";

import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
    <YMaps>
      <Map
        className="mx-auto h-[20rem] w-[19rem] md:w-[43rem]"
        defaultState={{
          center: [43.542694, 41.181566],
          zoom: 15,
        }}
        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      >
        <Placemark
          geometry={[43.542694, 41.181566]}
          properties={{
            iconContent: "",
            iconCaption: "АрхызПарк",
            hintContent: "",
            balloonContent: "АрхызПарк",
            balloonContentHeader: "",
          }}
        />
        <ZoomControl />
      </Map>
    </YMaps>
  );
}
