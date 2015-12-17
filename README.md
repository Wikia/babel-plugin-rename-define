# babel-plugin-rename-define

Rename define(), works with Babel 6

## Installation

```sh
$ npm install babel-plugin-rename-define
```

## Usage

### gulp-babel

```javascript
babel({
	presets: ['es2015'],
	plugins: ['transform-es2015-modules-amd', ['rename-define', {
		name: 'mdefine'
	}]]
})
```
