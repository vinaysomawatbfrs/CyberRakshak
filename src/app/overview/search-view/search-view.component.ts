import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-view",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./search-view.component.html",
  styleUrls: ["./search-view.component.scss"],
})
export class SearchViewComponent {
  @Output() awbOutputEvent = new EventEmitter<string>();
  @Input() placeholder = "";
  searchQuery = "";

  search() {
    console.log("Search query:", this.searchQuery);
    this.awbOutputEvent.emit(this.searchQuery);
    this.searchQuery = "";
  }
}
