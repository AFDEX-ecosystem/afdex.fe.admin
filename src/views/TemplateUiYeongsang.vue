<template>
  <THeader/>
  <div class="page_wrapper">
    <!-- header -->
    <!-- //header -->

    <!-- content -->
    <section id="content" class="content_wrapper grid_content" tabindex="0">
      <Breadcrumb :pageTitle="pageTitle" :breadcrumbItems="breadcrumbItems"></Breadcrumb>

      <CollapseBase :isShow="openCollapse" :title="'Template Collapse'" :isCheck="true"
                    :onClick="() => {openCollapse = !openCollapse}">
        <p class="box_title_sm">PAGINATION SERVICE</p>
        <div class="search_box col_3">
          <GridComponentV2
              :rowData="rowDataService1"
              :columnDefs="columnDefs1"
              :paginationClientFlag="false"
              :totalRecord="paginationFake"
              @customPagination="fnPagination"
              ref="gridKey"
          >
            <template #button>
              <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">엑셀 다운로드</button>
              <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">육상리포트다운로드</button>
              <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">선발지원서 다운로드
              </button>
              <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">삭제</button>
              <button type="button" class="button btn_md btn_black border_medium_gray bo_rd4 font_base_2">등록
              </button>

            </template>
          </GridComponentV2>
        </div>
      </CollapseBase>

      <div class="box dp_block">
        <h3 class="box_title">ToolTip Component</h3>
        <TooltipComponent
            :activator="'parent'"
            :location="'right'"
            :width="'300px'"
          >
            <template #activator>
              <button type="button" class="button btn_md btn_white ">btn_md</button>
            </template>
            <template #tooltipContent>
                 <span> Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn
                  hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên
                  liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông
                  nghiệp”. Công ty Cổ phần Hệ Sinh thái AFDEX (Gọi tắt là “Hệ Sinh
                  thái AFDEX”) ra ời với mong muốn tiếp thu tiến bộ kỹ thuật trong
                  sản xuất chế biến, nâng tầm văn hóa sản xuất, văn hóa tri ân trong
                  giao dịch thương mại dịch vụ, nâng cao giá trị ặc trưng của sản
                  phẩm vùng miền thông qua việc kế thừa thành quả ầu tư từ Cơ sở Dữ
                  liệu trong “Niên giám Nông nghiệp Thực phẩm Việt Nam - 2010” của
                  Công ty TNHH Phố Chợ.</span>
            </template>
          </TooltipComponent>
        <div class="box_inner">   
          <h3 class="box_title">BOX TITLE</h3>
          <p>
            box 내에 영역 1개 일때
            <br>
            메인에선 box_title
            <br>
            서브에선 box_title_sm
          </p>
          <h1 style="font-size: 40px">Menu</h1>
          <nav>
            <a class="font_20 font_nightblue" href="#section1">Form control</a><br/>
            <a class="font_20 font_nightblue" href="#section9">Validate</a><br/>
            <a class="font_20 font_nightblue" href="#section10">Text readonly</a><br/>
            <a class="font_20 font_nightblue" href="#section2">Button</a><br/>
            <a class="font_20 font_nightblue" href="#section3">Alert - sweet alert</a><br/>
            <a class="font_20 font_nightblue" href="#section4">Chart</a><br/>
            <a class="font_20 font_nightblue" href="#section5">Tab</a><br/>
            <a class="font_20 font_nightblue" href="#section19">Icon svg</a><br/>
            <a class="font_20 font_nightblue" href="#section18">Cart Item</a><br/>
            <a class="font_20 font_nightblue" href="#section6">Pagination</a><br/>
            <a class="font_20 font_nightblue" href="#section7">TModal</a><br/>
            <a class="font_20 font_nightblue" href="#section8">Font</a><br/>

            <a class="font_20 font_nightblue" href="#section11">Table</a><br/>
            <a class="font_20 font_nightblue" href="#section12">ATTACH FILE</a><br/>
            <a class="font_20 font_nightblue" href="#section13">LOADING</a><br/>
            <a class="font_20 font_nightblue" href="#section14">No Content</a><br/>
            <a class="font_20 font_nightblue" href="#section15">PAGINATION CLIENT</a><br/>
            <a class="font_20 font_nightblue" href="#section16">PAGINATION SERVICE</a><br/>
            <a class="font_20 font_nightblue" href="#section17">Dowload file</a><br/>
            <a class="font_20 font_nightblue" href="#section18">Pagination V2</a><br/>
          </nav>
        </div>
      </div>
      <div class="box">
        <div class="box_inner">
          <h3 class="box_title">BOX TITLE</h3>
          <p>box 내 영역 2개일때</p>
        </div>
        <div class="box_inner">
          <h3 class="box_title">BOX TITLE</h3>
          <p>box 내 영역 2개일때</p>
        </div>
      </div>
      <div class="divide_box">
        <div class="box">
          <h3 class="box_title">DIVIDE BOX TITLE</h3>
          <p>box 외 영역 2개로 나눌때</p>
        </div>
        <div class="box">
          <h3 class="box_title">DIVIDE BOX TITLE</h3>
          <p>box 외 영역 2개로 나눌때</p>
        </div>
      </div>
      <div class="box dp_block">
        <div class="box_section">
          <h4 class="box_title_sm">BOX box_title_sm</h4>
          <p>box 내에 영역 한줄로 여러개</p>
        </div>
        <div class="box_section">
          <h4 class="box_title_sm">BOX box_title_sm</h4>
          <p>box 내에 영역 한줄로 여러개</p>
        </div>
      </div>
      <div class="box">
        <div class="box_inner">
          <h3 class="box_title">BOX TITLE</h3>
          <div class="box_title_funtion">
            <a href="javascript:void(0);">title 옆 링크</a>
          </div>
        </div>
        <div class="box_inner">
          <h3 class="box_title">BOX TITLE</h3>
          <div class="box_title_funtion">
            <p class="check_row">
              <input type="checkbox" id="title_check" name="title_check">
              <label for="title_check">title 옆 체크박스</label>
            </p>
          </div>
        </div>
      </div>

      <div class="box dp_block" id="section1">
        <div class="box_section">
          <h3 class="box_title">FORM CONTROL</h3>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Col4</p>
          <div class="search_box col_4">
            <ul>
              <li>
                <p class="">Col4-1 Value:{{ pickerNull }}</p>
                <BaseDatePicker v-model="pickerNull"/>
              </li>
              <li>
                <p class="">Col4-2 Value:{{ picker2 }}</p>
                <BaseDatePicker v-model="picker2"/>
              </li>
              <li>
                <p class="">Col4-3 Value:{{ pickerNull3 }}</p>
                <MonthDatePicker v-model="pickerNull3"/>
              </li>
              <li>
                <p class="">Col4-4 Value:{{ picker2 }}</p>
                <MonthDatePicker v-model="picker2"/>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Col3</p>
          <div class="search_box col_3">
            <ul>
              <li>
                <p>Col3-1</p>
                <BaseDatePicker v-model="picker1"/>
              </li>
              <li>
                <p>Col3-2</p>
                <BaseDatePicker v-model="picker1"/>
              </li>
              <li>
                <p>Col3-3</p>
                <div class="search_flex">
                  <BaseDatePicker v-model="picker1"/>
                  <span>~</span>
                  <BaseDatePicker v-model="picker2"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Col2</p>
          <div class="search_box col_2">
            <ul>
              <li>
                <p>Col2-1</p>
                <BaseDatePicker v-model="picker1"/>
              </li>
              <li>
                <p>Col2-2</p>
                <BaseDatePicker v-model="picker1"/>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">SELECT BOX</p>
          <div class="search_box col_3">
            <ul>
              <li>
                <p>Select box with checkbox -- {{ selectSearch }}</p>
                <SelectBoxBaseCheckBox v-model="selectSearch" :data="listSelectBox"></SelectBoxBaseCheckBox>
              </li>
              <li>
                <p>Select box with search</p>
                <SelectBoxBaseSearch v-model="selectSearch" :data="listSelectBox"></SelectBoxBaseSearch>
              </li>
              <li>
                <p>Select box -- {{ selectBoxValue }}</p>
                <SelectBoxBase :id="'selectbox'" :name="'selectbox'" v-model="selectBoxValue" :data="listSelectBox"
                >
                </SelectBoxBase>
              </li>
              <li>
                <p>Select box with checkbox disable</p>
                <SelectBoxBaseCheckBox v-model="selectBoxDisable" :data="listSelectBox"
                                       :isDisable="true"></SelectBoxBaseCheckBox>
              </li>

              <li>
                <p>Select box with search disable</p>
                <SelectBoxBaseSearch v-model="selectSearchDisable" :data="listSelectBox"
                                     :isDisable="true"></SelectBoxBaseSearch>
              </li>
              <li>
                <p>Select box disable</p>
                <SelectBoxBase class="select_box" :id="'selectbox'" :name="'selectbox'"
                               v-model="selectBoxValueDisable"
                               :data="listSelectBox"
                               :isDisable="true">
                </SelectBoxBase>
              </li>
              <li>
                <p>Select box with check all</p>
                <SelectBoxBaseCheckBox v-model="selectSearchCheckAll" :data="listSelectBox"
                                       :is-show-check-all="true"></SelectBoxBaseCheckBox>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_section">
          <h3 class="box_title">Date picker</h3>
          <div class="search_box col_4">
            <ul>
              <li>
                <p class="">Date picker</p>
                <BaseDatePicker v-model="picker1"/>
              </li>
              <li>
                <p class="">Month Date picker</p>
                <MonthDatePicker v-model="picker2"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box dp_block" id="section9">
        <div class="box_section">
          <h3 class="box_title required">Input - Validate</h3>
          <p>List required : {{ store.arrRequired }}</p>
          <strong
              class="required">Note</strong><span> Error when use placehover + required but value is null</span><br/>
          <strong class="required">Note</strong><span> Validate when exist id and required</span><br/>
          <InputBase v-model="input1" id="input_validate" placeholder="텍스트 input" required/>
          <hr/>
          <TextArea v-model="input4" id="textArea_validate" placeholder="텍스트 input" required/>
          <hr/>
          <strong
              class="required">Note</strong><span> Default value follow v-model value - {{ selectBoxValueValidate }}</span><br/>
          <SelectBoxBase id="selectbox_validate" name="'selectbox'" v-model="selectBoxValueValidate" :data="listSelectBox"
          required>
          </SelectBoxBase>
          <CollapseBase :isShow="openCollapse" :title="'Template Collapse'" :isCheck="true"
                        :onClick="() => {openCollapse = !openCollapse}">
            <div class="box dp_block" id="section16">
              
              <template v-for="(data,index) in dataInputLst" >

