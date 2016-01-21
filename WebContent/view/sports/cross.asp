<!--#include virtual="/view/template/cart.asp"-->

<div class="wrapper wrapper-content">
    <div class="row">
        <div class="col-lg-12">
            <!-- 리스트 -->
            <div class="section text game-container">
                <div class="panel game-board">
                  <div class="panel-heading font-bold game-board-header border-bottom-light">
                    <span class="glyphicon ic-cate cate-8"></span> <!-- cate-8, flag-1 은 코딩으로 빼자 -->
                    <span class="glyphicon ic_flag flag-1"></span>
                    리그이름
                    <label class="label label-info">00-00 00:00</label>
                  </div>
                  <div class="panel-body game-board-body">
                    <ul class="list-group game-board-list">
                      <li class="list-group-item">
                        <label class="label label-inverse">승무패</label><label class="label label-danger">마감</label>
                        <div class="btn-group btn-group-justified">
                          <a href="#" class="btn btn-success">
                            <div class="col-xs-6 col-md-6 text-left game-home-name">홈팀</div>
                            <div class="col-xs-6 col-md-6 text-right game-home-score">00.00</div>
                          </a>
                          <a href="#" class="btn btn-success">
                              <div class="col-xs-12 col-md-12 text-center game-center">vs(00.00)</div>
                          </a>
                          <a href="#" class="btn btn-success">
                            <div class="col-xs-6 col-md-6 text-left game-away-score">00.00</div>
                            <div class="col-xs-6 col-md-6 text-right game-away-name">원정</div>
                          </a>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <label class="label label-inverse">핸디오버</label><label class="label label-success">베팅</label>
                        <div class="btn-group btn-group-justified">
                          <a href="#" class="btn btn-success">
                            <div class="col-xs-6 col-md-6 text-left game-home-name">홈팀</div>
                            <div class="col-xs-6 col-md-6 text-right game-home-score">00.00<span class="glyphicon glyphicon-arrow-up text-danger"></span></div>
                          </a>
                          <a href="#" class="btn btn-success">
                              <div class="col-xs-12 col-md-12 text-center game-center">vs(00.00)</div>
                          </a>
                          <a href="#" class="btn btn-success">
                            <div class="col-xs-6 col-md-6 text-left game-away-score"><span class="glyphicon glyphicon-arrow-down text-success"></span>00.00</div>
                            <div class="col-xs-6 col-md-6 text-right game-away-name">원정</div>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
