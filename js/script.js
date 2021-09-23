var app = new Vue({
	el: '#root',
	data: {
		contacts: [
			{
				name: 'Michele',
				avatar: 'img/avatar_1.jpg',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: 'img/avatar_2.jpg',
				visible: true,
				messages: [{
					date: '20/03/2020 16:30:00',
					message: 'Ciao come stai?',
					status: 'sent'
				},
					{
						date: '20/03/2020 16:30:55',
						message: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						message: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'received'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: 'img/avatar_3.jpg',
				visible: true,
				messages: [{
					date: '28/03/2020 10:10:40',
					message: 'La Marianna va in campagna',
					status: 'received'
				},
					{
						date: '28/03/2020 10:20:10',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						message: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: 'img/avatar_4.jpg',
				visible: true,
				messages: [{
					date: '10/01/2020 15:30:55',
					message: 'Lo sai che ha aperto una nuova pizzeria?',
					status: 'sent'
				},
					{
						date: '10/01/2020 15:50:00',
						message: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
		],
		indexContact: 0,
		newMessage:'',
		
		ObjNewMessage:{
			date: '10/01/2020 15:54:55',
			message: '',
			status: 'sent'
		},
		newRecevedMessage:{
			date: '10/01/2020 15:54:55',
			message: 'Non posso parlare ora, ti scrivo più tardi',
			status: 'received'
		},
	},
	methods:{
		// al click indice della chat corrente (indexContact che partiva da 0) prende il valore del indice cliccato (indice del array che cicliamo con v-for), se sono uguali si aggiunge la classe "current-chat"
		currentChat: function(currentIndex){
			this.indexContact = currentIndex;
			
		},

		// al tasto Enter ivio il messaggio, [this.indexContact] serve per indicare la Chat corrente, senza This non funziona!
		btnSend:function(){
			this.ObjNewMessage.message = this.newMessage;
			this.contacts[this.indexContact].messages.push(this.ObjNewMessage)

			// tra un secondo faccio vedere il messagio del user con cui parlo, setTimeout funziona con => function!!! 
			setTimeout(() => {
				this.contacts[this.indexContact].messages.push(this.newRecevedMessage);
			  }, 1000);
		},
		
	},

  })

