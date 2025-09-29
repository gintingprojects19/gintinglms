var menu=document.getElementById("menu");
var listmenu=document.getElementById("list-menu");
var xt=document.getElementById("xt");
var showdatampl=document.getElementById("show-datamapel");
var kelolamapel=document.getElementById("kelola-mapel");
var ishow=document.getElementById("ishow");
var exshow=document.getElementById("ex-show");
var smpp=document.getElementById("smpp");
var lpsmpp=document.getElementById("lp-smpp");
var exsmpp=document.getElementById("ex-smpp");
var smppmc=new Audio("g.mp3");
var header=document.getElementById("header");

var footer=document.getElementById("footer");
lpsmpp.addEventListener("click",function(){
    smpp.style.display="block";
    aboutyourteacher.style.display="none";
    smppmc.loop=true;
    smppmc.play();
})
exsmpp.addEventListener("click",function(){
    smpp.style.display="none";
    aboutyourteacher.style.display="block";
    smppmc.pause();
})

exshow.addEventListener("click",function(){
    showdatampl.style.display="none";
})
kelolamapel.addEventListener("change",function(){
    if(kelolamapel.value=="jm"){
        showdatampl.style.display="block";
        ishow.src="https://docs.google.com/spreadsheets/d/1MHT156tstsycPY8zSAG9O9D285QdKHGguCYC2KOyIhY/edit?usp=sharing";/*Jurnal mengajar */
    }
    if(kelolamapel.value=="dk"){
        showdatampl.style.display="block";/*Kosakata siswa*/
        ishow.src="https://docs.google.com/spreadsheets/d/1ObyK229IIxm6kiMy-Km2u6aMs0osBrBeBGC3qcTFR-Q/edit?gid=1911408061#gid=1911408061";
    }
    if(kelolamapel.value=="pd"){
        showdatampl.style.display="none";
        ishow.src="";/*dikosongkan untuk menampilkan instruksi */
    }
    if(kelolamapel.value=="cg"){
        showdatampl.style.display="block";
        ishow.src="notif.jpg";/*catatan guru */
    }
    if(kelolamapel.value=="ps"){
        showdatampl.style.display="block";
        ishow.src="notif.jpg";/*pelanggaran siswa*/
    }
})

menu.addEventListener("click",function(){
    listmenu.style.display="block";
    
})
xt.addEventListener("click",function(){
    listmenu.style.display="none";
})
var yourteacher=document.getElementById("yourteacher");
var blurscreen=document.getElementById("blur-screen");
var sytdwn=document.getElementById("syt-dwn")
var framevid=document.getElementById("frame-vid");
var ketvideo=document.getElementById("ket-video");
var pilihvideo=document.getElementById("pilih-video");
var can=document.getElementById("can");
var sub=document.getElementById("sub");
var infogtg=document.getElementById("info-gtg");
var head=document.getElementById("header");


pilihvideo.addEventListener("change",function(){
    if(pilihvideo.value=="a"){
        framevid.style.display="none";
        ketvideo.style.display="block";
        
        framevid.src="";
    }
    if(pilihvideo.value=="b"){
        framevid.style.display="block";
        framevid.src="https://www.youtube.com/embed/i_fzaCMs21I";
        ketvideo.style.display="none";
    }
    if(pilihvideo.value=="c"){
        framevid.style.display="block";
        framevid.src="https://www.youtube.com/embed/Y1Jvg8Mq5VQ";
        ketvideo.style.display="none";
    }
    if(pilihvideo.value=="d"){
        framevid.style.display="block";
        framevid.src="https://www.youtube.com/embed/bbYjTzvXIgQ";
        ketvideo.style.display="none";
    }
    if(pilihvideo.value=="e"){
        framevid.style.display="block";
        framevid.src="https://www.youtube.com/embed/A_aePhLtpQ0";
        ketvideo.style.display="none";
    }
})