<InputBase v-model="data.id" :id="'input_validate'+ index" placeholder="텍스트 input" required/>
</template>
            </div>
          </CollapseBase>
          
          
          <hr/>
          <div class="search_box col_4">
            <ul>
              <li>
                <p>Choose Date - value: {{ picker2 }}</p>
                <BaseDatePicker v-model="picker2" id="date_picker" :isRequired="true"/>
              </li>
              <li>
                <p>Choose Month- value: {{ pickerNull3 }}</p>
                <MonthDatePicker v-model="pickerNull3" id="dateMonth_picker" :isRequired="true"/>
              </li>
            </ul>
          </div>
          <br/>
          <p>Disable button:{{ store.check }}</p>
          <button :disabled="store.check" type="submit"
                  class="button btn_md btn_blue">Disabled when value is null
          </button>
        </div>
      </div>

      <div class="box dp_block" id="sectio10">
        <div class="box_section">
          <h3 class="box_title">Text + readonly</h3>
          <p>Note <span>Readonly + disable use :value not v-modal</span></p>
          <InputBase v-model="input2" placeholder="Enter some text here"/>
          <p>Readonly</p>
          <InputBase :value="textValue" class="readonly" placeholder="Enter some text here" readonly/>
          <p>Disable</p>
          <InputBase :value="textValue" placeholder="Enter some text here" disabled/>
          <hr/>
          <TextArea v-model="input5" placeholder="Enter some text here"/>
          <p>Readonly</p>
          <TextArea :value="textValue" class="readonly" placeholder="Enter some text here" readonly/>
          <p>Disable</p>
          <TextArea :value="textValue" placeholder="Enter some text here" disabled/>
          <hr/>
          <input class=" btn_light_blue bo_rd6 font_dim_gray" value="input"/>
        </div>
      </div>
      <div class="box dp_block" id="sectio10">
        <div class="box_section">
          <h3 class="box_title">QuillEditor</h3>
          <QuillEditor :modules="modules" toolbar="full" @editorChange="changeEditor()"
            ref="myEditor" />
        </div>
      </div>
      <div class="box dp_block" id="section2">
        <div class="box_section">
          <h3 class="box_title">BUTTON</h3>
          <div class="box_section">
          <p class="box_title_sm">Button area at the bottom of the page</p>
          <div class="btn_area">
        <button type="button" class="btn_xs btn_round2 btn_white">목록으로</button>
        <button type="button" class="btn_xs btn_round2 btn_primary">저장하기</button>
      </div>
        </div>
          <p class="box_title_sm">Button - size</p>
          
          <div class="flex ga-2">
            <button type="button" class="button btn_xs btn_white ">btn_xs</button>
            <button type="button" class="button btn_sm btn_white ">btn_sm</button>
            <button type="button" class="button btn_md btn_white ">btn_md</button>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Button - color</p>
          <div class="flex ga-2">
            <button type="button" class="button btn_sm btn_white ">btn_white</button>
            <button type="button" class="button btn_sm btn_black  ">btn_black</button>
            <button type="button" class="button btn_sm btn_blue ">btn_blue</button>
            <button type="button" class="button btn_sm btn_gray ">btn_gray</button>
            <button class="button btn_sm btn_medium_gray bo_rd6">btn_medium_gray</button>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Button - responsive</p>
          <div class="btn_group btn_start">
            <button type="button" class="button btn_xs btn_blue btn_responsive ">btn_xs
            </button>
            <button type="button" class="button btn_xs btn_blue btn_responsive ">btn_xs
            </button>
            <button type="button" class="button btn_xs btn_blue btn_responsive ">btn_xs
            </button>
          </div>
          <div class="btn_group btn_end">
            <button type="button" class="button btn_sm btn_blue btn_responsive ">btn_sm
            </button>
            <button type="button" class="button btn_sm btn_blue btn_responsive ">btn_sm
            </button>
            <button type="button" class="button btn_sm btn_blue btn_responsive ">btn_sm
            </button>
          </div>
          <div class="btn_group btn_center">
            <button type="button" class="button btn_md btn_blue btn_responsive ">btn_md
            </button>
            <button type="button" class="button btn_md btn_blue btn_responsive ">btn_md
            </button>
            <button type="button" class="button btn_md btn_blue btn_responsive ">btn_md
            </button>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Button - disabled</p>
          <div class="flex ga-2">
            <button type="button" class="button btn_md btn_white " disabled>btn_white</button>
            <button type="button" class="button btn_md btn_black " disabled>btn_black</button>
            <button type="button" class="button btn_md btn_blue " disabled>btn_blue</button>
            <button type="button" class="button btn_md btn_gray " disabled>btn_gray</button>
          </div>
        </div>
        <div class="box_section">
          <h3 class="box_title">Button</h3>

          <div class="dp_flex" style="gap:10px;flex-wrap: wrap">
            <button class="button btn_md btn_blue">btn_blue</button>
            <button class="button btn_sm btn_medium_gray bo_rd6">btn_medium_gray</button>
            <button class="button btn_sm btn_white bo_rd6">btn_white</button>

            <button class="button btn_md btn_blue" disabled>btn_blue</button>
            <button class="button btn_sm btn_medium_gray bo_rd6" disabled>btn_medium_gray</button>
            <button class="button btn_sm btn_white  bo_rd6" disabled>btn_white</button>
          </div>
          <hr/>
          <h3 class="box_title font_20">Search button</h3>
          <div class="dp_flex" style="gap:10px;">
            <button class="button btn_md btn_medium_gray  bo_rd6 ">조회</button>
            <button class="button btn_md btn_white  bo_rd6">초기화</button>
          </div>
          <hr/>
          <h3 class="box_title font_20">Dowload Excel Button</h3>
          <div class="dp_flex" style="gap:10px;">
            <ExportFileExcel :data="dataExport" :fileName="fileNameExport" :btnName="nameOfbtn"></ExportFileExcel>
          </div>
          <hr/>
          <h3 class="box_title font_20">Read Excel Button</h3>
          <div class="dp_flex" style="gap:10px;">
            <ReadFileExcel v-model="modelValueEx" :id="idEx" :name="nameEx" :label="labelEx"></ReadFileExcel>
            <div v-if="modelValueEx.length">
              <ul>
                   <li v-for="(sheet, index) in modelValueEx" :key="index">
                   <h4>sheetName : {{ sheet.name }}</h4>
                   <pre>data :{{ sheet.data }}</pre>
                   </li>
              </ul>
          </div>
          </div>
          <hr/>
          <h3 class="box_title font_20">Button normal</h3>
          <button class="button btn_md btn_gray border_medium_gray">조회</button>
          <hr/>
          <h3 class="box_title font_20">Button</h3>
          <button class="button btn_sm btn_medium_gray  bo_rd6 ">버튼 1</button>
          <hr/>
          <h3 class="box_title font_20">Input</h3>
          <!--          <button class="button btn_xs btn_light_blue  bo_rd6 font_dim_gray">Button</button>-->
          <input class=" btn_light_blue bo_rd6 font_dim_gray mt-1" value="input"/>
        </div>
        <div class="box_section">
          <p class="box_title_sm">CHECKBOX GROUP</p>
          <div class="search_box col_3">
            <ul>
              <li>
                <p>checkbox</p>
                <div class="select_checkbox">
                  <CheckboxBase v-for="item in listCheckBox" :mode="'show'" :value="item.name" v-model="checkboxGroup"
                                :id="item.id" :name="item.id" :key="item.id" :label="item.name">
                  </CheckboxBase>
                </div>
              </li>
              <li>
                <p>checkbox has selected value</p>
                <div class="select_checkbox">
                  <CheckboxBase v-for="item in listCheckBox2" :mode="'show'" :value="item.name" v-model="checkboxGroup2"
                                :id="item.id" :name="item.id" :key="item.id" :label="item.name">
                  </CheckboxBase>
                </div>
              </li>
              <li>
                <p>checkbox disabled</p>
                <div class="select_checkbox">
                  <CheckboxBase v-for="item in listCheckBox3" :mode="'show'" :value="item.name" :isDisable="true"
                                v-model="checkboxGroup3" :id="item.id" :name="item.id" :key="item.id"
                                :label="item.name">
                  </CheckboxBase>
                </div>
              </li>
            </ul>
          </div>

          <div class="search_box col_3">
            <ul>
              <li>
                <p>List checkbox value</p>
                <div class="select_checkbox">
                  <ListCheckBoxBase
                      :listData="listCheckBox1"
                      :mode="'show'"
                      v-model="checkboxGroup1"
                      id="checkAll"
                      name="checkAll"
                      :hasCheckAll="true"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sub_section_xs">
        <div class="box">
          <div class="section_tit_wrap">
            <h4 class="section_tit_xs">라디오버튼</h4>
          </div>
          <RadiobuttonBase v-for="item in listRadio1" :mode="'show'" :value="item.name" v-model="radiovalue1"
                                   :id="item.id" :name="item.id" :key="item.id" :checked="item.name == radiovalue1"
                                   :label="item.name">
                    Checkbox 1
                  </RadiobuttonBase>

        </div>
      </div>

        <!-- <div class="box_section">
          <p class="box_title_sm">Radio</p>
          <div class="search_box col_2">
            <ul>
              <li>
                <p>radio</p>

                  <RadiobuttonBase v-for="item in listRadio1" :mode="'show'" :value="item.name" v-model="radiovalue1"
                                   :id="item.id" :name="item.id" :key="item.id" :checked="item.name == radiovalue1"
                                   :label="item.name">
                    Checkbox 1
                  </RadiobuttonBase>

              </li>
              <li>
                <p>radio disable</p>
                <div class="select_checkbox">
                  <RadiobuttonBase v-for="item in listRadio2" :mode="'show'" :value="item.name" v-model="radiovalue2"
                                   :id="item.id" :name="item.id" :key="item.id" :checked="item.name == radiovalue2"
                                   :label="item.name"
                                   :isDisable="true">
                    Checkbox 1
                  </RadiobuttonBase>
                </div>
              </li>
            </ul>
          </div>
        </div> -->
        <div class="box_section">
          <p class="box_title_sm">Radio tab list - {{ checkedListRadio }}</p>
          <div class="tab_list_progress">
            <div v-for="i in 5" class="progress_list">
              <div class="progress_list_radio">
                <label class="item_title" :for="`radio_item_${i}`">
                  <span>{{ i }}</span>
                  <span>관리자_전공능력후보군도출{{ i }}</span>
                </label>
                <input type="radio" :id="`radio_item_${i}`" :value="i" v-model="checkedListRadio">
                <div class="progress_list_radio_item" :class="{ on: i < 5 }">
                  <div class="item_radio" @click="checkedListRadio = i"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box_section">
          <p class="box_title_sm">Button - icon</p>
          <button type="button" class="btn_icon icon_only document">document</button>
          <button type="button" class="btn_icon icon_only pagedown">pagedown</button>
          <button type="button" class="btn_icon icon_only pagedown" disabled>pagedown</button>
          <button type="button" class="btn_icon icon_only reload">초기화</button>
          <button type="button" class="btn_icon icon_only calendar">달력</button>
          <button type="button" class="btn_icon icon_only file">파일</button>
          <button type="button" class="btn_icon icon_only home">홈</button>
          <button type="button" class="btn_icon icon_only download">다운로드</button>
          <button type="button" class="btn_icon icon_only close">닫기</button>
          <button type="button" class="btn_icon icon_only plus">증가</button>
          <button type="button" class="btn_icon icon_only minus">감소</button>
          <button type="button" class="btn_md btn_white btn_icon reload ">초기화</button>

          <p class="box_title_sm">Button icon list</p>
          <div class="box_section">
            <p class="box_title_sm">Tab List Check Box</p>
            <div class="tab_list_progress">
              <div v-for="i in 5" class="progress_list">
                <div class="progress_list_icon">
                  <div class="progress_list_item_icon" :class="{ on: i < 5 }">
                    <button type="button" class="btn_icon icon_only home">홈</button>
                  </div>
                  <div class="item_title">
                    <p>{{ i }}</p>
                    <p>관리자_전공능력후보군도출{{ i }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Button - icon hover X</p>
          <button type="button" class="btn_icon icon_only calendar hover_not">달력</button>
          <button type="button" class="btn_icon icon_only file hover_not">파일</button>
          <button type="button" class="btn_icon icon_only home hover_not">홈</button>
          <button type="button" class="btn_icon icon_only download hover_not">다운로드</button>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Button - area</p>
          <div class="btn_area">
            <button type="button" class="button btn_md btn_white ">닫기</button>
            <button type="button" class="button btn_md btn_black  ">확인</button>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">PLUS & MINUS</p>
          <div class="plus_minus">
            <button type="button" class="btn_icon icon_only minus">감소</button>
            <span class="mg_l10 mg_r10">2</span>
            <button type="button" class="btn_icon icon_only plus">증가</button>
          </div>
          <div class="plus_minus">
            <button type="button" class="btn_icon icon_only minus">감소</button>
            <input type="number" value="1">
            <button type="button" class="btn_icon icon_only plus">증가</button>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Custom</p>
          <div class="footer_flex">
            <div>
              <strong>의무 근무기간</strong>
              입사 후 12개월까지
            </div>
            <div>
              <strong>세액 정산기간</strong>
              2023.12.21 ~ 2024.12.31
            </div>
            <div>
              <strong>퇴사시 환급액</strong>
              <div class="text_form mg_b10">
                <div class="d-flex justify-center align-center">
                  <!-- 6,000,000원 -->
                  <input type="text" class="">
                  <span class="check_row mg_l10 d-flex">
										<input type="checkbox" id="check_footer" name="check_footer">
										<label for="check_footer">직접입력</label>
									</span>
                </div>
                <button type="button" class="button btn_md btn_white  bo_rd6">월 별 예상 환급액</button>
              </div>
              <ul class="list_line font_point">
                <li>입사 후 월 갱신 시 500,000원씩 감소</li>
                <li>본 정보는 편의 제고를 위한 참고자료이며 법적효력이 없음</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="box dp_block" id="section3">
        <div class="box_section">
          <h3 class="box_title required">Alert</h3>
          <button class="button btn_md btn_blue" @click="showAlert">alert</button>
          <a href="https://sweetalert2.github.io/#input-types" target="_blank">Link document</a>
        </div>
      </div>

      <div class="box dp_block" id="section4">
        <div class="box_section">
          <p class="box_title_sm">Chart</p>
        </div>
<!--        <BarChart-->
<!--            :chartHeight="dataBaseChart.chartHeight"-->
<!--            :dataset="dataBaseChart.dataset"-->
<!--            :category="dataBaseChart.category"-->
<!--            :title="dataBaseChart.title"-->
<!--            :labelsPosition="dataBaseChart.labelsPosition"-->
<!--            :horizontal="true"-->
<!--            :titleChart="'2025'"-->
<!--        />-->

<!--        <BarChart-->
<!--            :chartHeight="dataBaseChart.chartHeight"-->
<!--            :dataset="dataBaseChart.dataset"-->
<!--            :category="dataBaseChart.category"-->
<!--            :title="dataBaseChart.title"-->
<!--            :labelsPosition="dataBaseChart.labelsPosition"-->
<!--        />-->

        <ColumnChart
            :chartHeight="dataBaseChart1.chartHeight"
            :dataset="dataBaseChart1.dataset"
            :category="dataBaseChart1.category"
            :title="dataBaseChart1.title"
            :labelsPosition="dataBaseChart1.labelsPosition"
            :tooltip="dataBaseChart1.tooltip"
        />


        <PieChart
            :dataset="dataPieChart.dataset"
            :color="dataPieChart.color"
            :category="dataPieChart.category"
            :show="true"
            :chartHeight="350"
        />
        <PieChart
            :dataset="dataPieChart.dataset"
            :category="dataPieChart.category"
        />
        <LineChart
            :dataset="dataLineChart.dataset"
            :labelsPosition="dataLineChart.labelsPosition"
            :title="dataLineChart.title"
            :category="dataLineChart.category"
            :colorset="dataLineChart.color"
        />
        <SemiDonut
            :dataset="dataSemiDonut.dataset"
            :color="dataSemiDonut.color"
            :colorLabelsPosition="dataSemiDonut.colorLabelsPosition"
            :category="dataSemiDonut.category"
            :labelsPosition="dataSemiDonut.labelsPosition"
            :show="true"
            :chartHeight="350"
        />
      </div>

      <div class="box dp_block" id="section5">
        <div class="box_section">
          <h3 class="box_title">TAB</h3>
          <p class="box_title_sm">Tab List - basic</p>
          <div class="tab_list">
            <p class="radio_tab">
              <input type="radio" id="radio_tab1" name="radio_tab">
              <label for="radio_tab1">TAB 1</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab2" name="radio_tab">
              <label for="radio_tab2">TAB 2</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab3" name="radio_tab">
              <label for="radio_tab3">TAB 3</label>
            </p>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Tab List - 100%</p>
          <div class="tab_list flex">
            <p class="radio_tab">
              <input type="radio" id="radio_tab2_1" name="radio_tab2">
              <label for="radio_tab2_1">TAB 1</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab2_2" name="radio_tab2">
              <label for="radio_tab2_2">TAB 2</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab2_3" name="radio_tab2">
              <label for="radio_tab2_3">TAB 3</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab2_4" name="radio_tab2">
              <label for="radio_tab2_4">TAB 4</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab2_5" name="radio_tab2">
              <label for="radio_tab2_5">TAB 5</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_tab2_6" name="radio_tab2">
              <label for="radio_tab2_6">TAB 6</label>
            </p>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Tab List Check Box</p>
          <div class="tab_list_progress">
            <div v-for="i in 10" class="progress_list">
              <div class="progress_list_item">
                <div class="progress_list_item_button" :class="{ on: i < 10 }">
                  <button>{{ i }}</button>
                </div>
                <p>관리자_전공능력후보군도출{{ i }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box_section">
          <div class="sub_section_sm">
          <div class="radio_tab_wrap">
            <p class="radio_tab inline">
              <input type="radio" id="radio_round1" value="" checked />
              <label for="radio_round1">라디오탭1</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio_round2" value="" />
              <label for="radio_round2">라디오탭2</label>
            </p>
          </div>
        </div>
        <div class="sub_section_sm">
          <div class="radio_tab_lg_wrap">
            <p class="radio_tab_lg">
              <input type="radio" id="radio_1" checked />
              <label for="radio_1">탭제목 1</label>
            </p>
            <p class="radio_tab_lg">
              <input type="radio" id="radio_2" />
              <label for="radio_2">탭제목 2</label>
            </p>
          </div>
        </div>
        </div>
      </div>
      <div class="box dp_block" id="section19">
        <div class="box_section">
          <h3 class="box_title">Icon svg</h3>
        </div>
        <IconBase
            width="64"
            height="64"
            color="black"
            stroke="1.5"
        />
        <div>
          <IconBase
              width="64"
              height="64"
              color="black"
              stroke="1.5"
          />
        </div>
      </div>

      <div class="box dp_block" id="section18">
        <div class="box_section">
          <h3 class="box_title">Cart Item</h3>
        </div>

        <div class="cart_list">
          <p>hover show background image</p>
          <div class="cart_item_bgimage">
            <img src="../assets/images/404-error-page.png" @error="'default'" alt="default">
            <div>
              <!-- Thay thế nội dung tương ứng -->
              <p>Text default</p>
            </div>
          </div>
        </div>

        <div class="cart_list mg_t100 flex gap-2">
          <div class="cart_item">
            <img src="../assets/images/404-error-page.png" @error="'default'" alt="default">
            <div class="cart_item_content" data-status="1" data-show-button="true">
              <!-- Thay thế nội dung tương ứng -->
              <span>status</span>
              <p>Text Title</p>
              <p>Text Description</p>
              <p>Text Description</p>
              <button class="button btn_xs btn_gray">button</button>
              
            </div>
          </div>

          <div class="cart_item">
            <img src="../assets/images/404-error-page.png" @error="'default'" alt="default">
            <div class="cart_item_content" data-status="2" data-show-button="">
              <!-- Thay thế nội dung tương ứng -->
              <span>status</span>
              <p>Text Title</p>
              <p>Text Description</p>
              <button class="button btn_xs btn_gray">button</button>
            </div>
          </div>
        </div>
      </div>

      <div class="box dp_block" id="section6">
        <div class="box_section">
          <h3 class="box_title">PAGINATION</h3>
          <div class="pagination_wrap">
            <a href="javascript:void(0);" class="func first">First page</a>
            <a href="javascript:void(0);" class="func back">back page</a>
            <a href="javascript:void(0);" class="active">1</a>
            <a href="javascript:void(0);">2</a>
            <a href="javascript:void(0);">3</a>
            <a href="javascript:void(0);" class="func next">Next page</a>
            <a href="javascript:void(0);" class="func last">Last page</a>
          </div>
        </div>
      </div>
      <div class="box dp_block" id="section18">
        <div class="box_section">
          <h3 class="box_title">PAGINATION V2</h3>
          <div>
      <button @click="changeTab(1)">Tab 1</button>
      <button @click="changeTab(2)">Tab 2</button>
    </div>
          <PaginationUi
            :totalRecord="100"
            :paginationPageSize="20"
            @updatePage="gotoPage"
            :initialPage="currentPage"
          />
        </div>
      </div>

      <div class="box dp_block" id="section7">
        <div class="box_section">
          <p class="box_title_sm">Tmodal</p>
          <!-- 2열 일때 -->
          <button class="button btn_md btn_blue" @click="modalOpen=!modalOpen">Show modal</button>
          <TModal :is-open="modalOpen" :is-show-header="true" :is-show-footer="true" :modal-id="modalId"
                  @close-modal="closeModal">
            <!-- Modal content goes here -->
            <template #title>
              <strong>교육과정개발개편 일정 일괄 설정</strong>
            </template>
            <template #default>
              <h4>기본정보</h4>
              <div class="box_section">
                <p class="box_title_sm">Col3</p>
                <div class="search_box col_3">
                  <ul>
                    <li>
                      <p>Col3-1</p>
                      <MonthDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-2</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-3</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>

                    <li>
                      <p>Col3-1</p>
                      <MonthDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-2</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-3</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>

                    <li>
                      <p>Col3-1</p>
                      <MonthDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-2</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-3</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>

                    <li>
                      <p>Col3-1</p>
                      <MonthDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-2</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>
                    <li>
                      <p>Col3-3</p>
                      <BaseDatePicker v-model="picker1"/>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <template #footer>
              <!-- Footer content goes here -->
              <button type="button" class="button btn_md btn_white popup_close "
                      @click="confirmAction">
                닫기
              </button>
              <button type="button" class="button btn_md btn_black  "
                      @click="cancelAction">확인
              </button>
            </template>
          </TModal>
        </div>
        <div class="box_section">
          <p class="box_title_sm">Tmodal QR</p>
          <!-- 2열 일때 -->
          <button class="button btn_md btn_blue" @click="modalQROpen= true">Show modal QR</button>
          <TModalQR v-model:modalOpen="modalQROpen" :urlValue ="'https://www.npmjs.com/package/qrcode-vue3'" :titleVal="'만족도 조사 공유하기'"></TModalQR>
        </div>
      </div>

      <div class="box dp_block" id="section8">
        <h3 class="box_title">Font size</h3>
        <p class="font_12">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_13">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_14">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_15">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_16">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_17">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_18">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_19">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_20">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
      </div>
      <div class="box dp_block">
        <h3 class="box_title">Font line height</h3>
        <p class="font_20 lh_0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_20 lh_10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_20 lh_12">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_20 lh_15">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_20 lh_17">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
        <p class="font_20 lh_20">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ..."</p>
        <hr/>
      </div>

      <div class="box dp_block" id="section11">
        <div class="box_section">
          <h3 class="box_title">TABLE</h3>
          <p class="box_title_sm">table - col</p>
          <table class="tbl_col">
            <caption>table col</caption>
            <colgroup>
              <col style="width: 8%;">
              <col style="width: 8%;">
              <col style="width: 6%;">
              <col style="width: 9%;">
              <col style="width: auto;">
              <col style="width: 10%;">
              <col style="width: 10%;">
              <col style="width: 6%;">
              <col style="width: 6%;">
              <col style="width: 6%;">
              <col style="width: 6%;">
              <col style="width: 8%;">
            </colgroup>
            <thead>
            <tr>
              <th scope="col">성명</th>
              <th scope="col">제도구분</th>
              <th scope="col">선발기수</th>
              <th scope="col">선발회사</th>
              <th scope="col">배치현업팀</th>
              <th scope="col">소속대학</th>
              <th scope="col">전공구분</th>
              <th scope="col">학위과정</th>
              <th scope="col">소속연구실</th>
              <th scope="col">상태</th>
              <th scope="col">육성리포트</th>
              <th scope="col">선발지원서보기</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row" colspan="12">
                <p class="font_gray pd_20">조회된 데이터가 없습니다</p>
              </th>
            </tr>
            <tr>
              <th scope="row">
                <div class="img_name">
                  <div class="img_wrap xs">
                    <img src="../assets/images/img_my_info.png" alt="이미지 없음">
                  </div>
                  엔지비
                </div>
              </th>
              <td>연구장학생</td>
              <td>20기</td>
              <td>현대자동차</td>
              <td>자율주행상용개발팀</td>
              <td>한양대학교</td>
              <td>기계공학과</td>
              <td>석사</td>
              <td>602호</td>
              <td>교육중</td>
              <td>
                <button type="button" class="btn_icon icon_only document">리포트</button>
              </td>
              <td>
                <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="img_name">
                  <div class="img_wrap xs">
                    <img src="../assets/images/img_my_info.png">
                  </div>
                  엔지비2
                </div>
              </th>
              <td>연구장학생</td>
              <td>20기</td>
              <td>현대자동차</td>
              <td>자율주행상용개발팀</td>
              <td>한양대학교</td>
              <td>기계공학과</td>
              <td>석사</td>
              <td>602호</td>
              <td>교육중</td>
              <td>
                <button type="button" class="btn_icon icon_only document" disabled>리포트</button>
              </td>
              <td>
                <button type="button" class="btn_icon icon_only pagedown" disabled>선발지원서</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="box_section">
          <p class="box_title_sm">table - hover, check = js/admin_table.js tableCheck() 참고</p>
          <table class="tbl_col tbl_hover">
            <caption>table col - hover, check</caption>
            <colgroup>
              <col style="width: 50px;">
              <col style="width: 8%;">
              <col style="width: 8%;">
              <col style="width: 6%;">
              <col style="width: 9%;">
              <col style="width: auto;">
              <col style="width: 10%;">
              <col style="width: 10%;">
              <col style="width: 6%;">
              <col style="width: 6%;">
              <col style="width: 6%;">
              <col style="width: 6%;">
              <col style="width: 8%;">
            </colgroup>
            <thead>
            <tr>
              <th scope="col">
                <p class="check_only">
                  <input type="checkbox" id="table_check_all" name="tablecheck" class="checked_all">
                  <label for="table_check_all">check_only</label>
                </p>
              </th>
              <th scope="col">성명</th>
              <th scope="col">제도구분</th>
              <th scope="col">선발기수</th>
              <th scope="col">선발회사</th>
              <th scope="col">배치현업팀</th>
              <th scope="col">소속대학</th>
              <th scope="col">전공구분</th>
              <th scope="col">학위과정</th>
              <th scope="col">소속연구실</th>
              <th scope="col">상태</th>
              <th scope="col">육성리포트</th>
              <th scope="col">선발지원서보기</th>
            </tr>
            </thead>
            <tbody>
            <tr class="check">
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" id="table_check2_1" name="tablecheck" class="checked" checked>
                  <label for="table_check2_1">check_only</label>
                </p>
              </th>
              <td>
                <div class="img_name">
                  <div class="img_wrap xs">
                    <img src="../assets/images/img_my_info.png">
                  </div>
                  엔지비3
                </div>
              </td>
              <td>연구장학생</td>
              <td>20기</td>
              <td>현대자동차</td>
              <td>자율주행상용개발팀</td>
              <td>한양대학교</td>
              <td>기계공학과</td>
              <td>석사</td>
              <td>602호</td>
              <td>교육중</td>
              <td>
                <button type="button" class="btn_icon icon_only document">리포트</button>
              </td>
              <td>
                <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" id="table_check2_2" name="tablecheck" class="checked">
                  <label for="table_check2_2">check_only</label>
                </p>
              </th>
              <td>
                <div class="img_name">
                  <div class="img_wrap xs">
                    <img src="../assets/images/img_my_info.png">
                  </div>
                  엔지비4
                </div>
              </td>
              <td>연구장학생</td>
              <td>20기</td>
              <td>현대자동차</td>
              <td>자율주행상용개발팀</td>
              <td>한양대학교</td>
              <td>기계공학과</td>
              <td>석사</td>
              <td>602호</td>
              <td>교육중</td>
              <td>
                <button type="button" class="btn_icon icon_only document" disabled>리포트</button>
              </td>
              <td>
                <button type="button" class="btn_icon icon_only pagedown" disabled>선발지원서</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="box_section">
          <p class="box_title_sm">table - row</p>
          <table class="tbl_row">
            <caption>table row</caption>
            <colgroup>
              <col style="width: 18%;">
              <col style="width: auto;">
            </colgroup>
            <tbody>
            <tr>
              <th scope="row">문서번호</th>
              <td class="td_input">
                NGVHY <input type="text" value="예 2023078 - 01호" class="mg_l5">
              </td>
            </tr>
            <tr>
              <th scope="row">청구일</th>
              <td>
                <button type="button" class="btn_icon icon_only calendar hover_not mg_r5">달력</button>
                2024.02.01
              </td>
            </tr>
            <tr>
              <th scope="row">선발회사</th>
              <td class="td_input">
                <div class="select_form">
                  <select class="select_custom">
                    <option value="" selected>전체</option>
                    <option value="">select</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">수신</th>
              <td>현대자동차(주) 대표이사</td>
            </tr>
            <tr>
              <th scope="row">참조</th>
              <td>unknown@email.com</td>
            </tr>
            <tr>
              <th scope="row">제목</th>
              <td>현대자동차 [국내 연구장학생 및 계약학과] 장학대여금 청구의 건</td>
            </tr>
            <tr>
              <th scope="row">수신인(인사담당)</th>
              <td class="td_input">
                <div class="select_form">
                  <select class="select_custom">
                    <option value="" selected>전체</option>
                    <option value="">select</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">장학제도</th>
              <td>
                <p class="check_row">
                  <input type="checkbox" id="checkTable" name="checkTable">
                  <label for="checkTable">연구장학생</label>
                </p>
                <p class="check_row">
                  <input type="checkbox" id="checkTable2" name="checkTable">
                  <label for="checkTable2">계약학과</label>
                </p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="box_section">
          <p class="box_title_sm">table - scroll 1280px (scrollx_table + lg)</p>
          <div class="scrollx_table lg">
            <table class="tbl_col">
              <caption>table col scroll</caption>
              <colgroup>
                <col style="width: 8%;">
                <col style="width: 8%;">
                <col style="width: 6%;">
                <col style="width: 9%;">
                <col style="width: auto;">
                <col style="width: 10%;">
                <col style="width: 10%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 8%;">
              </colgroup>
              <thead>
              <tr>
                <th scope="col">성명</th>
                <th scope="col">제도구분</th>
                <th scope="col">선발기수</th>
                <th scope="col">선발회사</th>
                <th scope="col">배치현업팀</th>
                <th scope="col">소속대학</th>
                <th scope="col">전공구분</th>
                <th scope="col">학위과정</th>
                <th scope="col">소속연구실</th>
                <th scope="col">상태</th>
                <th scope="col">육성리포트</th>
                <th scope="col">선발지원서보기</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">table - scroll 1024px (scrollx_table + md)</p>
          <div class="scrollx_table md">
            <table class="tbl_col">
              <caption>table col scroll</caption>
              <colgroup>
                <col style="width: 8%;">
                <col style="width: 8%;">
                <col style="width: 6%;">
                <col style="width: 9%;">
                <col style="width: auto;">
                <col style="width: 10%;">
                <col style="width: 10%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 8%;">
              </colgroup>
              <thead>
              <tr>
                <th scope="col">성명</th>
                <th scope="col">제도구분</th>
                <th scope="col">선발기수</th>
                <th scope="col">선발회사</th>
                <th scope="col">배치현업팀</th>
                <th scope="col">소속대학</th>
                <th scope="col">전공구분</th>
                <th scope="col">학위과정</th>
                <th scope="col">소속연구실</th>
                <th scope="col">상태</th>
                <th scope="col">육성리포트</th>
                <th scope="col">선발지원서보기</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box_section">
          <p class="box_title_sm">table - scroll 768px (scrollx_table + sm)</p>
          <div class="scrollx_table sm">
            <table class="tbl_col">
              <caption>table col scroll</caption>
              <colgroup>
                <col style="width: 8%;">
                <col style="width: 8%;">
                <col style="width: 6%;">
                <col style="width: 9%;">
                <col style="width: auto;">
                <col style="width: 10%;">
                <col style="width: 10%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 8%;">
              </colgroup>
              <thead>
              <tr>
                <th scope="col">성명</th>
                <th scope="col">제도구분</th>
                <th scope="col">선발기수</th>
                <th scope="col">선발회사</th>
                <th scope="col">배치현업팀</th>
                <th scope="col">소속대학</th>
                <th scope="col">전공구분</th>
                <th scope="col">학위과정</th>
                <th scope="col">소속연구실</th>
                <th scope="col">상태</th>
                <th scope="col">육성리포트</th>
                <th scope="col">선발지원서보기</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="box_section">
          <p class="box_title_sm">table - scroll 480px (scrollx_table + xs)</p>
          <div class="scrollx_table xs">
            <table class="tbl_col">
              <caption>table col scroll</caption>
              <colgroup>
                <col style="width: 8%;">
                <col style="width: 8%;">
                <col style="width: 6%;">
                <col style="width: 9%;">
                <col style="width: auto;">
                <col style="width: 10%;">
                <col style="width: 10%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 6%;">
                <col style="width: 8%;">
              </colgroup>
              <thead>
              <tr>
                <th scope="col">성명</th>
                <th scope="col">제도구분</th>
                <th scope="col">선발기수</th>
                <th scope="col">선발회사</th>
                <th scope="col">배치현업팀</th>
                <th scope="col">소속대학</th>
                <th scope="col">전공구분</th>
                <th scope="col">학위과정</th>
                <th scope="col">소속연구실</th>
                <th scope="col">상태</th>
                <th scope="col">육성리포트</th>
                <th scope="col">선발지원서보기</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">
                  <div class="img_name">
                    <div class="img_wrap xs">
                      <img src="../assets/images/img_my_info.png">
                    </div>
                    엔지비
                  </div>
                </th>
                <td>연구장학생</td>
                <td>20기</td>
                <td>현대자동차</td>
                <td>자율주행상용개발팀</td>
                <td>한양대학교</td>
                <td>기계공학과</td>
                <td>석사</td>
                <td>602호</td>
                <td>교육중</td>
                <td>
                  <button type="button" class="btn_icon icon_only document">리포트</button>
                </td>
                <td>
                  <button type="button" class="btn_icon icon_only pagedown">선발지원서</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="box dp_block" id="section12">
        <div class="box_section">
          <h3 class="box_title">ATTACH FILE</h3>
          <div class="attach_filebox">
            <p class="box_title_sm">PRE VIEW IMG</p>
            <InputFileBase :id="'id1'" :name="'id1'" :type="'img'" :referKey="1" :mode="'create'" :previewFlag="true" 
                 :multiple="true" :maxFile="3" ref="childRef" :orgName="'orgName'" :category="'category'" :sectionName="'sectionName'">
            </InputFileBase>
          </div>
          <div class="attach_filebox">
            <p class="box_title_sm">IMG</p>
            <InputFileBase :id="'id3'" :name="'id3'" :type="'img'" :referKey="3" :mode="'create'"
                 :multiple="true" :maxFile="1" ref="childRefUpLoad" :orgName="'orgName'" :category="'category'" :sectionName="'sectionName'">
            </InputFileBase>
            <button @click="uploadFile()">Upload File</button>
            <!-- <InputFileBase :id="'id6'" :name="'id6'" :type="'img'" :referKey="'CAT000000000000001'" :mode="'edit'"
                 :multiple="true" :maxFile="1" ref="childRefUpLoad" :orgName="'orgName'" :category="'category'" :sectionName="'sectionName'">
            </InputFileBase> -->
          </div>
          <div class="attach_filebox">
            <p class="box_title_sm">File</p>
            <InputFileBase :id="'id2'" :name="'id2'" :type="'office'" :referKey="2" :mode="'create'"
                 :multiple="true" :maxFile="1" ref="childRef" :orgName="'orgName'" :category="'category'" :sectionName="'sectionName'">
            </InputFileBase>
          </div>
        </div>
      </div>
      <div class="box" id="section13">
        <div class="box_inner">
          <h3 class="box_title">LOADING</h3>
          <p>box 내 영역 2개일때</p>
        </div>
        <div class="box_inner">
          <h3 class="box_title">LOADING</h3>
          <p>box 내 영역 2개일때</p>
        </div>
        <div class="loading_box">
          <div class="loader"></div>
        </div>
      </div>
      <div class="box dp_block" id="section14">
        <div class="box_section">
          <h3 class="box_title">No content</h3>
          <div class="nocnt_box">
            <p>콘텐츠가 없습니다.</p>
          </div>
        </div>
      </div>

      <div class="box dp_block" id="section15">
        <div class="box_section">
          <p class="box_title_sm">PAGINATION CLIENT</p>
          <div class="search_box col_3">
            <GridComponent
                :rowData="rowData"
                :columnDefs="columnDefs"
                :pagination="true"
                v-model="rowselected"
                :isShowAll="true"
                ref="grid"
            >
              <template #button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">엑셀 다운로드</button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">육상리포트다운로드</button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">선발지원서 다운로드</button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">삭제</button>
                <button type="button" class="button btn_md btn_black border_medium_gray bo_rd4 font_base_2">등록</button>
              </template>
            </GridComponent>
          </div>
        </div>
      </div>
      <div class="box dp_block" id="section16">
        <div class="box_section">
          <p class="box_title_sm">PAGINATION SERVICE</p>
          <div class="search_box col_3">
            <GridComponentV2
                :rowData="rowDataService1"
                :columnDefs="columnDefs1"
                :paginationClientFlag="false"
                :totalRecord="paginationFake"
                @customPagination="fnPagination"
                ref="gridKey"
                :id="'grid1'"
            >
              <template #button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">엑셀 다운로드</button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">육상리포트다운로드</button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">선발지원서 다운로드</button>
                <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">삭제</button>
                <button type="button" class="button btn_md btn_black border_medium_gray bo_rd4 font_base_2">등록</button>
              </template>
            </GridComponentV2>
          </div>
        </div>
      </div>

      <div class="box dp_block" id="section17">
        <div class="box_section">
          <a :href="`${baseURL}/fileTemplate/계약학과 선발장학생 일괄등록 엑셀양식.xlsx`" download style="color: var(--primary);">계약학과
            선발장학생 일괄등록 엑셀양식.xlsx</a>
        </div>
      </div>

      <CollapseBase :isShow="openCollapse" :title="'Template Collapse'" :isCheck="true"
                    :onClick="() => {openCollapse = !openCollapse}">
            <p class="box_title_sm">PAGINATION SERVICE</p>
            <div class="search_box col_3">
              <GridComponentV2
                  :rowData="rowDataService1"
                  :columnDefs="columnDefs1"
                  :paginationClientFlag="false"
                  :totalRecord="paginationFake"
                  @customPagination="fnPagination"
                  ref="gridKey"
              >
                <template #button>
                  <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">엑셀 다운로드</button>
                  <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">육상리포트다운로드</button>
                  <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">선발지원서 다운로드
                  </button>
                  <button type="button" class="button btn_md btn_white border_medium_gray bo_rd4">삭제</button>
                  <button type="button" class="button btn_md btn_black border_medium_gray bo_rd4 font_base_2">등록
                  </button>

                </template>
              </GridComponentV2>
            </div>
      </CollapseBase>
    </section>

  </div>
  <a href="#" class="scroll-to-top" id="scrollToTopBtn">Top</a>
  <TFooter/>
</template>
<script lang="ts">
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import CollapseBase from '@/components/common/CollapseBase.vue'
import InputBase from '@/components/common/input/InputBase.vue'
import BaseDatePicker from '@/components/common/datepicker/BaseDatePicker.vue'
import MonthDatePicker from '@/components/common/datepicker/MonthDatePicker.vue'
import TextArea from '@/components/common/input/TextArea.vue'
import ColumnChart from '@/components/common/chart/ColumnChart.vue'
import PieChart from '@/components/common/chart/PieChart.vue'
import LineChart from '@/components/common/chart/LineChart.vue'
import type {labelsPosition} from '@/types/chart/ChartTypes'
import {commonStore} from '@/stores/common'
import Swal from 'sweetalert2'
import SelectBoxBaseCheckBox from "@/components/common/input/SelectBoxBaseCheckBox.vue";
import SelectBoxBaseSearch from "@/components/common/input/SelectBoxBaseSearch.vue";
import SelectBoxBase from "@/components/common/input/SelectBoxBase.vue";
import RadiobuttonBase from "@/components/common/input/RadiobuttonBase.vue";
import CheckboxBase from "@/components/common/input/CheckboxBase.vue";
import TextAreaBase from "@/components/common/input/TextAreaBase.vue";
import InputTextBase from "@/components/common/input/InputTextBase.vue";
import TModal from "@/components/common/modal/TModal.vue";
import {ref} from "vue";
import THeader from "@/layouts/components/THeader.vue";
import TFooter from "@/layouts/components/TFooter.vue";
import GridComponent from "@/components/common/grid/GridComponent.vue";
import LinkGridComponent from "@/components/common/grid/LinkGridComponent.vue"
import {
  PAGINATION_PAGE_SIZE,
  PAGINATION_PAGE_SIZE_SELECTOR,
} from "@/constants/screen.const";
import {ExcelData} from "../stores/common/excel/excelData.type";
import GridComponentV2 from "@/components/common/grid/GridComponentV2.vue";
import CheckboxGrid from "@/components/common/grid/CheckboxGrid.vue";
import SemiCircleGaugeChart from "@/components/common/chart/SemiDonut.vue";
import SemiDonut from "@/components/common/chart/SemiDonut.vue";
import IconBase from "@/components/icon/IconBase.vue";
import ListCheckBoxBase from "@/components/common/input/ListCheckBoxBase.vue";
import BarChart from "@/components/common/chart/BarChart.vue";

import ExportFileExcel from '@/components/common/excel/ExportFileExcel.vue'
import ReadFileExcel from '@/components/common/excel/ReadFileExcel.vue'
import { QuillEditor } from '@vueup/vue-quill';
import ImageUploader from 'quill-image-uploader'
import TModalQR from '@/components/common/modal/TModalQR.vue'
import { getListData } from "@/stores/category/category.service"
export default defineComponent({
  data() {
    return {
      currentPage: 1, // Track the active page
      pageTitle: 'Template',
      breadcrumbItems: [
        {label: 'HOME', link: '/'},
        {label: 'dept1', link: '#'},
        {label: 'dept2', link: '/banner'}
      ],
      input1: "check",
      input2: "input test",
      input3: "readonly",
      input4: "",
      input5: "readonly",
      input6: "",
      textValue:"Readonly + disable",
      inputBlank: "",
      checkInput: true,
      pickerNull: '',
      pickerNull2: '',
      pickerNull3: '',
      pickerNull4: '',
      picker1: new Date(),
      picker2: new Date(),

      // Data chart
      dataBaseChart: {
        title: "Chart",
        category: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labelsPosition: {
          position: 'bottom',
          horizontalAlign: 'center'
        } as labelsPosition,
        chartHeight: 550,
        tooltip: (value: number) => {
          return value + ' tooltip functions'
        },
        color: ['#546E7A', '#E91E63'],
        dataset: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }, {
          name: 'Free Cash Flow 2',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
        ],
      },
      dataPieChart: {
        dataset: [44, 55, 41, 17],
        color: ['#546E7A', '#E91E63'],
        category: ['Apple', 'Mango', 'Orange', 'Watermelon']
      },
      dataLineChart: {
        dataset: [
          {
            name: "High - 2013",
            data: [1, 2, 2, 3, 1, 5]
          },
          {
            name: "Low - 2013",
            data: [1, 5]
          }
        ],
        color: ['#546E7A', '#E91E63'],
        labelsPosition: {
          position: 'bottom',
          horizontalAlign: 'center'
        } as labelsPosition,
        title: "Line chart",
        category: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      dataSemiDonut: {
        dataset: [44, 55],
        color: ['#ff6200', '#ffffff'],
        colorLabelsPosition: ['#ffffff', '#ff6200'],
        category: ['Apple', 'Mango'],
        labelsPosition: {
          position: 'bottom',
          horizontalAlign: 'right'
        } as labelsPosition,
      },
      dataBaseChart1: ref({
        title: "Chart",
        category: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
        labelsPosition: {
          position: 'top',
          horizontalAlign: 'left'
        } as labelsPosition,
        chartHeight: 500,
        tooltip: (value: number) => {
          return value + ' tooltip functions'
        },
        dataset: [{
          data: [35, 43, 48, 70, 54, 80, 6]
        }],
      }),

      openCollapse: false,

      // button
      checkButton: true,
      modalOpen: false,
      modalQROpen : false,
      modalId: 'demo',
      checkboxGroup1: ref('name01,name02,name03'),
      checkboxGroup2: ref(['name9', 'name08']),
      checkboxGroup3: ref(['name11', 'name13']),
      checkboxGroup: ref([]),
      radiovalue1: ref('name03'),
      radiovalue2: ref('name06'),
      listRadio1: [
        {id: '3', name: 'name03'},
        {id: '4', name: 'name04'}
      ],
      listRadio2: [
        {id: '5', name: 'name05'},
        {id: '6', name: 'name06'}
      ],
      checkedListRadio: null,

      // Select box
      selectBoxValue: '',
      selectBoxValueDisable:'11',
      selectSearch: '12',
      selectSearchDisable: '15',
      selectBoxDisable: '11',
      selectSearchCheckAll: '',
      selectCheckBoxValidate:"",
      listSelectBox: [
        {cdId: '11', cdNm: '비게', upCdId: '1'},
        {cdId: '12', cdNm: '비게시', upCdId: '1'},
        {cdId: '13', cdNm: '비게시1', upCdId: '1'},
        {cdId: '14', cdNm: '비게시2', upCdId: '1'},
        {cdId: '15', cdNm: '비게시비게시비게시2', upCdId: '1'}
      ] as Array<any>,

      // check box
      listCheckBox1: [
        {cdId: '21', cdNm: '비게', upCdId: '1'},
        {cdId: '22', cdNm: '비게시', upCdId: '1'},
        {cdId: '23', cdNm: '비게시1', upCdId: '1'},
        {cdId: '24', cdNm: '비게시2', upCdId: '1'},
      ] as Array<any>,

      listCheckBox2: [
        {id: '8', name: 'name08'},
        {id: '9', name: 'name9'},
        {id: '10', name: 'name10'}
      ],
      listCheckBox3: [
        {id: '11', name: 'name11'},
        {id: '12', name: 'name12'},
        {id: '13', name: 'name13'}
      ],
      listCheckBox: [
        {id: '1', name: 'name01'},
        {id: '2', name: 'name02'}
      ],
      selectSearch: '12',
      selectSearchDisable: '15',
      selectBoxDisable: '11',
      selectSearchCheckAll: '',
      selectCheckBoxValidate:"",
      selectBoxValueDisable: '12',
      selectBoxValueValidate:"",

      // grid
      columnDefs: ref([
        {
          headerCheckboxSelection: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          maxWidth: 50,
          cellStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
        },
        {headerName: '번호', field: 'rowNum'},
        {headerName: '장학제도 유형', field: 'selectionType'},
        {
          headerName: '접수기간',
          field: 'receiveEndDate',
        },
        {
          headerName: '공고명',
          field: 'educationName',
          cellRenderer: LinkGridComponent,
          cellRendererParams: {onCustomEvent: this.handleCustomClick},
          cellStyle: {
            color: '#2704FF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }
      ]),
      columnDefs1: ref([
        // {
        //   headerComponent: CheckboxGrid,
        //   headerComponentParams: {
        //     onCustomEvent: this.checkAll,
        //     valueChecked: this.selectAll,
        //     type: 'selectAll'
        //   },
        //   cellRenderer: CheckboxGrid,
        //   cellRendererParams: {
        //     onCustomEvent: this.checkChild,
        //     type: "selectChild"
        //   },
        //   field: 'checkedFlag',
        //   width: 10,
        //   cellStyle: {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   }
        // },
        // {headerName: '번호', field: 'rowNum'},
        // {headerName: '장학제도 유형', field: 'selectionType'},
        // {
        //   headerName: '접수기간',
        //   field: 'receiveEndDate',
        // },
        // {
        //   headerName: '공고명',
        //   field: 'educationName',
        //   cellRenderer: LinkGridComponent,
        //   cellRendererParams: {onCustomEvent: this.handleCustomClick},
        //   cellStyle: {
        //     color: '#2704FF',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   }
        // }
        // {
        //   headerComponent: CheckboxGrid,
        //   headerComponentParams: {
        //     onCustomEvent: this.checkAll,
        //     valueChecked: this.selectAll,
        //     type: 'selectAll'
        //   },
        //   cellRenderer: CheckboxGrid,
        //   cellRendererParams: {
        //     onCustomEvent: this.checkChild,
        //     type: "selectChild"
        //   },
        //   field: 'checkedFlag',
        //   width: 10,
        //   cellStyle: {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   }
        // },
        {
          headerComponent: CheckboxGrid,
          headerComponentParams: {
            onCustomEvent: this.checkAll,
            valueChecked: this.selectAll,
            type: 'selectAll'
          },
          cellRenderer: CheckboxGrid,
          cellRendererParams: {
            onCustomEvent: this.checkChild,
            type: "selectChild"
          },
          field: 'checkedFlag',
          width: 10,
          cellStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        },
    { headerName: 'id', field: 'id' },
    { headerName: 'name', field: 'name' },
    { headerName: 'content', field: 'content' },
      ]),
      columnDefs2: ref([
         {
          headerComponent: CheckboxGrid,
          headerComponentParams: {
            onCustomEvent: this.checkAll,
            valueChecked: this.selectAll,
            type: 'selectAll'
          },
          cellRenderer: CheckboxGrid,
          cellRendererParams: {
            onCustomEvent: this.checkChild,
            type: "selectChild"
          },
          field: 'checkedFlag',
          width: 10,
          cellStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        },
        {headerName: '번호', field: 'rowNum'},
        {headerName: '장학제도 유형', field: 'selectionType'},
        {
          headerName: '접수기간',
          field: 'receiveEndDate',
        },
        {
          headerName: '공고명',
          field: 'educationName',
          cellRenderer: LinkGridComponent,
          cellRendererParams: {onCustomEvent: this.handleCustomClick},
          cellStyle: {
            color: '#2704FF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }
        ,
      ]),
      paginationPageSize: PAGINATION_PAGE_SIZE,
      paginationPageSizeSelector: PAGINATION_PAGE_SIZE_SELECTOR,
      rowselected: [],
      rowselected1 : [],
      rowselectedService: [],
      rowData: [] as Array<any>,
      rowDataService: [] as Array<any>,
      paginationFake: 0,
      paginationFake2: 53,
      selectAll: ref(false),
      listCheckBoxGrid: [],

      // data exel
      buttonnName: 'export excel',
      dataExport : [{sheetName: 'sheet1',data : [[1,2,3],[4,5,6]], header: ['col1', 'col2', 'col3']},
                    {sheetName: 'sheet2',data : [[1,2,3],[4,5,6]], header: ['col1', 'col2', 'col3']}] as Array<ExcelData>,
      fileNameExport: 'fileDowload',
      nameOfbtn : 'Dowload Excel',
      modules: {
                name: "imageUploader",
                module: ImageUploader,
                options: {
                    upload: (file: any) => {
                        return new Promise((resolve, reject) => {
                            if (!file) {
                                reject("Upload failed");
                            } else {
                                // thực hiện xử lý upLoad file


                            }
                        });
                    },
                },
            },
            dataInputLst: [],
    }
  },
  setup() {
    const store = commonStore()
    const gridKey = ref(null)
    const rowDataService1 = ref([]);
    const rowDataService2 = ref([]);
    const modelValueEx = ref([]);
    const idEx = 'readExcel';
    const nameEx = 'excelName';
    const labelEx = 'Read Excel';
    const grid = ref(null)
    return {
      store,
      gridKey,
      rowDataService1,
      grid,
      modelValueEx,
      idEx,
      nameEx,
      labelEx

    }
  },
  components: {
    BarChart,
    ListCheckBoxBase,
    IconBase,
    SemiDonut,
    SemiCircleGaugeChart,
    GridComponentV2,
    GridComponent,
    TFooter,
    THeader,
    TModal,
    InputTextBase,
    TextAreaBase,
    CheckboxBase,
    RadiobuttonBase,
    SelectBoxBase,
    SelectBoxBaseSearch,
    SelectBoxBaseCheckBox,
    LineChart, PieChart, ColumnChart,
    TextArea,
    MonthDatePicker, BaseDatePicker,
    InputBase,
    Breadcrumb,
    LinkGridComponent,
    TModalQR
  },
  beforeMount() {
    let arr = []
    for (let i = 0; i < 23; i++) {
      let data = {} as any
      data.rowNum = i + 1
      data.selectionType = 'selectionType0' + i + 1
      data.receiveEndDate = new Date()
      data.educationName = 'name' + i
      arr.push(data);
      // this.rowData.push(data)
      this.rowDataService.push(data);
    }
    setTimeout(()=>{
      this.rowData = arr
    },5000)
    let params = { page : 1, size :10, sort: "", name: ""}
    // getListData(params).then(res => {
    //         this.dataInputLst = res.data.data.content;
    //         this.dataInputLst.forEach(item => {
    //           item.id = ''
    //         })
    // })

    //   Example call data with Promise.all
    //   try {
    //     await Promise.all([fun1(),fun2(), ...]);
    //   }
    //   catch(error) {
    //     alert(error.message)//Show API 호출 시 오류가 있습니다
    //   }
    //
    //   async fun1(){
    //     await this.store.getDataFromStore()
    //   }
    //
    //   const getDataFromStore = async () => {
    //     try {
    //       const response = await callServer()
    //       //Do something with response
    //
    //     } catch (error) {
    //       // alert('API 호출 시 오류가 있습니다')
    //       throw new Error('API 호출 시 오류가 있습니다');
    //     }
    //   }
  },
  methods: {
    changeTab(tabNumber) {
      console.log(12321)
      this.currentPage =1  // Reset the page to 1 when switching tabs
    },
  uploadFile(){
    console.log('upLoaded')
    const chilRef = this.$refs.childRefUpLoad;
    chilRef.upLoadFile('CAT000000000000001');
  },
    changeEditor(){
      // Get content
      let content = this.$refs.myEditor.getHTML().toString().replace('<p><br></p>', '')
    },
    // Show alert
    showAlert() {
      // Use sweetalert2
      this.$swal({
        text: "안내 문구를 입력해 주세요. 내용을 입력하면 자동으로 팝업 사이즈(높이만) 조절 됩니다.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: '확인',
        cancelButtonText: "취소",
      })
    },

    // Modal
    closeModal() {
      this.modalOpen = false
    },
    confirmAction() {
      // Handle confirm action
      this.closeModal()
    },
    cancelAction() {
      // Handle cancel action
      this.closeModal()
    },

    // Grid
    handleCustomClick(data) {
      console.log('handleCustomClick', data)
    },
    fnPagination1(pageNumber: any, pagesSize: any) {
      const resetSelect = document.getElementById('selectAllGrid')
      resetSelect.checked = false

      this.fakeData(pageNumber, pagesSize)
    },
    fnPagination(pageNumber: any, pagesSize: any) {
      const resetSelect = document.getElementById('selectAllGrid')
      resetSelect.checked = false
      let params = { page : pageNumber, size :pagesSize, sort: "", name: ""}
    //  getListData(params).then(res => {
    //   const data = res.data.data;
    //   this.rowDataService1 = data.content;
    //    this.paginationFake = data.totalElements;
    //    let check = true
    //    this.rowDataService1.forEach((row) => {
    //     if (this.listCheckBoxGrid.includes(row.id)) {
    //         row.checkedFlag = true
    //     }
    //    })
    //    this.rowDataService1.forEach((row) => {
    //     if (!row.checkedFlag) {
    //       check = false
    //     }
    //   })
    //   if (check) {
    //     const resetSelect = document.getElementById('selectAllGrid')
    //     resetSelect.checked = true
    //   }
    // })
      //this.fakeData(pageNumber, pagesSize)
    },
    fakeData(pageNumber, pagesSize) {
      const newRow = [];
      const max = pagesSize * pageNumber > this.paginationFake ? this.paginationFake : pagesSize * pageNumber;
      for (let i = pagesSize * (pageNumber - 1) + 1; i <= max; i++) {
        let data = {} as any
        data.rowNum = i
        data.id = i
        data.selectionType = 'selectionType0' + i + 1
        data.receiveEndDate = new Date()
        data.educationName = 'name' + i
        newRow.push(data)
      }
      this.rowDataService2 = newRow;
      this.rowDataService2.forEach((row) => {
        if (this.listCheckBoxGrid.includes(row.id)) {
          row.checkedFlag = true;
        } else {
          row.checkedFlag = false;
        }
      });

      let check = true
      this.rowDataService2.forEach((row) => {
        if (!row.checkedFlag) {
          check = false
        }
      })
      if (check) {
        const resetSelect = document.getElementById('selectAllGrid')
        resetSelect.checked = true
      }
    },
    checkChild(value, data) {
      if (value) {
        this.listCheckBoxGrid.push(data.id)
      } else {
        const index = this.listCheckBoxGrid.indexOf(data.id);
        if (index !== -1) {
          this.listCheckBoxGrid.splice(index, 1);
        }
      }

      this.listCheckBoxGrid = [...new Set(this.listCheckBoxGrid)];
    },
    checkAll(value: boolean) {
      this.rowDataService1.forEach(item => {
        item.checkedFlag = value;
        if (value) {
          this.listCheckBoxGrid.push(item.id)
          
        } else {
          const index = this.listCheckBoxGrid.indexOf(item.id);
          if (index !== -1) {
            this.listCheckBoxGrid.splice(index, 1);
          }
        }
        // return {
        //   ...item,
        //   checkedFlag: value
        // }
      })

      this.listCheckBoxGrid = [...new Set(this.listCheckBoxGrid)];
    },
    gotoPage(page: number){
        console.log(page);
    //  call api change page in here
    },
  },
  updated() {
    //Validate
    this.checkButton = this.store.check
  }
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
