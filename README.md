<div align="center">
  <h1>react-native-counter-stepper</h1>
  <img
    alt="Gif displaying an example of react-native-counter-stepper on ios and android device"
    src="https://media.giphy.com/media/S6wWlSRU5b44Fu7GX1/giphy.gif"
  />


<p>This is a simple light weight react native counter component</p>
</div>

</a> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
<hr>

## Installation 
This module is distributed via <a href='https://www.npmjs.com/'>npm</a>

```bash
npm install react-native-counter-stepper
```
```bash
yarn add react-native-counter-stepper
```

## Usage
##### Import
```javascript
import Counter from 'react-native-counter-stepper';
```

```javascript

return(
    <Counter value={state} onValueChange={(val) => setState(val)} />
)
```
[OtherExamples](https://github.com/Eazybee/react-native-counter-stepper/blob/update-readme-doc/App.js)


## Props
<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
        <th>type</th>
        <th>Optional</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>value</td>
        <td>value of the counter</td>
        <td>number</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>onValueChange</td>
        <td>callback when value change</td>
        <td>(newValue, change) => void</td>
        <td>false</td>
        <td></td>
    </tr>
    <tr>
        <td>minValue</td>
        <td>minimum value of the counter</td>
        <td>number</td>
        <td>true</td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER">Number.MIN_SAFE_INTEGER</a></td>
    </tr>
    <tr>
        <td>maxValue</td>
        <td>maximum value of the counter</td>
        <td>number</td>
        <td>true</td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER">Number.MAX_SAFE_INTEGER</a></td>
    </tr>
    <tr>
        <td>step</td>
        <td>Increment/reduction by step</td>
        <td>number</td>
        <td>true</td>
        <td style='text-align: center'>1</td>
    </tr>
    <tr>
        <td>minText</td>
        <td>Text on the decrease button</td>
        <td>string</td>
        <td>true</td>
        <td style='text-align: center'>-</td>
    </tr>
    <tr>
        <td>maxText</td>
        <td>Text on the increase button</td>
        <td>string</td>
        <td>true</td>
        <td style='text-align: center'>+</td>
    </tr>
    <tr>
        <td>style</td>
        <td>style for counter outermost container</td>
        <td><a href='https://reactnative.dev/docs/view-style-props'>View Style</a></td>
        <td>true</td>
        <td style='text-align: center'></td>
    </tr>
    <tr>
        <td>activeBackgroundColor</td>
        <td>button onpress background color</td>
        <td><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color'>color</a></td>
        <td>true</td>
        <td style='text-align: center'>rgba(40,121,255,0.94)</td>
    </tr>
    <tr>
        <td>buttonStyle</td>
        <td>style for button</td>
        <td><a href='https://reactnative.dev/docs/view-style-props'>View Style</a></td>
        <td>true</td>
        <td style='text-align: center'></td>
    </tr>
    <tr>
        <td>buttonnTextStyle</td>
        <td>style for button's text</td>
        <td><a href='https://reactnative.dev/docs/text-style-props'>Text Style</a></td>
        <td>true</td>
        <td style='text-align: center'></td>
    </tr>
    <tr>
        <td>labelStyle</td>
        <td>style for value</td>
        <td><a href='https://reactnative.dev/docs/view-style-props'>View Style</a></td>
        <td>true</td>
        <td style='text-align: center'></td>
    </tr>
    <tr>
        <td>labelTextStyle</td>
        <td>style for value's text</td>
        <td><a href='https://reactnative.dev/docs/text-style-props'>Text Style</a></td>
        <td>true</td>
        <td style='text-align: center'></td>
    </tr>
</table>

## Contributors

Thanks goes to these people <a href='https://allcontributors.org/docs/en/emoji-key'>(emoji key)</a>

<table>
  <tr>
    <td align="center"><a href="https://github.com/Eazybee"><img src="https://avatars3.githubusercontent.com/u/36575414?s=460&v=4" width="100px;" alt="Ezekiel Ilori"/><br /><sub><b>Ezekiel Ilori</b></sub></a><br /><a href="#" title="Idea">🤔</a> <a href="#" title="Code">💻</a> <a href="#" title="Tests">⚠️</a> <a href="#" title="Doc">📖</a></td>
  </tr>
</table>

## LICENSE
- [MIT](https://github.com/Eazybee/react-native-counter-stepper/blob/develop/LICENSE)