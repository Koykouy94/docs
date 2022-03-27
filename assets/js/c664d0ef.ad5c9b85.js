"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8791],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Create"},p=void 0,d={unversionedId:"keyring/start/create",id:"keyring/start/create",title:"Create",description:"To create your first keyring, it is as simple as importing it and constructing it.",source:"@site/docs/keyring/start/create.md",sourceDirName:"keyring/start",slug:"/keyring/start/create",permalink:"/docs/keyring/start/create",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/start/create.md",tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"reference",previous:{title:"Basics",permalink:"/docs/keyring/start/basics"},next:{title:"ss58 Formats",permalink:"/docs/keyring/start/ss58"}},l={},c=[{value:"Crypto types",id:"crypto-types",level:2},{value:"Adding a pair",id:"adding-a-pair",level:2},{value:"Revisiting crypto",id:"revisiting-crypto",level:2},{value:"Address formatting",id:"address-formatting",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create your first keyring, it is as simple as importing it and constructing it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyring } from '@polkadot/keyring';\n\n...\n// create a keyring with some non-default values specified\nconst keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });\n")),(0,i.kt)("p",null,"In the above we do an import and then subsequently create a keyring with a standard crypto type. As detailed earlier, in standard Polkadot/Substrate chains ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"sr25519"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ecdsa")," types are supported. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ss58Format")," will be used to format addresses, more on this in a later section."),(0,i.kt)("h2",{id:"crypto-types"},"Crypto types"),(0,i.kt)("p",null,"When creating a keyring the options are, well, optional. This means that when not specifying a default type of crypto ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519")," will be used. It is important to note that the type specified is just the default for the keyring. You can always override the type of pair you are adding. Effectively that means that you can create and add a ",(0,i.kt)("inlineCode",{parentName:"p"},"sr25519")," pair to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519")," keyring and vice-versa. The specified type is only used when a pair is added without an explicit type."),(0,i.kt)("h2",{id:"adding-a-pair"},"Adding a pair"),(0,i.kt)("p",null,"From the empty keyring above, we can now add a new pair to our keyring."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { mnemonicGenerate } from '@polkadot/util-crypto';\n\n...\n// generate a mnemonic with default params (we can pass the number\n// of words required 12, 15, 18, 21 or 24, less than 12 words, while\n// valid, is not supported since it is more-easily crackable)\nconst mnemonic = mnemonicGenerate();\n\n// create & add the pair to the keyring with the type and some additional\n// metadata specified\nconst pair = keyring.addFromUri(mnemonic, { name: 'first pair' }, 'ed25519');\n\n// the pair has been added to our keyring\nconsole.log(keyring.pairs.length, 'pairs available');\n\n// log the name & address (the latter encoded with the ss58Format)\nconsole.log(pair.meta.name, 'has address', pair.address);\n")),(0,i.kt)("p",null,"Since we detailed overrides of types, here we added a ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519")," keypair to our default ",(0,i.kt)("inlineCode",{parentName:"p"},"sr25519")," keyring. Additionally here we also added metadata to the pair, which is just an object holding any values such as ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"genesisHash")," or whatever the developer applies."),(0,i.kt)("h2",{id:"revisiting-crypto"},"Revisiting crypto"),(0,i.kt)("p",null,"There is one caveat with the different crypto types. The underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/util-crypto")," libraries makes use of WASM with JS fallbacks. However ",(0,i.kt)("inlineCode",{parentName:"p"},"sr25519")," there is only a WASM interface. This means that before adding any keypair with ",(0,i.kt)("inlineCode",{parentName:"p"},"sr25519"),", we first need to ensure the ",(0,i.kt)("a",{parentName:"p",href:"/docs/util-crypto/FAQ#i-am-having-trouble-initializing-the-wasm-interface"},"WASM is initialized"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';\n\n...\n// we only need to do this once per app, somewhere in our init code\n// (when using the API and waiting on `isReady` this is done automatically)\nawait cryptoWaitReady();\n\n// create an ed25519 pair from the mnemonic\nconst ep = keyring.createFromUri(mnemonic, { name: 'ed25519' }, 'ed25519');\n\n// create an sr25519 pair from the mnemonic (keyring defaults)\nconst sp = keyring.createFromUri(mnemonic, { name: 'sr25519' });\n\n// log the addresses, different cryptos, different results\nconsole.log(ep.meta.name, ep.address);\nconsole.log(sp.meta.name, sp.address);\n")),(0,i.kt)("p",null,"In the above example, we just wanted to create the pair without adding it to the keyring. (In some cases where we don't need management this is useful.) To do this we changed the ",(0,i.kt)("inlineCode",{parentName:"p"},"addFromUri")," in the first example to ",(0,i.kt)("inlineCode",{parentName:"p"},"createFromUri"),". Like in the first example the pair is created, but unlike the first example it is not available as a pair on the keyring ",(0,i.kt)("inlineCode",{parentName:"p"},".pairs")," interface."),(0,i.kt)("h2",{id:"address-formatting"},"Address formatting"),(0,i.kt)("p",null,"With first pair(s) in-hand, we will take a brief look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/keyring/start/ss58"},"ss58 formatting")," and the impact it has on address display."))}u.isMDXComponent=!0}}]);