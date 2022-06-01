## All hospital in İzmir city with GIS (Google Maps API)

It locates all hospitals and health institutions in the city of Izmir on the map with latitude-longitude data.

A separate rest full API Json connection has been established for each different health institution (hospital-pharmacy-blood collection centre).

# Web service list

-> https://openapi.izmir.bel.tr/api/ibb/cbs/agizvedissagligimerkezleri <br>
-> https://openapi.izmir.bel.tr/api/ibb/cbs/anacocuksagligimerkezleri <br>
-> https://openapi.izmir.bel.tr/api/ibb/cbs/hastaneler <br>
-> https://openapi.izmir.bel.tr/api/ibb/cbs/kanmerkezleri <br>
-> https://openapi.izmir.bel.tr/api/ibb/cbs/laboratuvarlar <br>
-> https://openapi.izmir.bel.tr/api/ibb/cbs/veterinerlikler <br>

# What's different about this project?

In JS, 6 different web service links and 6 different icon images were defined in an array. Since the starting parameter of the links here is fixed, a new variable has been defined and code duplication has been reduced.

With the foreach loop, both the icon and the json web service connection were made, and the same process was executed faster with 10 lines instead of 100 lines.
