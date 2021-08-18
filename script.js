const imagesData = [
    {photo: 'https://cdn.pixabay.com/photo/2016/09/04/12/05/sunflower-1643794_960_720.jpg', title: 'Méhek élete', description: 'Általános tudnivalók egy átlagos méhkedvelőtől.'},
    {photo: 'https://cdn.pixabay.com/photo/2020/08/11/17/08/bees-5480566_960_720.jpg', title: 'Méhanya (nem királynő!!!)', description: '1 kaptárban csak egy van belőle. Potroha nagyobb a többi méhtől. Csak ő petézik, átlagos anya 1000-1500 petét rak le naponta. A kaptárat csak párzáskor és rajzáskor hagyja el.'},
    {photo: 'https://cdn.pixabay.com/photo/2015/07/01/10/55/honeycomb-827476_960_720.jpg', title: 'Lép', description: 'A méhek ezen fejlődnek. Fejlődés szakaszai: pete/ álca (képen)/ báb, ezt egy szóval fiasításnak nevezik. Dajkaméhek gondozzák őket. A másik lépre meg a virágport és a mézet gyűjtik'},
    {photo: 'https://cdn.pixabay.com/photo/2014/05/02/09/45/honey-bees-335906_960_720.jpg', title: 'Kikel a méh', description: 'Petelerakás után az anya 16, a munkás 21, a here 24 nap alatt fejlődik ki.'},
    {photo: 'https://cdn.pixabay.com/photo/2014/06/09/03/27/hiking-bees-365213_960_720.jpg', title: 'Raj', description: 'A legjobb családban is előfordul a rajzás. Több oka lehet. Ha ilyet látunk méhészt kell hívni! Ne próbáljuk befogni őket! Tilos őket cukrosvizzel itatni! Nem igényelnek ilyenkor semmit, magukkal vannak elfoglalva nem támadnak, ha nem bolygatjuk őket, de szólni kell méhésznek, mert az ellátatlan rajok betegséget terjeszthetnek, melyek megfertőzhetik a gondozott családokat is!'},
    {photo: 'https://cdn.pixabay.com/photo/2014/05/02/12/49/the-hive-335984_960_720.jpg', title: 'Darazsak', description: 'Nem összetévesztendők a méhekkel! Ezek többször tudnak csípni akkor sem pusztulnak el, ellentétben a méhekkel, ők fullánkkal szúrnak egyszer és elhullanak. A darazsak tudnak járni a vizen, a méhek belefulladnak. A darazsak a méhek ellenségei, lopják a mézet.'},
    {photo: 'https://cdn.pixabay.com/photo/2020/04/04/05/48/bees-5000948_960_720.jpg', title: 'Folyadék', description: 'A méhek is megszomjazhatnak. Sekély, tiszta, természetes vízzel érdemes őket itatni, a hálózati csapvíz nem az igazi számukra.'},
    {photo: 'https://cdn.pixabay.com/photo/2018/07/13/13/35/bee-3535799_960_720.jpg', title: 'Itató', description: 'Az itatóba kis szigetecskéket kell helyezni, hogy a méhek megtudjanak kapaszkodni rajta, mert különben fenn áll a veszélye, hogy belefulladhatnak.'},
    {photo: 'https://cdn.pixabay.com/photo/2017/04/11/16/58/flower-2222228_960_720.jpg', title: 'Virágzás', description: 'Bármilyen virágzásban lévő növényt TILOS vegyszerrel permetezni napnyugta előtt!' Vannak olyan permetszerek amivel egyáltalán nem lehet permetezni virágzásban. S van olyan is mely ha keverve van egy másik szerrel vált ki olyan hatást, hogy árt a méheknek. Jól át kell gondolni mit mivel és miért.},
    {photo: 'https://cdn.pixabay.com/photo/2012/02/28/10/23/bee-18192_960_720.jpg', title: 'Gyűjtés', description: 'A kis szorgos méhek a combjukon lévő kosárkába gyűjtik a virágport a lábszárukon lévő kefe segítségével. Szállnak egyik virágról másikra, így porozzák be a virágokat...'},
    {photo: 'https://cdn.pixabay.com/photo/2015/07/12/19/42/bees-842379_960_720.jpg', title: 'Kaptárak', description: 'A méhek lakásai. Van benne lakótér, fészek, utódok gondozása és méztér, éléskamra.'},
    {photo: 'https://cdn.pixabay.com/photo/2015/09/25/12/31/honey-957277_960_720.jpg', title: 'Fedelezés', description: 'A viasszal lefedett méz kiszabadítása kipörgetés előtt.'},
    {photo: 'https://cdn.pixabay.com/photo/2014/05/18/22/40/honeycomb-347558_960_720.jpg', title: 'Lépesméz', description: 'Méhek által gyártott lép méhsejtekben méz lelhető.'},
    {photo: 'https://cdn.pixabay.com/photo/2014/05/23/18/15/honey-352205_960_720.jpg', title: 'Méz', description: 'Fáradságos munka eredménye.'},
    {photo: 'https://cdn.pixabay.com/photo/2015/06/09/11/48/beekeeping-803495_960_720.jpg', title: 'Méhész', description: 'Ebbe a különös ruhába lévő ember a méhész. Ő látja el a méheket, hogy ne legyen gondjuk és nekünk lehessen méz mindig az asztalon. S az ifjú méhészinasokat kitanítja a szakma szépségére.'},
    {photo: 'https://cdn.pixabay.com/photo/2020/02/20/08/24/bird-4864225_960_720.jpg', title: 'Gyurgyalagfélék', description: 'Ezek a kis banditák a méhészetek legfőbb kártevői, ellenségei, egyszerűen megeszi a méheket. Egyébként védett madár.'},
    {photo: 'https://cdn.pixabay.com/photo/2018/04/14/09/21/pond-3318590_960_720.jpg', title: 'Tavirózsa', description: 'is szereti a méheket és fordítva.'}
];


const maxImgIndex = imagesData.length - 1;

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    
    $(".box.active").removeClass("active");
    const currImg = imagesData[photoNumber];
    $('#bigPic').attr('src', currImg.photo);
    $('#title').text(currImg.title);
    $('#desc').text(currImg.description);
    $(".box[data-index=" + photoNumber + "]").addClass("active");
};

$(document).ready(() => {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
    imagesData.forEach((item, index) => {
      $('#lower').append(`
      <div class = "box" data-index = "${index}" 
      style="background-image: url(${item.photo}); background-size: cover;">
      <div class = "title">${item.title}</div>
      </div>`)  
    });
    $(".box[data-index=" + currentPhoto + "]").addClass("active");
});

$('#rightBigArrow').click(() => {
    if (currentPhoto < maxImgIndex){
        currentPhoto++;
    }
    else {
      currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#leftBigArrow').click(() => {
    if (currentPhoto > 0){
        currentPhoto--;
    }
    else {
        currentPhoto = maxImgIndex;
    }
    loadPhoto(currentPhoto);
});

$(document).on("click", ".box", (event) => {
    let indexClicked = $(event.target).data('index');
    loadPhoto(indexClicked);
});