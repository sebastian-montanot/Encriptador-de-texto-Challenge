# Encriptador-de-texto-Challenge
---
Este proyecto es realizado con **HTML, CSS y JS** como parte del challenge "sprint 01" de *Oracle Next Education*, que consiste en realizar un encriptador de texto basado en un modelo presentado en [Figma](https://www.figma.com/file/trP3p5nEh7XUyB3n2bomjP/Alura-Challenge---Desaf%C3%ADo-1---L%C3%B3gica?node-id=0%3A1)

## Acerca de
El objetivo principal es ingresar un mensaje normal y encriptarlo o ingresar un mensaje encriptado y desencriptarlo para poder tener una conversación secreta con otra persona.
### Como funciona
El texto ingresado recibirá un modificación en sus vocales, de tal manera que la palabra natural se distorcione lo suficiente para evitar ser descifrada.
El código buscará letra por letra del string e irá remplazando por la la vocal encriptada según corresponda.
Las "llaves" de encriptación son las siguientes:

|Letra|Encriptación|
|---|---|
|a|ai|
|e|enter|
|i|imes|
|o|ober|
|u|ufat|

Para mayor eficiencia el mensaje a encriptar debe ser ingresado en minusculas y sin carácteres especiales, ya que esto permitiría a un externo encontrar un patrón de desencriptación facilmente.
## Ejemplos
### Encriptación
|Mensaje|Encriptación|
|---|---|
|el sol se pone por el oeste|enterl soberl senter pobernenter poberr enterl oberenterstenter|

### Desencriptación
|Mensaje|Desencriptación|
|---|---|
|ainimestai laivai lai timesnai|anita lava la tina|

Para usar el demo **Encriptador de texto v1.0** dé click [Aquí](https://sebastian-montanot.github.io/Encriptador-de-texto-Challenge/)
