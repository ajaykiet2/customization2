<template>
    <div class="tag-modal" v-if="display">
        <div class="tag-content">
            <div class="row">
                <div class="col-sm-4 input-tags">
                    <div class="title">Fields from your list</div>
                    <p class="help-text">Click any of the button below to add it to your message. This button represents field data config from your list.</p>
                    <div class="tags">
                        <input type="button" class="btn-white" tag="first_name" actionValue="Ajay" value="First Name" @click="insertTag" />
                        <input type="button" class="btn-white" tag="last_name" actionValue="Kumar" value="Last Name" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="address1" actionValue="C3/108 Supertech" value="Address 1" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="address2" actionValue="Eco Village 2" value="Address 2" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="state" actionValue="Uttar Pradesh" value="State" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="city" actionValue="Noida" value="City" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="zip" actionValue="201306" value="Zip" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="address2" actionValue="Eco Village 2" value="Address 2" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="state" actionValue="Uttar Pradesh" value="State" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="city" actionValue="Noida" value="City" @click="insertTag"/>
                        <input type="button" class="btn-white" tag="zip" actionValue="201306" value="Zip" @click="insertTag"/>
                    </div>
                </div>
                <div class="col-sm-8 output-tags">
                    <div class="title">Customize your message</div>
                    <div class="message-input">
                        <label v-if="title.length">{{title}}</label>
                        <div class="input-box" ref="message" contenteditable="true" @change="updateLiveMessage" @input="updateLiveMessage">{{filled}}</div>
                    </div>
                    <div class="live-example">
                        <p><span class="live-title">Live Example: </span><span class="live-output">{{liveValue}}</span></p>
                    </div>
                    <div class="action-buttons">
                        <div class="btn btn-xs tag-btn" @click="save">Save</div>
                        <div class="btn btn-xs tag-btn" @click="cancel">Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MergeTag",
    props:{
        display: { type: Boolean, default: false },
        title: { type: String, default: "" },
        prefilled: { type: String, default: "" },
    },
    data(){
        return {
            filled: "",
            liveValue: "",
            realValue: "",
            displayValue: ""
        }
    },
    mounted(){
        this.filled = this.prefilled;
        this.liveValue = this.prefilled;
        this.realValue = this.prefilled;
        this.displayValue = this.prefilled;
    },
    methods:{
        updateLiveMessage(e){
            let clone = e.target.cloneNode(true);
            let clone1 = e.target.cloneNode(true);
            let clone2 = e.target.cloneNode(true);
            let children = clone.querySelectorAll("div");
            children.forEach((child)=>{
                clone.replaceChild(document.createTextNode(child.getAttribute("value")),clone.querySelector("div#"+child.getAttribute("id")));
            });
            clone1.querySelectorAll("div").forEach((child)=>{
                clone1.replaceChild(document.createTextNode("$|"+child.getAttribute("id")+"|$"),clone1.querySelector("div#"+child.getAttribute("id")));
            });
            this.liveValue = clone.innerText
            clone2.querySelectorAll(".close-btn").forEach((child)=>{
                child.remove()
            });
            this.displayValue = clone2.innerHTML;
            this.realValue = clone1.innerText
        },

        insertTag(e){
            this.$refs.message.focus();
            let value = e.target.getAttribute("actionValue");
            let tag = e.target.getAttribute("tag");
            let label = e.target.value;
            let tagData = { label, tag, value };
            this.addTag(tagData); 
            let event = new CustomEvent("input", {})
            this.$refs.message.dispatchEvent(event);
        },
        save(){
            this.$emit("saveTags",{
                liveMessage: this.liveValue,
                displayValue: this.displayValue,
                realValue: this.realValue,
            })
        },
        cancel(){
            this.$emit("cancelTags", {});
        },
        createTag(data){
            let self = this;
            let tag = document.createElement("div");
            tag.setAttribute("class","btn btn-xs");
            tag.style.border = "1px solid #ccc";
            tag.style.margin = "0 3px";
            tag.style.borderRadius = "3px";
            tag.style.padding = "2px 7px";
            tag.style.backgroundColor = "#fff";
           
            tag.setAttribute("id",data.tag);
            tag.setAttribute("label",data.label);
            tag.setAttribute("value",data.value);
            tag.setAttribute("tag",data.tag);
            tag.setAttribute("contenteditable",false);

            let close = document.createElement("span");
            close.setAttribute("class","close-btn");
            close.style.fontColor="#000";
            close.style.fontWeight = "600";
            close.style.padding = "2px 2px 2px 7px";
            close.style.lineHeight = "10px";
            close.innerText = "x";
            close.setAttribute("contenteditable",false);
            tag.append(data.label);
            tag.append(" ");
            tag.append(close);
            close.addEventListener("click",function(){
                tag.remove();
                let event = new CustomEvent("input", {})
                self.$refs.message.dispatchEvent(event);
            });
            
            return tag;
        },
        addTag(tagData) {
            let tag = this.createTag(tagData);
            var sel, range;
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    var el = document.createElement("div");
                    el.append(tag);
                    var frag = document.createDocumentFragment(), node, lastNode;
                    while ( (node = el.firstChild) ) {
                        lastNode = frag.appendChild(node);
                    }
                    range.insertNode(frag);
                    if (lastNode) {
                        range = range.cloneRange();
                        range.setStartAfter(lastNode);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
            } else if (document.selection && document.selection.type != "Control") {
                document.selection.createRange().pasteHTML(tag);
            }
        }
    }
}
</script>
<style scoped>
    .tag-modal {
        top:0;
        left:0;
        width: 100%;
        height:100%;
        position:fixed;
        z-index:999;
        background:#00000030;
    }
    .tag-content{
        overflow:hidden;
        position:absolute;
        display: block;
        box-shadow: 0 0 10px #555;
        top:50%;
        padding:0 15px;
        width:70%;
        max-width: 700px;
        background: #fff;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .input-tags{
        background:#F5F5F5;
        border-right:1px solid #DDD;
        padding:30px 15px 20px 15px;
    }
    .input-tags .title{
        color:#000;
        font-size:18px;
        font-weight:400;
        font-family: calibri;
        margin-bottom:5px;
    }
    .input-tags .help-text{
        color:#999;
        font-size: 12px;
    }
    .input-tags .tags{
        margin-top:10px;
        padding:0px 15px 15px 0px;
        max-height:280px;
        overflow-y:scroll;
    }
    .input-tags .tags .btn-white{
        border:1px solid #aaa;
        background: #FFF;
        width:100%;
        color:#000;
        cursor: pointer;
        text-align:center;
        border-radius:3px;
        margin-bottom:10px;
        font-size: 12px;
        font-weight: 600;
        padding:2px;
    }
    .input-tags .tags::-webkit-scrollbar {
        width: 4px;
    }
    .input-tags .tags::-webkit-scrollbar-track {
        background:#CCC;
    }
    .input-tags .tags::-webkit-scrollbar-thumb {
        background:#AAA
    }
    .output-tags{
        background: #FFF;
        padding:30px 20px; 
    }
    .output-tags .title{
        font-size: 18px;
        color:#000;
        font-weight: 600;
    }
    .output-tags .message-input{
        margin-top:30px;
        margin-bottom:10px;
    }
    .output-tags .message-input .input-box{
        padding:6px;
        border:1px solid #CCC;
        border-radius:3px;
        width:100%;
    }
    .output-tags .live-example{
        font-size:12px;
        margin-top:15px;
    }
    .output-tags .live-example .live-title{
        color:#000;
    }
    .output-tags .live-example .live-output{
        color:#999;
    }
    .action-buttons{
        margin-top:30px;
    }
    .output-tags .tag-btn{
        background: #ccc;
        color:#000;
        padding:2px 10px;
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
    }
    .output-tags .tag-btn:hover{
        background: #aaa;
    }

</style>

