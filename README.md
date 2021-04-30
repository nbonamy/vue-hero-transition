# Vue Hero Transition

## Description

Custom transitions between routes based on "hero" content.

## Usage

```javascript
import Hero from 'vue-hero-transition';
Vue.use(Hero);
```

Wrap your `view-router` with `HeroTransition`:

```html
<HeroTransition>
  <router-view></router-view>
</HeroTransition>
```

Then wrap elements on source and target routes with `Hero`. Required attribute `tag` should match:

```html
<Hero tag="tag">
...
</Hero>
```

## Parameters

`HeroTransition` accepts the following parameters:

<table>
  <tr><th>Name</th><th>Purpose</th><th>Default</th></tr>
  <tr>
    <td>duration</td>
    <td>Transition duration in CSS format</td>
    <td>500ms</td>
  </tr>
  <tr>
    <td>backSupport</td>
    <td>Enable transition on router.pop</td>
    <td>true</td>
  </tr>
</table>
