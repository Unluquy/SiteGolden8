"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{661:function(t,e,n){n.d(e,{PL:function(){return es},ad:function(){return t1},hJ:function(){return t3}});var r,i,s=n(5723),a=n(6574),o=n(9858),l=n(8954);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c="10.8.0",h=new o.Yd("@firebase/firestore");function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(h.logLevel<=o.in.DEBUG){let e=n.map(p);h.debug("Firestore (".concat(c,"): ").concat(t),...e)}}function f(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(h.logLevel<=o.in.ERROR){let e=n.map(p);h.error("Firestore (".concat(c,"): ").concat(t),...e)}}function m(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(h.logLevel<=o.in.WARN){let e=n.map(p);h.warn("Firestore (".concat(c,"): ").concat(t),...e)}}function p(t){if("string"==typeof t)return t;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(t)}catch(e){return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",e="FIRESTORE (".concat(c,") INTERNAL ASSERTION FAILED: ")+t;throw f(e),Error(e)}function y(t,e){t||g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v="unknown",w="invalid-argument",_="unauthenticated",S="failed-precondition",E="unimplemented";class T extends l.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(t))}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class A{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class V{getToken(){return this.auth?this.auth.getToken().then(t=>t?(y("string"==typeof t.accessToken),new b(t.accessToken,new u(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}constructor(t){this.auth=null,t.onInit(t=>{this.auth=t})}}class I{l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);let t=this.l();return t&&this.u.set("Authorization",t),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}constructor(t,e,n){this.t=t,this.i=e,this.o=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.u=new Map}}class N{getToken(){return Promise.resolve(new I(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.t=t,this.i=e,this.o=n}}class R{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(y("string"==typeof t.token),new R(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}constructor(t){this.h=t,this.appCheck=null,t.onInit(t=>{this.appCheck=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e,n,r,i,s,a,o,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class x{static empty(){return new x("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof x&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}class D{get length(){return this.len}isEqual(t){return 0===D.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof D?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let n=Math.min(t.length,e.length);for(let r=0;r<n;r++){let n=t.get(r),i=e.get(r);if(n<i)return -1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&g(),void 0===n?n=t.length-e:n>t.length-e&&g(),this.segments=t,this.offset=e,this.len=n}}class C extends D{construct(t,e,n){return new C(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let r=[];for(let t of e){if(t.indexOf("//")>=0)throw new T(w,"Invalid segment (".concat(t,"). Paths must not contain // in them."));r.push(...t.split("/").filter(t=>t.length>0))}return new C(r)}static emptyPath(){return new C([])}}let L=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class O extends D{construct(t,e,n){return new O(t,e,n)}static isValidIdentifier(t){return L.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),O.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new O(["__name__"])}static fromServerFormat(t){let e=[],n="",r=0,i=()=>{if(0===n.length)throw new T(w,"Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));e.push(n),n=""},s=!1;for(;r<t.length;){let e=t[r];if("\\"===e){if(r+1===t.length)throw new T(w,"Path has trailing escape character: "+t);let e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(w,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?s=!s:"."!==e||s?n+=e:i(),r++}if(i(),s)throw new T(w,"Unterminated ` in path: "+t);return new O(e)}static emptyPath(){return new O([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromPath(t){return new U(C.fromString(t))}static fromName(t){return new U(C.fromString(t).popFirst(5))}static empty(){return new U(C.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===C.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return C.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new C(t.slice()))}constructor(t){this.path=t}}function M(t){if(U.isDocumentKey(t))throw new T(w,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(t," has ").concat(t.length,"."))}function q(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t="".concat(t.substring(0,20),"...")),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var e;let n=(e=t).constructor?e.constructor.name:null;return n?"a custom ".concat(n," object"):"an object"}}return"function"==typeof t?"a function":g()}(t);throw new T(w,"Expected type '".concat(e.name,"', but it was: ").concat(n))}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){let e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j=null;function B(){return null===j?j=268435456+Math.round(2147483648*Math.random()):j++,"0x"+j.toString(16)}function K(t){return 0===t&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};function Y(t){if(void 0===t)return f("RPC_ERROR","HTTP error has no status"),v;switch(t){case 200:return"ok";case 400:return S;case 401:return _;case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 416:return"out-of-range";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return v;case 501:return E;case 503:return"unavailable";case 504:return"deadline-exceeded";default:return t>=200&&t<300?"ok":t>=400&&t<500?S:t>=500&&t<600?"internal":v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";class Q extends class{get R(){return!1}P(t,e,n,r,i){let s=B(),a=this.I(t,e.toUriEncodedString());d("RestConnection","Sending RPC '".concat(t,"' ").concat(s,":"),a,n);let o={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(o,r,i),this.p(t,a,o,n).then(e=>(d("RestConnection","Received RPC '".concat(t,"' ").concat(s,": "),e),e),e=>{throw m("RestConnection","RPC '".concat(t,"' ").concat(s," failed with error: "),e,"url: ",a,"request:",n),e})}g(t,e,n,r,i,s){return this.P(t,e,n,r,i)}V(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+c}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}I(t,e){let n=G[t];return"".concat(this.m,"/v1/").concat(e,":").concat(n)}terminate(){}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.m=e+"://"+t.host,this.A="projects/".concat(n,"/databases/").concat(r),this.T="(default)"===this.databaseId.database?"project_id=".concat(n):"project_id=".concat(n,"&database_id=").concat(r)}}{v(t,e){throw Error("Not supported by FetchConnection")}async p(t,e,n,r){var i;let s;let a=JSON.stringify(r);try{s=await this.F(e,{method:"POST",headers:n,body:a})}catch(t){throw new T(Y(t.status),"Request failed with error: "+t.statusText)}if(!s.ok){let t=await s.json();Array.isArray(t)&&(t=t[0]);let e=null===(i=null==t?void 0:t.error)||void 0===i?void 0:i.message;throw new T(Y(s.status),"Request failed with error: ".concat(null!=e?e:s.statusText))}return s.json()}constructor(t,e){super(t),this.F=e}}function H(t,e){return t<e?-1:t>e?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function J(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static fromBase64String(t){return new Z(function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new W("Invalid base64 string: "+t):t}}(t))}static fromUint8Array(t){return new Z(function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t))}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Z.EMPTY_BYTE_STRING=new Z("");let $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tt(t){if(y(!!t),"string"==typeof t){let e=0,n=$.exec(t);if(y(!!n),n[1]){let t=n[1];e=Number(t=(t+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(t).getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tn(t){return"string"==typeof t?Z.fromBase64String(t):Z.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{static now(){return tr.fromMillis(Date.now())}static fromDate(t){return tr.fromMillis(t.getTime())}static fromMillis(t){let e=Math.floor(t/1e3);return new tr(e,Math.floor(1e6*(t-1e3*e)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0||e>=1e9)throw new T(w,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800||t>=253402300800)throw new T(w,"Timestamp seconds out of range: "+t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ts(t){let e=t.mapValue.fields.__previous_value__;return ti(e)?ts(e):e}function ta(t){let e=tt(t.mapValue.fields.__local_write_time__.timestampValue);return new tr(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to={};function tl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ti(t)?4:"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:g()}function tu(t,e){var n,r;if(t===e)return!0;let i=tl(t);if(i!==tl(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;let n=tt(t.timestampValue),r=tt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return tn(t.bytesValue).isEqual(tn(e.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return te(t.geoPointValue.latitude)===te(e.geoPointValue.latitude)&&te(t.geoPointValue.longitude)===te(e.geoPointValue.longitude);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return te(t.integerValue)===te(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){let n=te(t.doubleValue),r=te(e.doubleValue);return n===r?K(n)===K(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return n=t.arrayValue.values||[],r=e.arrayValue.values||[],n.length===r.length&&n.every((t,e)=>tu(t,r[e]));case 10:return function(t,e){let n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(X(n)!==X(r))return!1;for(let t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!tu(n[t],r[t])))return!1;return!0}(t,e);default:return g()}}function tc(t,e){return void 0!==(t.values||[]).find(t=>tu(t,e))}function th(t,e){if(t===e)return 0;let n=tl(t),r=tl(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(t,e){let n=te(t.integerValue||t.doubleValue),r=te(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return td(t.timestampValue,e.timestampValue);case 4:return td(ta(t),ta(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(t,e){let n=tn(t),r=tn(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){let n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){let e=H(n[t],r[t]);if(0!==e)return e}return H(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){let n=H(te(t.latitude),te(e.latitude));return 0!==n?n:H(te(t.longitude),te(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){let n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){let e=th(n[t],r[t]);if(e)return e}return H(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===to&&e===to)return 0;if(t===to)return 1;if(e===to)return -1;let n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){let e=H(r[t],s[t]);if(0!==e)return e;let a=th(n[r[t]],i[s[t]]);if(0!==a)return a}return H(r.length,s.length)}(t.mapValue,e.mapValue);default:throw g()}}function td(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return H(t,e);let n=tt(t),r=tt(e),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function tf(t){return!!t&&"arrayValue"in t}function tm(t){return!!t&&"nullValue"in t}function tp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tg(t){return!!t&&"mapValue"in t}function ty(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return J(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ty(n)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ty(t.arrayValue.values[n]);return e}return Object.assign({},t)}class tv{constructor(t,e){this.position=t,this.inclusive=e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{}class t_ extends tw{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new tE(t,e,n):"array-contains"===e?new tA(t,n):"in"===e?new tV(t,n):"not-in"===e?new tI(t,n):"array-contains-any"===e?new tN(t,n):new t_(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new tT(t,n):new tb(t,n)}matches(t){let e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(th(e,this.value)):null!==e&&tl(this.value)===tl(e)&&this.matchesComparison(th(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return g()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class tS extends tw{static create(t,e){return new tS(t,e)}matches(t){return"and"===this.op?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}constructor(t,e){super(),this.filters=t,this.op=e,this.D=null}}class tE extends t_{matches(t){let e=U.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=U.fromName(n.referenceValue)}}class tT extends t_{matches(t){return this.keys.some(e=>e.isEqual(t.key))}constructor(t,e){super(t,"in",e),this.keys=tk("in",e)}}class tb extends t_{matches(t){return!this.keys.some(e=>e.isEqual(t.key))}constructor(t,e){super(t,"not-in",e),this.keys=tk("not-in",e)}}function tk(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>U.fromName(t.referenceValue))}class tA extends t_{matches(t){let e=t.data.field(this.field);return tf(e)&&tc(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class tV extends t_{matches(t){let e=t.data.field(this.field);return null!==e&&tc(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class tI extends t_{matches(t){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return null!==e&&!tc(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class tN extends t_{matches(t){let e=t.data.field(this.field);return!(!tf(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>tc(this.value.arrayValue,t))}constructor(t,e){super(t,"array-contains-any",e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(t,e="asc"){this.field=t,this.dir=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{static fromTimestamp(t){return new tP(t)}static min(){return new tP(new tr(0,0))}static max(){return new tP(new tr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{insert(t,e){return new tF(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,tD.BLACK,null,null))}remove(t){return new tF(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tD.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){let n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){let t=[];return this.inorderTraversal((e,n)=>(t.push("".concat(e,":").concat(n)),!1)),"{".concat(t.join(", "),"}")}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new tx(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new tx(this.root,t,this.comparator,!1)}getReverseIterator(){return new tx(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new tx(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||tD.EMPTY}}class tx{getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class tD{copy(t,e,n,r,i){return new tD(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this,i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return tD.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,r=this;if(0>e(t,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return tD.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,tD.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,tD.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw g();let t=this.left.check();if(t!==this.right.check())throw g();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:tD.RED,this.left=null!=r?r:tD.EMPTY,this.right=null!=i?i:tD.EMPTY,this.size=this.left.size+1+this.right.size}}tD.EMPTY=null,tD.RED=!0,tD.BLACK=!1,tD.EMPTY=new class{get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(t,e,n,r,i){return this}insert(t,e,n){return new tD(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new tL(this.data.getIterator())}getIteratorFrom(t){return new tL(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof tC)||this.size!==t.size)return!1;let e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){let t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new tC(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new tF(this.comparator)}}class tL{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{static empty(){return new tO({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!tg(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ty(e)}setAll(t){let e=O.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){let t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ty(t):r.push(i.lastSegment())});let i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){let e=this.field(t.popLast());tg(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return tu(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];tg(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){for(let r of(J(e,(e,n)=>t[e]=n),n))delete t[r]}clone(){return new tO(ty(this.value))}constructor(t){this.value=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{static newInvalidDocument(t){return new tU(t,0,tP.min(),tP.min(),tP.min(),tO.empty(),0)}static newFoundDocument(t,e,n,r){return new tU(t,1,e,tP.min(),n,r,0)}static newNoDocument(t,e){return new tU(t,2,e,tP.min(),tP.min(),tO.empty(),0)}static newUnknownDocument(t,e){return new tU(t,3,e,tP.min(),tP.min(),tO.empty(),2)}convertToFoundDocument(t,e){return this.createTime.isEqual(tP.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=tO.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=tO.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=tP.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof tU&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tU(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}constructor(t,e,n,r,i,s,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(t,e=null,n=[],r=[],i=null,s=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.C=null}}function tq(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new tM(t,e,n,r,i,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(t,e=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tj={asc:"ASCENDING",desc:"DESCENDING"},tB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tK={and:"AND",or:"OR"};class tG{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function tY(t){return y(!!t),tP.fromTimestamp(function(t){let e=tt(t);return new tr(e.seconds,e.nanos)}(t))}function tQ(t,e){let n=new C(["projects",t.projectId,"databases",t.database]).child("documents");return void 0===e?n:n.child(e)}function tH(t){return{fieldPath:t.canonicalString()}}function tX(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ extends class{}{Z(){if(this.Y)throw new T(S,"The client has already been terminated.")}P(t,e,n,r){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[s,a]=i;return this.connection.P(t,tQ(e,n),r,s,a)}).catch(t=>{throw"FirebaseError"===t.name?(t.code===_&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(v,t.toString())})}g(t,e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(s=>{let[a,o]=s;return this.connection.g(t,tQ(e,n),r,a,o,i)}).catch(t=>{throw"FirebaseError"===t.name?(t.code===_&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(v,t.toString())})}terminate(){this.Y=!0,this.connection.terminate()}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.Y=!1}}async function tW(t,e){let{B:n,parent:r}=function(t,e){var n,r,i,s;let a;let o={structuredQuery:{}},l=e.path;null!==e.collectionGroup?(a=l,o.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=l.popLast(),o.structuredQuery.from=[{collectionId:l.lastSegment()}]),o.parent=(n=a,tQ(t.databaseId,n).canonicalString());let u=function(t){if(0!==t.length)return function t(e){return e instanceof t_?function(t){if("=="===t.op){if(tp(t.value))return{unaryFilter:{field:tH(t.field),op:"IS_NAN"}};if(tm(t.value))return{unaryFilter:{field:tH(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(tp(t.value))return{unaryFilter:{field:tH(t.field),op:"IS_NOT_NAN"}};if(tm(t.value))return{unaryFilter:{field:tH(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tH(t.field),op:tB[t.op],value:t.value}}}(e):e instanceof tS?function(e){let n=e.getFilters().map(e=>t(e));return 1===n.length?n[0]:{compositeFilter:{op:tK[e.op],filters:n}}}(e):g()}(tS.create(t,"and"))}(e.filters);u&&(o.structuredQuery.where=u);let c=function(t){if(0!==t.length)return t.map(t=>({field:tH(t.field),direction:tj[t.dir]}))}(e.orderBy);c&&(o.structuredQuery.orderBy=c);let h=(r=e.limit,t.useProto3Json||null==r?r:{value:r});return null!==h&&(o.structuredQuery.limit=h),e.startAt&&(o.structuredQuery.startAt={before:(i=e.startAt).inclusive,values:i.position}),e.endAt&&(o.structuredQuery.endAt={before:!(s=e.endAt).inclusive,values:s.position}),{B:o,parent:a}}(t.serializer,(e.N||(e.N=function(t,e){if("F"===t.limitType)return tq(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{let e="desc"===t.dir?"asc":"desc";return new tR(t.field,e)});let n=t.endAt?new tv(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tv(t.startAt.position,t.startAt.inclusive):null;return tq(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,function(t){if(null===t.S){let e;t.S=[];let n=new Set;for(let e of t.explicitOrderBy)t.S.push(e),n.add(e.field.canonicalString());let r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(e=new tC(O.comparator),t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e).forEach(e=>{n.has(e.canonicalString())||e.isKeyField()||t.S.push(new tR(e,r))}),n.has(O.keyField().canonicalString())||t.S.push(new tR(O.keyField(),r))}return t.S}(e))),e.N));return(await t.g("RunQuery",t.serializer.databaseId,r,{structuredQuery:n.structuredQuery})).filter(t=>!!t.document).map(e=>(function(t,e,n){let r=function(t,e){let n=function(t){let e=C.fromString(t);return y(tX(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new T(w,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(w,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U((y(n.length>4&&"documents"===n.get(4)),n.popFirst(5)))}(t,e.name),i=tY(e.updateTime),s=e.createTime?tY(e.createTime):tP.min(),a=new tO({mapValue:{fields:e.fields}}),o=tU.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o})(t.serializer,e.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tZ=new Map;class t${isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new T(w,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}!function(t,e,n,r){if(!0===e&&!0===r)throw new T(w,"".concat(t," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=z(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new T(w,"invalid long polling timeout: ".concat(t.timeoutSeconds," (must not be NaN)"));if(t.timeoutSeconds<5)throw new T(w,"invalid long polling timeout: ".concat(t.timeoutSeconds," (minimum allowed value is 5)"));if(t.timeoutSeconds>30)throw new T(w,"invalid long polling timeout: ".concat(t.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}}class t0{get app(){if(!this._app)throw new T(S,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(S,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t$(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new k;switch(t.type){case"firstParty":return new N(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new T(w,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let e=tZ.get(t);e&&(d("ComponentProvider","Removing Datastore"),tZ.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t$({}),this._settingsFrozen=!1}}function t1(t,e){let n="object"==typeof t?t:(0,s.Mq)(),r=(0,s.qX)(n,"firestore/lite").getImmediate({identifier:"string"==typeof t?t:e||"(default)"});if(!r._initialized){let t=(0,l.P0)("firestore");t&&function(t,e,n){var r;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=(t=q(t,t0))._getSettings(),a="".concat(e,":").concat(n);if("firestore.googleapis.com"!==s.host&&s.host!==a&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=u.MOCK_USER;else{e=(0,l.Sg)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new T(w,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new A(new b(e,n))}}(r,...t)}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{withConverter(t){return new t4(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class t2{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new t9(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new t2(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class t9 extends t4{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new t2(this.firestore,null,new U(t))}withConverter(t){return new t9(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,new tz(n)),this._path=n,this.type="collection"}}function t3(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(t=(0,l.m9)(t),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e,n){if(!n)throw new T(w,"Function ".concat(t,"() cannot be called with an empty ").concat(e,"."))}("collection","path",e),t instanceof t0){let n=C.fromString(e,...r);return M(n),new t9(t,null,n)}{if(!(t instanceof t2||t instanceof t9))throw new T(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=t._path.child(C.fromString(e,...r));return M(n),new t9(t.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{static fromBase64String(t){try{return new t6(Z.fromBase64String(t))}catch(t){throw new T(w,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new t6(Z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new O(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(w,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(w,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}let t7=RegExp("[~\\*/\\[\\]]");function et(t,e,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o="Function ".concat(e,"() called with invalid data");n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=" in field ".concat(r)),a&&(l+=" in document ".concat(i)),l+=")"),new T(w,o+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{get id(){return this._key.path.lastSegment()}get ref(){return new t2(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let t=new en(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){let e=this._document.data.field("string"==typeof t?function(t,e,n){if(e.search(t7)>=0)throw et("Invalid field path (".concat(e,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,n);try{return new t5(...e.split("."))._internalPath}catch(r){throw et("Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,n)}}("DocumentSnapshot.get",t):t instanceof t5?t._internalPath:t._delegate._internalPath);if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class en extends ee{data(){return super.data()}}class er{get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}constructor(t,e){this._docs=e,this.query=t}}class ei extends class{convertValue(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(tl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return te(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw g()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n={};return J(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new t8(te(t.latitude),te(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":let n=ts(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ta(t));default:return null}}convertTimestamp(t){let e=tt(t);return new tr(e.seconds,e.nanos)}convertDocumentKey(t,e){let n=C.fromString(t);y(tX(n));let r=new x(n.get(1),n.get(3)),i=new U(n.popFirst(5));return r.isEqual(e)||f("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(e.projectId,"/").concat(e.database,") instead.")),i}}{convertBytes(t){return new t6(t)}convertReference(t){let e=this.convertDocumentKey(t,this.firestore._databaseId);return new t2(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function es(t){!function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new T(E,"limitToLast() queries require specifying at least one orderBy() clause")}((t=q(t,t4))._query);let e=function(t){if(t._terminated)throw new T(S,"The client has already been terminated.");if(!tZ.has(t)){var e,n;d("ComponentProvider","Initializing Datastore");let r=new Q((e=t._databaseId,new F(e,t.app.options.appId||"",t._persistenceKey,(n=t._freezeSettings()).host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,z(n.experimentalLongPollingOptions),n.useFetchStreams)),fetch.bind(null)),i=new tG(t._databaseId,!0),s=new tJ(t._authCredentials,t._appCheckCredentials,r,i);tZ.set(t,s)}return tZ.get(t)}(t.firestore),n=new ei(t.firestore);return tW(e,t._query).then(e=>{let r=e.map(e=>new en(t.firestore,n,e.key,e,t.converter));return"L"===t._query.limitType&&r.reverse(),new er(t,r)})}c="".concat(s.Jn,"_lite"),(0,s.Xd)(new a.wA("firestore/lite",(t,e)=>{let{instanceIdentifier:n,options:r}=e,i=t.getProvider("app").getImmediate(),s=new t0(new V(t.getProvider("auth-internal")),new P(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(w,'"projectId" not provided in firebase.initializeApp.');return new x(t.options.projectId,e)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)("firestore-lite","4.4.2",""),(0,s.KN)("firestore-lite","4.4.2","esm2017")}}]);