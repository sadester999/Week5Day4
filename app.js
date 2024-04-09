$('.navItem').each(function()
{
    $(this).attr('style', 'color:white');
    console.log (this)
});
$('#nav').each(function()
{
    $(this).attr('style', 'background-color:#145');
});
$('li').even().each(function()
{
    $(this).attr('style', 'background-color:#ccc');
})
$('li').odd().each(function()
{
    $(this).attr('style', 'background-color:#aaa');
})
$('#myInput').val('Sadie');
