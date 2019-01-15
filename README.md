# Silicons

A collection of full responsive css-only icons. 

You can find the whole list and documentation on www.silicons.nl 

### Install
So, if you want to use these icons, be my guest! I even made it a little easier. You can easily install this package into your project using npm or yarn.

```bash
npm install silicons --save-dev 
```
or yarn 
```bash
yarnadd silicons 
```
And import the file in your main scss file like:
```scss
@import '~silicons'; 
```

Find this project on github: gitbub/silvandiepen/silicons


### Settings
You can change some settings for the icons by defining some variable before you load 'silicons'.

| Name	| Variable	| Default	| Description |
| --- | --- | --- | --- |
| Prefix | $silicons-prefix | silicon- | The prefix is used for all icons.|
| stroke width	| $silicons-stroke |	0.1	| The stroke is used in 'em'. So the stroke is based on the font-size given to the element. |

### scss variable
You can redefine the color of a variable by just setting it before you import silicons. This will override the default color in silicons and will be used. note: a custom property, overrides the sass variable.

### custom properties
Defining the color can also be done using a custom property, the properties as mentioned before are not set by silicons, but are getting used. The default color is the fallback color. In this way, a set custom propertie will override any color.

### Mixins
All icons are build up in mixins. These mixins can be used when in you add silicons to your project. In this way you don't have to add all icons to your project and you are able to use your own classes.

*for example:*
The default class for the print icons is `.silicon-printer`, but you want to use this icon on the class `.icon-print`. In your project, just add `@include silicon-printer('icon-print');` and this will output the code for the print icon on the class `icon-print`



### Wishlist

- Shoppingcart
- Shoppingbag
- Ticket
- bell
- check
- cloud
- cloud rain
- cloud sun
- cloud download
- signal 
- signal - full / half / empty
- video camera
- thermometer

Any wishes? Please do a PR. 


### PR

Would you like to contribute? You are very welcome!

### Rules

- Every icon can only be made using 1 html element and class. 
- Size, position of the main element can not be altered. The before and after can.
- CSS must be build order by the logic of https://css-order.svd.im
