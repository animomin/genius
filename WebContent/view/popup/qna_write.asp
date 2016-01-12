<!-- Modal -->
<div class="modal fade popup" id="popup_qna_write" role="dialog">
	<div class="modal-dialog">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header" style="*padding:35px 50px;">
				<h2> GENIUS </h2>
				<p> 문의하기 </p>
			</div>
			<div class="modal-body" style="padding:40px 50px;">				
				<div class="form-group">
					<label for="qna_title"> 제목 : </label>
					<input type="text" class="form-control" id="qna_title" required="true" placeholder="문의글 제목을 입력해주세요." data-toggle="popover">
				</div>
				<div class="form-group">
					<label for="qna_pwd"> 비밀번호 : </label>
					<input type="text" class="form-control" id="qna_pwd" required="true" placeholder="비밀번호를 입력해주세요." data-toggle="popover">
				</div>
				<div class="form-group">
					<label for="qna_comment"> 내용 : </label>
  					<textarea class="form-control" rows="5" id="qna_comment"></textarea>		
				</div>				
			</div>
			<div class="modal-footer">				
				<a href="/view/qna.asp?pathname=qna_list" class="btn btn-default pull-right lng-btn-reg"><strong> 저 장 </strong></a>
        		<a href="/view/qna.asp?pathname=qna_list" class="btn btn-default pull-right lng-btn-qna"><strong>닫기</strong></a> 				
			</div>
		</div>

	</div>
</div>
