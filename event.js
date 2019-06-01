console.log('HELLO');

$.getJSON("./event.json", function (mesEvenements) {

    mesEvenements.forEach(event => {


        // begin : ajoute un evenemenet 
        $(`<div class="col-md-4">
			<div class="card mb-3 shadow-sm">
							<img width="348" height="225" src="images/${event.shortname}.jpg" alt="${event.name}">
							</div>
							<h3>${event.name}</h3>
							<p> ${event.bio}</p>
							<!-- Button trigger modal -->
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_view${event.shortname}">
								view
							</button>
							<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_edit${event.shortname}">
								Edit
							</button>
							<small class="text-muted">9 mins</small>
        </div>`).appendTo("#listDiv");
        // end : ajoute un  evenemenet

        // begin : ajoute un modal de details 
        $(`
       <div class="modal fade" id="modal_view${event.shortname}" tabindex="-1" role="dialog" aria-labelledby="modal_view${event.shortname}Label" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="row">
							<h5 class="modal-title" id="modal_view${event.shortname}Label">${event.name}</h5>
						</div>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<img width="500" height="330" src="images/${event.shortname}.jpg" alt="${event.name}">
						</div>
						<p> ${event.bio}</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
    
        `).appendTo("#listModal");

        // end : ajoute un modal de details 

    });

});