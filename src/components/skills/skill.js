import React from "react";
import './skill.css'
export function Skill(){
    return(
        <>
                <div class="skillcard dow  bg-dark">
<h1>My Skills</h1>

<p class="btn btn-warning">HTML</p>
<div class="container conta">
  <div class="skills html"><span>90%</span></div>
</div>

<p class="btn btn-primary">CSS</p>
<div class="container conta">
  <div class="skills css"><span>80%</span></div>
</div>

<p class="btn btn-warning secondary">Bootstrap</p>
<div class="container conta">
  <div class="skills js"><span>65%</span></div>
</div>

<p class="btn btn-warning">Javascript</p>
<div class="container conta">
  <div class="skills php"><span>60%</span></div>
</div>

<p class="btn btn-primary">ReactJs</p>
<div class="container conta">
  <div class="skills reac"><span>60%</span></div>
</div>

<p class="btn btn-black">MySql</p>
<div class="container conta">
  <div class="skills mysq"><span>40%</span></div>
</div>

<div class="credit"></div>
</div>
        </>
    )
};