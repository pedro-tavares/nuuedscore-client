package com.nuuedscore.client.ui.style;

import com.google.gwt.user.cellview.client.CellTable;

/**
 * NuuEdScoreCellTable
 * 
 * @author PATavares
 * @since Mar 2021
 * 
 */
public interface NuuEdScoreCellTable extends CellTable.Resources {
@Source({CellTable.Style.DEFAULT_CSS, "nuuedscore_CellTable.css"})
TableStyle cellTableStyle();
 
interface TableStyle extends CellTable.Style {}
}