import { LightningElement, track } from 'lwc';

export default class CaptureAddresses extends LightningElement {
    @track rad1;
    @track rad2;
    @track rad3;
    @track rad4;

    handleFieldChange(event){
        var addressdata=this.template.querySelectorAll("lightning-input");
        console.log(addressdata);
        addressdata.forEach(function(varadd){
            if(varadd.name==="input1"){
                console.log(varadd.name);
                console.log(varadd.value);
                this.rad1=varadd.value;
            } else if(varadd.name==="input2"){
                console.log(varadd.name);
                console.log(varadd.value);
                this.rad2=varadd.value;
            } else if(varadd.name==="input3"){
                console.log(varadd.name);
                console.log(varadd.value);
                this.rad3=varadd.value;
            } else if(varadd.name==="input4"){
                console.log(varadd.name);
                console.log(varadd.value);
                this.rad4=varadd.value;
            }
    },this);
    }
}