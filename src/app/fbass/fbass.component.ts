import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { from, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'fbass',
  templateUrl: 'fbass.component.html',
  styleUrls: ['fbass.component.css']
})
export class FbassComponent implements OnInit {

  formLegacy: FormGroup;
  legacyFlags: any;
  legacyAndOptions;
  legacyToOptions;
  optionsToLegacy;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
    this.formLegacy = this.fb.group({
      flags: this.buildSave()
    });
  }

  ngOnInit() {
    this.legacy.categories.forEach((res: any) => {
      res.selected = true;
    });
    this.options.forEach((res: any) => {
      res.selected = false;
    });
    
    /*
    this.legacyToOptions = this.legacy.categories.filter((cat: any) => {
      return !!this.options.find((res: any) => res.selected !== cat.selected)
    })
    */

    this.optionsToLegacy = this.legacy.categories.filter((cat: any) => {
      return !!this.options.find((res: any) => res.selected !== cat.selected ? res.selected = true : null)
    })
    
    /*
    this.legacyAndOptions = from([
      this.legacy.categories,
      this.options
    ])

    this.legacyToOptions = this.legacyAndOptions
      .pipe(distinctUntilChanged())
      .subscribe(val => console.log(val));
    */

    this.legacyFlags = this.legacy.categories.map((res: any) => this.fb.control(res.selected));
    // const answerFormArray = this.fb.array(this.legacyFlags);
    // this.formLegacy.setControl("flags", answerFormArray);

    this.formLegacy = this.fb.group({
      flags: this.fb.array([
        this.legacyFlags
        // this.fb.control(this.legacyFlags)
        // this.fb.control(true),
        // this.fb.control(false)
      ])
    })
    // console.log(this.formLegacy.value.flags);
  }

  get flags() {
    return this.formLegacy.get("flags");
  }

  getFlags(form) {
    return form.get("flags").controls;
  }

  buildSave() {
    const arr = this.legacy.categories.map((flag: any) => {
      return this.fb.control(flag.selected);
    });
    return this.fb.array(arr);
  }


  legacy =
    {
      title: "Title of Legacy",
      date: "2018-09-05 20:28:04",
      author: "email@domain.com",
      categories: [
        {
          id: "1",
          category: "Ham"
        },
        {
          id: "2",
          category: "Suspect"
        }
      ],
      media: [],
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  options =
    [
      {
        "id": "1",
        "category": "Ham"
      },
      {
        "id": "2",
        "category": "Suspect"
      },
      {
        "id": "3",
        "category": "Marketing"
      },
      {
        "id": "4",
        "category": "Spam"
      }
    ]
  save = {
    posts:
      [
        {
          post: 1,
          categories: [1]
        }
      ]
  }
}
