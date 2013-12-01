// Copyright (c) Microsoft Corporation.  All rights reserved.
// This code is licensed by Microsoft Corporation under the terms
// of the MICROSOFT REACTIVE EXTENSIONS FOR JAVASCRIPT AND .NET LIBRARIES License.
// See http://go.microsoft.com/fwlink/?LinkId=186234.

(function(){var a;var b;if(typeof ProvideCustomRxRootObject =="undefined")b=this.Rx={}; else b=ProvideCustomRxRootObject();var c=function(){};var d=function(k0,l0,m0){if(m0===a)m0=[];window.setTimeout(function(){k0.apply(l0,m0);},0);};var e=function(k0,l0){return k0===l0;};var f=function(k0){return k0;};var g=function(k0){return {Dispose:k0};};var h={Dispose:c};b.Disposable={Create:g,Empty:h};var i=b.BooleanDisposable=function(){var k0=false;this.GetIsDisposed=function(){return k0;};this.Dispose=function(){k0=true;};};var j=function(k0){var l0=false;k0.a++;this.Dispose=function(){var m0=false;if(!k0.b){if(!this.c){this.c=true;k0.a--;if(k0.a==0&&k0.d){k0.b=true;m0=true;}}}if(m0)k0.e.Dispose();};};var k=function(k0){this.d=false;this.b=false;this.e=k0;this.a=0;this.Dispose=function(){var l0=false;if(!this.b){if(!this.d){this.d=true;if(this.a==0){this.b=true;l0=true;}}}if(l0)this.e.Dispose();};this.f=function(){if(this.b)return h; else return new j(this);};};var l=b.FutureDisposable=function(){var k0=false;var l0;this.Set=function(m0){if(!k0)l0=m0; else m0.Dispose();};this.Get=function(){return l0;};this.Dispose=function(){if(!k0){k0=true;if(l0!==a)l0.Dispose();}};};var m=b.compositeDisposable=function(){var k0=new q();for(var l0=0;l0<arguments.length;l0++) k0.g(arguments[l0]);var m0=false;this.GetCount=function(){return k0.h();};this.Add=function(n0){if(!m0)k0.g(n0); else n0.Dispose();};this.Remove=function(n0,o0){if(!m0){var p0=k0.i(n0);if(!o0&p0)n0.Dispose();}};this.Dispose=function(){if(!m0){m0=true;this.Clear();}};this.Clear=function(){for(var n0=0;n0<k0.h();n0++) k0.j(n0).Dispose();k0.k();};};var n=b.MutableDisposable=function(){var k0=false;var l0;this.Get=function(){return l0;},this.Replace=function(m0){if(k0)m0.Dispose(); else{if(l0!==a)l0.Dispose();l0=m0;}};this.Dispose=function(){if(!k0){k0=true;if(l0!==a)l0.Dispose();}};};var o=function(k0){var l0={};for(var m0 in k0) l0[m0]=k0[m0];return l0;};var p=function(k0){var l0=[];for(var m0=0;m0<k0.length;m0++) l0.push(k0[m0]);return l0;};var q=function(k0){var l0=[];var m0=0;var n0=k0!==a?k0:e;this.g=function(o0){l0[m0]=o0;m0++;};this.l=function(o0){if(o0<0||o0>=m0)throw "Index out of range";if(o0==0){l0.shift();m0--;}else{for(var p0=o0;p0<m0-1;p0++) l0[p0]=l0[p0+1];m0--;delete l0[m0];}};this.m=function(o0){for(var p0=0;p0<m0;p0++){if(n0(o0,l0[p0]))return p0;}return -1;};this.i=function(o0){var p0=this.m(o0);if(p0==-1)return false;this.l(p0);return true;};this.k=function(){l0=[];m0=0;};this.h=function(){return m0;};this.j=function(o0){if(o0<0||o0>=m0)throw "Index out of range";return l0[o0];};this.n=function(o0,p0){if(o0<0||o0>=m0)throw "Index out of range";l0[o0]=p0;};};var r=function(k0){var l0=new Date();l0.setMilliseconds(l0.getMilliseconds()+k0);return l0;};var s=b.Scheduler=function(k0,l0){this.Schedule=k0;this.ScheduleWithTime=l0;this.ScheduleRecursive=function(m0){var n0=this;var o0=new m();var p0;p0=function(){m0(function(){var q0=false;var r0=false;var s0;s0=n0.Schedule(function(){p0();if(q0)o0.Remove(s0); else r0=true;});if(!r0){o0.Add(s0);q0=true;}});};o0.Add(n0.Schedule(p0));return o0;};this.ScheduleRecursiveWithTime=function(m0,n0){var o0=this;var p0=new m();var q0;q0=function(){m0(function(r0){var s0=false;var t0=false;var u0;u0=o0.ScheduleWithTime(function(){q0();if(s0)p0.Remove(u0); else t0=true;},r0);if(!t0){p0.Add(u0);s0=true;}});};p0.Add(o0.ScheduleWithTime(q0,n0));return p0;};};var t=new s(function(k0){if(this.o===a){try{this.o=new q();this.o.g(k0);while(this.o.h()>0){var l0=this.o.j(0);this.o.l(0);l0();}}finally{delete this.o;}return h;}else{this.o.g(k0);var m0=this;return g(function(){if(m0.o!==a)m0.o.i(k0);});}},function(k0,l0){this.p(function(){var m0=r(l0);while(new Date()<m0);k0();});});t.p=function(k0){if(this.o===a)try{this.o=new q();k0();while(this.o.h()>0){var l0=this.o.j(0);this.o.l(0);l0();}}finally{delete this.o;} else k0();};s.CurrentThread=t;var u=new s(function(k0){k0();return h;},function(k0,l0){var m0=r(l0);while(new Date()<m0);k0();});s.Immediate=u;var v=new s(function(k0){var l0=window.setTimeout(k0,0);return g(function(){window.clearTimeout(l0);});},function(k0,l0){var m0=window.setTimeout(k0,l0);return g(function(){window.clearTimeout(m0);});});s.Timeout=v;var w=b.Observer=function(k0,l0,m0){this.OnNext=k0===a?c:k0;this.OnError=l0===a?function(n0){throw n0;}:l0;this.OnCompleted=m0===a?c:m0;this.AsObserver=function(){var n0=this;return new w(function(o0){n0.OnNext(o0);},function(o0){n0.OnError(o0);},function(){n0.OnCompleted();});};};var x=w.Create=function(k0,l0,m0){return new w(k0,l0,m0);};var y=b.Observable=function(k0){this.q=k0;};var z=y.CreateWithDisposable=function(k0){return new y(k0);};var A=y.Create=function(k0){return z(function(l0){return g(k0(l0));});};var B=function(){return this.Select(function(k0){return k0.Value;});};y.prototype={Subscribe:function(k0,l0,m0){var n0;if(arguments.length>1||typeof k0 =="function")n0=new w(k0,l0,m0); else n0=k0;return this.r(n0);},r:function(k0){var l0=false;var m0=new l();var n0=this;t.p(function(){m0.Set(n0.q(new w(function(o0){if(!l0)k0.OnNext(o0);},function(o0){if(!l0){l0=true;m0.Dispose();k0.OnError(o0);}},function(){if(!l0){l0=true;m0.Dispose();k0.OnCompleted();}})));});return m0;},Select:function(k0){var l0=this;return z(function(m0){var n0=0;return l0.Subscribe(new w(function(o0){var p0;try{p0=k0(o0,n0++);}catch(q0){m0.OnError(q0);return;}m0.OnNext(p0);},function(o0){m0.OnError(o0);},function(){m0.OnCompleted();}));});},Let:function(k0,l0){if(l0===a)return k0(this);var m0=this;return z(function(n0){var o0=l0();var p0;try{p0=k0(o0);}catch(t0){return G(t0).Subscribe(n0);}var q0=new l();var r0=new l();var s0=new m(r0,q0);q0.Set(p0.Subscribe(function(t0){n0.OnNext(t0);},function(t0){n0.OnError(t0);s0.Dispose();},function(){n0.OnCompleted();s0.Dispose();}));r0.Set(m0.Subscribe(o0));return s0;});},MergeObservable:function(){var k0=this;return z(function(l0){var m0=false;var n0=new m();var o0=new l();n0.Add(o0);o0.Set(k0.Subscribe(function(p0){var q0=new l();n0.Add(q0);q0.Set(p0.Subscribe(function(r0){l0.OnNext(r0);},function(r0){l0.OnError(r0);},function(){n0.Remove(q0);if(n0.GetCount()==1&&m0)l0.OnCompleted();}));},function(p0){l0.OnError(p0);},function(){m0=true;if(n0.GetCount()==1)l0.OnCompleted();}));return n0;});},s:function(k0,l0){var m0=p(l0);m0.unshift(this);return k0(m0);},Concat:function(){return this.s(D,arguments);},Merge:function(){return this.s(C,arguments);},Catch:function(){return this.s(P,arguments);},OnErrorResumeNext:function(){return this.s(V,arguments);},Zip:function(k0,l0){var m0=this;return z(function(n0){var o0=false;var p0=[];var q0=[];var r0=false;var s0=false;var t0=new m();var u0=function(v0){t0.Dispose();p0=a;q0=a;n0.OnError(v0);};t0.Add(m0.Subscribe(function(v0){if(s0){n0.OnCompleted();return;}if(q0.length>0){var w0=q0.shift();var x0;try{x0=l0(v0,w0);}catch(y0){t0.Dispose();n0.OnError(y0);return;}n0.OnNext(x0);}else p0.push(v0);},u0,function(){if(s0){n0.OnCompleted();return;}r0=true;}));t0.Add(k0.Subscribe(function(v0){if(r0){n0.OnCompleted();return;}if(p0.length>0){var w0=p0.shift();var x0;try{x0=l0(w0,v0);}catch(y0){t0.Dispose();n0.OnError(y0);return;}n0.OnNext(x0);}else q0.push(v0);},u0,function(){if(r0){n0.OnCompleted();return;}s0=true;}));return t0;});},CombineLatest:function(k0,l0){var m0=this;return z(function(n0){var o0=false;var p0=false;var q0=false;var r0;var s0;var t0=false;var u0=false;var v0=new m();var w0=function(x0){v0.Dispose();n0.OnError(x0);};v0.Add(m0.Subscribe(function(x0){if(u0){n0.OnCompleted();return;}if(q0){var y0;try{y0=l0(x0,s0);}catch(z0){v0.Dispose();n0.OnError(z0);return;}n0.OnNext(y0);}r0=x0;p0=true;},w0,function(){if(u0){n0.OnCompleted();return;}t0=true;}));v0.Add(k0.Subscribe(function(x0){if(t0){n0.OnCompleted();return;}if(p0){var y0;try{y0=l0(r0,x0);}catch(z0){v0.Dispose();n0.OnError(z0);return;}n0.OnNext(y0);}s0=x0;q0=true;},w0,function(){if(t0){n0.OnCompleted();return;}u0=true;}));});},Switch:function(){var k0=this;return z(function(l0){var m0=false;var n0=new n();var o0=new l();o0.Set(k0.Subscribe(function(p0){if(!m0)n0.Replace(p0.Subscribe(function(q0){l0.OnNext(q0);},function(q0){o0.Dispose();n0.Dispose();l0.OnError(q0);},function(){n0.Replace(a);if(m0)l0.OnCompleted();}));},function(p0){n0.Dispose();l0.OnError(p0);},function(){m0=true;if(n0.Get()===a)l0.OnCompleted();}));return new m(o0,n0);});},TakeUntil:function(k0){var l0=this;return z(function(m0){var n0=false;var o0=function(){p0.Dispose();n0=true;};var p0=new m();p0.Add(k0.Subscribe(o0,function(q0){m0.OnError(q0);n0=true;},o0));if(!n0)p0.Add(l0.Subscribe(m0));return p0;});},SkipUntil:function(k0){var l0=this;return z(function(m0){var n0=true;var o0=new m();o0.Add(k0.Subscribe(function(){n0=false;},function(p0){m0.OnError(p0);},c));o0.Add(l0.Subscribe(new w(function(p0){if(!n0)m0.OnNext(p0);},function(p0){m0.OnError(p0);},function(){m0.OnCompleted();})));return o0;});},Scan1:function(k0){var l0=this;return Defer(function(){var m0;var n0=false;return l0.Select(function(o0){if(n0)m0=k0(m0,o0); else{m0=o0;n0=true;}return m0;});});},Scan:function(k0,l0){var m0=this;return O(function(){var n0;var o0=false;return m0.Select(function(p0){if(o0)n0=l0(n0,p0); else{n0=l0(k0,p0);o0=true;}return n0;});});},Finally:function(k0){var l0=this;return A(function(m0){var n0=l0.Subscribe(m0);return function(){try{n0.Dispose();}finally{k0();}};});},Do:function(k0,l0,m0){var n0=this;return z(function(o0){return n0.Subscribe(new w(function(p0){if(k0!==a)k0(p0);o0.OnNext(p0);},function(p0){if(l0!==a)l0(p0);o0.OnError(p0);},function(){if(m0!==a)m0();o0.OnCompleted();}));});},Where:function(k0){var l0=this;return z(function(m0){var n0=0;return l0.Subscribe(new w(function(o0){var p0=false;try{p0=k0(o0,n0++);}catch(q0){m0.OnError(q0);return;}if(p0)m0.OnNext(o0);},function(o0){m0.OnError(o0);},function(){m0.OnCompleted();}));});},Take:function(k0,l0){if(l0===a)l0=u;var m0=this;return z(function(n0){if(k0<=0){m0.Subscribe().Dispose();return I(l0).Subscribe(w);}var o0=k0;return m0.Subscribe(new w(function(p0){if(o0-->0){n0.OnNext(p0);if(o0==0)n0.OnCompleted();}},function(p0){n0.OnError(p0);},function(){n0.OnCompleted();}));});},GroupBy:function(k0,l0,m0){if(k0===a)k0=f;if(l0===a)l0=f;if(m0===a)m0=function(o0){return o0.toString();};var n0=this;return z(function(o0){var p0={};var q0=new l();var r0=new k(q0);q0.Set(n0.Subscribe(function(s0){var t0;try{t0=k0(s0);}catch(z0){for(var A0 in p0) p0[A0].OnError(z0);o0.OnError(z0);return;}var u0=false;var v0;try{var w0=m0(t0);if(p0[w0]===a){v0=new b0();p0[w0]=v0;u0=true;}else v0=p0[w0];}catch(z0){for(var A0 in p0) p0[A0].OnError(z0);o0.OnError(z0);return;}if(u0){var x0=z(function(z0){return new m(r0.f(),v0.Subscribe(z0));});x0.Key=t0;o0.OnNext(x0);}var y0;try{y0=l0(s0);}catch(z0){for(var A0 in p0) p0[A0].OnError(z0);o0.OnError(z0);return;}v0.OnNext(y0);},function(s0){for(var t0 in p0) p0[t0].OnError(s0);o0.OnError(s0);},function(){for(var s0 in p0) p0[s0].OnCompleted();o0.OnCompleted();}));return r0;});},TakeWhile:function(k0){var l0=this;return z(function(m0){var n0=true;return l0.Subscribe(new w(function(o0){if(n0){try{n0=k0(o0);}catch(p0){m0.OnError(p0);return;}if(n0)m0.OnNext(o0); else m0.OnCompleted();}},function(o0){m0.OnError(o0);},function(){m0.OnCompleted();}));});},SkipWhile:function(k0){var l0=this;return z(function(m0){var n0=false;return l0.Subscribe(new w(function(o0){if(!n0){try{n0=!k0(o0);}catch(p0){m0.OnError(p0);return;}if(n0)m0.OnNext(o0);}},function(o0){m0.OnError(o0);},function(){m0.OnCompleted();}));});},Skip:function(k0){var l0=this;return z(function(m0){var n0=k0;return l0.Subscribe(new w(function(o0){if(n0--<=0)m0.OnNext(o0);},function(o0){m0.OnError(o0);},function(){m0.OnCompleted();}));});},SelectMany:function(k0){return this.Select(k0).MergeObservable();},TimeInterval:function(){var k0=new Date();return this.Select(function(l0){var m0=new Date();var n0=m0-k0;k0=m0;return {Interval:n0,Value:l0};});},RemoveInterval:B,Timestamp:function(){return this.Select(function(k0){return {Timestamp:new Date(),Value:k0};});},RemoveTimestamp:B,Materialize:function(){var k0=this;return z(function(l0){return k0.Subscribe(new w(function(m0){l0.OnNext(new a0("N",m0));},function(m0){l0.OnNext(new a0("E",m0));l0.OnCompleted();},function(){l0.OnNext(new a0("C"));l0.OnCompleted();}));});},Dematerialize:function(){return this.SelectMany(function(k0){return k0;});},AsObservable:function(){var k0=this;return z(function(l0){k0.Subscribe(l0);});},Delay:function(k0,l0){if(l0===a)l0=v;var m0=this;return z(function(n0){var o0=[];var p0=false;var q0=new n();var r0=m0.Materialize().Timestamp().Subscribe(function(s0){if(s0.Kind=="E"){n0.OnError(s0.Value);o0=[];if(p0)q0.Dispose();return;}o0.push({Timestamp:new Date(new Date().getTime()+k0),Value:s0.Value});if(!p0){q0.Replace(l0.ScheduleRecursiveWithTime(function(t0){var u0;do{u0=a;if(o0.length>0&&o0[0].Timestamp<=new Date())u0=o0.shift().Value;if(u0!==a)u0.q(n0);}while(u0!==a);if(o0.length>0){t0(Math.max(0,o0[0].Timestamp-new Date()));p0=true;}else p0=false;},k0));p0=true;}});return new m(r0,q0);});},Throttle:function(k0,l0){if(l0===a)l0=v;var m0=this;return z(function(n0){var o0;var p0=false;var q0=new n();var r0=0;var s0=m0.Subscribe(function(t0){p0=true;o0=t0;r0++;var u0=r0;q0.Replace(l0.ScheduleWithTime(function(){if(p0&&r0==u0)n0.OnNext(o0);p0=false;},k0));},function(t0){q0.Dispose();n0.OnError(t0);p0=false;r0++;},function(){q0.Dispose();if(p0)n0.OnNext(o0);n0.OnCompleted();p0=false;r0++;});return new m(s0,q0);});},Timeout:function(k0,l0,m0){if(m0===a)m0=v;if(l0===a)l0=G("Timeout");var n0=this;return z(function(o0){var p0=new n();var q0=new n();var r0=0;var s0=r0;var t0=false;q0.Replace(m0.ScheduleWithTime(function(){t0=r0==s0;if(t0)p0.Replace(l0.Subscribe(o0));},k0));p0.Replace(n0.Subscribe(function(u0){var v0=0;if(!t0){r0++;v0=r0;o0.OnNext(u0);q0.Replace(m0.ScheduleWithTime(function(){t0=r0==v0;if(t0)p0.Replace(l0.Subscribe(o0));},k0));}},function(u0){if(!t0){r0++;o0.OnError(u0);}},function(){if(!t0){r0++;o0.OnCompleted();}}));return new m(p0,q0);});},Sample:function(k0,l0){if(l0===a)l0=v;var m0=this;return z(function(n0){var o0=false;var p0;var q0=new m();q0.Add(X(k0,l0).Subscribe(function(r0){if(o0){n0.OnNext(p0);o0=false;}},function(r0){n0.OnError(r0);},function(){n0.OnCompleted();}));q0.Add(m0.Subscribe(function(r0){o0=true;p0=r0;},function(r0){n0.OnError(r0);q0.Dispose();},function(){n0.OnCompleted();q0.Dispose();}));return q0;});},Repeat:function(k0,l0){var m0=this;if(l0===a)l0=v;if(k0===a)k0=-1;return z(function(n0){var o0=k0;var p0=new n();var q0=new m(n);var r0=function(s0){p0.Replace(m0.Subscribe(function(t0){n0.OnNext(t0);},function(t0){n0.OnError(t0);},function(){if(o0>0){o0--;if(o0==0){n0.OnCompleted();return;}}s0();}));};q0.Add(l0.ScheduleRecursive(r0));return q0;});},Retry:function(k0,l0){var m0=this;if(l0===a)l0=v;if(k0===a)k0=-1;return z(function(n0){var o0=k0;var p0=new n();var q0=new m(n);var r0=function(s0){p0.Replace(m0.Subscribe(function(t0){n0.OnNext(t0);},function(t0){if(o0>0){o0--;if(o0==0){n0.OnError(t0);return;}}s0();},function(){n0.OnCompleted();}));};q0.Add(l0.ScheduleRecursive(r0));return q0;});},BufferWithTime:function(k0,l0,m0){if(m0===a)m0=v;if(l0===a)l0=k0;var n0=this;return z(function(o0){var p0=new p0();var q0=new Date();var r0=function(){var v0=[];for(var w0=0;w0<p0.h();w0++){var x0=p0.j(w0);if(x0.Timestamp-q0>=0)v0.push(x0.Value);}return v0;};var s0=new m();var t0=function(v0){o0.OnNext(r0());o0.OnError(v0);};var u0=function(){o0.OnNext(r0());o0.OnCompleted();};s0.Add(Z(k0,l0).Subscribe(function(v0){var w0=r0();var x0=r(l0-k0);while(p0.h()>0&&p0.j(0).Timestamp-x0<=0)p0.l(0);o0.OnNext(w0);q0=x0;},t0,u0));s0.Add(n0.Subscribe(function(v0){p0.g({Value:v0,Timestamp:new Date()});},t0,u0));return s0;});},BufferWithCount:function(k0,l0){if(l0===a)l0=k0;var m0=this;return z(function(n0){var o0=[];var p0=0;return m0.Subscribe(function(q0){if(p0==0)o0.push(q0); else p0--;var r0=o0.length;if(r0==k0){var s0=o0;o0=[];var t0=Math.min(l0,r0);for(var u0=t0;u0<r0;u0++) o0.push(s0[u0]);p0=Math.max(0,l0-k0);n0.OnNext(s0);}},function(q0){if(o0.length>0)n0.OnNext(o0);n0.OnError(q0);},function(){if(o0.length>0)n0.OnNext(o0);n0.OnCompleted();});});},StartWith:function(k0,l0){if(!(k0 instanceof Array))k0=[k0];if(l0===a)l0=u;var m0=this;return z(function(n0){var o0=new m();var p0=0;o0.Add(l0.ScheduleRecursive(function(q0){if(p0<k0.length){n0.OnNext(k0[p0]);p0++;q0();}else o0.Add(m0.Subscribe(n0));}));return o0;});},DistinctUntilChanged:function(k0,l0){if(k0===a)k0=f;if(l0===a)l0=e;var m0=this;return z(function(n0){var o0;var p0=false;return m0.Subscribe(function(q0){var r0;try{r0=k0(q0);}catch(t0){n0.OnError(t0);return;}var s0=false;if(p0)try{s0=l0(o0,r0);}catch(t0){n0.OnError(t0);return;}if(!p0||!s0){p0=true;o0=r0;n0.OnNext(q0);}},function(q0){n0.OnError(q0);},function(){n0.OnCompleted();});});},Publish:function(k0){if(k0===a)return new j0(this,new b0());var l0=this;return z(function(m0){var n0=new j0(l0,new b0());return new m(k0(n0).Subscribe(w),n0.Connect());});},Prune:function(k0,l0){if(l0===a)l0=v;if(k0===a)return new j0(this,new d0(l0));var m0=this;return z(function(n0){var o0=new j0(m0,new d0(l0));return new m(k0(o0).Subscribe(w),o0.Connect());});},Replay:function(k0,l0,m0,n0){if(n0===a)n0=v;if(k0===a)return new j0(this,new f0(l0,m0,n0));var o0=this;return z(function(p0){var q0=new j0(o0,new f0(l0,m0,n0));return new m(k0(q0).Subscribe(w),q0.Connect());});}};var C=y.Merge=function(k0,l0){if(l0===a)l0=v;return E(k0,l0).MergeObservable();};var D=y.Concat=function(k0,l0){if(l0===a)l0=u;return z(function(m0){var n0=new n();var o0=0;var p0=l0.ScheduleRecursive(function(q0){if(o0<k0.length){var r0=k0[o0];o0++;n0.Replace(r0.Subscribe(function(s0){m0.OnNext(s0);},function(s0){m0.OnError(s0);},q0));}else m0.OnCompleted();});return new m(n0,p0);});};var E=y.FromArray=function(k0,l0){if(l0===a)l0=v;return z(function(m0){var n0=0;return l0.ScheduleRecursive(function(o0){if(n0<k0.length){m0.OnNext(k0[n0++]);o0();}else m0.OnCompleted();});});};var F=y.Return=function(k0,l0){if(l0===a)l0=t;return z(function(m0){return l0.Schedule(function(){m0.OnNext(k0);m0.OnCompleted();});});};var G=y.Throw=function(k0,l0){if(l0===a)l0=t;return z(function(m0){return l0.Schedule(function(){m0.OnError(k0);});});};var H=y.Never=function(){return z(function(k0){return h;});};var I=y.Empty=function(k0){if(k0===a)k0=t;return z(function(l0){return k0.Schedule(function(){l0.OnCompleted();});});};var J=y.FromIEEvent=function(k0,l0){return A(function(m0){var n0=function(){m0.OnNext(o(window.event));};k0.attachEvent(l0,n0);return function(){k0.detachEvent(l0,n0);};});};var K=y.FromHtmlEvent=function(k0,l0){if(k0.attachEvent!==a)return J(k0,"on"+l0); else return M(k0,l0);};var L=y.FromJQueryEvent=function(k0,l0,m0){return A(function(n0){var o0=function(p0){n0.OnNext(p0);};k0.bind(l0,m0,o0);return function(){k0.unbind(l0,o0);};});};var M=y.FromDOMEvent=function(k0,l0){return A(function(m0){var n0=function(o0){m0.OnNext(o(o0));};k0.addEventListener(l0,n0,false);return function(){k0.removeEventListener(l0,n0,false);};});};var N=y.XmlHttpRequest=function(k0){if(typeof k0 =="string")k0={Method:"GET",Url:k0};var l0=new d0();try{var m0=new XMLHttpRequest();if(k0.Headers!==a){var n0=k0.Headers;for(var o0 in n0) m0.setRequestHeader(o0,n0[o0]);}m0.open(k0.Method,k0.Url,true,k0.User,k0.Password);m0.onreadystatechange=function(){if(m0.readyState==4){var q0=m0.status;if(q0>=200&&q0<300||q0==0||q0==""){l0.OnNext(m0);l0.OnCompleted();}else l0.OnError(m0);}};m0.send(k0.Body);}catch(q0){l0.OnError(q0);}var p0=new k(g(function(){if(m0.readyState!=4){m0.abort();l0.OnError(m0);}}));return z(function(q0){return new m(l0.Subscribe(q0),p0.f());});};var O=y.Defer=function(k0){return z(function(l0){var m0;try{m0=k0();}catch(n0){l0.OnError(n0);return c;}return m0.Subscribe(l0);});};var P=y.Catch=function(k0,l0){if(l0===a)l0=u;return z(function(m0){var n0=new n();var o0=0;var p0=l0.ScheduleRecursive(function(q0){if(o0<k0.length){var r0=k0[o0];o0++;n0.Replace(r0.Subscribe(function(s0){m0.OnNext(s0);},q0,function(){m0.OnCompleted();}));}else m0.OnCompleted();});return new m(n0,p0);});};var Q=y.Using=function(k0,l0){return z(function(m0){var n0;var o0=h;try{var p0=k0();if(p0!==a)o0=p0;n0=l0(p0);}catch(q0){return new m(Throw(q0).Subscribe(m0),o0);}return new m(n0.Subscribe(m0),o0);});};var R=y.Range=function(k0,l0,m0){if(m0===a)m0=v;var n0=k0+l0-1;return T(k0,function(o0){return o0<=n0;},f,function(o0){return o0+1;},m0);};var S=y.Repeat=function(k0,l0,m0){if(m0===a)m0=v;if(l0===a)l0=-1;var n0=l0;return z(function(o0){return m0.ScheduleRecursive(function(p0){o0.OnNext(k0);if(n0>0){n0--;if(n0==0){o0.OnCompleted();return;}}p0();});});};var T=y.Generate=function(k0,l0,m0,n0,o0){if(o0===a)o0=v;return z(function(p0){var q0=k0;var r0=true;return o0.ScheduleRecursive(function(s0){var t0=false;var u0;try{if(r0)r0=false; else q0=n0(q0);t0=l0(q0);if(t0)u0=m0(q0);}catch(v0){p0.OnError(v0);return;}if(t0){p0.OnNext(u0);s0();}else p0.OnCompleted();});});};var U=y.GenerateWithTime=function(k0,l0,m0,n0,o0,p0){if(p0===a)p0=v;return new z(function(q0){var r0=k0;var s0=true;var t0=false;var u0;var v0;return p0.ScheduleRecursiveWithTime(function(w0){if(t0)q0.OnNext(u0);try{if(s0)s0=false; else r0=o0(r0);t0=l0(r0);if(t0){u0=m0(r0);v0=n0(r0);}}catch(x0){q0.OnError(x0);return;}if(t0)w0(v0); else q0.OnCompleted();},0);});};var V=y.OnErrorResumeNext=function(k0,l0){if(l0===a)l0=u;return z(function(m0){var n0=new n();var o0=0;var p0=l0.ScheduleRecursive(function(q0){if(o0<k0.length){var r0=k0[o0];o0++;n0.Replace(r0.Subscribe(function(s0){m0.OnNext(s0);},q0,q0));}else m0.OnCompleted();});return new m(n0,p0);});};var W=y.Amb=function(){var k0=arguments;return z(function(l0){var m0=new m();var n0=new n();n0.Replace(m0);var o0=false;for(var p0=0;p0<k0.length;p0++){var q0=k0[p0];var r0=new n();var s0=new w(function(t0){l0.OnNext(t0);if(!o0){m0.Remove(this.t,true);m0.Dispose();n0.Replace(this.t);o0=true;}},function(t0){l0.OnError(t0);n0.Dispose();},function(){l0.OnCompleted();n0.Dispose();});s0.t=r0;r0.Replace(q0.Subscribe(s0));m0.Add(r0);}return n0;});};var X=y.Interval=function(k0,l0){return Z(k0,k0,l0);};var Y=function(k0){return Math.max(0,k0);};var Z=y.Timer=function(k0,l0,m0){if(m0===a)m0=v;if(k0===a)return H();if(k0 instanceof Date)return O(function(){return y.Timer(k0-new Date(),l0,m0);});var n0=Y(k0);if(l0===a)return z(function(p0){return m0.ScheduleWithTime(function(){p0.OnNext(0);p0.OnCompleted();},n0);});var o0=Y(l0);return z(function(p0){var q0=0;return m0.ScheduleRecursiveWithTime(function(r0){p0.OnNext(q0++);r0(o0);},n0);});};var a0=b.Notification=function(k0,l0){this.Kind=k0;this.Value=l0;this.toString=function(){return this.Kind+": "+this.Value;};this.q=function(m0){switch(this.Kind){case "N":m0.OnNext(this.Value);break;case "E":m0.OnError(this.Value);break;case "C":m0.OnCompleted();break;}};};a0.prototype=new y;var b0=b.Subject=function(k0){var l0=new q();var m0=false;var n0;if(k0===a)k0=v;this.OnNext=function(o0){if(!m0){for(var p0=0;p0<l0.h();p0++){var q0=l0.j(p0);q0.OnNext(o0);}n0=new a0("N",o0);}};this.OnError=function(o0){if(!m0){for(var p0=0;p0<l0.h();p0++){var q0=l0.j(p0);q0.OnError(o0);}m0=true;l0.k();n0=new a0("E",o0);}};this.OnCompleted=function(){if(!m0){for(var o0=0;o0<l0.h();o0++){var p0=l0.j(o0);p0.OnCompleted();}m0=true;l0.k();n0=new a0("C");}};this.q=function(o0){if(!m0){l0.g(o0);return g(function(){l0.i(o0);});}else return k0.Schedule(function(){if(n0.Kind=="N")o0.OnCompleted(); else n0.Subscribe(o0);});};};b0.prototype=new y;for(var c0 in w.prototype) b0.prototype[c0]=Observer.prototype[c0];var d0=b.AsyncSubject=function(k0){var l0=new q();var m0;var n0=false;if(k0===a)k0=v;this.OnNext=function(o0){if(!n0)m0=new a0("N",o0);};this.OnError=function(o0){if(!n0){m0=new a0("E",o0);for(var p0=0;p0<l0.h();p0++){var q0=l0.j(p0);if(q0!==a)q0.OnError(o0);}n0=true;l0.k();}};this.OnCompleted=function(){if(!n0){if(m0===a)m0=new a0("C");for(var o0=0;o0<l0.h();o0++){var p0=l0.j(o0);if(p0!==a){m0.Subscribe(p0);if(m0.Kind=="N")p0.OnCompleted();}}n0=true;l0.k();}};this.q=function(o0){if(!n0){l0.g(o0);return g(function(){l0.i(o0);});}else return k0.Schedule(function(){m0.Subscribe(o0);if(m0.Kind=="N")o0.OnCompleted();});};};d0.prototype=new b0;var e0=b.BehaviorSubject=function(k0,l0){var m0=new f0(1,-1,l0);m0.OnNext(k0);return m0;};var f0=b.ReplaySubject=function(k0,l0,m0){var n0=new q();var o0=new q();var p0=false;if(m0===a)m0=v;var q0=l0>0;var r0=function(s0,t0){o0.g({Value:new a0(s0,t0),Timestamp:new Date()});};this.u=function(){if(k0!==a){while(o0.h()>k0)o0.l(0);if(q0)while(o0.h()>0&&new Date()-o0.j(0).Timestamp>l0)o0.l(0);}};this.OnNext=function(s0){if(!p0){for(var t0=0;t0<n0.h();t0++){var u0=n0.j(t0);u0.OnNext(s0);}r0("N",s0);}};this.OnError=function(s0){if(!p0){for(var t0=0;t0<n0.h();t0++){var u0=n0.j(t0);u0.OnError(s0);}p0=true;n0.k();r0("E",s0);}};this.OnCompleted=function(){if(!p0){for(var s0=0;s0<n0.h();s0++){var t0=n0.j(s0);t0.OnCompleted();}p0=true;n0.k();r0("C");}};this.q=function(s0){var t0=new g0(this,s0);var u0=new m(t0);var v0=this;u0.Add(m0.Schedule(function(){if(!t0.v){v0.u();for(var w0=0;w0<o0.h();w0++) o0.j(w0).Value.Subscribe(s0);n0.g(s0);t0.w=true;}}));return u0;};this.x=function(s0){n0.i(s0);};};f0.prototype=new b0;var g0=function(k0,l0){this.y=k0;this.z=l0;this.w=false;this.v=false;this.Dispose=function(){if(this.w)this.y.x(this.z);this.v=true;};};var h0=y.ToAsync=function(k0){return function(){var l0=new d0();var m0=function(){var n0;try{n0=k0.apply(this,arguments);}catch(o0){l0.OnError(o0);return;}l0.OnNext(n0);l0.OnCompleted();};d(m0,this,arguments);return l0;};};var i0=y.Start=function(k0,l0,m0){if(m0===a)m0=[];return h0(k0).apply(l0,m0);};var j0=b.ConnectableObservable=function(k0,l0){if(l0===a)l0=new b0();this.y=l0;this.A=k0;this.B=false;this.C;this.Connect=function(){var m0;var n0=false;if(!this.B){this.B=true;var o0=this;m0=new m(g(function(){o0.B=false;}));this.C=m0;m0.Add(k0.Subscribe(this.y));}return this.C;};this.q=function(m0){return this.y.Subscribe(m0);};this.RefCount=function(){var m0=0;var n0=this;var o0;return A(function(p0){var q0=false;m0++;q0=m0==1;var r0=n0.Subscribe(p0);if(q0)o0=n0.Connect();return function(){r0.Dispose();m0--;if(m0==0)o0.Dispose();};});};};j0.prototype=new y;})();