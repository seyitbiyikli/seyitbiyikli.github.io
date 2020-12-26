
    function indir()
{
    var textAreaMetin = document.getElementById("textArea").innerHTML;
        var yazdirma = window.open('', '', 'height=800px,width=1200px');
        yazdirma.document.write(textAreaMetin);
        yazdirma.document.close();
        yazdirma.print();
}