var welcoming = document.getElementById("welcoming");
var beranda = document.getElementById("beranda");
var vidkbm = document.getElementById("vid-kbm");
var video = document.getElementById("video");
/*beranda.addEventListener("click",function(){
    welcoming.style.display="block";
    video.style.display="none";
     cnilai.style.display="none";
    framevid.src="";
    materials.style.display="none";
    guru.style.display="none";
    infogtg.style.display="none";
    head.style.position="static";
    frameall.style.paddingTop="0vh";
     showdatampl.style.display="none";
     kelola.style.display="block";
})*/
vidkbm.addEventListener("click",function(){
    welcoming.style.display="none";
    video.style.display="block";
    materials.style.display="none";
     cnilai.style.display="none";
     guru.style.display="none";
     infogtg.style.display="none";
    head.style.position="static";
    frameall.style.paddingTop="0vh";
    showdatampl.style.display="none";
    kelola.style.display="none";
    listmenu.style.display="none";
    

})
var phmateri=document.getElementById("ph-materi");
var listmateri=document.getElementById("list-materi");
var tt=document.getElementById("tt");
var pilihmateri=document.getElementById("pilih-materi");
var showmateri=document.getElementById("show-materi");
var materials=document.getElementById("materials");
pilihmateri.addEventListener("change",function(){
    if(pilihmateri.value=="tmp"){
        tt.style.display="block";
        listmateri.style.display="none";
    }
    if(pilihmateri.value=="m1"){
        tt.style.display="none";
        listmateri.style.display="block";
        showmateri.src="https://drive.google.com/file/d/1rM0BeY3oMoTJEa2NESejPljM42l3QyfR/preview";
    }
})
phmateri.addEventListener("click",function(){
    materials.style.display="block";
    welcoming.style.display="none";
    video.style.display="none";
    cnilai.style.display="none";
    framevid.src="";
    guru.style.display="none";
    infogtg.style.display="none";
    head.style.position="static";
    frameall.style.paddingTop="0vh";
    showdatampl.style.display="none";
    kelola.style.display="none";
    listmenu.style.display="none";
    
})
var fs=document.getElementById("fs");
var ns=document.getElementById("ns");
fs.addEventListener("click",function(){
    listmateri.style.position="fixed";
    listmateri.style.top="0";
    listmateri.style.width="80%";
    listmateri.style.height="90vh";
    listmateri.style.marginLeft="-200px";
    listmenu.style.display="none";
    fs.style.display="none";
    ns.style.display="block";
    
})
ns.addEventListener("click",function(){
    listmateri.style.position="static";
    listmateri.style.margin="auto";
    listmateri.style.height="68vh";
    listmateri.style.width="100%";
    listmateri.style.marginTop="8px";



    fs.style.display="block";
    ns.style.display="none";
    
})
var pnilai=document.getElementById("p-nilai");
var cnilai=document.getElementById("nilai");
pnilai.addEventListener("click",function(){
    cnilai.style.display="block";
    materials.style.display="none";
    welcoming.style.display="none";
    video.style.display="none";
    framevid.src="";
    guru.style.display="none";
    infogtg.style.display="none";
    head.style.position="static";
    frameall.style.paddingTop="0vh";
    showdatampl.style.display="none";
    kelola.style.display="none";
    listmenu.style.display="none";
    
})
var doassesment=document.getElementById("do-assesment");
var assesment=document.getElementById("assesment");
var dessoal=document.getElementById("des-soal");
var tipesoal=document.getElementById("tipe-soal");
tipesoal.addEventListener("change", function(){
    if(tipesoal.value=="tts"){
        dessoal.style.display="block";
        assesment.style.display="none";
        doassesment.src="";
    }
    if(tipesoal.value=="pilihanganda"){
        dessoal.style.display="none";
        assesment.style.display="block";
        doassesment.src="https://docs.google.com/spreadsheets/d/1ObyK229IIxm6kiMy-Km2u6aMs0osBrBeBGC3qcTFR-Q/edit?gid=1911408061#gid=1911408061";
    }
    if(tipesoal.value=="isiansingkat"){
        dessoal.style.display="none";
        assesment.style.display="block";
        doassesment.src="https://forms.gle/jW98Va2FLKC3SYLu7";
    }
    if(tipesoal.value=="lihatnilai"){
        dessoal.style.display="none";
        assesment.style.display="block";
        doassesment.src="https://forms.gle/G8KP7Z7oFbnHJSCj6";
    }
    if(tipesoal.value=="dwn"){
        dessoal.style.display="block";
        assesment.style.display="none";
        doassesment.src="";
        blurscreen.style.display="block";
        sytdwn.style.display="block";
    }
})
var logout=document.getElementById("logout");
logout.addEventListener("click",function(){
    prtlogout.style.display="block";
    blurscreen.style.display="block";
    
})
can.addEventListener("click",function(){
    blurscreen.style.display="none";
    sytdwn.style.display="none";
    pwrds.value="";
    warnpass.textContent="";
})
var pwrds=document.getElementById("pwrds");
var warnpass=document.getElementById("warn-pass");
pwrds.focus();
sub.addEventListener("click",function(){
    
    if(pwrds.value=="ziaginting"){
       dessoal.style.display="none";
        assesment.style.display="block";
        doassesment.src="https://docs.google.com/spreadsheets/d/1DgTLIplsfRijjtT71ZG1Wlg2wkP-40bxL-qXi2Qv-Cs/edit?usp=sharing";
        sytdwn.style.display="none";
        blurscreen.style.display="none";

        pwrds.value="";
        warnpass.textContent="";
    }
    if(pwrds.value==""){
        warnpass.textContent="";
        /*alert("Password belum diisi");*/ /*diaktifkan ketika presentasi dengan algoritma */
        warnpass.style.color="red";
        warnpass.style.textAlign="center";
        konfirpass.style.display="block";

    }
    else{
        warnpass.textContent="Password salah";
        warnpass.style.color="red";
        warnpass.style.textAlign="center";
    }
})
var scf=document.getElementById("scf");
var scn=document.getElementById("scn");
scf.addEventListener("click",function(){
    assesment.style.position="fixed";
    assesment.style.width="90%";
    assesment.style.top="-1%";
    assesment.style.left="5%";
    assesment.style.height="92vh";
    listmenu.style.display="none";
    scf.style.display="none";
    scn.style.display="block";
})
scn.addEventListener("click",function(){
    assesment.style.position="static";
    assesment.style.width="100%";
    assesment.style.top="0";
    assesment.style.left="0";
    assesment.style.height="65vh";
      scf.style.display="block";
      scn.style.display="none";
    
})
var guru=document.getElementById("guru");
var is=document.getElementById("is");
var aboutyourteacher=document.getElementById("aboutyourteacher");
var xslide=document.getElementById("x-slide");
var frameall=document.getElementById("frame");

