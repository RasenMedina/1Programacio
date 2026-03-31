# SAPAMERCAT
Aplicació en Java que simula un sistema de gestió d’un supermercat amb carro de la compra, magatzem i control de stock.

--------------------------------

# FUNCIONALITATS

# Productes
- Gestió de diferents tipus de productes:
  - Alimentació (amb data de caducitat)
  - Tèxtil (amb composició)
  - Electrònica (amb dies de garantia)

# Carro de la compra
- Afegir productes al carro
- Mostrar contingut del carro
- Generar tiquet de compra

# Magatzem
- Control de stock de productes
- Llistat de productes d’alimentació ordenats per caducitat
- Llistat de tèxtils ordenats per composició
- Historial de tiquets generats

# Estructures de dades utilitzades
- `Map<String, Producte>` → magatzem de productes
- `Map<String, Integer>` → control de stock
- `Map<Producte, Integer>` → carro de la compra
- `List<String>` → historial de tiquets

# Decisions de disseny
- El codi de barres és la clau única dels productes
- Separació clara entre magatzem i stock
- Ús de `Comparator` per ordenar llistats
- Ús de *lambda expressions* per simplificar recorreguts
- Ús de streams i del model MVC
- Aplicació de programació orientada a objectes (POO)

# Tecnologies utilitzades
- Java
- Java Collections Framework (Map, List)
- Programació orientada a objectes (POO)
- Git & GitHub

-----------------------------

# Autor

Projecte realitzat com a pràctica de programació en Java.