$(document).ready(function() {
    $('.listaCarrinho').hide();
  
    $('.material-symbols-outlined').click(function() {
      $('.listaCarrinho').slideToggle();
    })
  
    $('.add').click(function() {
      const produto = $(this).closest('.produto')
      const nome = produto.data('nome')
      const valor = parseFloat(produto.data('valor'))
  
      const list = `<li>${nome} - ${valor.toFixed(2)}</li>`
      $('.listaCarrinho').append(list)
  
      const total = parseFloat($('.total').text())
      const novoTotal = total + valor
      $('.total').text(novoTotal.toFixed(2))
    })
  
  
  })