yourteacher.addEventListener("click",function(){
    guru.style.display="block";
    materials.style.display="none";
    welcoming.style.display="none";
    video.style.display="none";
    cnilai.style.display="none";
    infogtg.style.display="block";
    head.style.position="fixed";
    frameall.style.paddingTop="10vh";
     kelola.style.display="none";
     listmenu.style.display="none";
     framevid.src="";
    
});
is.addEventListener("click",function(){
    aboutyourteacher.style.display="block";
    blurscreen.style.display="block";

})
xslide.addEventListener("click",function(){
    aboutyourteacher.style.display="none";
    blurscreen.style.display="none";
})
var nm=document.getElementById("nm");
/*nm.focus();  " menentukan posisi kursor pada input*/

var nmkamu=document.getElementById("nmkamu");
var pskamu=document.getElementById("pskamu");
var sbnm=document.getElementById("sb-nm");
var login=document.getElementById("login")
var nmuser=document.getElementById("nm-user");
var formlogin=document.getElementById("form-login");
var textkonfir=document.getElementById("text-konfir");
var okkonfir=document.getElementById("ok-konfir");
var konfirmasilog=document.getElementById("konfirmasi-log");
var btlnm=document.getElementById("btl-nm");
var btlkonfir=document.getElementById("btl-konfir");
var konlms=document.getElementById("kon-lms");
var audiologin=new Audio("login.mp3");
var audiononame=new Audio("noname.mp3");
var infouser=document.getElementById("info-user");
var brnd=document.getElementById("brnd");
var kelola=document.getElementById("kelola");
var gmp=document.getElementById("gmp");
sbnm.addEventListener("click",function(){
    if(pilihpengguna.value=="guru" && nmkamu.value!=="" && pskamu.value=="ginting19"){
        textkonfir.innerText="Nama Anda adalah : "+nmkamu.value.toUpperCase()+". Jika benar, klik tombol 'Lanjut'. Jika salah, klik tombol 'batal', ketik nama yang benar";
        textkonfir.style.fontSize="10pt";
        textkonfir.style.backgroundColor="white";
        textkonfir.style.padding="8px";
        textkonfir.style.color="black";
        blurscreen.style.display="block";
        konfirmasilog.style.display="block";
        konfirmasilog.style.backgroundColor="white";
        btlkonfir.style.display="block";
        konlms.style.display="block";
        btlnm.style.display="none";
        brnd.textContent="Kelola";
        kelola.style.display="block";
        welcoming.style.display="none";
        gmp.innerText="Guru : "+nmkamu.value.toUpperCase();
        beranda.addEventListener("click",function(){
            
            video.style.display="none";
            cnilai.style.display="none";
            framevid.src="";
            materials.style.display="none";
            guru.style.display="none";
            infogtg.style.display="none";
            head.style.position="static";
            frameall.style.paddingTop="0vh";
            showdatampl.style.display="none";
            kelola.style.display="block";
            welcoming.style.display="none";
            listmenu.style.display="none";
        })

        

        
    }
    if(pilihpengguna.value=="guru" && nmkamu.value=="" && pskamu.value=="ginting19"){
        blurscreen.style.display="block";
        textkonfir.textContent="Nama Belum diisi";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konfirmasilog.style.backgroundColor="white";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
    
        
    }
    if(pilihpengguna.value=="guru" && nmkamu.value!=="" && pskamu.value!=="ginting19"){
        blurscreen.style.display="block";
        textkonfir.textContent="Password salah";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
        
        
    }
    if(pilihpengguna.value=="guru" && nmkamu.value=="" && pskamu.value!=="ginting19"){
        blurscreen.style.display="block";
        textkonfir.textContent="Pastikan nama atau password sudah diisi dan benar";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
        
    }
    if(pilihpengguna.value=="guru" && nmkamu.value=="" && pskamu.value==""){
        blurscreen.style.display="block";
        textkonfir.textContent="Nama dan password belum diisi";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
        
    }
    if(pilihpengguna.value=="siswa" && nmkamu.value!=="" && pskamu.value=="maniamas123"){

        textkonfir.innerText="Nama Kamu adalah : "+nmkamu.value.toUpperCase()+". Jika benar, klik tombol 'Lanjut'. Jika salah, klik tombol 'batal', ketik nama yang benar";
        textkonfir.style.fontSize="10pt";
        textkonfir.style.backgroundColor="darkblue";
        textkonfir.style.padding="8px";
        textkonfir.style.backgroundColor="white";
        textkonfir.style.color="black";
        blurscreen.style.display="block";
        konfirmasilog.style.display="block";
        btlkonfir.style.display="block";
        konlms.style.display="block";
        btlnm.style.display="none";
        kelola.style.display="none";
        welcoming.style.display="block";
        beranda.addEventListener("click",function(){
            
            video.style.display="none";
            cnilai.style.display="none";
            framevid.src="";
            materials.style.display="none";
            guru.style.display="none";
            infogtg.style.display="none";
            head.style.position="static";
            frameall.style.paddingTop="0vh";
            showdatampl.style.display="none";
            kelola.style.display="none";
            welcoming.style.display="block";
            listmenu.style.display="none";
        })
        

    }if(pilihpengguna.value=="siswa" && nmkamu.value=="" && pskamu.value=="maniamas123"){
        blurscreen.style.display="block";
        textkonfir.textContent="Nama Belum diisi";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
        
    }
    if(pilihpengguna.value=="siswa" && nmkamu.value=="" && pskamu.value==""){
        blurscreen.style.display="block";
        textkonfir.textContent="Nama dan password belum diisi";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konfirmasilog.style.backgroundColor="white";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
        
    }
    if(pilihpengguna.value=="siswa" && nmkamu.value!=="" && pskamu.value==""){
        blurscreen.style.display="block";
        textkonfir.textContent="Password belum diisi";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konfirmasilog.style.backgroundColor="white";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
        
    }
    if(pilihpengguna.value=="siswa" && nmkamu.value!=="" && pskamu.value!=="maniamas123"){
        blurscreen.style.display="block";
        textkonfir.textContent="Pastikan password sudah diisi dan benar";
        textkonfir.style.color="black";
        textkonfir.style.backgroundColor="white";
        konfirmasilog.style.display="block";
        konfirmasilog.style.backgroundColor="white";
        konlms.style.display="none";
        btlkonfir.style.display="none";
        btlnm.style.display="block";
        
    }
    



    /*if untuk password salah belum dibuat */

})
btlnm.addEventListener("click",function(){
    blurscreen.style.display="none";
    konfirmasilog.style.display="none";
    nmkamu.focus();/* mengatur posisi kursor ke dalam input id nmkamu*/
    

})
btlkonfir.addEventListener("click",function(){
    blurscreen.style.display="none";
    konfirmasilog.style.display="none";
    nmkamu.focus();/* mengatur posisi kursor ke dalam input id nmkamu*/

})
konlms.addEventListener("click",function(){
    blurscreen.style.display="none";
    konfirmasilog.style.display="none";
        audiologin.play();
        formlogin.style.display="none";
        login.style.display="none";
        nmuser.innerText=nmkamu.value.toUpperCase() 
        listmenu.style.display="none";
        header.style.display="block";
        
        footer.style.display="block";
        frameall.style.display="block";

})

