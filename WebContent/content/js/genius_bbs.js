function bbsMngr(bbs_kind){
	//TODO
	this.bbs_kind = bbs_kind;
	this.bbs_page = 1;
}

bbsMngr.prototype = {
		bbs_kind : null,
		bbs_page : null,
		bbs_id : null,
		bbs_list : null,
		bbs_content : {
			bbs_idx : null,
			bbs_title : null,
			bbs_comment : null,
			bbs_pwd : null,
			bbs_writer : null,
			bbs_date : null
		}
}