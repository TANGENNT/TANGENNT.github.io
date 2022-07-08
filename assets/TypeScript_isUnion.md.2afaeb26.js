import{_ as s,c as n,o as a,a as e}from"./app.99ae0e10.js";const F=JSON.parse('{"title":"isUnion","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/isUnion.md","lastUpdated":1657321509000}'),o={name:"TypeScript/isUnion.md"},p=e(`<h1 id="isunion" tabindex="-1"><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md" target="_blank" rel="noopener noreferrer"><code>isUnion</code></a> <a class="header-anchor" href="#isunion" aria-hidden="true">#</a></h1><p>Question: Determine whether given type is an union type?</p><p>Solution:</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IsUnion</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">] </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">never</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">] </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>It is divided into two parts:</p><ol><li>exclude <code>never</code> first</li><li>then check union using <a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types" target="_blank" rel="noopener noreferrer">Distributive Conditional Types</a><ul><li>Union type is break up into single basic type.</li><li>Single basic type is assignable to union type, but not the reverse.</li></ul></li></ol>`,6),l=[p];function t(r,c,i,y,C,A){return a(),n("div",null,l)}var d=s(o,[["render",t]]);export{F as __pageData,d as default};