var btlout=document.getElementById("btl-out");
var okout=document.getElementById("ok-out");
var prtlogout=document.getElementById("prt-logout");
var klms=new Audio("no.mp3");
btlout.addEventListener("click",function(){
    klms.play();
    prtlogout.style.display="none";
    blurscreen.style.display="none";
})
okout.addEventListener("click",function(){
    window.location.reload();
    blurscreen.style.display="none";
})
var pilihpengguna=document.getElementById("pilihuser");
var pengguna=document.getElementById("pengguna");
var repengguna=document.getElementById("re-pengguna");
var iduser=document.getElementById("iduser");
pilihpengguna.addEventListener("change",function(){
    if(pilihpengguna.value=="guru"){
        pskamu.style.display="block";
        nmkamu.style.display="block";
        iduser.textContent="Anda masuk sebagai guru";
        sbnm.style.display="block";
        infouser.style.display="none";
        pilihpengguna.style.display="none";
        repengguna.style.display="block";
    }
    if(pilihpengguna.value=="siswa"){
        pskamu.style.display="block";
        nmkamu.style.display="block";
        sbnm.style.display="block";
        infouser.style.display="none";
        pilihpengguna.style.display="none";
        repengguna.style.display="block";
        iduser.textContent="Kamu masuk sebagai siswa";
    }

})
repengguna.addEventListener("click",function(){
    window.location.reload();
})





