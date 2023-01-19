
const drop= document.getElementById('topmid');
const hid= document.getElementById('hidden');

function hide(){

    if(drop.style.display === 'none'){
        drop.style.display= 'block';
        drop.style.border='1px  none';
        hid.style.position='relative';
        drop.style.position='fixed';
        drop.style.top='5%';
        drop.style.right='7%';
        drop.style.display='flex';
        drop.style.flexDirection='column';
        drop.style.background='white';
        drop.style.width='40%';
        drop.style.height='110px';
        drop.style.zIndex='4';
        drop.style.borderRadius='4%';
        drop.style.justifyContent='space-evenly';
        drop.style.paddingLeft='10px';
        
    }
    else{
        drop.style.display= 'none';
    }

};