var mensagem = "Olá Professor Rony, essa é a nossa Atividade 1!";
alert (mensagem);

$(function(){
	$('#botao1').click(function(){
		$('#botao1').addClass('grey');
	});

	$('#botao2').click(function(){
		$('#botao2').addClass('grey');
	});

	$('#botao3').click(function(){
		$('#botao3').addClass('grey');
	});

	$('#botao4').click(function(){
		$('#botao4').addClass('grey');
		$('#mensagemdesucesso')
	});

	$('#botaoOK').click(function(){
		$('#botaoOK').addClass('grey');
		$('#mensagemdesucesso')
			.text("Botões alterados com sucesso.")
			.delay(2000)
			.fadeOut('fast');
	});


	});