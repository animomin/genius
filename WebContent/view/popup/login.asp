<!-- Modal -->
<div class="modal fade popup" id="popup_login" role="dialog">
	<div class="modal-dialog">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header" style="*padding:35px 50px;">
				<h2> GENIUS </h2>
			</div>
			<div class="modal-body" style="padding:40px 50px;">
				<form role="form" id="loginform" class="popupform">
					<div class="form-group">
						<label for="mem_id">ID </label>
						<input type="text" class="form-control" id="mem_id" required="true" placeholder="아이디를 입력해주세요."  data-toggle="popover">
					</div>
					<div class="form-group">
						<label for="mem_pwd"> PASSWORD </label>
						<input type="text" class="form-control" id="mem_pwd" required="true" placeholder="비밀번호를 입력해주세요." data-toggle="popover">
					</div>
					<button type="submit" class="btn btn-info btn-block">
						<span class="glyphicon glyphicon-off"></span> 로 그 인
					</button>
				</form>
			</div>
			<div class="modal-footer">
				<!--
				<button type="button" class="btn btn-link pull-right popup_btn" id="btn_reg">회원가입</button>
				<button type="button" class="btn btn-link pull-right popup_btn" id="btn_qna">문의하기</button>
				-->
				<a href="./view/member/regmember.asp" class="btn btn-link pull-right lng-btn-reg"><strong>회원가입</strong></a>
        		<a href="./view/qna.asp?pathname=qna_list" class="btn btn-link pull-right lng-btn-qna"><strong>문의하기</strong></a>				
			</div>
		</div>

	</div>
</div>
