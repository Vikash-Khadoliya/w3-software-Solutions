import { useState } from "react"

export default function Faq() {

    const [open, setOpen] = useState(null);

    const items = [
        {
            title: 'Non consectetur a erat nam at lectus urna duis?',
            content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            title: 'Feugiat scelerisque varius morbi enim nunc??',
            content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
        },
        {
            title: 'Dolor sit amet consectetur adipiscing elit?',
            content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
        },
        {
            title: 'Dolor sit amet consectetur adipiscing elit?',
            content: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.'
        },
        {
            title: 'Dolor sit amet consectetur adipiscing elit?',
            content: 'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.'
        },
    ]

    const accordion = (index) => {

        setOpen(index);

        if (index === open) {
            setOpen(null);
        }

    }

    return (
        <>

            <section className="faq" id="faq">

                <div className="faq-content">

                    <div className="main">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>

                    <div className="main-txt">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="faq-list">
                        {items.map((data, index) => (

                            <div key={index} className={open === index ? "faq-list-content-new" : "faq-list-content"} onClick={() => {
                                accordion(index);
                            }}>
                                <a className='faq-list-header'><span><i className='bx bx-question-mark' ></i></span> {data.title}<i className={open === index ? "bx bx-chevron-up" : "bx bx-chevron-down"} ></i></a>
                                <div className='faq-list-body'>
                                    <p>{data.content}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>

            </section>

        </>
    )

}