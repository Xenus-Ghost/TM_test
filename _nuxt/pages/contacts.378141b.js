(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{282:function(e,t,l){var content=l(290);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("deb6d524",content,!0,{sourceMap:!1})},283:function(e,t,l){var content=l(292);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("de7bf5d0",content,!0,{sourceMap:!1})},287:function(e,t,l){"use strict";l.r(t);var c={name:"TasksTable",components:{TasksTableRow:l(288).default},props:{items:{type:Array,default:null}},data:function(){return{selected:[],fields:{name:{visible:!0},email:{visible:!0},companyName:{visible:!0},role:{visible:!0},forecast:{visible:!0},recentActivity:{visible:!0}}}},methods:{rowSelect:function(e){this.selected.push(e)}}},n=(l(291),l(2)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("table",{staticClass:"tasks-table"},[l("colgroup",[l("col",{staticClass:"tasks-table__column_1"}),e._v(" "),l("col",{class:["tasks-table__column_2",{"tasks-table__column_hidden":!e.fields.name.visible}]}),e._v(" "),l("col",{class:["tasks-table__column_3",{"tasks-table__column_hidden":!e.fields.email.visible}]}),e._v(" "),l("col",{class:["tasks-table__column_4",{"tasks-table__column_hidden":!e.fields.companyName.visible}]}),e._v(" "),l("col",{class:["tasks-table__column_5",{"tasks-table__column_hidden":!e.fields.role.visible}]}),e._v(" "),l("col",{class:["tasks-table__column_6",{"tasks-table__column_hidden":!e.fields.forecast.visible}]}),e._v(" "),l("col",{class:["tasks-table__column_7",{"tasks-table__column_hidden":!e.fields.recentActivity.visible}]})]),e._v(" "),l("tbody",[l("tr",{staticClass:"tasks-table__header"},[l("th",[l("x-checkbox",{staticClass:"tasks-table__cell_title tasks-table__cell_checkbox",attrs:{id:"table__select-all"}})],1),e._v(" "),l("th",{staticClass:"tasks-table__cell_title text-medium_13"},[l("span",{staticClass:"tasks-table__icon_toggle",on:{click:function(t){e.fields.name.visible=!e.fields.name.visible}}},[e._v(e._s(e.fields.name.visible?"-":"+"))]),e._v("\n        Name\n      ")]),e._v(" "),l("th",{staticClass:"tasks-table__cell_title text-medium_13"},[l("span",{staticClass:"tasks-table__icon_toggle",on:{click:function(t){e.fields.email.visible=!e.fields.email.visible}}},[e._v(e._s(e.fields.email.visible?"-":"+"))]),e._v("Email\n      ")]),e._v(" "),l("th",{staticClass:"tasks-table__cell_title text-medium_13"},[l("span",{staticClass:"tasks-table__icon_toggle",on:{click:function(t){e.fields.companyName.visible=!e.fields.companyName.visible}}},[e._v(e._s(e.fields.companyName.visible?"-":"+"))]),e._v("Company name\n      ")]),e._v(" "),l("th",{staticClass:"tasks-table__cell_title text-medium_13"},[l("span",{staticClass:"tasks-table__icon_toggle",on:{click:function(t){e.fields.role.visible=!e.fields.role.visible}}},[e._v(e._s(e.fields.role.visible?"-":"+"))]),e._v("Role\n      ")]),e._v(" "),l("th",{staticClass:"tasks-table__cell_title text-medium_13"},[l("span",{staticClass:"tasks-table__icon_toggle",on:{click:function(t){e.fields.forecast.visible=!e.fields.forecast.visible}}},[e._v(e._s(e.fields.forecast.visible?"-":"+"))]),e._v("Forecast\n      ")]),e._v(" "),l("th",{staticClass:"tasks-table__cell_title text-medium_13"},[l("span",{staticClass:"tasks-table__icon_toggle",on:{click:function(t){e.fields.recentActivity.visible=!e.fields.recentActivity.visible}}},[e._v(e._s(e.fields.recentActivity.visible?"-":"+"))]),e._v("Recent activity\n      ")])]),e._v(" "),e._l(e.items,(function(t,i){return l("tasks-table-row",{key:i,attrs:{fields:e.fields,"row-data":t},on:{"row-select":function(t){return e.rowSelect(e.id)}}})}))],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{XCheckbox:l(104).default,TasksTableRow:l(288).default})},288:function(e,t,l){"use strict";l.r(t);var c={name:"TasksTableRow",props:{rowData:{type:Object,default:null},fields:{type:Object,default:null}}},n=(l(289),l(2)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("tr",{staticClass:"tasks-table__row"},[l("td",{staticClass:"tasks-table__cell tasks-table__cell_checkbox"},[l("x-checkbox",{attrs:{id:""+e.rowData.id},on:{click:function(t){return e.$emit("rowSelect",e.rowData.id)}}})],1),e._v(" "),l("td",{class:["tasks-table__cell tasks-table__cell_name",{"tasks-table__cell_collapse":!e.fields.name.visible}]},[l("x-avatar",{staticClass:"tasks-table__cell__avatar",attrs:{img:e.rowData.avatar}}),e._v("\n    "+e._s(e.rowData.name)+"\n  ")],1),e._v(" "),l("td",{class:["tasks-table__cell tasks-table__cell_email",{"tasks-table__cell_collapse":!e.fields.email.visible}]},[e._v("\n    "+e._s(e.rowData.email)+"\n  ")]),e._v(" "),l("td",{class:["tasks-table__cell tasks-table__cell_company-name",{"tasks-table__cell_collapse":!e.fields.companyName.visible}]},[e._v("\n    "+e._s(e.rowData.companyName)+"\n  ")]),e._v(" "),l("td",{class:["tasks-table__cell tasks-table__cell_role",{"tasks-table__cell_collapse":!e.fields.role.visible}]},[e._v("\n    "+e._s(e.rowData.role)+"\n  ")]),e._v(" "),l("td",{class:["tasks-table__cell tasks-table__cell_forecast",{"tasks-table__cell_collapse":!e.fields.forecast.visible}]},[e._v("\n    "+e._s(e.rowData.forecast)+"\n  ")]),e._v(" "),l("td",{class:["tasks-table__cell tasks-table__cell_recent_activity",{"tasks-table__cell_collapse":!e.fields.recentActivity.visible}]},[e._v("\n    "+e._s(e.rowData.recentActivity)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{XCheckbox:l(104).default,XAvatar:l(48).default})},289:function(e,t,l){"use strict";var c=l(282);l.n(c).a},290:function(e,t,l){(t=l(8)(!1)).push([e.i,".tasks-table__row:not(:last-of-type){border-bottom:1px solid #ebeff2}.tasks-table__row:hover{box-shadow:0 2px 8px rgba(0,0,0,.1)}.tasks-table__cell{padding:4px;color:#707683;font-weight:400;font-size:.8125rem;line-height:1.1875rem}@media screen and (min-width:900px){.tasks-table__cell{padding:1.375rem}}.tasks-table__cell_collapse{visibility:collapse;overflow-x:hidden;width:.5rem;max-width:.5rem;padding-left:2px;padding-right:2px;display:table-cell!important}.tasks-table__cell_checkbox{width:1.1875rem;height:1.1875rem}.tasks-table__cell__avatar{margin-right:.75rem}.tasks-table__cell_name{font-weight:500;font-size:.9375rem;line-height:1.375rem;letter-spacing:.01em;color:#323c47;display:flex}@media screen and (min-width:900px){.tasks-table__cell_name{font-size:.75rem;line-height:.9375rem}}",""]),e.exports=t},291:function(e,t,l){"use strict";var c=l(283);l.n(c).a},292:function(e,t,l){(t=l(8)(!1)).push([e.i,".tasks-table{background-color:#fff;box-shadow:0 6px 18px rgba(0,0,0,.06);width:100%;border-collapse:collapse}.tasks-table__header{border-bottom:1px solid #ebeff2;border-top-left-radius:4px;border-top-right-radius:4px}.tasks-table__cell_title{text-align:left;padding:.875rem;color:#334d6e;opacity:.5}.tasks-table__column_hidden{border-left:1px solid #ebeff2}.tasks-table__icon_toggle{font-weight:600;font-size:14px;margin-right:8px;cursor:pointer}",""]),e.exports=t},309:function(e,t,l){"use strict";l.r(t);var c={components:{TasksTable:l(287).default},data:function(){return{tasks:[{id:1,avatar:"img/avatar_1.jpg",name:"Lindsey Stroud",email:"lindsey.stroud@gmail.com",companyName:"Hatchbuck",role:"Manager",forecast:"50%",recentActivity:"5 Minutes ago"},{id:2,avatar:"img/avatar_2.jpg",name:"Lindsey Stroud",email:"lindsey.stroud@gmail.com",companyName:"Hatchbuck",role:"Manager",forecast:"50%",recentActivity:"5 Minutes ago"},{id:3,avatar:"img/avatar_1.jpg",name:"Lindsey Stroud",email:"lindsey.stroud@gmail.com",companyName:"Hatchbuck",role:"Manager",forecast:"50%",recentActivity:"5 Minutes ago"},{id:4,avatar:"img/avatar_2.jpg",name:"Lindsey Stroud",email:"lindsey.stroud@gmail.com",companyName:"Hatchbuck",role:"Manager",forecast:"50%",recentActivity:"5 Minutes ago"}]}}},n=l(2),component=Object(n.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("x-container",[t("x-button",{attrs:{variant:"accent"}},[this._v(" Add contact ")]),this._v(" "),t("tasks-table",{attrs:{items:this.tasks}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{XButton:l(68).default,TasksTable:l(287).default,XContainer:l(105).default})}}]);